import React, { Component } from "react";
 
class Items extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    
    delete(key) {
        this.props.delete(key);
    }

    
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
    }
 

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    console.log(listItems)
    return (
        <div>
            
            
            {(() => {
                if (listItems.length == 0) {
                return (
                    <p className="completeTask">Well Down!</p>
                )
                } else {
                    return (
                        <ul className="outputList">
                        {listItems}
                    </ul>
                    )
                }
            })()}
        </div>

    );
  }
};
 
export default Items;