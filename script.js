const services = [
  {
    title: "SEO",
    icon: "🔍",
    description:
      "Improve your website's visibility and rank higher on search engines."
  },
  {
    title: "Web Development",
    icon: "💻",
    description:
      "Fast, accessible, maintainable builds — from marketing sites to full product interfaces."
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description:
      "Grow your business with targeted digital marketing strategies."
  }
];

const container = document.getElementById("service-container");

services.forEach((service) => {
  container.innerHTML += `
    <div class="card">
        <div class="card-header">
            <span class="icon">${service.icon}</span>
            <h3>${service.title}</h3>
        </div>

        <p>${service.description}</p>

        <a href="#">Learn More →</a>
    </div>
  `;
});

const hamburger = document.getElementById("hamburger");

const nav = document.querySelector(".nav-link");
const toggle = document.getElementById("theme-toggle");
hamburger.addEventListener("click",()=>{

    nav.classList.toggle("active");

});




toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    document.body.classList.toggle("dark");


});