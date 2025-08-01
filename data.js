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
        "Python", "PostgreSQL", "Angular", "AWS", 
        "Docker", "Google Cloud", "Git", "CI/CD",
        "Java", "Spring Boot", "C#", "❤️ People ❤️"
    ],

    projects: [
        // {
        //     id: 1,
        //     title: "E-Commerce Platform",
        //     description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
        //     image: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=E-Commerce+Platform",
        //     technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        //     githubUrl: "https://github.com/your-username/ecommerce-platform",
        //     liveUrl: "https://your-ecommerce-demo.com",
        //     featured: true
        // },
        // {
        //     id: 2,
        //     title: "Task Management App",
        //     description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        //     image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Task+Manager",
        //     technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
        //     githubUrl: "https://github.com/your-username/task-manager",
        //     liveUrl: "https://your-taskmanager-demo.com",
        //     featured: true
        // },
        // {
        //     id: 3,
        //     title: "Weather Analytics Dashboard",
        //     description: "Data visualization dashboard that aggregates weather data from multiple APIs and displays interactive charts and forecasts.",
        //     image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=Weather+Dashboard",
        //     technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
        //     githubUrl: "https://github.com/your-username/weather-dashboard",
        //     liveUrl: "https://your-weather-demo.com",
        //     featured: true
        // },
        // {
        //     id: 4,
        //     title: "Mobile Fitness Tracker",
        //     description: "React Native app for tracking workouts, nutrition, and fitness goals with offline capability and data synchronization.",
        //     image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=Fitness+Tracker",
        //     technologies: ["React Native", "Firebase", "Redux", "SQLite"],
        //     githubUrl: "https://github.com/your-username/fitness-tracker",
        //     featured: false
        // },
        // {
        //     id: 5,
        //     title: "DevOps Automation Tools",
        //     description: "Collection of automation scripts and tools for CI/CD pipelines, infrastructure as code, and deployment automation.",
        //     image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=DevOps+Tools",
        //     technologies: ["Python", "Terraform", "Docker", "Jenkins", "Ansible"],
        //     githubUrl: "https://github.com/your-username/devops-tools",
        //     featured: false
        // },
        // {
        //     id: 6,
        //     title: "AI Chatbot Assistant",
        //     description: "Intelligent chatbot powered by natural language processing for customer support and FAQ automation.",
        //     image: "https://via.placeholder.com/600x400/1e293b/06b6d4?text=AI+Chatbot",
        //     technologies: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
        //     githubUrl: "https://github.com/your-username/ai-chatbot",
        //     featured: false
        // }
    ],

    experience: {
        main: [
            {
                id: "exp-1",
                company: "Virginia Tech Applied Research Corporation",
                position: "Software Engineer / Systems Analyst",
                startDate: "2012-11",
                endDate: "2014-10",
                location: "Blacksburg, VA",
                description: "Diverse technical role spanning software development, systems analysis, and IT support. Built foundation in multiple technologies and problem-solving approaches.",
                achievements: [
                    "Developed lightweight web and mobile applications",
                    "Provided enterprise desktop and network support",
                    "Maintained content management systems"
                ],
                technologies: ["Java", "Sencha", "Drupal", "Python"],
                type: "work"
            },
            {
                id: "exp-2",
                company: "Harmonia Holdings Group, LLC",
                position: "You guessed it: QA, then Software Engineer 🤓",
                startDate: "2014-10",
                endDate: "2016-05",
                location: "Blacksburg, VA",
                description: "Government contracting environment focused on enterprise software development. Built robust solutions in highly regulated, process-driven settings.",
                achievements: [
                    "Developed enterprise applications using Java and C#",
                    "Created automated REST API testing framework",
                    "Maintained comprehensive test suites and documentation",
                    "Worked within strict compliance and security requirements"
                ],
                technologies: ["Java", "C#", "Maven", "JUnit", "Selenium"],
                type: "work"
            },
            {
                id: "exp-3",
                company: "Ipreo (now part of S&P Global)",
                position: "QA Engineer -> Software Engineer",
                startDate: "2016-05",
                endDate: "2017-07",
                location: "Raleigh, NC",
                description: "Developed fintech solutions in an agile environment. Specialized in both feature development and quality assurance automation.",
                achievements: [
                    "Built full-stack financial applications",
                    "Implemented page object model for Selenium automation",
                    "Created randomized test data generation for broader coverage",
                    "Collaborated on requirements analysis and technical design"
                ],
                technologies: ["C#", "ASP.NET", "Node.js", "Selenium", "SQL"],
                type: "work"
            },
            {
                id: "exp-4",
                company: "",
                position: "Law Enforcement Side Quest 🚔",
                startDate: "2017-08",
                endDate: "2020-10",
                location: "Butner, NC / Wake Forest, NC",
                description: "Three-year detour into law enforcement and public safety. Served dual roles in fire and police services in Butner, then specialized in law enforcement in Wake Forest.",
                achievements: [
                    "Developed keen attention to detail through investigative work",
                    "Balanced independent decision-making with team collaboration",
                    "Gained experience in analytical thinking and problem-solving under pressure",
                    "Assignment to specialized Traffic Unit with an emphasis on Impaired Driving Enforcement"
                ],
                technologies: ["Leadership", "Analytics", "Crisis Management", "Communication", "Staying Cool Under Pressure"],
                type: "work"
            }, 
            {
                id: "exp-5",
                company: "TigerRisk Partners, LLC",
                position: "QA Automation Engineer -> Application Developer / QA Automation Engineer",
                startDate: "2020-10",
                endDate: "2022-01",
                location: "Remote",
                description: "Built insurance technology solutions while establishing quality engineering practices. Worked initially as a QA Engineer and then moved to full stack development.  You'll notice this recurring 'QA to Engineering' trend in the next several entries 😅",
                achievements: [
                    "Developed full-stack applications serving insurance analytics",
                    "QA Projects included Cypress UI tests and Newman automated API tests",
                    "Integrated security scanning into CI/CD pipelines"
                ],
                technologies: ["C#", "ASP.NET Core", "Cypress", "Postman", "MS SQL", "Angular", "Query Optimization", "Agile"],
                type: "work"
            },
            {
                id: "exp-6",
                company: "ForeFlight",
                position: "Software Engineer -> Senior Software Engineer",
                startDate: "2022-09",
                endDate: "2025-02",
                location: "Austin, TX (Remote)",
                description: "Built high-quality, scalable full-stack applications for the Personal Aviation team, focusing on the Logbook Application.",
                achievements: [
                    "Architected and developed the Logbook Application using React, Java, Spring Boot, and PostgreSQL",
                    "Implemented scalable application development patterns leveraging AWS services (S3, RDS, CloudFront, EC2, CDK)",
                    "Scaled development team from individual contributor to four full-stack developers",
                    "Mentored junior developers and led technical project planning and stakeholder coordination",
                    "Collaborated closely with product managers to define requirements and deliver user-centered solutions",
                    "Promoted to Senior Software Engineer in 2024 for technical leadership and team development contributions."
                ],
                technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "AWS", "S3", "RDS", "CloudFront", "EC2", "CDK", "Redis"],
                type: "work"
            },
            {
                id: "exp-7",
                company: "ForeFlight",
                position: "Engineering Manager",
                startDate: "2025-02",
                endDate: "present",
                location: "Austin, TX (Remote)",
                description: "Lead engineering excellence across the Personal Aviation team, managing 8 engineers across diverse application portfolios. Drive strategic technical decisions while fostering team growth and delivering high-impact solutions.",
                achievements: [
                    "Manage cross-functional team of 8 engineers across multiple aviation applications",
                    "Conduct regular 1-on-1s focused on career development and performance optimization",
                    "Lead project management initiatives ensuring proper scope definition and delivery timelines",
                    "Develop and implement team assignment strategies maximizing individual strengths and project outcomes",
                    "Drive technical architecture decisions balancing innovation with reliability",
                    "Foster collaborative culture promoting knowledge sharing and continuous improvement"
                ],
                technologies: ["Leadership", "Project Management", "Technical Strategy", "Career Development", "Team Building", "Agile"],
                type: "work"
            },
        ],
        education: [
            {
                id: "edu-1",
                company: "Virginia Tech",
                position: "Bachelor of Science: Business IT - Decision Support Systems",
                startDate: "2010-08",
                endDate: "2014-05",
                location: "Blacksburg, VA",
                description: "Cross disciplined business program with a focus in DSS project management and design.  Coursework included database design...",
                achievements: [
                ],
                technologies: ["Java", "C++", "Python", "Data Structures", "Algorithms"],
                type: "education"
            },
            {
                id: "edu-1",
                company: "",
                position: "Basic Law Enforcement Training",
                startDate: "2017-08",
                endDate: "2017-12",
                location: "Henerson, NC",
                description: "Basic Law Enforcement Training",
                achievements: [
                    "Academic Achievement Award - Highest Academic Performance in Cohort"
                ],
                technologies: ["Cop Stuff"],
                type: "education"
            },

        ],
        personal: [
            {
                id: "personal-3",
                company: "Personal Project",
                position: "Home Office Build",
                startDate: "2024-06",
                endDate: "🤔",
                location: "Home, NC",
                image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Home+Office+Setup",
                description: "Ongoing construction project, building a ~200 sq. ft. home office from the ground up. ",
                achievements: [
                    "Cleared and prepared site",
                    "Foundation using nine 50\" Pylex Helical Piers with 16' 4x4 beams to support the structure",
                    "Bottom up framing, roofing, insulation, etc",
                    "Conditioned using a 9000k BTU Mini Split 😎🧊",
                    "Wrap around 120 sq ft porch"
                ],
                technologies: ["Lots of windows"],
                type: "personal"
            },
            {
                id: "personal-2",
                company: "",
                position: "Private Pilot",
                startDate: "2021-01",
                endDate: "",
                location: "5500'",
                description: "I have been flying light aircraft since 2021.",
                achievements: [
                    "Private Pilot License, 2022",
                    "Instrument Rating, 2023",
                    "Commercial Rating, 2025? 🤞",
                    "240 hours Total Time"
                ],
                technologies: ["PA-28", "PA-38", "C172"],
                type: "personal"
            },
            {
                id: "personal-1",
                company: "Various",
                position: "EMT",
                startDate: "2008-08",
                endDate: "2020-08",
                location: "VA",
                image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=Road+Trip+Adventure",
                description: "I earned my EMT certification in high school and continued volunteering in college.  I maintained it for over 10 years before letting it lapse.",
                achievements: [
                    "10k+ hours volunteered",
                    "Advanced EMT Certificate",
                    "Responsible for field training new EMTs as a preceptor",
                    "Technical Rescue: Vehicle Extrication, Swift Water, and High Angle Ropes",
                    "Individual ambulance crew leadership",
                    "Operational control as a line officer/supervisor",
                    "Managed complex incident response in high-pressure situations"
                ],
                technologies: ["Community Service", "Medicine", "Leadership"],
                type: "personal"
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}