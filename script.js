console.log("Inkoratee website loaded.");

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}




function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();
  let products = document.querySelectorAll(".product-card");

  // Split multiple words for better matching
  let keywords = input.split(" ");

  products.forEach(product => {
    let text = product.innerText.toLowerCase();
    let match = keywords.every(word => text.includes(word)); // All keywords must match

    if (match || input === "") {
      product.style.display = "block";
      product.style.opacity = "1";
    } else {
      product.style.opacity = "0";
      setTimeout(() => { product.style.display = "none"; }, 200); // smooth hide
    }
  });
}

// Real-time search (typing ke sath filter ho)
document.getElementById("searchInput").addEventListener("keyup", searchProducts);


// URL se product aur back page nikaalna
const params = new URLSearchParams(window.location.search);
const backPage = params.get("back") || "product.html"; // default product.html

document.querySelector(".back-btn").setAttribute("href", backPage);

