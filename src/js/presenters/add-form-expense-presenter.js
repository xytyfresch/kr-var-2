export class AddFormExpensePresenter {
  constructor(expenseListView) {
    this.expenseListView = expenseListView;
  }

  init() {
    this.expenseListView.render();
  }
}