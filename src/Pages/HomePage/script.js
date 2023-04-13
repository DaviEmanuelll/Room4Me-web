function handleBedroomsQuantity() {
  const bedroomsQuantityInput = document.getElementById(
    "bedroomsQuantity-input"
  );
  bedroomsQuantityInput.addEventListener("input", () => {
    if (bedroomsQuantityInput.value < 1) {
      bedroomsQuantityInput.value = 1;
    }
  });
}
