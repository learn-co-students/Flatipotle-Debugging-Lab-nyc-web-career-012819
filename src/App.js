import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {

  state= {
    orders: []
  }

  addOrder = (orderObj) => {
    console.log(orderObj);
    // console.log(this.state.orders);
    let newArr = [...this.state.orders, orderObj]
    this.setState({
      orders: newArr
    })
  }

  render = () => {
    console.log(this.state);
    // let arr = [1,2,3]
    const orders = this.state.orders.map( (order, idx) => (
      <Order key={idx} order={order} />
    ))
    // const orders = arr.map( (order, idx) => {
    //   <Order key={idx} {...order} />
    // })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
