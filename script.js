console.log("Inkoratee website loaded.");

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}


// Payment Modal Logic
const modal = document.getElementById("paymentModal");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");
const codProduct = document.getElementById("codProduct");

function openModal(name, price) {
  modal.style.display = "block";
  productTitle.textContent = name;
  productPrice.textContent = price;
  codProduct.value = name + " - " + price;
  document.getElementById("qrSection").classList.add("hidden");
  document.getElementById("codSection").classList.add("hidden");
}

function closeModal() {
  modal.style.display = "none";
}

function showQR() {
  document.getElementById("qrSection").classList.remove("hidden");
  document.getElementById("codSection").classList.add("hidden");
}

function showCOD() {
  document.getElementById("codSection").classList.remove("hidden");
  document.getElementById("qrSection").classList.add("hidden");
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function openModal(name, price) {
  modal.style.display = "block";
  productTitle.textContent = name;
  productPrice.textContent = price;

  // hidden inputs set
  document.getElementById("codProduct").value = name + " - " + price;
  document.getElementById("qrProduct").value = name + " - " + price;

  document.getElementById("qrSection").classList.add("hidden");
  document.getElementById("codSection").classList.add("hidden");
}


function searchProduct() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementsByClassName("product-item");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (name.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}


// Query string se product & price nikalna
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");
const price = urlParams.get("price");

// Product info ko show karna
if (document.getElementById("productInfo")) {
  document.getElementById("productInfo").innerText = `🛍️ ${product} - ${price}`;
}

// Hidden input me product set karna
if (document.getElementById("qrProduct")) {
  document.getElementById("qrProduct").value = `${product} - ${price}`;
}
if (document.getElementById("codProduct")) {
  document.getElementById("codProduct").value = `${product} - ${price}`;
}

