# Backend Template

A simple backend template using [Bun](https://bun.sh/), [Hono](https://hono.dev/), [Prisma](https://www.prisma.io/), and Docker.

## Features

- Fast development with Bun
- Lightweight routing with Hono
- Type-safe database access with Prisma
- Dockerized setup for easy deployment
- Easy project structure for quick starts
- User login and admin login setup
- Media upload using Supabase
- Email sending using Resend

## Getting Started

### 1. Create a New Project

You can quickly create a new project using this template with the following command:

```sh
npx create-next-app --example https://github.com/rahulk41/backend-template my-project
```

Replace `my-project` with your desired project name.

### 2. Install Dependencies

```sh
bun install
```

### 3. Set Up Environment Variables

Copy the example environment file and update it with your database connection string and credentials for Supabase and Resend:

```sh
cp .env.example .env
```

### 4. Set Up the Database

Run Prisma migrations:

```sh
bun db:migrate:dev
```

Generate Prisma client:

```sh
bun db:generate
```

### 5. Run the Development Server

```sh
bun run dev
```

The server will start at [http://localhost:4242](http://localhost:4242).

### 6. Access API Documentation

You can access the API docs powered by Scalar at [http://localhost:4242/docs](http://localhost:4242/docs).

### 7. Run with Docker

Build and start the application using Docker:

```sh
docker build -t backend-template .
docker run --env-file .env -p 4242:4242 backend-template
```

## Scripts

- `bun run dev` — Start the development server
- `bun db:migrate:dev` — Run database migrations
- `bun db:generate` — Generate Prisma client
- `docker build -t backend-template .` — Build Docker image
- `docker run --env-file .env -p 4242:4242 backend-template` — Run with Docker

## Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Hono Documentation](https://hono.dev/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)

---

Feel free to use this template as a starting point for your next backend project!
