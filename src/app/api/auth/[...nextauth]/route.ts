import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../login";

// NextAuth 구성 옵션
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // 암호화에 사용될 시크릿 키
  providers: [
    // CredentialsProvider를 사용하여 사용자 인증 설정 (id + pw)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "text", placeholder: "id" }, // ID 입력 필드 구성
        pw: { label: "pw", type: "password" }, // 비밀번호 입력 필드 구성
      },

      // 로그인 실행
      async authorize(credentials, req) {
        const params = {
          id: credentials?.id,
          pw: credentials?.pw,
        };
        const res = await login(params); // 로그인 함수 호출
        console.log(res); // 로그인 결과 출력
        if (res) {
          return res; // 로그인 성공 시 결과 반환
        } else {
          return null; // 로그인 실패 시 null 반환
        }
      },
    }),
  ],
  // 커스텀 로그인 페이지 사용
  pages: {
    signIn: "/login", // 로그인 페이지 경로 설정
  },

  callbacks: {
    // JWT 콜백: 토큰 수정
    async jwt({ token, user }: any) {
      return { ...token, ...user };
    },

    // 세션 콜백: 세션 설정 및 사용자 정보 추가
    async session({ session, token }: any) {
      session.user = token as any; // 세션에 사용자 정보 추가
      session.user.name = token.id; // 사용자 이름 추가 (여기서는 ID로 설정)
      return session; // 세션 반환
    },
  },
};

const handler = NextAuth(authOptions); // NextAuth 핸들러 생성

// 핸들러를 GET 및 POST로 내보냄
export { handler as GET, handler as POST };
