import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': `${process.env.DGRAPH_GRAPHQL_KEY!}`,
  },
});

const refreshTokenMutation = `
  mutation RefreshToken($refreshToken: String!) {
    updateSession(input: { filter: { refreshToken: { eq: $refreshToken } }, set: { refreshToken: $refreshToken } }) {
      session {
        refreshToken
      }
    }
  }
`;

const updateUserMutation = `
  mutation UpdateUser(
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $businessInfo: String,
    $phoneNumber: String,
    $goals: [String],
    $image: String,
    $jobTitle: String,
    $selectedIndustry: String,
    $selectedEmployees: String,
    $selectedRevenue: String,
    $emailList: [String],
    $businessWebsite: String,
    $inviteEmailList: [String]
  ) {
    updateUser(
      input: {
        filter: { email: { eq: $email } },
        set: {
          firstName: $firstName,
          lastName: $lastName,
          businessInfo: $businessInfo,
          phoneNumber: $phoneNumber,
          goals: $goals,
          image: $image,
          jobTitle: $jobTitle,
          selectedIndustry: $selectedIndustry,
          selectedEmployees: $selectedEmployees,
          selectedRevenue: $selectedRevenue,
          emailList: $emailList,
          businessWebsite: $businessWebsite,
          inviteEmailList: $inviteEmailList
        }
      }
    ) {
      user {
        firstName,
        lastName,
        businessInfo,
        phoneNumber,
        goals,
        image,
        jobTitle,
        selectedIndustry,
        selectedEmployees,
        selectedRevenue,
        emailList,
        businessWebsite,
        inviteEmailList
      }
    }
  }
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      token,
      email,
      firstName,
      lastName,
      businessInfo,
      goals,
      image,
      jobTitle,
      selectedIndustry,
      selectedEmployees,
      selectedRevenue,
      emailList,
      businessWebsite,
      inviteEmailList,
    } = body;


    // Decode and verify the session token
    const decodedToken = jwt.verify(
      token.sessionToken,
      process.env.SECRET!
    ) as { email: string };

    // Update user in Dgraph
    const variables = {
      email,
      firstName,
      lastName,
      businessInfo,
      goals,
      image,
      jobTitle,
      selectedIndustry,
      selectedEmployees,
      selectedRevenue,
      emailList,
      businessWebsite,
      inviteEmailList,
    };

    const data = await client.request(updateUserMutation, variables);
    const updatedUser = data.updateUser.user;

    if (updatedUser.length === 0) {
      throw new Error('User not found or update failed');
    }

    return NextResponse.json(updatedUser[0], { status: 200 });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Token expired, try to refresh it
      try {

        const body = await request.json();
        const { token } = body;
        const decodedRefreshToken = jwt.decode(token.refreshToken) as string;

        // Refresh token mutation
        await client.request(refreshTokenMutation, {
          refreshToken: token.refreshToken,
        });

        // Retry the update user request with the original session token
        const newVariables = {
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          businessInfo: body.businessInfo,
          goals: body.goals,
          image: body.image,
          jobTitle: body.jobTitle,
          selectedIndustry: body.selectedIndustry,
          selectedEmployees: body.selectedEmployees,
          selectedRevenue: body.selectedRevenue,
          emailList: body.emailList,
          businessWebsite: body.businessWebsite,
          inviteEmailList: body.inviteEmailList,
        };

        const newData = await client.request(updateUserMutation, newVariables);
        const newUpdatedUser = newData.updateUser.user;

        if (newUpdatedUser.length === 0) {
          throw new Error('User not found or update failed');
        }

        return NextResponse.json(newUpdatedUser[0], { status: 200 });
      } catch (refreshError) {
        console.error('Error refreshing refresh token:', refreshError);
        return NextResponse.json({ error: 'Failed to refresh refresh token' }, { status: 500 });
      }
    } else {
      console.error('Error updating user profile:', error);
      return NextResponse.json({ error: 'Failed to update user profile' }, { status: 500 });
    }
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}