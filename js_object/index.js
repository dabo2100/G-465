// Array of Objects
let phones = [
  { name: 'iPhone x', price: 500, qty: 10 },
  { name: 'iPhone 11', price: 550, qty: 7 },
  { name: 'iPhone 12', price: 600, qty: 5 },
];

function showPhones() {
  console.clear();
  console.table(phones);
}

function addNewPhone() {
  let newPhone = {
    name: prompt('Please Enter New Phone Name'),
    price: +prompt('Please Enter New Phone Price'),
    qty: +prompt('Please Enter New Phone Qty'),
  };
  phones.push(newPhone);
  showPhones();
}

function removePhone() {
  // splice(index , noOfCuts)
  let indexPhoneToRemove = +prompt('Please Enter Phone Index you want to delete');
  phones.splice(indexPhoneToRemove, 1);
  showPhones();
}

function updatePhoneName() {
  let indexPhoneToEdit = +prompt('Please Enter Phone Index you want to Update');
  let newValue = prompt('Please Enter new Name');
  phones[indexPhoneToEdit].name = newValue;
  showPhones();
}

function updatePhonePrice() {
  let indexPhoneToEdit = +prompt('Please Enter Phone Index you want to Update');
  let newValue = +prompt('Please Enter new Price');
  phones[indexPhoneToEdit].price = newValue;
  showPhones();
}

function updatePhoneQty() {
  let indexPhoneToEdit = +prompt('Please Enter Phone Index you want to Update');
  let newValue = +prompt('Please Enter new Qty');
  phones[indexPhoneToEdit].qty = newValue;
  showPhones();
}
