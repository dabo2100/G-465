// CRUD
// read
// create
// delete
let table = document.querySelector('#phoneData tbody');
let nameInput = document.querySelector('#nameInput');
let priceInput = document.querySelector('#priceInput');
let qtyInput = document.querySelector('#qtyInput');
let nameInputEdit = document.querySelector('#nameInputEdit');
let priceInputEdit = document.querySelector('#priceInputEdit');
let qtyInputEdit = document.querySelector('#qtyInputEdit');

let indexToEdit = false;

let phones = [
  { name: 'iPhone x', price: 400, qty: 3 },
  { name: 'iPhone 11', price: 550, qty: 5 },
  { name: 'iPhone 12', price: 600, qty: 7 },
];

let showPhones = () => {
  table.innerHTML = '';
  phones.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td>
                <button onclick="openPhoneToEdit(${index})" data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-warning">Edit Phone</button>
                <button onclick="removePhone(${index})" class="btn btn-danger">Remove Phone</button>
            </td>
        </tr>
    `;
  });
};

showPhones();

let addNewPhone = () => {
  let newPhone = {
    name: nameInput.value,
    price: +priceInput.value,
    qty: +qtyInput.value,
  };
  phones.push(newPhone);
  showPhones();
  nameInput.value = '';
  priceInput.value = '';
  qtyInput.value = '';
};

let removePhone = (indexToDelete) => {
  // splice (index , noOfCuts)
  let confirmRemove = confirm('Are you sure ?');
  if (confirmRemove == true) {
    phones.splice(indexToDelete, 1);
    showPhones();
  }
};

let openPhoneToEdit = (index) => {
  let phone = phones[index];
  nameInputEdit.value = phone.name;
  priceInputEdit.value = phone.price;
  qtyInputEdit.value = phone.qty;
  indexToEdit = index; // reAssign
};

let saveUpdates = () => {
  let newObj = {
    name: nameInputEdit.value,
    price: +priceInputEdit.value,
    qty: +qtyInputEdit.value,
  };

  phones[indexToEdit] = newObj;
  showPhones();
};
