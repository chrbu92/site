// Personal portfolio data - modify this file to update your information

const portfolioData = {
    personal: {
        name: "Your Name",
        title: "Full Stack Developer",
        email: "your.email@example.com",
        location: "Your City, State",
        profileImage: "https://via.placeholder.com/400x400/0f172a/3b82f6?text=Your+Photo"
    },

    technologies: [
        "JavaScript", "TypeScript", "React", "Node.js", 
        "Python", "PostgreSQL", "MongoDB", "AWS", 
        "Docker", "Kubernetes", "Git", "CI/CD"
    ],

    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
            image: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=E-Commerce+Platform",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
            githubUrl: "https://github.com/your-username/ecommerce-platform",
            liveUrl: "https://your-ecommerce-demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Task+Manager",
            technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
            githubUrl: "https://github.com/your-username/task-manager",
            liveUrl: "https://your-taskmanager-demo.com",
            featured: true
        },
        {
            id: 3,
            title: "Weather Analytics Dashboard",
            description: "Data visualization dashboard that aggregates weather data from multiple APIs and displays interactive charts and forecasts.",
            image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=Weather+Dashboard",
            technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
            githubUrl: "https://github.com/your-username/weather-dashboard",
            liveUrl: "https://your-weather-demo.com",
            featured: true
        },
        {
            id: 4,
            title: "Mobile Fitness Tracker",
            description: "React Native app for tracking workouts, nutrition, and fitness goals with offline capability and data synchronization.",
            image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=Fitness+Tracker",
            technologies: ["React Native", "Firebase", "Redux", "SQLite"],
            githubUrl: "https://github.com/your-username/fitness-tracker",
            featured: false
        },
        {
            id: 5,
            title: "DevOps Automation Tools",
            description: "Collection of automation scripts and tools for CI/CD pipelines, infrastructure as code, and deployment automation.",
            image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=DevOps+Tools",
            technologies: ["Python", "Terraform", "Docker", "Jenkins", "Ansible"],
            githubUrl: "https://github.com/your-username/devops-tools",
            featured: false
        },
        {
            id: 6,
            title: "AI Chatbot Assistant",
            description: "Intelligent chatbot powered by natural language processing for customer support and FAQ automation.",
            image: "https://via.placeholder.com/600x400/1e293b/06b6d4?text=AI+Chatbot",
            technologies: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
            githubUrl: "https://github.com/your-username/ai-chatbot",
            featured: false
        }
    ],

    experience: {
        main: [
            {
                id: "exp-1",
                company: "Tech Innovators Inc.",
                position: "Senior Full Stack Developer",
                startDate: "2022-01",
                endDate: "present",
                location: "San Francisco, CA",
                description: "Lead development of microservices architecture serving 1M+ users. Mentor junior developers and drive technical decisions for product roadmap.",
                achievements: [
                    "Reduced API response time by 40% through optimization",
                    "Led migration from monolith to microservices",
                    "Mentored 5 junior developers",
                    "Implemented CI/CD pipeline reducing deployment time by 60%"
                ],
                technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
                type: "work"
            },
            {
                id: "exp-2",
                company: "StartupXYZ",
                position: "Full Stack Developer",
                startDate: "2020-06",
                endDate: "2021-12",
                location: "Austin, TX",
                description: "Built MVP from ground up using modern web technologies. Collaborated with design team to create responsive user interfaces.",
                achievements: [
                    "Developed MVP that secured $2M in Series A funding",
                    "Built responsive web app used by 10,000+ beta users",
                    "Integrated payment processing and user authentication",
                    "Established testing practices with 90% code coverage"
                ],
                technologies: ["Vue.js", "Express", "PostgreSQL", "Stripe"],
                type: "work"
            },
            {
                id: "exp-3",
                company: "Digital Solutions Corp",
                position: "Software Engineer",
                startDate: "2018-08",
                endDate: "2020-05",
                location: "Seattle, WA",
                description: "Developed and maintained enterprise web applications. Worked closely with clients to understand requirements and deliver solutions.",
                achievements: [
                    "Delivered 15+ client projects on time and under budget",
                    "Improved application performance by 25%",
                    "Implemented automated testing suite",
                    "Trained team on new technologies and best practices"
                ],
                technologies: ["Angular", "C#", ".NET", "SQL Server"],
                type: "work"
            },
            {
                id: "exp-4",
                company: "WebDev Agency",
                position: "Junior Developer",
                startDate: "2017-06",
                endDate: "2018-07",
                location: "Portland, OR",
                description: "Started career building websites and web applications. Learned fundamental programming concepts and industry best practices.",
                achievements: [
                    "Built 20+ responsive websites for small businesses",
                    "Learned version control and team collaboration",
                    "Gained experience with multiple programming languages",
                    "Developed strong problem-solving skills"
                ],
                technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                type: "work"
            }
        ],
        education: [
            {
                id: "edu-1",
                company: "University of Technology",
                position: "Bachelor of Computer Science",
                startDate: "2013-09",
                endDate: "2017-05",
                location: "Your City, State",
                description: "Comprehensive computer science education with focus on software engineering, algorithms, and data structures.",
                achievements: [
                    "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
                    "President of Computer Science Club",
                    "Winner of Annual Hackathon (2016, 2017)",
                    "Teaching Assistant for Data Structures course"
                ],
                technologies: ["Java", "C++", "Python", "Data Structures", "Algorithms"],
                type: "education"
            },
            {
                id: "edu-2",
                company: "Coding Bootcamp Intensive",
                position: "Full Stack Web Development",
                startDate: "2017-01",
                endDate: "2017-04",
                location: "San Francisco, CA",
                description: "Intensive 16-week program focusing on modern web development technologies and frameworks.",
                achievements: [
                    "Top 5% of cohort",
                    "Built 3 full-stack applications",
                    "Learned industry best practices",
                    "100% job placement rate"
                ],
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                type: "education"
            }
        ],
        projects: [
            {
                id: "proj-1",
                company: "Open Source Contribution",
                position: "Core Contributor - React Component Library",
                startDate: "2021-03",
                endDate: "present",
                location: "Remote",
                description: "Contributing to popular React component library with 50k+ weekly downloads on npm.",
                achievements: [
                    "Contributed 25+ components and utilities",
                    "Improved accessibility compliance by 40%",
                    "Reduced bundle size by 30%",
                    "Maintained documentation and examples"
                ],
                technologies: ["React", "TypeScript", "Storybook", "Jest"],
                type: "project"
            },
            {
                id: "proj-2",
                company: "Personal Project",
                position: "Creator - Developer Productivity Tool",
                startDate: "2020-12",
                endDate: "2021-08",
                location: "Remote",
                description: "Built CLI tool to automate common development tasks, published on npm with 1000+ downloads.",
                achievements: [
                    "1000+ npm downloads in first month",
                    "Featured in developer newsletter",
                    "Open sourced with 50+ GitHub stars",
                    "Used by developers at 10+ companies"
                ],
                technologies: ["Node.js", "CLI", "npm", "Jest"],
                type: "project"
            },
            {
                id: "proj-3",
                company: "Freelance Project",
                position: "Lead Developer - E-learning Platform",
                startDate: "2019-09",
                endDate: "2020-02",
                location: "Remote",
                description: "Built comprehensive e-learning platform for educational institution with 500+ students.",
                achievements: [
                    "Delivered project 2 weeks ahead of schedule",
                    "Handled 500+ concurrent users",
                    "Integrated video streaming and assessments",
                    "Client satisfaction rating: 5/5 stars"
                ],
                technologies: ["React", "Django", "PostgreSQL", "AWS"],
                type: "project"
            }
        ],
        personal: [
            {
                id: "personal-1",
                company: "Personal Project",
                position: "Home Office Build & Tech Setup",
                startDate: "2020-03",
                endDate: "2020-08",
                location: "Home",
                image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Home+Office+Setup",
                description: "Designed and built a custom home office during the pandemic, including cable management, lighting setup, and ergonomic workspace optimization.",
                achievements: [
                    "Built custom standing desk with motorized height adjustment",
                    "Implemented smart lighting system with automated scheduling",
                    "Created cable management solution reducing clutter by 90%",
                    "Achieved optimal ergonomic setup reducing back pain"
                ],
                technologies: ["Arduino", "Smart Home", "3D Printing", "Woodworking"],
                type: "personal"
            },
            {
                id: "personal-2",
                company: "Community Volunteer",
                position: "Local Library Digital Literacy Program",
                startDate: "2019-06",
                endDate: "2022-12",
                location: "Community Center",
                description: "Taught basic computer skills and digital literacy to seniors and low-income families. Developed curriculum and provided one-on-one tutoring sessions.",
                achievements: [
                    "Helped 150+ people gain basic computer skills",
                    "Developed beginner-friendly curriculum in 3 languages",
                    "Coordinated with 12 volunteer instructors",
                    "Increased program attendance by 300%"
                ],
                technologies: ["Teaching", "Curriculum Development", "Community Outreach"],
                type: "personal"
            },
            {
                id: "personal-3",
                company: "Adventure Project",
                position: "Cross-Country Road Trip & Photography",
                startDate: "2021-05",
                endDate: "2021-08",
                location: "USA",
                image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=Road+Trip+Adventure",
                description: "Planned and executed a 3-month cross-country road trip, documenting the journey through photography and blogging. Visited 15 national parks and 25 states.",
                achievements: [
                    "Drove 12,000 miles across 25 states",
                    "Captured 2,000+ photos and created travel blog",
                    "Met and interviewed 50+ locals about their communities",
                    "Raised $3,000 for national park conservation"
                ],
                technologies: ["Photography", "Travel Planning", "Blogging", "Social Media"],
                type: "personal"
            },
            {
                id: "personal-4",
                company: "Maker Project",
                position: "IoT Garden Monitoring System",
                startDate: "2022-04",
                endDate: "2022-09",
                location: "Backyard",
                image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=Smart+Garden",
                description: "Built an automated garden monitoring system using IoT sensors to track soil moisture, temperature, and light levels. Created mobile app for remote monitoring.",
                achievements: [
                    "Reduced plant mortality rate by 85%",
                    "Automated watering system saving 2 hours daily",
                    "Built weather-resistant sensor housing",
                    "Created companion mobile app with 500+ downloads"
                ],
                technologies: ["Arduino", "IoT", "React Native", "3D Printing", "Sensors"],
                type: "personal"
            },
            {
                id: "personal-5",
                company: "Learning Journey",
                position: "Learning Japanese Language & Culture",
                startDate: "2018-01",
                endDate: "present",
                location: "Online & Local Classes",
                description: "Self-directed study of Japanese language, culture, and calligraphy. Includes formal classes, language exchange partnerships, and cultural immersion activities.",
                achievements: [
                    "Achieved JLPT N3 certification (intermediate level)",
                    "Completed 500+ hours of structured study",
                    "Participated in local Japanese cultural events",
                    "Established language exchange partnership"
                ],
                technologies: ["Language Learning", "Cultural Studies", "Calligraphy"],
                type: "personal"
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}