## Getting Started

## Set up

1. Clone repo, there is a submodule so you must use:

```bash
git clone --recurse-submodules
```

2. Copy the `.env.sample` contents into a new file named `.env.local` and fill those variables out by
   referring to either `terraform` or the microsoft entra UI.

3. Install `pre-commit`:

```bash
    pip install pre-commit
    pre-commit install --hook-type pre-push
```

4. Install the hooks:

```bash
    pre-commit install
```

4. Navigate to the project root (same level as package.json) and:

```bash
npm i # install dependencies
npm run dev # run Next.js server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Go to
   [Swagger Documentation](http://localhost:3000/swagger/index.html)

## Other commands

```bash
npm run generate # Will generate openapi types, see package.json for the entire command
```
