import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state= {
      taskList:[]
    }
    this.handleEnterPress = this.handleEnterPress.bind(this)
  }
  componentDidMount(){
    this.textInput.focus()
  }
  addTask(){
    //console.log(this.textInput.value);
    //extend taskList here with new task
    /*this.setState(prevState => ({
      taskList: this.taskList.push('dfvd1fv')
    }))*/
    //console.log(this.state.taskList)
    this.setState({
      taskList: this.state.taskList.concat(this.textInput.value)
    })
    this.forceUpdate();
    //console.log(this.state.taskList)
    this.textInput.value = ''
  }

  removeTask(index, event){
    //console.log(index)
    /*this.setState({
      taskList: this.state.taskList.splice(0,1)
    })*/
    var tempList = this.state.taskList.splice(index,1);
    this.setState({
      taskList: this.state.taskList
    })
    //console.log(this.state.taskList)
    this.forceUpdate();
  }
  handleEnterPress(e){
    if (e.key === 'Enter') {
      this.addTask();
    }
  }
  itemClicked(index,event){
    //alert(index)
    if (event.target.className == 'checked') {
      event.target.className = ''
    } else {
      event.target.className = 'checked'
    }
  }

  render(){
    return(
      <div id="mainDiv">
        <input id="newTaskInput" type="text" onKeyPress={this.handleEnterPress} ref={(input) => { this.textInput = input; }} />
        <input id="addBtn" type="button" value="Add" onClick={(ev)=> this.addTask()} />
        <ul>{this.state.taskList.map((item,index) => <li key={index} onClick={this.itemClicked.bind(this,index)}>{item.toString()}<span className="close" onClick={this.removeTask.bind(this, index)}>x</span></li>)}</ul>
      </div>
    )
  }
}

export default Todo;
