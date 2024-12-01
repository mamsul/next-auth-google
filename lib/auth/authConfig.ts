import Google from 'next-auth/providers/google'
import PostgresAdapter from '@auth/pg-adapter'
import NextAuth from 'next-auth'

import { pool } from '../postgres'

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PostgresAdapter(pool),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 40 * 60 * 60 * 60,
  },
  pages: {
    signIn: '/auth/sign-in',
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        id: token.id,
      }
    },
  },
})
