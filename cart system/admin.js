let table = document.querySelector('table tbody');
let phoneNameInput = document.querySelector('#phoneNameInput');
let phonePriceInput = document.querySelector('#phonePriceInput');
let phoneImgInput = document.querySelector('#phoneImgInput');
let phoneBrandSelect = document.querySelector('#phoneBrandSelect');

let showProducts = () => {
  table.innerHTML = '';
  orignalProducts.forEach((el, index) => {
    table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price}</td>
                <td>
                    <img height="50" width="50" class="rounded-circle object-fit-cover" src="${el.img}"/>
                </td>
                <td>
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Remove</button>
                </td>
            </tr>
        `;
  });
};

showProducts();

let addNewProduct = () => {
  let newPhone = {
    name: phoneNameInput.value,
    price: phonePriceInput.value,
    brand: phoneBrandSelect.value,
    img: phoneImgInput.value,
  };
  orignalProducts.push(newPhone);
  let proJSon = JSON.stringify(orignalProducts);
  localStorage.setItem('Products', proJSon);
  showProducts();
};
