// Add to Cart Functionality
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const product = this.closest(".product");
        const productName = product.querySelector("h2").textContent;
        const productPrice = product.querySelector(".price").textContent;
  
        alert(`Added to Cart: ${productName} - ${productPrice}`);
      });
    });
  });