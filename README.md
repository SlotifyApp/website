## Getting Started

## Set up

1. Clone repo, there is a submodule so you must use:

```bash
git clone --recurse-submodules
```

2. Copy the `.env.sample` contents into a new file named `.env.local`.

Follow [this GitHub thread](https://github.com/nextauthjs/next-auth/discussions/9154#discussioncomment-10583104) for clear instructions on how to fill the:

- AUTH_MICROSOFT_ENTRA_ID_ID
- AUTH_MICROSOFT_ENTRA_ID_SECRET
- AUTH_MICROSOFT_ENTRA_ID_TENANT_ID

3. Navigate to the project root (same level as package.json) and:

```bash
npm i # install dependencies
npx auth secret # AUTH_SECRET added to .env.local by nextauth lib
npm run dev # run Next.js server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Other commands

```bash
npm run generate_openapi_types #See details in package.json
```
