import { SignOut } from "../components/signout-button";
import UserAvatar from "../components/user-avatar";

export default function Dashboard() {
  return (
    <>
      <SignOut />
      <UserAvatar />
      <div>You are successfully logged in!</div>
    </>
  );
}
