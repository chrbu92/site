# Welcome

Thanks for checking out my personal site! I hope you found something you like.  The site is statically hosted in Google Cloud with automatic deployment from Github via GitHub Actions.

## **Easter Eggs & Fun**
- Konami code activation (↑↑↓↓←→←→BA)
- Console messages for developers
- Random click effects
- Matrix mode surprise

## 🛠 Like what you see? Make it your own
I provided an [article](https://cbulloss.dev/insights.html) about how I set everything up.  Feel free to fork this project and customize it for your own use.

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

## 🔧 Development

### **Local Development**
There's some stuff in here that works a bit better if you run a local server
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

## 🔒 Security

- No server-side code required
- All client-side rendering
- Safe for static hosting
- No sensitive data exposure

---