import React, { Component } from 'react';

class List extends Component{
  constructor(props){
    super(props);
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    this.state= {
      listItems1 : listItems
    }
  }

  render() {
    return (
      <ul id="list1">{this.state.listItems1}</ul>
    );
  }

}

export default List;
