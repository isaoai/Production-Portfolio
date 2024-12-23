document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    function handleScrollReveal() {
        let windowHeight = window.innerHeight;
        
        sections.forEach((section) => {
            let sectionRectTop = section.getBoundingClientRect().top;
            
            if (sectionRectTop < windowHeight) {
                section.classList.add("actives");
            }
            
            const reveals = section.querySelectorAll(".reveal");
            
            reveals.forEach((reveal, index) => {
                if (section.classList.contains("actives")) {
                    const delay = 500;
                    setTimeout(() => {
                        reveal.classList.add("active");
                    }, index * delay);
                }
            });
        });
    }

    window.addEventListener("scroll", handleScrollReveal);
    window.addEventListener("load", handleScrollReveal);
    handleScrollReveal();
    
    window.addEventListener("resize", () => {
        handleScrollReveal();
    });

    //let lastKnownScrollPosition = 0;
    let ticking = false;

    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScrollReveal();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", handleScroll);
    
    // console.log("Page loaded, scroll events are being handled...");
    // console.log("Initial scroll reveal check complete.");
});
