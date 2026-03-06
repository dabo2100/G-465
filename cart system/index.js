let productsDiv = document.querySelector('#productsDiv');
let table = document.querySelector('table tbody');
let totalSpan = document.querySelector('#totalSpan');
let orignalProducts = [
  { name: 'iPhone x', price: 450, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61PSKJ9k8HL._AC_SY879_.jpg' },
  { name: 'iPhone 12', price: 550, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61Xp1Bk4nIL._AC_SX679_.jpg' },
  { name: 'iPhone 14', price: 650, brand: 'Apple', img: 'https://i.ebayimg.com/images/g/pKkAAeSwMDlpHIzB/s-l1600.webp' },
  { name: 'iPhone 17 Pro Max', price: 1200, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61yXZ6sG6GL._AC_SX679_.jpg' },
  { name: 'Samsung S24', price: 800, brand: 'Samsung', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd80n8jwER_jb5HQnkbOuIROOkyEBOWRlCRA&s' },
  { name: 'Samsung S25', price: 900, brand: 'Samsung', img: 'https://images.samsung.com/nz/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png' },
  { name: 'Samsung S26', price: 1200, brand: 'Samsung', img: 'https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad,format=webp,quality=70/images/samsung_galaxys26ultra_cobaltviolet_1?1772615768?g=0' },
];

let products = orignalProducts;

let cart = [];

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
