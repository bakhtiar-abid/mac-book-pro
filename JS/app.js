/*-------------------------------------------
 Getting ID for defferent operations
 --------------------------------------------- */

const eightGbMemory = document.getElementById("eight-gb");

const sixteenGbMemory = document.getElementById("sixteen-gb");

const twoHundredFiftySixSSd = document.getElementById("ssd-twoFiveSix-gb");

const fiveHundredTwelveSSd = document.getElementById("ssd-fiveOneTwo-gb");

const oneTeraByteSsd = document.getElementById("ssd-one-tb");

const primeDelivery = document.getElementById("prime-delivery");

const fastDelivery = document.getElementById("fast-delivery");

const bestPrice = document.getElementById("best-price");

const extraMemory = document.getElementById("extra-memory");

const extraStorage = document.getElementById("extra-storage");

const deliveryCharge = document.getElementById("delivery-charge");

const totalPrice = document.getElementById("total-price");

const total = document.getElementById("total");

const promoCodeApply = document.getElementById("promo-apply");

const promoInput = document.getElementById("promo-input");
/*----------------------------------------
updating price according to the extra memory,
extra storage & delivery charge
-----------------------------------------  */
function updatePrice(type, price) {
   if (type.includes("8GB")) {
      extraMemory.innerText = price;
   } else if (type.includes("16GB")) {
      extraMemory.innerText = price;
   } else if (type.includes("256GB")) {
      extraStorage.innerText = price;
   } else if (type.includes("512GB")) {
      extraStorage.innerText = price;
   } else if (type.includes("1TB")) {
      extraStorage.innerText = price;
   } else if (type.includes("prime")) {
      deliveryCharge.innerText = price;
   } else if (type.includes("fast")) {
      deliveryCharge.innerText = price;
   }
}
/*--------------------
updating total price 
---------------------- */
function updateTotalPrice() {
   const bestPriceAmount = Number(bestPrice.innerText);
   const extraMemoryAmount = Number(extraMemory.innerText);
   const extraStorageAmount = Number(extraStorage.innerText);
   const deliveryAmount = Number(deliveryCharge.innerText);
   const totalAmount =
      bestPriceAmount + extraMemoryAmount + extraStorageAmount + deliveryAmount;
   totalPrice.innerText = totalAmount;
   total.innerText = totalAmount;
}

/*--------------------
applying promo code 
---------------------- */

function promoApply() {
   const promoInputValue = promoInput.value;
   if (promoInputValue == "stevekaku") {
      const totalPriceAmount = parseFloat(totalPrice.innerText);
      const promoTotal = totalPriceAmount - totalPriceAmount * 0.2;
      total.innerText = promoTotal;

      // promoCodeApply.classList.add("disabled");
   } else {
      alert("Your Promo Code is not valid, please try again");
   }
   promoInput.value = "";
}

/*--------------------
adding event handler
---------------------- */
eightGbMemory.addEventListener("click", function () {
   updatePrice("8GB", "0");
   updateTotalPrice();
});

sixteenGbMemory.addEventListener("click", function () {
   updatePrice("16GB", "180");
   updateTotalPrice();
});

twoHundredFiftySixSSd.addEventListener("click", function () {
   updatePrice("256GB", "0");
   updateTotalPrice();
});

fiveHundredTwelveSSd.addEventListener("click", function () {
   updatePrice("512GB", "100");
   updateTotalPrice();
});

oneTeraByteSsd.addEventListener("click", function () {
   updatePrice("1TB", "180");
   updateTotalPrice();
});

primeDelivery.addEventListener("click", function () {
   updatePrice("prime", "0");
   updateTotalPrice();
});

fastDelivery.addEventListener("click", function () {
   updatePrice("fast", "20");
   updateTotalPrice();
});
