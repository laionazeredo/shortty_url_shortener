# Shortty

Shortty is a URL shortener service that allows you to shorten long URLs to a shorter, more user-friendly URL. This service is built using NextJS and Typescript, and it uses PostgreSQL to store the shortened URLs.

## Features

- Shorten long URLs to a shorter, more user-friendly URL
- Redirect users to the original URL when they visit the shortened URL
- Tracks the number of times a shortened URL has been visited
- Rate limits the access to the application to prevent abuse

## Tech Stack

- NextJS
- Typescript
- PostgreSQL
- Drizzle ORM
- Tailwind CSS
- Docker and Docker Compose

## Requirements

- NodeJS >= 23.x
- Docker

## Installation

1. Clone the repository
2. Install the dependencies

```bash
npm install
```

## Usage

1. Start the application using Docker Compose

```bash
npm run container:run
```

2. Visit `http://localhost` in your browser
3. Enter a long URL and click the "Shorten" button
4. Copy the shortened URL and share it with others
5. Visit the shortened URL to be redirected to the original URL

## TODO

- [ ] Add user authentication
- [ ] Allow users to view their shortened URLs
- [ ] Add a custom slug feature
- [ ] Add admin panel to view analytics
- [ ] Add tests
