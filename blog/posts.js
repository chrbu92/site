const posts = {
  "posts": [
    {
      "id": "llms-usage",
      "title": "LLMs: A Productivity Tool for Software Engineers",
      "description": "My thoughts on LLM usage to increase developer productivity",
      "category": "LLM Usage",
      "date": "2025-08-08",
      "readTime": "6 min read",
      "tags": ["LLM", "Development", "Productivity"],
      "file": "llms-usage.md",
      "featured": true
    },
    {
      "id": "blameless-culture",
      "title": "Building Blameless Culture",
      "description": "Why Systems Thinking Beats Finger Pointing",
      "category": "Leadership",
      "date": "2025-08-06",
      "readTime": "6 min read",
      "tags": ["Leadership", "Management", "Career", "Team Building"],
      "file": "blameless-culture.md",
      "featured": true
    },
    {
      "id": "static-site-with-google",
      "title": "Build and Host a Static Site",
      "description": "How to host a simple static site using google cloud",
      "category": "Technical",
      "date": "2025-08-06",
      "readTime": "6 min read",
      "tags": ["Technology", "Cloud", "Google"],
      "file": "static-site-with-google.md",
      "featured": false
    }
  ],
  "categories": [
    {
      "id": "llm-usage",
      "name": "LLM Usage",
      "description": "Thoughts and examples on using Large Language Models in software development",
      "icon": "🤖"
    },
    {
      "id": "leadership",
      "name": "Leadership",
      "description": "Management insights and leadership lessons from engineering teams",
      "icon": "👥"
    },
    {
      "id": "personal-projects",
      "name": "Personal Projects",
      "description": "Updates on side projects, construction, aviation, and other interests",
      "icon": "🛠️"
    },
    {
      "id": "technical",
      "name": "Technical",
      "description": "Some simple How-To's and some Deep dives into software architecture, patterns, and engineering practices",
      "icon": "⚙️"
    }
  ]
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = posts;
}