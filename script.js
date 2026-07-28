// ============================
// TESX Demo Website
// script.js
// ============================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation when scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Demo button click
document.querySelectorAll(".btn,.signup,.plan a").forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();

        alert("Demo Mode: This is a fictional investment platform created for learning and UI demonstration.");
    });
});
