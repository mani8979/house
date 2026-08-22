# House Studio Interiors

Welcome to the House Studio Interiors project repository! This is a modern, high-performance website built to showcase interior design services, portfolios, and company information.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **CMS**: [Sanity](https://www.sanity.io/) (Headless CMS for managing content like services, projects, etc.)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Icons**: FontAwesome

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   cd house
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root of your project and add the following (replace with your actual Sanity credentials):
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sanity CMS
This project uses Sanity as its headless CMS. Content such as services, projects, and site data can be managed via Sanity Studio.

- **Schemas**: Located in `src/sanity/schema.js`
- **Data Migration Scripts**: Located in `scripts/` (e.g. `migrateSiteData.mjs`)

## Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint.

## Folder Structure

- `src/app/`: Next.js App Router files (pages, layouts, globals).
- `src/components/`: Reusable React components (Hero, About, Services, Contact, etc.).
- `src/sanity/`: Sanity client configuration and schemas.
- `public/`: Static assets (images, icons).
- `scripts/`: Utility scripts for data migration and processing.

## License
Private - All Rights Reserved
