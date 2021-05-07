import React, { Component } from 'react'

class ToDoList extends Component {
    constructor(props){
      super(props)
      this.state = {
       list: ["Go to the store", "Wash the dishes"]
     }
     this.addItem = this.addItem.bind(this);
     this.removeItem = this.removeItem.bind(this);
   }
   addItem(e) {
    e.preventDefault();

    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    if (newItem.value != "") {
      list.push(newItem.value);
      this.setState({
        list: list
      });
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      newItem.classList.add("is-danger");
    }
  }

  removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  }

    render() {
        return (
            <div className="content">
            <div className="container">
              <section className="section">
              <ul>
                {this.state.list.map(item => (
                <li key={item}>{item} &nbsp;
                  <button className="delete" onClick={() => this.removeItem(item)}>Complete</button>
                </li>))}
              </ul>
              </section>
              <hr />
              <section className="section">
                <form className="form" id="addItemForm">
                  <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="add to-do list item"
                  />
                  <button className="button is-info" onClick={this.addItem}>
                Add Item
                </button>
                </form>
              </section>
            </div>
          </div>
        )
    }
}

export default ToDoList;
