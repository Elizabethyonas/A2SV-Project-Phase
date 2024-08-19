
//     //     // {
//     //     //     "success": true,
//     //     //     "message": "",
//     //     //     "data": {
//     //     //       "id": "66bf0271098e07da867f4a51",
//     //     //       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmYwMjcxMDk4ZTA3ZGE4NjdmNGE1MSIsInJvbGUiOiJzdHVkZW50IiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjQxNTQxNTd9.oGDgjwqXRQiPdXYzCZyCmX8OFwSs7Sf7symMk9tCjcQ",
//     //     //       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmYwMjcxMDk4ZTA3ZGE4NjdmNGE1MSIsImV4cCI6MTcyNDM5ODk1N30.wZzi4uq2U89_bL5-m6D_8UksHeKAhN2zkGrokCtsFB8",
//     //     //       "name": "Eliza",
//     //     //       "email": "elizabet.yonas@a2sv.org",
//     //     //       "profilePicUrl": "",
//     //     //       "role": "student",
//     //     //       "profileComplete": false,
//     //     //       "profileStatus": "incomplete"
//     //     //     },
//     //     //     "errors": null,
//     //     //     "count": 0
//     //     //   }



import { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
  
};