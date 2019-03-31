import React, { Component } from 'react';
import Navbar from './Navbar'
import BillHolder from './BillHolder'
import BillMaker from './BillMaker'

class App extends Component {
  render() {
    return(
    <div className='main'>
        <Navbar />
        <BillHolder />
        <BillMaker />
    </div>
    )
  }
}

export default App;
