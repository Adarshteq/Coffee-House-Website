// Update Quantity Function
function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
  
    if (quantity < 1) quantity = 1; // Ensure quantity doesn't go below 1
    quantityElement.textContent = quantity;
  
    updateCartTotal();
  }
  
  // Remove Item Function
  function removeItem(button) {
    const cartItem = button.closest(".cart-item");
    cartItem.remove();
    updateCartTotal();
  }
  
  // Update Cart Total Function
  function updateCartTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let subtotal = 0;
  
    cartItems.forEach((item) => {
      const price = parseFloat(
        item.querySelector(".price").textContent.replace("$", "")
      );
      const quantity = parseInt(
        item.querySelector(".quantity-value").textContent
      );
      subtotal += price * quantity;
    });
  
    const shipping = 100; // Fixed shipping cost
    const total = subtotal + shipping;
  
    document.querySelector(".subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector(".total").textContent = `$total.toFixed(2)}`;
  }
  
  // Initial Cart Total Calculation
  updateCartTotal();