import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return(
            <div className = 'navbar'>
                <span className = 'logoHolder'>
                    <img src='' alt ='piggybank.jpg' className = 'logoImg'/>
                    <p className ='logoText'>budget builder</p>
                </span>
                <span className ='budgetTally'>Budget Total: $</span>
            </div>
            
        )
    }
}

export default Navbar