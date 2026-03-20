```javascript
// Smooth scrolling for navbar links

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const targetId = this.getAttribute("href");

const targetSection = document.querySelector(targetId);

targetSection.scrollIntoView({
behavior: "smooth"
});

});

});



// Highlight active section in navbar while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});



// Contact form submission (simple message)

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});
```
