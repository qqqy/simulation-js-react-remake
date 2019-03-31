import React, {Component} from 'react'

class BillMaker extends Component {
    constructor(){
        super();

        this.state = {
            bills : [],
            billName: '',
            billAmount: 0
        }
    }

    handleNameChange(val){
        this.setState({billName: val})
    }

    handleAmountChange(val){
        this.setState({billAmount: val})
    }

    createNewBill(){
        this.setState({})
    }
    
    render() {
        return(
            <span className='addBill'>
                <h2>Add Bill</h2>
                <input type='text' className ='newBillName' placeholder='Name' onChange={(e) => this.handleNameChange(e.target.value)}/>
                <input type='text' className ='newBillAmount' placeholder='Amount' onChange={(e) => this.handleAmountChange(e.target.value)}/>
                <button onClick={() => {this.createNewBill(this.state.userInput)}}>Add</button>

            </span>
            
        )
    }
}

export default BillMaker