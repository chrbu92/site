// Personal Portfolio JavaScript

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoading();
        this.setupNavigation();
        this.setupTypingEffect();
        this.setupTechStack();
        this.setupProjects();
        this.setupTimeline();
        this.setupAnimations();
        this.setupCounters();
    }

    setupLoading() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loading-screen');
                loadingScreen.classList.add('fade-out');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 2000);
        });
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active navigation highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos <= bottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });

        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    setupTypingEffect() {
        const typingText = document.querySelector('.typing-text');
        if (!typingText) return;

        const messages = [
            'Hello, World!',
            'console.log("Hi!");',
            'print("Welcome!");',
            'echo "Hello!";'
        ];

        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentMessage = messages[messageIndex];
            
            if (!isDeleting) {
                typingText.textContent = currentMessage.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentMessage.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
            } else {
                typingText.textContent = currentMessage.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    messageIndex = (messageIndex + 1) % messages.length;
                }
            }
            
            setTimeout(type, isDeleting ? 50 : 100);
        };

        type();
    }

    setupTechStack() {
        const techStackContainer = document.getElementById('tech-stack');
        if (!techStackContainer || !portfolioData.technologies) return;

        portfolioData.technologies.forEach((tech, index) => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techTag.style.animationDelay = `${index * 0.1}s`;
            techStackContainer.appendChild(techTag);
        });
    }

    setupProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !portfolioData.projects) return;

        const featuredProjects = portfolioData.projects.filter(project => project.featured);
        
        featuredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project);
            projectCard.style.animationDelay = `${index * 0.2}s`;
            projectsGrid.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                    ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Source Code
                    </a>` : ''}
                    ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>
        `;
        
        return card;
    }

    setupTimeline() {
        const timelineBtns = document.querySelectorAll('.timeline-btn');
        const timelineBranches = document.querySelectorAll('.timeline-branch');
        
        // Setup timeline branch switching
        timelineBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetBranch = btn.getAttribute('data-branch');
                
                // Update active button
                timelineBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update active branch
                timelineBranches.forEach(branch => {
                    branch.classList.remove('active');
                    if (branch.getAttribute('data-branch') === targetBranch) {
                        branch.classList.add('active');
                    }
                });
                
                // Update commit count
                this.updateCommitCount(targetBranch);
            });
        });
        
        // Populate timeline branches
        this.populateTimeline('main', portfolioData.experience.main);
        this.populateTimeline('education', portfolioData.experience.education);
        // this.populateTimeline('projects', portfolioData.experience.projects);
        this.populateTimeline('personal', portfolioData.experience.personal);
        
        // Set initial commit count
        this.updateCommitCount('main');
    }

    populateTimeline(branchName, experiences) {
        const branch = document.querySelector(`.timeline-branch[data-branch="${branchName}"]`);
        if (!branch || !experiences) return;

        // Sort experiences by ID alphabetically (ascending order)
        const sortedExperiences = [...experiences].sort((b,a) => {
            return a.id.localeCompare(b.id);
        });
        console.log(sortedExperiences);

        sortedExperiences.forEach((exp, index) => {
            console.log(exp.id);
            const timelineItem = this.createTimelineItem(exp);
            timelineItem.style.animationDelay = `${index * 0.05}s`;
            branch.appendChild(timelineItem);
        });
    }

    createTimelineItem(experience) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const formatDate = (dateString) => {
            if (dateString === 'present') return 'Present';
            const [year, month] = dateString.split('-');
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${monthNames[parseInt(month) - 1]} ${year}`;
        };

        const startDate = formatDate(experience.startDate);
        const endDate = formatDate(experience.endDate);
        
        item.innerHTML = `
            <div class="timeline-commit">
                ${experience.image ? `
                    <div class="commit-image">
                        <img src="${experience.image}" alt="${experience.position}" loading="lazy">
                        <div class="image-overlay">
                            <i class="fas fa-expand"></i>
                        </div>
                    </div>
                ` : ''}
                <div class="commit-header">
                    <div class="commit-info">
                        <h3>${experience.position}</h3>
                        <div class="commit-company">${experience.company}</div>
                        <div class="commit-period">${startDate} - ${endDate}</div>
                    </div>
                    <div class="commit-meta">
                        <div class="commit-date">${experience.startDate}</div>
                        <div class="commit-location">${experience.location}</div>
                    </div>
                </div>
                <p class="commit-description">${experience.description}</p>
                ${experience.achievements ? `
                    <div class="commit-achievements">
                        <h4>Key Achievements</h4>
                        <ul class="achievements-list">
                            ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="commit-technologies">
                    ${experience.technologies.map(tech => `<span class="commit-tech">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click handler for image modal if image exists
        if (experience.image) {
            const imageElement = item.querySelector('.commit-image img');
            const overlay = item.querySelector('.image-overlay');
            
            const showImageModal = () => {
                this.createImageModal(experience.image, experience.position);
            };
            
            imageElement.addEventListener('click', showImageModal);
            overlay.addEventListener('click', showImageModal);
        }
        
        return item;
    }

    updateCommitCount(branchName) {
        const commitCountElement = document.getElementById('commit-count');
        if (!commitCountElement) return;

        let count = 0;
        switch (branchName) {
            case 'main':
                count = portfolioData.experience.main ? portfolioData.experience.main.length : 0;
                break;
            case 'education':
                count = portfolioData.experience.education ? portfolioData.experience.education.length : 0;
                break;
            case 'projects':
                count = portfolioData.experience.projects ? portfolioData.experience.projects.length : 0;
                break;
            case 'personal':
                count = portfolioData.experience.personal ? portfolioData.experience.personal.length : 0;
                break;
        }
        
        commitCountElement.textContent = count;
    }

    createImageModal(imageSrc, title) {
        // Remove existing modal if any
        const existingModal = document.querySelector('.image-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="image-modal-backdrop">
                <div class="image-modal-content">
                    <div class="image-modal-header">
                        <h3>${title}</h3>
                        <button class="image-modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="image-modal-body">
                        <img src="${imageSrc}" alt="${title}" loading="lazy">
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        const backdrop = modal.querySelector('.image-modal-backdrop');
        const closeBtn = modal.querySelector('.image-modal-close');
        const image = modal.querySelector('img');

        const closeModal = () => {
            modal.classList.add('closing');
            setTimeout(() => modal.remove(), 300);
        };

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
        });
        closeBtn.addEventListener('click', closeModal);
        
        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // Animate in
        setTimeout(() => modal.classList.add('show'), 10);
    }

    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(`
            .project-card,
            .timeline-item,
            .stat-card,
            .contact-link,
            .tech-tag
        `);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        let hasAnimated = false;

        const animateCounters = () => {
            if (hasAnimated) return;
            hasAnimated = true;

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            });
        };

        // Trigger counter animation when about section is visible
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                    }
                });
            }, { threshold: 0.5 });

            counterObserver.observe(aboutSection);
        }
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Easter eggs and fun interactions
const easterEggs = {
    init() {
        this.setupKonamiCode();
        this.setupConsoleMessages();
        this.setupClickEffects();
    },

    setupKonamiCode() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateMatrixMode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    },

    setupConsoleMessages() {
        const styles = {
            title: 'color: #3b82f6; font-size: 24px; font-weight: bold;',
            subtitle: 'color: #10b981; font-size: 16px;',
            text: 'color: #cbd5e1; font-size: 14px;'
        };

        console.log('%c👋 Hello, fellow developer!', styles.title);
        console.log('%cI see you\'re checking out the console. Nice!', styles.subtitle);
        console.log('%cFeel free to explore the code on GitHub:', styles.text);
        console.log('%chttps://github.com/your-username/portfolio', 'color: #3b82f6;');
        console.log('%c\nPS: Try the Konami code for a surprise! ↑↑↓↓←→←→BA', styles.text);
    },

    setupClickEffects() {
        document.addEventListener('click', (e) => {
            if (Math.random() < 0.1) { // 10% chance
                this.createClickEffect(e.clientX, e.clientY);
            }
        });
    },

    createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            width: 10px;
            height: 10px;
            background: #3b82f6;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: clickEffect 0.6s ease-out forwards;
        `;

        // Add animation keyframes if not already added
        if (!document.getElementById('click-effect-styles')) {
            const style = document.createElement('style');
            style.id = 'click-effect-styles';
            style.textContent = `
                @keyframes clickEffect {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(4); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 600);
    },

    activateMatrixMode() {
        const matrixOverlay = document.createElement('div');
        matrixOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: #00ff00;
            font-family: 'Courier New', monospace;
            z-index: 9999;
            overflow: hidden;
            pointer-events: none;
        `;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        matrixOverlay.appendChild(canvas);

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff00';
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        document.body.appendChild(matrixOverlay);
        const interval = setInterval(draw, 35);

        setTimeout(() => {
            clearInterval(interval);
            matrixOverlay.remove();
            alert('🎉 Matrix mode activated! You found the easter egg!');
        }, 5000);
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
    easterEggs.init();
    
    console.log('%c🚀 Portfolio loaded successfully!', 'color: #10b981; font-size: 16px; font-weight: bold;');
});