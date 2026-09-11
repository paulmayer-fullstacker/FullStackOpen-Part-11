Copy code into localy cloned repo file.

Install dependencies:
npm install

Run the code in development mode:
npm start

Run tests:
npm run test

Lint the code:
npm run eslint

Run the project's ESLint script and automatically fixe all auto-fixable code style and syntax issues.
This will fix the quotes and semicolons in app.js automatically.
npm run eslint -- --fix

Add the Node environment comment to the very top line of jest.setup.js

Create the production build:
npm run build

Start/run the production build locally:
npm run start-prod

Exercise-9. PlayWrite E2E Tests:
Install PlayWrite:
npm install --save-dev @playwright/test
npx playwright install --with-deps

Exercise-10 to -12 Deploying the Prod app to Render:

Step 1: Setting up Render Web Service – Dashboard configuration for a Web Service running Node.js (build command, start command, and environment variables).

Step 2: Automating Deployment via GitHub Actions – Connecting our pipeline so Render automatically updates every time we push the code and our checks pass on main (using Render's Deploy Hook URL).

Step 3: Managing Deployment Triggers – Handling FullStackOpen specific pipeline requirements (like preventing unnecessary deployments or skipped builds using commit message flags like #skip).
