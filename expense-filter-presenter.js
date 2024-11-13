export class ExpenseFilterPresenter {
  constructor(expenseFilterView) {
    this.expenseFilterView = expenseFilterView;
  }

  init() {
    this.expenseFilterView.render();
  }
}