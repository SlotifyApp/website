import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("MicrosoftEntraID");
      }}
    >
      <button type="submit">Signin with Microsoft</button>
    </form>
  );
}
