// create an account object

const accountObject = {
  firstName: "Jonatan",
  lastName: "Lundmark",
  expensesArray: [],
  incomeArray: [],

   // Function to add an expense to the expensesArray
  addExpense: function(description, amount) {
    this.expensesArray.push({description: description, amount: parseFloat (amount)});
  },

  // Function to add an income to the incomeArray
  addIncome: function(description, amount) {
    this.incomeArray.push({description: description, amount: parseFloat (amount)});
  },
    //list all Expenses in prompt
  listAllExpenses: function () {
    var allExpenses = "";
    this.expensesArray.forEach(function (expense) {
      allExpenses += expense.description + ":" + expense.amount + "kr\n";
    
    });
    prompt("Expenses:\n" + allExpenses);
  },
    //List all income in prompt
  listAllIncome: function () {
    var allIncomes = "";
    this.incomeArray.forEach(function (income) {
      allIncomes += income.description + ":" + income.amount + "kr\n";
    
    });
    prompt("Incomes:\n" + allIncomes);
  },

  getSummary: function() {
    let totalIncome = 0;
    let totalExpenses = 0;

    // Calculate the total income
    this.incomeArray.forEach(function(income) {
      totalIncome += income.amount;
    });

    // Calculate the total expenses
    this.expensesArray.forEach(function(expense) {
      totalExpenses += expense.amount;
    });

    // Calculate the account balance
    const accountBalance = totalIncome - totalExpenses;

    // account1 first and last name
    const account1 = (accountObject.firstName) + "." +  (accountObject.lastName)

    // Log the summary to the console
    prompt (
      ('Account Summary:\n') + 
      
      ('Account:') + " " + (account1) + '\n' +
      
      ('Total Income: ' + totalIncome + 'kr\n') +
      
      ('Total Expenses: ' + totalExpenses + 'kr\n') +
      
      ('Account Balance: ' + accountBalance + 'kr\n')
      )
  }
};
// Define the function menu
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

    choice = prompt(menu + "\n" + "Enter your choice (1-6):");


    switch (choice) {
      case '1':
        const expenseDescription = prompt('Enter expense description: ');
        const expenseAmount = prompt('Enter expense amount: ');
        accountObject.addExpense(expenseDescription, expenseAmount);
        break;
      case '2':
        const incomeDescription = prompt('Enter income description: ');
        const incomeAmount = prompt('Enter income amount: ');
        accountObject.addIncome(incomeDescription, incomeAmount);
        break;
      case '3':
        accountObject.listAllExpenses();
        break;

      case '4':
        accountObject.listAllIncome();
        break;

      case '5':
        accountObject.getSummary();
        break;
      case '6':
        alert('Goodbye!');
        break;
      default:
        alert('Invalid choice. Please enter a number from 1 to 6.')
    }
  } while (choice !== '6');
}

// Call the function menu
menu();


//console.log(accountObject.expensesArray);
//console.log(accountObject.incomeArray);

// the object should hold all of our logic

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// create a function called menu()

// the function menu() should only be responsible to show the different choices
// for the user.

// The menu() function should display the menu with different choices for the user
// depending on what the user selects from the menu you should call on the correct
// method or poperty from the account object. You can use a switch or if/else statement for your
// different menu choices. Please motivate you choice in a comment.

// CODE TO HELP YOU GET STARTED

// Here are some code snippets to help you get started. You need to place them at the correct
// place in your code but this is the logic for some parts of your assignment.

// if we want to take an input from the user in a quite nice way we can use the propmt() function
// the prompt will show a window to the user where we can add a message and it will also display
// an input field where the user can type something. In order to make this work a bit easier
// we need to wrap the propmt() in a function called parseFloat(). Why is that? You need to do some
// googling anf the put your answer in a comment in your code.
// the syntax you can use looks like this:
//const amount = parseFloat(prompt("How much was your expense?"));
// the answer that the user will put in the input box will get stored in the variable amount.

// HINT: you will need to use array methods in this assignment and there is one very basic one
// that is important. It is the method for adding something to an existing array, which one is that?

// In order to show all elements in an array we need to loop through it. In this assignment a
// forEach loop would be good to use. If you want to display the outcome of each element in the
// array on separate lines you can add:
//("\n");
// for example:
//alert("This is a message " + "\n" + "with a new line");
// to your ouput. This will make the nes output on a new line.

// to make the menu look nice we should not console.log any output. Instead we shoul use either alert()
// or propmt()
// we use alert() when we just want to display something to the user, for example a message:
//alert("This is a message in an alert box!");
// we use the prompt() when we want to ask the user to do something cause the prompt()
// will display any message that we want and also display an input field where the user
// can type an input. Like this:
//const age = parseFloat(propmpt("How old are you?"));
// whatever the user types in the input field will be stored in the variable age.
