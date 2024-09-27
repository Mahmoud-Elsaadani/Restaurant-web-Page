const btn = document.querySelector("header ul li button");
const links = document.querySelectorAll("a");  // Changed 'a' to 'links' for clarity
const logo =document.querySelector(".logo a")
console.log(logo)
btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    
    logo.classList.toggle("logoo")

    links.forEach(link => {
        link.classList.toggle("a-w");  // Toggle the 'a-w' class for each link
    });
});
