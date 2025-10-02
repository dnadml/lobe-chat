import NextAuth from 'next-auth';
import authConfig from './auth.config';

const auth = NextAuth(authConfig);

export const { handlers, auth: authFn, signIn, signOut } = auth;
export default auth;
