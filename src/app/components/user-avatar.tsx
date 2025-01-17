import { auth } from "@/auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {JSON.stringify(session)}
      {session?.user?.image && (
        <img src={session.user.image} alt="User Avatar" />
      )}
      {session?.user?.name && session?.user?.email && (
        <div>
          Welcome {session.user.name}! Your email is {session.user.email}
        </div>
      )}
    </div>
  );
}
