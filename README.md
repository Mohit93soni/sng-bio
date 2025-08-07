# SND Regenics - Next.js Biomedical Research Website

A modern, professional website for SND Regenics, a leading biomedical research and development firm specializing in 3D bioprinting, electrospinning, and regenerative medicine - now built with Next.js 15.

## 🚀 Next.js Conversion Complete

**Status**: Converted to Next.js 15 with App Router ✅

## 🌟 Features

### Complete Website Structure
- **Homepage** - Company overview with mission and services
- **Products** - Hybrid fabrication technology and biomaterials
- **Services** - Custom 3D scaffolds and training programs  
- **Research & Development** - Neuroscience, 3D bioprinting, tissue culture, AI/ML
- **About Us** - Company story, mission, values, and leadership team (Lokesh Sharma, Chi Man, Dinesh)
- **Contact** - Professional contact form (without reCAPTCHA - to be added later)
- **News & Events** - Latest research updates and industry events
- **Blog** - Research insights and thought leadership

### Technical Excellence
- **Modern Stack**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **App Router**: Latest Next.js routing with server components
- **SEO Optimized**: Built-in Next.js SEO features, meta tags, structured data
- **Responsive Design**: Mobile-first approach for all devices
- **Performance**: Optimized with automatic code splitting
- **Server Components**: Improved performance with React Server Components

### Professional Design
- Custom biomedical branding with modern color scheme
- Consistent typography and spacing
- Interactive elements with smooth animations
- Professional imagery placeholders
- Accessible and user-friendly interface

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS variables
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify optimized
- **Build**: Next.js with SWC compiler

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/page.tsx     # About page
��   ├── contact/page.tsx   # Contact page
│   └── [other-pages]/     # Additional pages
├── components/ui/         # Reusable UI components
│   ├── navigation.tsx     # Site navigation
│   ├── footer.tsx         # Site footer
│   ├── button.tsx         # Button component
│   └── [other-components]/
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd snd-regenics-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint validation
npm run typecheck  # TypeScript validation
```

## 🌐 Deployment

### Vercel (Recommended for Next.js)
```bash
# Connect your GitHub repository to Vercel
# Automatic deployments on git push
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

### Docker
```bash
# Build Docker image
docker build -t snd-regenics .

# Run container
docker run -p 3000:3000 snd-regenics
```

### Self-Hosted
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Pages Overview

### Homepage (/)
- Hero section with company mission
- Research areas showcase
- Products and services preview
- Call-to-action sections

### About Us (/about)
- Company mission and story
- Leadership team profiles (Lokesh Sharma, Chi Man, Dinesh)
- Core values and technology advantages
- Company statistics and achievements

### Contact (/contact)
- Professional contact form (reCAPTCHA removed - to be added later)
- Business information and hours
- Multiple contact methods
- Collaboration opportunities

## 🎨 Design System

### Colors
- **Primary**: Teal/Cyan for biomedical branding (hsl(192 84% 31%))
- **Secondary**: Supporting grays and whites
- **Accent**: Light blue highlights (hsl(191 93% 88%))

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable font sizing

### Components
- Consistent button styles with variants
- Professional card layouts
- Responsive navigation with mobile menu
- Accessible form elements

## 🔧 Configuration

### Environment Variables
```bash
# Optional - for future email service integration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@sndregenics.com
SMTP_PASS=app-password

# Analytics (optional)
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### Customization
- Colors: Update CSS variables in `src/app/globals.css`
- Content: Edit page components in `src/app/*/page.tsx`
- Components: Modify UI components in `src/components/ui/`
- SEO: Update metadata in each page component

## 📊 Performance

- **Framework**: Next.js 15 optimizations
- **Bundle**: Automatic code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts optimization
- **SEO**: Built-in Next.js SEO features

## 🧪 Removed Features (To Be Added Later)

- **Google reCAPTCHA**: Contact form protection
- **Email Service**: Form submission handling
- **Newsletter**: Email subscription service

These can be easily added back using Next.js API routes and appropriate services.

## 📈 SEO Features

- **App Router SEO**: Built-in Next.js metadata API
- **Dynamic Meta Tags**: Per-page SEO optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic generation
- **Open Graph**: Social media sharing

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

For technical support or questions:
- **Documentation**: Check this README and Next.js docs
- **Issues**: Create an issue in the repository
- **Contact**: Use the website contact form

## 🎉 Migration Complete

Successfully converted from React/Vite to Next.js 15:

✅ **Converted Features**:
- All pages migrated to App Router
- Components converted to Next.js patterns
- Routing updated from React Router to Next.js
- SEO optimization with Next.js metadata API
- Removed reCAPTCHA and email services (as requested)
- Updated build and deployment processes

✅ **Ready for Deployment**: The Next.js version is production-ready and optimized for modern web deployment platforms.

---

## 📄 License

Private project for SND Regenics. All rights reserved.

**Version**: 2.0.0 - Next.js Conversion  
**Last Updated**: January 2025
