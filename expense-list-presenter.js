import { EXENSES_DATA } from "../mocks/expenses-data.js";
import { ExpenseModel } from "../models/exense-model.js";

export class ExenseListPresenter {
  constructor(exenseListView, exenseAddFormView, exenseFilterView) {
    this.exenseListView = exenseListView;
    this.exenseAddFormView = exenseAddFormView;
    this.exenseFilterView = exenseFilterView;

    this.exenses = EXENSES_DATA.map((exense) => new ExpenseModel(exense));
    this.exenseId = this.exenses.length;

    this.exenseListView.onClickButtonDelete = this.deleteExense.bind(this);
    this.exenseAddFormView.onClickButtonAdd = this.addExpense.bind(this);
    this.exenseFilterView.onClickButtonFilter = this.filterExpenses.bind(this);
    this.init();
  }

  init() {
    this.exenseListView.render(this.exenses);
  }

  deleteExense(id) {
    this.exenses = this.exenses.filter((exense) => exense.id !== id);
    this.init();
  }

  editBook(book) {
    const bookEditFormView = new BookEditFormView();
    const bookEditFormPresenter = new BookEditFormPresenter(bookEditFormView);
    bookEditFormPresenter.init(book);
    bookEditFormView.onClickButtonSave = this.saveEditBook.bind(this);
  }

  saveEditBook(newBook) {
    this.books = this.books.map((book) => {
      if (book.id === newBook.id) {
        book.title = newBook.title;
        book.author = newBook.author;
        book.genre = newBook.genre;
      }
      return book;
    });
    this.init();
  }

  addExpense(title, sum, category) {
    const newExenseId = ++this.exenseId;
    this.exenses = this.exenses.concat(
      new ExpenseModel({ id: newExenseId.toString(), title, sum, category })
    );
    this.init();
    const filterElement =
      this.exenseFilterView.exenseFilterContainerElement.querySelector("select");
      const checkBoxElement =  this.exenseFilterView.exenseFilterContainerElement.querySelector(`[id="max-amount-filter"]`);
    filterElement.value = "all";
    checkBoxElement.checked = false;
  }

  filterExpenses(category, minSum) {
    let filteredExenses = this.exenses.filter((expense) => expense.sum > minSum);
    filteredExenses =
    category === "all"
        ? filteredExenses
        : filteredExenses.filter((expense) => expense.category === category);
        this.exenseListView.render(filteredExenses);
  }
}