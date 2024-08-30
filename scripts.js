// Ensure DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation
    var typed = new Typed("#typing-animation", {
        strings: ["NLP Enthusiast", "Machine Learning Practitioner", "AWS Practitioner", "Python Developer", "SQL Practitioner", "Power BI Learner", "Excel User"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animation on Scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Navbar Highlight on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${section.id}"]`).classList.remove('active');
            }
        });
    });
});
