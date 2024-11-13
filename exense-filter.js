export class ExenseFilterView {
    constructor() {
      this.exenseFilterContainerElement = document.getElementById("expense-filter");
      this.onClickButtonFilter = null;
    }
  
    render() {
      this.exenseFilterContainerElement.innerHTML = "";
  
      const expenseFilter = document.createElement("div");
  
      expenseFilter.innerHTML = `
      <label for="category-filter">Фильтр по категориям:</label>
      <select id="category-filter">
          <option value="all">Все</option>
          <option value="Food">Еда</option>
          <option value="Transport">Транспорт</option>
          <option value="Entertainment">Развлечения</option>
          <option value="Other">Другое</option>
      </select>

      <label><input type="checkbox" id="max-amount-filter" /> Показывать расходы более 5000</label>
        `;
  
      this.exenseFilterContainerElement.appendChild(expenseFilter);
  
      const selectElement = expenseFilter.querySelector(`select`);
      const checkBoksElement = expenseFilter.querySelector(`[id="max-amount-filter"]`);

      selectElement.addEventListener("change", (event) => {
        event.preventDefault();
        const expenseCategory = selectElement.value;
        const minSum = checkBoksElement.checked ? 5000 : 0;
  
        if (this.onClickButtonFilter) this.onClickButtonFilter(expenseCategory, minSum);
      });
    }
  }