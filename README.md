# Amplify Gen 2 Quckstart (Next.js - Sever Components)

This is an implementation of the Amplify [quickstart work instruction](https://docs.amplify.aws/gen2/start/quickstart/nextjs-app-router-server-components/) using Next.js App Router (server Components).


## Hosted Site
[https://main.d29so8g94kaiwf.amplifyapp.com/](https://main.d29so8g94kaiwf.amplifyapp.com/)


## Main Characteristics
- Next.js
- Next.js App Router
- Next.js Server Components
- Amplify Gen 2 (Code First DX) Hosting
- Tailwind


## Deployment instructions
- Fork this repository and hook it up to a new Amplify app
- Clone (download) the repository
- Run `npm install` to install the dependencies
- Run the following in separate terminal windows
  - `npm run dev` to start the Next.js development server
  - `npx amplify sandbox` to start the Amplify mock server
- Make changes then
  - `git add .`
  - `git commit -m "new commit"`
  - `git push`

## Comments
Code first means the no-sql database is updated automatically in the background to be in sync with any changes made to the model definitions on the front end.

The API playground is an awkward location:
- Go to the Amplify app in the aws console
- Click on the green 'Deployed' text/button
- The Authentication and Data (API) menus should appear
