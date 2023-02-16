function start() {
  let salary = prompt("Сколько вы зарабатываете $ в месяц?");
  if (isNaN(salary)) {
    alert("Введено не числовое значениие, введите, пожалуйста, число");
  } else {
    let expenses = prompt(
      "Какие у вас расходы? (перечислите через запятую)\nНапример: транспорт, еда, жилье"
    );
    let expensesArray = expenses.split(", ");
    let totalExpenses = 0;
    for (let i = 0; i < expensesArray.length; i++) {
      let expenseAmount = prompt(
        `Сколько вы тратите на "${expensesArray[i]}"?`
      );
      if (isNaN(expenseAmount)) {
        alert(
          "Введено не числовое значение, обновите страницу и начните сначала!!! \nВ противном случае будут выведены некорректные подсчеты "
        );
      } else {
        totalExpenses += Number(expenseAmount);
        let budget = Number(salary) - totalExpenses;
        if (budget < 0) {
          document.getElementById("status").innerHTML = `Ваш статус: БАНКРОТ`;
          document.getElementById(
            "your_salary"
          ).innerHTML = `Ваш доход: ${salary} $`;
          document.getElementById(
            "your_expenses"
          ).innerHTML = `Ваши расходы: ${expenses} `;

          document.getElementById(
            "sum_expenses"
          ).innerHTML = `Сумма расходов: ${totalExpenses} $`;
          document.getElementById(
            "your_budget"
          ).innerHTML = `Ваш бюджет: ${budget} $`;
          let myDiv = "\n<div>";
          document.getElementById(
            "your_list"
          ).innerHTML += `— ${expensesArray[i]}: ${expenseAmount} $ ${myDiv}`;
        } else if (budget < 3000) {
          document.getElementById("status").innerHTML = `Ваш статус: бедность`;
          document.getElementById(
            "your_salary"
          ).innerHTML = `Ваш доход: ${salary} $`;
          document.getElementById(
            "your_expenses"
          ).innerHTML = `Ваши расходы: ${expenses} `;
          document.getElementById(
            "sum_expenses"
          ).innerHTML = `Сумма расходов: ${totalExpenses} $`;
          document.getElementById(
            "your_budget"
          ).innerHTML = `Ваш бюджет: ${budget} $`;
          let myDiv = "\n<div>";
          document.getElementById(
            "your_list"
          ).innerHTML += `— ${expensesArray[i]}: ${expenseAmount} $ ${myDiv}`;
        } else if (budget >= 3000 && budget <= 6000) {
          document.getElementById(
            "status"
          ).innerHTML = `Ваш статус: мелкий буржуй`;
          document.getElementById(
            "your_salary"
          ).innerHTML = `Ваш доход: ${salary} $`;
          document.getElementById(
            "your_expenses"
          ).innerHTML = `Ваши расходы: ${expenses} `;
          document.getElementById(
            "sum_expenses"
          ).innerHTML = `Сумма расходов: ${totalExpenses} $`;
          document.getElementById(
            "your_budget"
          ).innerHTML = `Ваш бюджет: ${budget} $`;
          let myDiv = "\n<div>";
          document.getElementById(
            "your_list"
          ).innerHTML += `— ${expensesArray[i]}: ${expenseAmount} $ ${myDiv}`;
        } else {
          document.getElementById(
            "status"
          ).innerHTML = `Ваш статус: Вы еще тот буржуй`;
          document.getElementById(
            "your_salary"
          ).innerHTML = `Ваш доход: ${salary} $`;
          document.getElementById(
            "your_expenses"
          ).innerHTML = `Ваши расходы: ${expenses}`;
          document.getElementById(
            "sum_expenses"
          ).innerHTML = `Сумма расходов: ${totalExpenses} $`;
          document.getElementById(
            "your_budget"
          ).innerHTML = `Ваш бюджет: ${budget} $`;
          let myDiv = "\n<div>";
          document.getElementById(
            "your_list"
          ).innerHTML += `— ${expensesArray[i]}: ${expenseAmount} $ ${myDiv}`;
        }
      }
    }
  }
}
