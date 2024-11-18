import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the GraphQL query to fetch all contacts
const getAllContactQuery = `
query GetContactsByUser($userId: ID!) {
  getUser(id: $userId) {
    crmContacts {
      id
      firstName
      lastName
      company{
        id
        name
      }
      email
      phoneNumber_1
      phoneNumber_2
      background
      contactLogo
      tag
      hasNewsLetter
      title
      user{
        id
        firstName
        lastName
        email
      }
    }
  }
} 
`;

// Add this interface before the POST function
interface QueryResponse {
  getUser: {
    crmContacts: Array<{
      id: string;
      firstName: string;
      lastName: string;
      company: {
        id: string;
        name: string;
      };
      email: string;
      phoneNumber_1: string;
      phoneNumber_2: string;
      background: string;
      contactLogo: string;
      tag: string;
      hasNewsLetter: boolean;
      title: string;
      user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
      };
    }>;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the incoming JSON body
    const { userId } = body; // Extract userId from the request body

    console.log('userId:', userId);

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Fetch data using the GraphQL query
    const data = await client.request<QueryResponse>(getAllContactQuery, { userId });

    const contacts = data?.getUser?.crmContacts; // Correct field for contacts

    if (!contacts || contacts.length === 0) {
      console.warn('No contacts found'); // Warn if no contacts are returned
    }

    // Return the contacts in the response
    return NextResponse.json(contacts, { status: 200 });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
