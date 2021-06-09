import React, { Component } from "react";
import { Button } from 'reactstrap';
import Items from "./Items";
import './planner.css'
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{text:"Reasonable calorie intake", key:0},
                    {text:"At least seven hours of sleep", key:1},
                    {text:"Reasonable time to eat and drink, no less than three meals", key:2},
                    {text:"30 minutes of moderate physical activity", key:3}]
        };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(event) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
        event.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
    }

    render() {
    return (
        <div className="plannerList">
            <div className="mainText">
                <h3>
                    The Planner Will Help You Manage Your Plan
                </h3>
                <p>
                You need to visit our Health Data page first
                </p>
            </div>
            <div className="formPart">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                    placeholder="Add Your Plan"></input>
                    <Button color="success">ADD</Button>{' '}
                </form>
            </div>
            <div className="outputCss">
                <Items entries={this.state.items}
                        delete={this.deleteItem}/>
            </div>
        </div>
    );
  }
}
 
export default TodoList;