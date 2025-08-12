// Blog functionality
class Blog {
    constructor() {
        this.posts = [];
        this.categories = [];
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadBlogData();
        this.setupEventListeners();
        this.renderPosts();
        this.hideLoading();
    }

    async loadBlogData() {
        try {
            const data = posts;
            this.posts = data.posts;
            this.categories = data.categories;
        } catch (error) {
            console.error('Error loading blog data:', error);
            this.showError();
        }
    }

    setupEventListeners() {
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-category');
                this.setActiveFilter(category);
                this.filterPosts(category);
            });
        });

        // Modal close
        const modalClose = document.getElementById('blog-modal-close');
        const modal = document.getElementById('blog-modal');
        const modalBackdrop = modal.querySelector('.blog-modal-backdrop');

        modalClose?.addEventListener('click', () => this.closeModal());
        modalBackdrop?.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    setActiveFilter(category) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });
        this.currentFilter = category;
    }

    filterPosts(category) {
        const blogGrid = document.getElementById('blog-grid');
        const posts = blogGrid.querySelectorAll('.blog-post-card');
        
        let visibleCount = 0;
        
        posts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            const shouldShow = category === 'all' || postCategory === category;
            
            if (shouldShow) {
                post.style.display = 'block';
                post.style.animation = `fadeInUp 0.3s ease forwards ${visibleCount * 0.1}s`;
                visibleCount++;
            } else {
                post.style.display = 'none';
            }
        });

        // Show empty state if no posts visible
        const emptyState = document.getElementById('blog-empty');
        if (visibleCount === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    }

    renderPosts() {
        const blogGrid = document.getElementById('blog-grid');
        if (!blogGrid) return;

        // Sort posts by date (newest first)
        const sortedPosts = [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedPosts.forEach((post, index) => {
            const postCard = this.createPostCard(post);
            postCard.style.animationDelay = `${index * 0.1}s`;
            blogGrid.appendChild(postCard);
        });
    }

    createPostCard(post) {
        const card = document.createElement('article');
        card.className = 'blog-post-card';
        card.setAttribute('data-category', this.getCategoryId(post.category));
        
        const formattedDate = this.formatDate(post.date);
        const category = this.categories.find(cat => cat.name === post.category);
        
        card.innerHTML = `
            <div class="post-header">
                <div class="post-category">
                    <span class="category-icon">${category?.icon || '📝'}</span>
                    <span class="category-name">${post.category}</span>
                </div>
                <div class="post-meta">
                    <span class="post-date">${formattedDate}</span>
                    <span class="post-read-time">${post.readTime}</span>
                </div>
            </div>
            <div class="post-content">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-description">${post.description}</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="post-actions">
                <button class="btn btn-primary post-read-btn" data-post-id="${post.id}">
                    <i class="fas fa-book-open"></i>
                    Read Post
                </button>
                ${post.featured ? '<span class="post-featured"><i class="fas fa-star"></i> Featured</span>' : ''}
            </div>
        `;

        // Add click handler for read button
        const readBtn = card.querySelector('.post-read-btn');
        readBtn.addEventListener('click', () => this.openPost(post));

        return card;
    }

    getCategoryId(categoryName) {
        const category = this.categories.find(cat => cat.name === categoryName);
        return category?.id || categoryName.toLowerCase().replace(/\s+/g, '-');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    async openPost(post) {
        const modal = document.getElementById('blog-modal');
        const modalBody = document.getElementById('blog-modal-body');
        
        // Show modal with loading state
        modal.classList.add('show');
        modalBody.innerHTML = `
            <div class="post-loading">
                <div class="loading-spinner"></div>
                <p>Loading post...</p>
            </div>
        `;

        try {
            // Fetch markdown content
            const response = await fetch(`/blog/${post.file}`);
            const markdown = await response.text();
            
            // Convert markdown to HTML
            const html = marked.parse(markdown);
            
            // Create post content
            modalBody.innerHTML = `
                <article class="blog-post">
                    <header class="post-header-full">
                        <div class="post-category">
                            <span class="category-icon">${this.getCategoryIcon(post.category)}</span>
                            <span class="category-name">${post.category}</span>
                        </div>
                        <h1 class="post-title-full">${post.title}</h1>
                        <div class="post-meta-full">
                            <span class="post-date">${this.formatDate(post.date)}</span>
                            <span class="post-read-time">${post.readTime}</span>
                        </div>
                        <div class="post-tags">
                            ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                        </div>
                    </header>
                    <div class="post-content-full">
                        ${html}
                    </div>
                </article>
            `;

            // Highlight code blocks if they exist
            this.highlightCodeBlocks(modalBody);
            
        } catch (error) {
            console.error('Error loading post:', error);
            modalBody.innerHTML = `
                <div class="post-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Error Loading Post</h3>
                    <p>Sorry, there was an error loading this post. Please try again later.</p>
                </div>
            `;
        }
    }

    getCategoryIcon(categoryName) {
        const category = this.categories.find(cat => cat.name === categoryName);
        return category?.icon || '📝';
    }

    highlightCodeBlocks(container) {
        const codeBlocks = container.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            block.classList.add('hljs');
        });
    }

    closeModal() {
        const modal = document.getElementById('blog-modal');
        modal.classList.remove('show');
    }

    hideLoading() {
        const loading = document.getElementById('blog-loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    showError() {
        const loading = document.getElementById('blog-loading');
        const blogGrid = document.getElementById('blog-grid');
        
        if (loading) {
            loading.innerHTML = `
                <div class="error-state">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Error Loading Blog</h3>
                    <p>There was an error loading the blog posts. Please refresh the page to try again.</p>
                </div>
            `;
        }
    }
}

// Animation keyframes for cards
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .blog-post-card {
        opacity: 0;
        animation: fadeInUp 0.3s ease forwards;
    }
`;
document.head.appendChild(style);

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Blog();
});