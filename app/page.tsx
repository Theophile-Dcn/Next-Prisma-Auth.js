import { auth } from '@/src/lib/auth';
import { LoginButton, LogoutButton } from './AuthButtons';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>
        {session?.user
          ? 'Authenticated' + session?.user.email
          : 'Not Authenticated'}
      </h1>
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
    </div>
  );
}
