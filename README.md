# TalkMaster – Technical Talks Management Platform

## Project Vision

TalkMaster is a web platform designed tto manage a large-scale tech event, similar to Devoxx France, involving hundreds of participants and speakers.

The goal is to provide a smooth, user-friendly experience for three types of users:
- **Speakers**: submit, edit, or delete their talks.
- **Organizers**: validate, schedule, and manage the sessions.
- **Attendees**: browse a clear and filterable schedule, save favorites.

> MVP Objective: Implement talk management, a conflict-free planning system, role-based authentication, and a responsive interface with public & private views.

## Tech Stack

### Frontend: 
  - Framework: React
  - Routing: React Router
  - State Management: Zustand
  - Form Validation: React Hook Form, Zod
  - UI Framework: Tailwind CSS, ShadCN UI
  
### Backend: 
  - Framework: Django
  - API Framework: Django REST Framework (DRF)
  
### Database: 
  - Database: PostgreSQL
  
### Authentication: 
  - Method: JWT (JSON Web Tokens)
  
### API Documentation: 
  - Tool: Swagger (auto-generated via Django REST Framework)
  
### Development Tools: 
  - Linting/Formatting: ESLint, Prettier
  - Git Hooks: Husky
  - CI/CD: GitHub Actions
  
### Deployment: 
  - Frontend: Vercel
  - Backend: Render
  
### Version Control: 
  - Platform: Git, GitHub
  
### Project Management: 
  - Tool: GitHub Projects

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Authors
Doriane FARAU (@DFarau)
Antonin CHARPENTIER (@toutouff)
Charles LAMBRET (@CharlesLambret)
Louis FORTRIE (@louisFortrie)