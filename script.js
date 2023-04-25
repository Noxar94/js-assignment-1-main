// Ett object till account

const accountObject = {
  firstName: "Jonatan",
  lastName: "Lundmark",
  expensesArray: [],
  incomeArray: [],

  // En function för att lägga till description och amount i utgiftArrayn och eftersom amount är nummer och ska kunna räknas använder jag mig utav en parsefloat.
  addExpense: function (description, amount) {
    this.expensesArray.push({
      description: description,
      amount: parseFloat(amount),
    });
  }, // push betyder skicka till array.

  // Samma sak här fast för income.
  addIncome: function (description, amount) {
    this.incomeArray.push({
      description: description,
      amount: parseFloat(amount),
    });
  },
  // I denna funktionen loopar den igenom utgift arrayn och sen skriver ut alla descriptions och alla amounts sparat i arrayn. Och den skriver ut detta i Prompt.
  listAllExpenses: function () {
    var allExpenses = "";
    // forEach loopar genom arrayn efter sparade förklaringar och utgifter
    this.expensesArray.forEach(function (expense) {
      // plusar ihop utgifterna
      allExpenses += expense.description + ":" + expense.amount + "kr\n";
    });
    prompt("Expenses:\n" + allExpenses);
  },
  // Samma sak här som i funktionen över fast för incomes.
  listAllIncome: function () {
    var allIncomes = "";
    // forEach loopar genom arrayn efter sparade förklaringar och inkomster
    this.incomeArray.forEach(function (income) {
      // plusar ihop inkomsterna
      allIncomes += income.description + ":" + income.amount + "kr\n";
    });
    prompt("Incomes:\n" + allIncomes);
  },

  // get summary är en funktion för att få fram en summary för hela accountet. i detta fallet hela objektet.

  getSummary: function () {
    // totala inkomster och utgifter default på 0
    let totalIncome = 0;
    let totalExpenses = 0;

    // räkna ihop den totala inkomsten
    this.incomeArray.forEach(function (income) {
      totalIncome += income.amount;
    });

    // Räkna ihop den totala utgiften
    this.expensesArray.forEach(function (expense) {
      totalExpenses += expense.amount;
    });

    // räkna ihop vad man har kvar efter utgifterna.
    const accountBalance = totalIncome - totalExpenses;

    // account1 first and last name
    const accountName = accountObject.firstName + "." + accountObject.lastName;

    // Skriv ut hela sammanfattningen av accountet i prompt
    //namn, totala inkomster, totala utgifter och även balansen som finns kvar efter utgifter.
    prompt(
      "Account Summary:\n" +
        "Account:" +
        " " +
        accountName +
        "\n" +
        ("Total Income: " + totalIncome + "kr\n") +
        ("Total Expenses: " + totalExpenses + "kr\n") +
        ("Account Balance: " + accountBalance + "kr\n")
    );
  },
};

// meny där du får 6 olika val att välja på.
function menu() {
  let choice;

  const menu = `
  Please select an option:
  1. Add Expense
  2. Add Income
  3. List All Expenses
  4. List All Income
  5. Get Account Summary
  6. Exit`;

  do {
    // skriver ut meny och en string i prompt.
    choice = prompt(menu + "\n" + "Enter your choice (1-6):");

    // här använder jag mig utav en switch statement med 6 olika cases beroende på vad man väljer i menyn. Detta förklaras även i menyn vad alla valen gör.
    switch (choice) {
      case "1":
        const expenseDescription = prompt("Enter expense description: ");
        const expenseAmount = prompt("Enter expense amount: ");
        accountObject.addExpense(expenseDescription, expenseAmount);
        break;
      case "2":
        const incomeDescription = prompt("Enter income description: ");
        const incomeAmount = prompt("Enter income amount: ");
        accountObject.addIncome(incomeDescription, incomeAmount);
        break;
      case "3":
        accountObject.listAllExpenses();
        break;

      case "4":
        accountObject.listAllIncome();
        break;

      case "5":
        accountObject.getSummary();
        break;
      case "6":
        prompt("Goodbye!");
        break;
      default:
        alert("Invalid choice. Please enter a number from 1 to 6."); // detta är en alert som kommer upp om du tryckt fel val.
    }
  } while (choice !== "6"); // kan bara trycka val nummer 6 och neråt annars kommer det en alert som säger "Invalid choice. Please enter a number from 1 to 6."
}

// Call function menu
menu();
