export class AddFormExpenseView {
  constructor() {
    this.addFromContainerElement = document.getElementById("add-form-container");
    this.onClickButtonAdd = null;
  }

  render() {
    this.addFromContainerElement.innerHTML = "";


      const addExpenseElement = document.createElement("li");
      
      addExpenseElement.innerHTML = `
      <h2>Добавить расходы</h2>
      <form id="expense-form">
          <label for="expense-name">Наименование расхода:</label>
          <input type="text" id="expense-name" placeholder="Например, еда" required />
          <label for="expense-amount">Стоимость:</label>
          <input type="number" id="expense-amount" placeholder="Amount" required />
          
          <select id="category-filter">
                <option value="Food">Еда</option>
                <option value="Transport">Транспорт</option>
                <option value="Entertainment">Развлечения</option>
                <option value="Other">Другое</option>
                required
                </select>

          <button type="submit">Добавить расходы</button>
      </form>`;

      this.addFromContainerElement.appendChild(addExpenseElement);
      const formElement = addExpenseElement.querySelector(`form`);

      formElement.addEventListener("submit", (event) => {
        event.preventDefault()

        const exenseTitle = formElement.querySelector("#expense-name").value;
      const exenseAuthor = formElement.querySelector("#expense-amount").value;
      const exenseCategory = formElement.querySelector("#category-filter").value;

      if (this.onClickButtonAdd)
        this.onClickButtonAdd(exenseTitle, exenseAuthor, exenseCategory);
        formElement.reset();
     });
  }
}