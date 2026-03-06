let productsDiv = document.querySelector('#productsDiv');
let table = document.querySelector('table tbody');
let totalSpan = document.querySelector('#totalSpan');

let showProducts = () => {
  productsDiv.innerHTML = '';
  products.forEach((el, index) => {
    productsDiv.innerHTML += `
        <div class="col-4">
            <div class="card col-12 p-3 pb-0 bg-white shadow">
              <img height="200" src="${el.img}" class="col-12 card-img-top object-fit-contain" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">Price : $ ${el.price}</p>
                <button onclick="addToCart(${index})" class="col-12 btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        `;
  });
};

let calcTotal = () => {
  let total = 0;
  cart.forEach((el) => {
    total = total + el.price * el.qty;
  });
  totalSpan.textContent = total;
};

let showCart = () => {
  table.innerHTML = '';
  cart.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price} $</td>
            <td>
                <div class="d-flex align-items-center justify-content-center gap-3">
                    <button onclick="decrementQty(${index})" class="btn btn-danger">-</button>
                    <p class="m-0">${el.qty}</p>
                    <button onclick="incrementQty(${index})" class="btn btn-success">+</button>
                </div>
            </td>
            <td>${el.price * el.qty} $</td>
        </tr>
        `;
  });

  calcTotal();
};

let addToCart = (index) => {
  let product = products[index];

  let productIndexInCart = cart.findIndex((el, index) => {
    return el.name == product.name;
  });

  if (productIndexInCart == -1) {
    product.qty = 1;
    cart.push(product);
  } else {
    cart[productIndexInCart].qty++;
  }
  showCart();
};

let incrementQty = (index) => {
  cart[index].qty++;
  showCart();
};

let decrementQty = (index) => {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  showCart();
};

let filterProducts = (brand) => {
  if (brand == 'All') {
    products = orignalProducts;
  } else {
    let final = orignalProducts.filter((el) => {
      return el.brand == brand;
    });
    products = final;
  }
  showProducts();
};

showProducts();
showCart();
