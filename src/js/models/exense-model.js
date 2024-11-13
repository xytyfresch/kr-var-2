export class ExpenseModel{
    constructor(expense){
        this.id = expense.id;
        this.title = expense.title
        this.sum = expense.sum
        this.category = expense.category
    }
}