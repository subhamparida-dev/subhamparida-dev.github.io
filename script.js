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
    initSkillsSphere();
    initMatrixCursorTrail();
    initParallaxScroll();
    initMorphModal();
    initClickRipple();
    initConsoleLogs();
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

// 3D Tag Sphere Animation on Canvas
const initSkillsSphere = () => {
    const canvas = document.getElementById('skillsSphereCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const tags = ['Django', 'Python', 'Flutter', 'PostgreSQL', 'Firebase', 'Java', 'JavaScript', 'Git', 'MCP', 'LLMs', 'Dart', 'Meta Ads', 'Branding'];
    
    let radius = 95;
    let counts = tags.length;
    let particles = [];
    
    class TagParticle {
        constructor(text, theta, phi) {
            this.text = text;
            this.theta = theta;
            this.phi = phi;
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.pos3d();
        }
        pos3d() {
            this.x = radius * Math.sin(this.theta) * Math.cos(this.phi);
            this.y = radius * Math.sin(this.theta) * Math.sin(this.phi);
            this.z = radius * Math.cos(this.theta);
        }
        rotate(angleX, angleY) {
            let cosX = Math.cos(angleX);
            let sinX = Math.sin(angleX);
            let y1 = this.y * cosX - this.z * sinX;
            let z1 = this.z * cosX + this.y * sinX;
            
            let cosY = Math.cos(angleY);
            let sinY = Math.sin(angleY);
            let x2 = this.x * cosY - z1 * sinY;
            let z2 = z1 * cosY + this.x * sinY;
            
            this.x = x2;
            this.y = y1;
            this.z = z2;
        }
        draw() {
            let scale = 230 / (230 - this.z);
            let alpha = (this.z + radius) / (2 * radius) * 0.7 + 0.3;
            
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.scale(scale, scale);
            
            ctx.font = `bold 11px Outfit, sans-serif`;
            ctx.fillStyle = `rgba(90, 80, 220, ${alpha * 0.7})`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.text, this.x, this.y);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < counts; i++) {
        let theta = Math.acos(-1 + (2 * i + 1) / counts);
        let phi = Math.sqrt(counts * Math.PI) * theta;
        particles.push(new TagParticle(tags[i], theta, phi));
    }
    
    let angleX = 0.003;
    let angleY = 0.003;
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - canvas.width / 2;
        const mouseY = e.clientY - rect.top - canvas.height / 2;
        angleY = mouseX * 0.0001;
        angleX = -mouseY * 0.0001;
    });
    
    const run = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.sort((a, b) => b.z - a.z);
        particles.forEach(p => {
            p.rotate(angleX, angleY);
            p.draw();
        });
        requestAnimationFrame(run);
    }
    run();
}

// Matrix Code Rain Cursor Trail
const initMatrixCursorTrail = () => {
    const canvas = document.getElementById('matrixTrailCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const chars = "01";
    const trail = [];
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    document.addEventListener('mousemove', (e) => {
        trail.push({
            x: e.clientX,
            y: e.clientY,
            vy: Math.random() * 2 + 1,
            val: chars[Math.floor(Math.random() * chars.length)],
            opacity: 1.0,
            size: Math.random() * 10 + 12
        });
    });
    
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = trail.length - 1; i >= 0; i--) {
            const drop = trail[i];
            drop.y += drop.vy;
            drop.opacity -= 0.015;
            
            if (drop.opacity <= 0 || drop.y > height) {
                trail.splice(i, 1);
                continue;
            }
            
            ctx.font = `${drop.size}px monospace`;
            ctx.fillStyle = `rgba(0, 255, 65, ${drop.opacity})`;
            ctx.fillText(drop.val, drop.x, drop.y);
        }
        
        requestAnimationFrame(animate);
    }
    animate();
}

// Parallax background blobs scroll
const initParallaxScroll = () => {
    const blobs = document.querySelectorAll('.blob-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        blobs.forEach((blob, idx) => {
            const speed = (idx + 1) * 0.15;
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Project Details zoom morph overlay modal
const initMorphModal = () => {
    const modal = document.getElementById('projectModal');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const closeModal = modal ? modal.querySelector('.close-modal') : null;
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!modal || !modalBody || !closeModal) return;
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const description = card.querySelector('p').innerText;
            const tech = card.querySelector('.project-tech') ? card.querySelector('.project-tech').innerHTML : '';
            
            modalBody.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="project-tech" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1.5rem;">${tech}</div>
            `;
            
            modal.classList.add('active');
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Click shockwave ripple spawner
const initClickRipple = () => {
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        ripple.offsetWidth; // Force reflow
        
        ripple.style.transform = 'translate(-50%, -50%) scale(6)';
        ripple.style.opacity = '0';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Terminal feed logger loop
const initConsoleLogs = () => {
    const consoleText = document.querySelector('.console-text');
    if (!consoleText) return;
    const logs = [
        "SYSTEM: SECURE",
        "FIREWALL: STANDBY",
        "AI_AGENT: ONLINE",
        "REST_APIS: DISPATCHED",
        "PORTFOLIO: HOSTED",
        "VISITOR_SECURE: TRUE",
        "LOCAL_SERVE: ACTIVE"
    ];
    let i = 0;
    setInterval(() => {
        consoleText.textContent = logs[i];
        i = (i + 1) % logs.length;
    }, 4000);
}




