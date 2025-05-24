# Personal Portfolio Website

A Nuxt 3-based portfolio website showcasing software engineering and artistic work, built with static site generation and managed through DecapCMS.

## Features

- Static Site Generation (SSG) with Nuxt 3
- Content management with DecapCMS
- SCSS-based styling
- Responsive design
- SEO optimized
- Markdown-based content

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Git
- Netlify account (for deployment)

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

The site uses DecapCMS for content management. To access the CMS:

1. Deploy the site to Netlify
2. Enable Netlify Identity and Git Gateway
3. Visit `/admin` on your deployed site

### Setting up Netlify Identity

1. Go to your site's Netlify dashboard
2. Navigate to Site settings > Identity
3. Click "Enable Identity"
4. Under Identity > Services, click "Enable Git Gateway"

### Inviting Users

1. Go to Identity > Invite users
2. Enter the email addresses of your content editors
3. They will receive an invitation to create an account

## Deployment

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Configure the build settings:
   - Build command: `npm run generate`
   - Publish directory: `dist`
4. Deploy the site

## Project Structure

```
├── assets/
│   └── styles/          # SCSS files
├── content/
│   ├── software/        # Software project markdown files
│   └── art/            # Art project markdown files
├── public/
│   ├── admin/          # DecapCMS files
│   └── uploads/        # Media files
└── pages/              # Nuxt pages
```

## Customization

- Edit `assets/styles/_variables.scss` to customize colors, typography, and spacing
- Modify `public/admin/config.yml` to adjust CMS fields and collections
- Update `nuxt.config.ts` for site-wide configuration

## License

MIT
