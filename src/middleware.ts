import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
    matcher: ['/ads-create /:path*'],
};

export default withAuth(async (req) => {
    const token = req.nextauth.token;
    if (!token) {
        return NextResponse.redirect(new URL('/invalidsession', req.url));
    }

    try {
        const userResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/user?token=${token.jwtToken}`,
        );

        if (!userResponse.ok) {
            console.error('Fetch error:', userResponse.status, userResponse.statusText);
            return NextResponse.redirect(new URL('/invalidsession', req.url));
        }

        // if (!userResponse?.headers?.get('content-type').includes('application/json')) {
        //     console.error('Response is not JSON:', await userResponse.text());
        //     return NextResponse.redirect(new URL('/invalidsession', req.url));
        // }

        // const json = await userResponse.json();
        // if (!json.user) {
        //     return NextResponse.redirect(new URL('/invalidsession', req.url));
        // }
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.redirect(new URL('/invalidsession', req.url));
    }
});