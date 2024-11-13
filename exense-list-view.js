import { CATEGORY_MAP } from "../consts/category-map.js";

export class ExpenseListView {
  constructor() {
    this.expenseListElement = document.getElementById("expense-list");
    this.onClickButtonDelete = null;
  }

  render(expenses) {
    this.expenseListElement.innerHTML = "";

    expenses.forEach((expense) => {
      const expenseElement = document.createElement("li");
      
      const category = CATEGORY_MAP[expense.category];

      expenseElement.innerHTML = `
      <p>${expense.title}</p>
      <p>${expense.sum}</p>
      <p>${category}</p>
      <button data-id=${expense.id} id="delete_button">Удалить</button>`;

      this.expenseListElement.appendChild(expenseElement);
      const deleteButtonElement = expenseElement.querySelector(`#delete_button`);

      deleteButtonElement.addEventListener("click", () => {
        const exenseId = deleteButtonElement.getAttribute("data-id");
        if (this.onClickButtonDelete) this.onClickButtonDelete(exenseId);
      });
    });
  }
}