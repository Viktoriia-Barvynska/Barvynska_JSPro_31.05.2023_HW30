
class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SAUCE = { price: 15, calories: 0 };
  
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let totalPrice = this.size.price + this.stuffing.price;
      this.toppings.forEach((topping) => {
        totalPrice += topping.price;
      });
      return totalPrice;
    }
  
    calculateCalories() {
      let totalCalories = this.size.calories + this.stuffing.calories;
      this.toppings.forEach((topping) => {
        totalCalories += topping.calories;
      });
      return totalCalories;
    }
  }
  

const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const size = document.querySelector('input[name="size"]:checked').value;
  const stuffing = document.querySelector('input[name="stuffing"]:checked').value;
  
  const hamburgerSize = size === "small" ? Hamburger.SIZE_SMALL : Hamburger.SIZE_LARGE;
  const hamburgerStuffing = stuffing === "cheese" ? Hamburger.STUFFING_CHEESE :
                            stuffing === "salad" ? Hamburger.STUFFING_SALAD :
                            Hamburger.STUFFING_POTATO;
  
  const hamburger = new Hamburger(hamburgerSize, hamburgerStuffing);
  
  const toppings = document.querySelectorAll('input[name="topping"]:checked');
  toppings.forEach((topping) => {
    const toppingType = topping.value;
    const toppingObj = toppingType === "mayo" ? Hamburger.TOPPING_MAYO : Hamburger.TOPPING_SAUCE;
    hamburger.addTopping(toppingObj);
  });
  
  const calories = hamburger.calculateCalories();
  const price = hamburger.calculatePrice();
  
  result.textContent = `Calories: ${calories}, Price: ${price}`;
});