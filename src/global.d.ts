interface Window {
    Commerce?: any;
}

import NextAuth from "next-auth";

// In your types or directly in the file
declare module "next-auth" {
    interface Session {
      user?: {
        id: string; // Add this line for user id
        name?: string | null;
        email?: string | null;
        image?: string | null;
        accessToken?: string;
      };
    }
  }
  