# Streamline WP App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

Todo:

-- Database Setup

- Login
- Users Accounts
- Business Accounts
- Global Settings
- stripe-checkout
- Payments
- CRUD Users
- CRUD Websites
- Darkmode

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

1. Set up a database to store user and business account information. You can use a SQL or NoSQL database for this.

2. Create a registration page for business accounts. This page should include a form for the user to enter their business information, including the business name, contact information, and any other relevant information.

Create a route and corresponding handler function in your Next.js application to handle the form submission. In this function, you will need to validate the form data, then insert the business account information into the database.

Create a login page for business accounts. This page should include a form for the user to enter their business email and password.

Create a route and corresponding handler function in your Next.js application to handle the login form submission. In this function, you will need to validate the form data, then check the database to see if the provided email and password match a business account.

Once a business account is logged in, you will need to create a way to manage the account. This can include pages to view and update the business information, view and manage users associated with the business and etc.

Add logic to handle user roles and permissions so that only the business account owner can access the management pages.
