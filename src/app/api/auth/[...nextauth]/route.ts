import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../login";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "Username", type: "text", placeholder: "jsmith" },
        pw: { label: "Password", type: "password" },
      },

      // 로그인 실행
      async authorize(credentials, req) {
        const params = {
          id: credentials?.id,
          pw: credentials?.pw,
        };
        const res = await login(params);
        console.log(res);
        if (res) {
          return res;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      return { ...token, ...user };
    },

    async session({ session, token }: any) {
      session.user = token as any;
      session.user.id = token.id;
      session.user.name = token.id;
      return session;
    },
  },
  // 커스텀 로그인 페이지 사용
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
