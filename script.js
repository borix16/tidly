/* ============================================================
   TIDLY GYM – Interaction Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Island Sticky Header
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ---------- Mobile Menu (Island Dropdown) ----------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
        header.classList.toggle('menu-open');
        
        // Settings animation for hamburger icon lines
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navList.classList.contains('show')) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            header.classList.remove('menu-open');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // 3. Smooth Scrolling for Anchor Links (Enhanced offset for Dynamic Header)
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Account for fixed header height offset
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
