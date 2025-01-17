import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    MicrosoftEntraID({
      authorization: {
        params: {
          scope:
            "openid profile email User.ReadWrite Calendars.ReadBasic Calendars.Read Calendars.ReadWrite Calendars.ReadWrite.Shared",
        },
      },
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, trigger }) {
      if (trigger == "signUp") {
        // Add to database and other actions here
        console.log("User sign up!");
      }
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.id = profile.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // If we want to make the accessToken available in components, then we have to explicitly forward it here.
      return { ...session, accessToken: token.accessToken };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
});
