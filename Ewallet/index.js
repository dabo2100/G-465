let userInfo = {
  name: 'Ahmed Hassan',
  balance: 20000,
  password: '123456',
  transactions: [{ beforeBalance: 0, type: 'Deposit', amount: 20000, afterBalance: 20000, date: '-----' }],
};

let userNameSpan = document.querySelector('#userNameSpan');
let passwordInput = document.querySelector('#passwordInput');
let balanceSpan = document.querySelector('#balanceSpan');
let amountInput = document.querySelector('#amountInput');
let table = document.querySelector('table tbody');

userNameSpan.textContent = userInfo.name;

let showBalance = () => {
  let userPassword = passwordInput.value;
  if (userPassword == userInfo.password) {
    balanceSpan.textContent = userInfo.balance;
    showTransactions();
  } else {
    alert('Wrong Password');
    balanceSpan.textContent = '******';
  }
  passwordInput.value = '';
};

let showTransactions = () => {
  table.innerHTML = '';
  userInfo.transactions.forEach((el, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${el.beforeBalance}</td>
        <td>
          <p class="${el.type == 'Withdraw' ? 'text-danger' : 'text-success'}">${el.type}</p>
        </td>
        <td>${el.type == 'Withdraw' ? '-' : '+'} ${el.amount}</td>
        <td>${el.afterBalance}</td>
        <td>
          ${index == userInfo.transactions.length - 1 ? '<button class="btn btn-warning" onclick="">Cancel</button>' : '-----'}
        </td>
      </tr>
    `;
  });
};

let depositAmount = () => {
  let amount = +amountInput.value;
  let newBalance = userInfo.balance + amount;

  let newTransaction = {
    beforeBalance: userInfo.balance,
    type: 'Deposit',
    amount: amount,
    afterBalance: newBalance,
    date: '********',
  };
  userInfo.transactions.push(newTransaction);
  userInfo.balance = newBalance;
  balanceSpan.textContent = userInfo.balance;
  amountInput.value = '';
  showTransactions();
};

let widthdrawAmount = () => {
  let amount = +amountInput.value;
  if (amount <= userInfo.balance) {
    let newBalance = userInfo.balance - amount;
    let newTransaction = {
      beforeBalance: userInfo.balance,
      type: 'Withdraw',
      amount: amount,
      afterBalance: newBalance,
      date: '--------',
    };
    userInfo.transactions.push(newTransaction);
    showTransactions();
    userInfo.balance = newBalance;
    balanceSpan.textContent = userInfo.balance;
    amountInput.value = '';
  } else {
    alert('انت كحيان يلا انت بتسحب قيمة اكبر من رصديك يافقيييير');
  }
};
