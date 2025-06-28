// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // // Custom cursor
    // const cursor = document.querySelector('.cursor');
    // const cursorFollower = document.querySelector('.cursor-follower');

    // document.addEventListener('mousemove', (e) => {
    //     cursor.style.left = e.clientX + 'px';
    //     cursor.style.top = e.clientY + 'px';
        
    //     gsap.to(cursorFollower, {
    //         left: e.clientX,
    //         top: e.clientY,
    //         duration: 0.1
    //     });
    // });

    // Hover effect on links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Typing effect
    const typedTextSpan = document.querySelector('.typed-text');
    const texts = ['Data Analyst', 'AI Tools Expert', 'B.Tech Graduate'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause at the end of typing
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 800); // Pause before starting next word
        } else {
            setTimeout(type, isDeleting ? 80 : 150); // Faster deletion, slower typing
        }
    }

    // Start typing effect after a short delay
    setTimeout(type, 1000);

    // Skills Dashboard Functionality
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillPanels = document.querySelectorAll('.skill-panel');

    skillCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories and panels
            skillCategories.forEach(cat => cat.classList.remove('active'));
            skillPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked category
            category.classList.add('active');

            // Show corresponding panel
            const targetPanel = document.getElementById(category.dataset.category);
            if (targetPanel) {
                targetPanel.classList.add('active');
                
                // Animate skill bars when panel becomes active
                const skillBars = targetPanel.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.dataset.progress;
                    gsap.to(bar, {
                        width: progress + '%',
                        duration: 1.5,
                        ease: 'power2.out'
                    });
                });
            }
        });
    });

    // Initialize skill bars for the first panel
    const firstPanel = document.querySelector('.skill-panel.active');
    if (firstPanel) {
        const skillBars = firstPanel.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.dataset.progress;
            gsap.to(bar, {
                width: progress + '%',
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5
            });
        });
    }

    // Scroll animations
    // Header
    gsap.from('.nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Hero section animations
    gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // Experience cards
    gsap.utils.toArray('.exp-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Skills dashboard
    gsap.from('.skills-categories', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1
    });

    // Project cards
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // AI Tools categories
    gsap.utils.toArray('.category').forEach(category => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroScroll = document.getElementById('hero-scroll');

    window.addEventListener('scroll', () => {
        // Hide hero scroll indicator as soon as user starts scrolling
        if (heroScroll && window.pageYOffset > 0) {
            heroScroll.style.display = 'none';
        }

        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });


    // Parallax effect on hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    });

    // Initialize ScrollTrigger for section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Experience card hover effects
    const expCards = document.querySelectorAll('.exp-card');
    expCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}); 