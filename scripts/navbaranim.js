document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');
    
    function handleScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        const sections = document.querySelectorAll('section');
        
        sections.forEach(function(section) {
            const sectionTop = getSectionTop(section);
            const sectionHeight = getSectionHeight(section);
            const sectionBottom = sectionTop + sectionHeight;
            
            if (isInView(scrollTop, windowHeight, sectionTop, sectionBottom)) {
                const currentId = section.id;
                updateActiveNavLink(currentId);
            }
        });
    }

    function getSectionTop(section) {
        return section.getBoundingClientRect().top + window.scrollY;
    }

    function getSectionHeight(section) {
        return section.offsetHeight;
    }

    function isInView(scrollTop, windowHeight, sectionTop, sectionBottom) {
        return scrollTop >= sectionTop - (windowHeight * 0.2) && scrollTop < sectionBottom - (windowHeight * 0.2);
    }

    function updateActiveNavLink(currentId) {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        navLinks.forEach(function(link) {
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});
