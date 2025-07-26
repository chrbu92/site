# Personal Portfolio Website

A modern, tech-forward personal landing page with a git branch-style timeline for work experience.

## 🚀 Features

### **Modern Tech Aesthetic**
- Dark theme with blue accent colors
- Terminal-style loading screen
- Code syntax highlighting in design elements
- Monospace fonts for developer feel
- Animated grid background and floating elements

### **Interactive Elements**
- Typing animation in hero section
- Smooth scroll navigation with active highlighting
- Hover effects and transitions throughout
- Animated counters in stats section
- Git branch-style timeline switcher

### **Git-Inspired Timeline**
- Three timeline branches: `main` (work), `education`, `projects`
- Commit-style entries with detailed information
- Branch switching with visual feedback
- Commit counter display
- Timeline animations and effects

### **Fully Responsive**
- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized performance

### **Easter Eggs & Fun**
- Konami code activation (↑↑↓↓←→←→BA)
- Console messages for developers
- Random click effects
- Matrix mode surprise

## 📁 File Structure

```
personal-site/
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS with custom properties
├── script.js           # Interactive JavaScript functionality
├── data.js             # Modular data configuration
└── README.md           # This documentation
```

## 🛠 Customization

### **Personal Information**
Edit `data.js` to update your information:

```javascript
const portfolioData = {
    personal: {
        name: "Your Name",
        title: "Full Stack Developer",
        email: "your.email@example.com",
        // ...
    }
}
```

### **Technologies**
Add your tech stack to the technologies array:

```javascript
technologies: [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS"
]
```

### **Projects**
Add your featured projects:

```javascript
projects: [
    {
        id: 1,
        title: "Project Name",
        description: "Project description...",
        image: "project-image-url",
        technologies: ["React", "Node.js"],
        githubUrl: "https://github.com/username/repo",
        liveUrl: "https://your-demo.com",
        featured: true
    }
]
```

### **Work Experience**
Update the experience timeline branches:

```javascript
experience: {
    main: [     // Work experience
        {
            company: "Company Name",
            position: "Job Title",
            startDate: "2022-01",
            endDate: "present",
            location: "City, State",
            description: "Job description...",
            achievements: ["Achievement 1", "Achievement 2"],
            technologies: ["Tech1", "Tech2"]
        }
    ],
    education: [ /* Education entries */ ],
    projects: [ /* Side project entries */ ]
}
```

## 🎨 Color Customization

Colors are defined as CSS custom properties in `styles.css`:

```css
:root {
    --bg-primary: #0f172a;      /* Dark blue background */
    --accent-primary: #3b82f6;   /* Blue accent */
    --accent-secondary: #10b981; /* Green accent */
    --text-primary: #f8fafc;     /* Light text */
    /* ... more colors */
}
```

## 📱 Sections Included

1. **Hero Section**
   - Animated greeting with typing effect
   - Profile image with code overlay
   - Call-to-action buttons
   - Animated background elements

2. **About Section**
   - Personal description
   - Technology stack with hover effects
   - Animated statistics cards

3. **Projects Section**
   - Featured project cards
   - Project images with overlay
   - Technology tags
   - Links to GitHub and live demos

4. **Experience Timeline**
   - Git branch-style interface
   - Switchable timeline views
   - Detailed experience entries
   - Achievement lists and tech stacks

5. **Contact Section**
   - Contact method cards
   - Social media links
   - Professional contact information

## 🚀 Deployment

### **Static Hosting**
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable Pages in repository settings
- **Surge.sh**: Use CLI deployment

### **Custom Domain**
1. Purchase domain from registrar
2. Configure DNS settings in hosting platform
3. Update contact information in `data.js`

## 🔧 Development

### **Local Development**
```bash
# Serve locally with Python
python -m http.server 8000

# Or with Node.js
npx http-server

# Or with VS Code Live Server extension
```

### **File Modifications**
- **Content**: Edit `data.js` for all content updates
- **Styling**: Modify `styles.css` for visual changes
- **Functionality**: Update `script.js` for behavior changes
- **Structure**: Edit `index.html` for layout changes

## 📋 TODO Checklist

### **Content Updates**
- [ ] Replace placeholder name and title
- [ ] Add your professional photo
- [ ] Update contact information
- [ ] Add your projects and descriptions
- [ ] Fill in work experience details
- [ ] Update technology stack
- [ ] Add education background
- [ ] Include side projects

### **Customization**
- [ ] Choose color scheme
- [ ] Update social media links
- [ ] Add favicon
- [ ] Configure Google Analytics (optional)
- [ ] Add resume PDF file
- [ ] Test responsive design
- [ ] Optimize images for web
- [ ] Add SEO meta tags

### **Optional Enhancements**
- [ ] Add blog section
- [ ] Include testimonials
- [ ] Add contact form backend
- [ ] Implement dark/light mode toggle
- [ ] Add more animations
- [ ] Include certificate showcase
- [ ] Add language toggle

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Minify Assets**: Minify CSS and JavaScript for production
3. **CDN**: Use CDN for external libraries
4. **Lazy Loading**: Implement for images below the fold
5. **Caching**: Configure proper cache headers

## 🔒 Security

- No server-side code required
- All client-side rendering
- Safe for static hosting
- No sensitive data exposure

## 📈 Analytics

To add Google Analytics:
1. Create GA4 property
2. Add tracking code to `<head>` in `index.html`
3. Configure goals and events as needed

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you create interesting enhancements, consider sharing them!

---

**Built with ❤️ and lots of ☕**

*Remember to replace all placeholder content with your actual information before deploying!*