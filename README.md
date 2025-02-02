# KlimentOhridski

A website for an accessibility friendly focused school.

## 🚀 Set up development environment

This project uses [Astro](https://astro.build/) for the frontend, and [Strapi](https://strapi.io/) as a CMS.

### Prerequisites

Meet the requirements for installing Strapi. Skip the database part as one will be installed when we install dependencies later.
You can find the requirements here: https://docs.strapi.io/dev-docs/installation/

### Clone the repository

Begin by cloning the repository locally.

```
git clone https://github.com/42dotmk/KlimentOhridski.git
```

Now enter the project's root.

### Install Astro

In the `astro` folder, create a `.env` file with this content:
`
STRAPI_URL="http://127.0.0.1:1337"
`

Install dependencies:
```
npm i
```

### Install Strapi

In the `strapi` folder, create a `.env` file with this content:
`
TBD
`

Install dependencies:
```
npm i
```

### Configure Strapi

At this point, installation is complete, but the Strapi database is empty and we're missing an admin account.

Import the existing database:

```
# Also confirm the prompt it gives
npm run strapi import -- -f ./export_20250128185350.tar.gz
```

Visit the Strapi admin page (see below to start the development server) to register an admin account. If you don't see that option, run this command with proper details:

```
npm run strapi admin:create-user -- --firstname=Kai --lastname=Doe --email=chef@strapi.io --password=Gourmet1234
```

### Start development servers

1. Strapi
```
npm run develop
```

2. Astro
```
npm run dev
```

We're done!
