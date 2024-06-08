/* eslint-disable no-undef */
import prisma from '@repo/db/client';
import { signinInput } from '@repo/zod/validateUser';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';


export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: "credentials",
          credentials: {},
          async authorize(credentials: any) {
              const {email, password} = credentials;
              const signSuccess = signinInput.safeParse({email, password})
              if(!signSuccess){
                return null;
              }
              try {
                const user = await prisma.user.findFirst({
                  where: {
                    email
                  },
                  select: {
                    userId: true,
                    username: true,
                    password: true,
                    email: true
                  }
                });
                
                if(!user || !await bcrypt.compare(password, user.password)){
                  return null;
                }
                return {
                  id: user.userId,
                  name: user.username,
                  email: user.email
                }
              } catch (error) {
                return null;
              } 
          },
        }),
    ],
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      // eslint-disable-next-line no-unused-vars
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    pages: {
      signIn: '/login'
    }
    
  }