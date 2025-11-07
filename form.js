<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .container {
      max-width: 400px;
      margin: auto;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      color: #333;
    }
    input, button {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
    button {
      background: #28a745;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background: #218838;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      background: #eee;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
    }
    .total {
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>💰 Expense Tracker</h2>
    <form id="expense-form">
      <input type="text" id="expense-name" placeholder="Expense name" required>
      <input type="number" id="expense-amount" placeholder="Amount (₹)" required>
      <button type="submit">Add Expense</button>
    </form>

    <ul id="expense-list"></ul>

    <div class="total">
      Total: ₹<span id="total">0</span>
    </div>
  </div>

  <script>
    const form = document.getElementById('expense-form');
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalEl = document.getElementById('total');

    let total = 0;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = nameInput.value;
      const amount = parseFloat(amountInput.value);

      if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details!");
        return;
      }

      // Add to list
      const li = document.createElement('li');
      li.textContent = `${name}: ₹${amount}`;
      expenseList.appendChild(li);

      // Update total
      total += amount;
      totalEl.textContent = total;

      // Clear inputs
      nameInput.value = "";
      amountInput.value = "";
    });
  </script>
</body>
</html>
