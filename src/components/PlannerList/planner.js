import React, { Component } from "react";
import { Button } from 'reactstrap';
import Items from "./Items";
import '../../css/planner.css'
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{text:"Getting up to stand at least once every hour", key:0},
                    {text:"At least seven hours of sleep", key:1},
                    {text:"Three meals a day + healthy snack", key:2},
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
                    List out the daily steps to achieve your health goals!
                </h3>
                <p>
                **You will need to visit our Health Data page first to determine a recommended plan and edit this premade one!**
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