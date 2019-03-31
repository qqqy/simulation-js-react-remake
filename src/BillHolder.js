import React, {Component} from 'react'

class BillHolder extends Component {
    render() {
        return(
        <span class="expenses">
            <h2>Monthly Expenses</h2>
            <ul class="expensesList">
                <li>Groceries : $104</li>
                <li>Utilities : $134</li>
            </ul>
        </span>
            
            )
        }
}

export default BillHolder