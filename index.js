const shop = document.querySelector(".shop__items");
const cart = document.querySelector(".cart");
const items = [
  {
    id: 1,
    name: "Sony Playstation",
    price: 3300,
    image:
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/6684441/large/a408dc9b8bd1fc5098d1bc7c9d6a07b9.webp",
  },
  {
    id: 2,
    name: "Xbox One",
    price: 3000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmsdv4AbNQp3Pn7EEZv83XEX1XeyI701ak-4HydxPpNd3GtPw6Dvt9VAkVGQqoQKKNEs&usqp=CAU",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    price: 1200,
    image:
      "https://www.lior-pc.co.il/wp-content/uploads/2021/08/Nintendo-Switch1.png",
  },
];
const inCart = [];
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.className = "shop__item";
  li.innerHTML = `<div class="shop__item-imgBox">
  <img
    src="${items[i].image}"
    class="shop__item-Img"
    alt=""
  />
</div>
<div class="shop__item-content">
  <h3 class="shop__item-title">${items[i].name}</h3>
  <span class="shop__item-price">$${items[i].price}</span>
  <div class="shop__item-info">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Porro, consectetur.
    </p>
  </div>
  <button onclick="addToCart(${i})" class="shop__item-btn" type="button">
    Add to Cart
  </button>
</div>`;
  shop.append(li);
}
function addToCart(id) {
  if (inCart.length > 0) {
    const check = inCart.findIndex((item) => item.id === items[id].id);
    if (check === -1) {
      inCart.push(items[id]);
    }
  } else {
    inCart.push(items[id]);
  }
  createCart();
}
function createCart() {
  cart.innerHTML = "";
  let total = 0;
  let totalPrice;
  const cartList = document.createElement("ul");
  cartList.classList = "cart__list";
  for (let i = 0; i < inCart.length; i++) {
    total += inCart[i].price;
    const li = document.createElement("li");
    li.className = "cart__item";
    li.innerHTML = `
                    <div class="cart__item-info">
                    <h3 class="cart__item-name">${inCart[i].name}</h3>
                    <span class="cart__item-price">$${inCart[i].price}</span>
                    </div>
                        <button
                          class="cart__item-remove"
                        onclick="remove(${i})"
>
                          &times;
                        </button>`;
    totalPrice = totalDiv(total);
    cartList.append(li);
    cart.append(cartList);
  }
  cart.prepend(totalPrice);
}
function remove(index) {
  inCart.splice(index, 1);
  createCart();
}
const totalDiv = (text) => {
  const h2 = document.createElement("h2");
  h2.className = "cart__total";
  h2.textContent = "Total Price : " + text + "$";
  return h2;
};

