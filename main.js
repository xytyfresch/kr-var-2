import { AddFormExpensePresenter } from "./presenters/add-form-expense-presenter.js";
import { ExpenseFilterPresenter } from "./presenters/expense-filter-presenter.js";
import { ExenseListPresenter } from "./presenters/expense-list-presenter.js";
import { AddFormExpenseView } from "./views/add-form-exense-view.js";
import { ExenseFilterView } from "./views/exense-filter.js";
import { ExpenseListView } from "./views/exense-list-view.js";

const expenseListView = new ExpenseListView()
const addFormExpenseView = new AddFormExpenseView()
const exenseFilterView = new ExenseFilterView()


const addFormExpensePresenter = new AddFormExpensePresenter(addFormExpenseView)
addFormExpensePresenter.init()

const exenseFilterPresenter = new ExpenseFilterPresenter(exenseFilterView)
exenseFilterPresenter.init()

const expenseListPresenter = new ExenseListPresenter(expenseListView, addFormExpenseView, exenseFilterView)
expenseListPresenter.init();
