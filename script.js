// Navigation menu toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

// Navbar scroll effect
const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// Reveal elements on scroll
const reveal = () => {
    const sectionTitles = document.querySelectorAll('.section-title');
    const aboutContent = document.querySelector('.about-content');
    const skillCategories = document.querySelectorAll('.skill-category');
    const contactContainer = document.querySelector('.contact-container');
    const projectCards = document.querySelectorAll('.project-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const certificateCards = document.querySelectorAll('.certificate-card');

    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    // Handle section titles
    sectionTitles.forEach(title => {
        const elementTop = title.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            title.classList.add('visible');
        }
    });

    // Handle about content
    if (aboutContent) {
        const aboutTop = aboutContent.getBoundingClientRect().top;
        if (aboutTop < windowHeight - elementVisible) {
            aboutContent.classList.add('visible');
        }
    }

    // Handle skill categories
    skillCategories.forEach((category, index) => {
        const elementTop = category.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                category.classList.add('visible');
            }, index * 200); // Staggered animation
        }
    });

    // Handle project cards
    projectCards.forEach((card, index) => {
        const elementTop = card.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    // Handle timeline items
    timelineItems.forEach((item, index) => {
        const elementTop = item.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        }
    });

    // Handle certificate cards
    certificateCards.forEach((card, index) => {
        const elementTop = card.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    // Handle contact container
    if (contactContainer) {
        const contactTop = contactContainer.getBoundingClientRect().top;
        if (contactTop < windowHeight - elementVisible) {
            contactContainer.classList.add('visible');
        }
    }
}

// Add event listeners
window.addEventListener('scroll', () => {
    handleScroll();
    reveal();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    reveal(); // Trigger reveal for elements initially in view

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    if (burger) burger.classList.remove('toggle');
                    document.querySelectorAll('.nav-links li').forEach(link => {
                        link.style.animation = '';
                    });
                }

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.style.opacity = '0.8';

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
                btn.style.backgroundColor = '#2ecc71';
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // Glitch effect on hover
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        glitchElement.addEventListener('mouseover', function () {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }

    // Initialize premium animations
    initTypingAnimation();
    initCursorGlow();
    initScrollProgress();
    initScrollToTop();
    initParticles();
    initCard3DTilt();
    initHackerText();
    initMagneticElements();
});

// Typing text animation
const initTypingAnimation = () => {
    const typingSpan = document.querySelector('.role-typing');
    const roles = [
        "hyperlocal home-service platforms.",
        "full-stack Django backends.",
        "cross-platform Flutter apps.",
        "secure network systems.",
        "automated AI agent workflows."
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 1500; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typingSpan) {
        setTimeout(typeEffect, 1000);
    }
}

// Spotlight Cursor Follower
const initCursorGlow = () => {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    const speed = 0.08; // Inertia factor (lower = smoother/slower)

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateGlow = () => {
        const dx = mouseX - glowX;
        const dy = mouseY - glowY;
        glowX += dx * speed;
        glowY += dy * speed;

        glow.style.transform = `translate(${glowX - 100}px, ${glowY - 100}px)`;
        requestAnimationFrame(animateGlow);
    };
    
    animateGlow();
}

// Scroll Progress Indicator
const initScrollProgress = () => {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
}

// Scroll To Top Button
const initScrollToTop = () => {
    const btn = document.getElementById('scrollToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Interactive Neural Network Particles background canvas
const initParticles = () => {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const maxParticles = 60;
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(108, 99, 255, 0.4)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    let mouseX = null;
    let mouseY = null;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    document.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });
    
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 99, 255, ${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            
            if (mouseX !== null && mouseY !== null) {
                const dx = particles[i].x - mouseX;
                const dy = particles[i].y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.strokeStyle = `rgba(255, 101, 132, ${0.2 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    };
    
    animate();
}

// 3D perspective tilt on hover
const initCard3DTilt = () => {
    const cards = document.querySelectorAll('.project-card, .certificate-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 10; // Degrees limit
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Hacker text scramble reveal
const initHackerText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}|:<>?";
    const titleElements = document.querySelectorAll('.section-title h2');
    
    titleElements.forEach(el => {
        const originalText = el.innerText;
        let isScrambling = false;
        
        el.addEventListener('mouseenter', () => {
            if (isScrambling) return;
            isScrambling = true;
            let iteration = 0;
            let interval = setInterval(() => {
                el.innerText = originalText
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");
                
                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    isScrambling = false;
                }
                iteration += 1 / 3;
            }, 30);
        });
    });
}

// Magnetic interactive attraction handles
const initMagneticElements = () => {
    const magneticItems = document.querySelectorAll('.social-icon, .submit-btn, .btn, .scroll-to-top');
    magneticItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            item.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0px, 0px)';
        });
    });
}


