// TypedJS Animation for changing text
var typed = new Typed(".text", {
    strings: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Natural Language Processing"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS library for scroll animations
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');

    mobileMenuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');

        // Change menu icon when clicked
        const icon = this.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    // Scroll to top button functionality
    const toTop = document.querySelector('.to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            toTop.classList.add('active');
        } else {
            toTop.classList.remove('active');
        }
    });

    // Handle navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('bx-x');
                mobileMenuBtn.querySelector('i').classList.add('bx-menu');
            }

            // Scroll to target
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    // ================================
    // GITHUB PROJECTS AUTO-GENERATE
    // ================================
    fetch('https://api.github.com/users/samyogbhatta/repos')
        .then(res => res.json())
        .then(repos => {
            const pinnedRepoNames = [
                'TourismManagementSystem',
                'PlantDisease',
                'Inventory-Management-System',
                'daml-individual-assignment-nepaleducationdata',
                'portfolio',
                'MLPC-IndividualAssignmet-Wildfire'
            ];

            // Map the pinned names to the actual repo objects returned by the API
            const topRepos = pinnedRepoNames
                .map(name => repos.find(r => r.name === name))
                .filter(r => r !== undefined); // remove undefined if repo not found

            const grid = document.getElementById('projects-grid');
            if (grid) {
                grid.innerHTML = ''; // Clear any existing content first
                topRepos.forEach((repo, i) => {
                    // Use homepage if available, otherwise default to github pages
                    const demoUrl = repo.homepage ? repo.homepage : `https://samyogbhatta.github.io/${repo.name}/`;
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    card.setAttribute('data-aos', 'fade-up');
                    card.setAttribute('data-aos-delay', 200 + i * 100);

                    card.innerHTML = `
                        <div class="project-header">
                            <i class="fas fa-folder-open"></i>
                            <div class="project-links">
                                <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="${demoUrl}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
                        <p>${repo.description || 'No description'}</p>
                        <div class="project-tech">
                            <span>${repo.language || 'Code'}</span>
                            <!-- 
                            <span>★ ${repo.stargazers_count}</span>
                            <span>Forks: ${repo.forks_count}</span>
                            -->
                        </div>
                    `;
                    grid.appendChild(card);
                });
            }
        })
        .catch(error => {
            const grid = document.getElementById('projects-grid');
            if (grid) {
                grid.innerHTML = '<p style="color:red;">Failed to load GitHub repositories.</p>';
            }
        });
});

// ------- Carousel Logic for Projects Section --------

// Carousel selectors
const grid = document.getElementById('projects-grid');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Scroll settings
const scrollAmount = 320; // Adjust per your card size
let scrollInterval = null;

// Manual scroll
if (leftBtn && rightBtn && grid) {
    leftBtn.addEventListener('click', () => {
        grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
        grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Auto-slide function
function startAutoSlide() {
    if (grid) {
        scrollInterval = setInterval(() => {
            if ((grid.scrollLeft + grid.clientWidth) >= grid.scrollWidth - 5) {
                // At end; go back to start
                grid.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds per slide, adjust as needed
    }
}
function stopAutoSlide() {
    if (scrollInterval) clearInterval(scrollInterval);
}
if (grid) {
    grid.addEventListener('mouseenter', stopAutoSlide);
    grid.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
}

// ================================
// CHATBOT WIDGET LOGIC
// ================================
const chatBtn = document.getElementById('chatBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChatBtn = document.getElementById('closeChatBtn');

if (chatBtn && chatWindow && closeChatBtn) {
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
}

