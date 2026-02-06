// import authIsNotRequired dari lib/auth
import { SignUpForm } from '@/app/components/auth/sign-up';
import { authIsNotRequired } from '@/lib/auth/middleware'

// import Metadata dari next
import { Metadata } from 'next';

// define metadata untuk halaman sign-in
export const metadata: Metadata = {
  title: 'Sign Up - FullStack Next.js',
  description: 'Create an account in seconds',
};

export default async function SignUpPage() {

    //jika user sudah login, redirect ke halaman dashboard
    await authIsNotRequired();
    
    return <SignUpForm />;
}