import React, { Component } from 'react';
import logo from './logo.svg';
import './components/App.css';
import Todo from './components/Todo';
import Input from './components/Input';
import List from './components/List';

// Couldn't figure out how to reset the input field once a task has been submitted.



class App extends Component {
  state = {
    todos: [
      {

        done: false
      }
    ]

  }


  handleSubmit = (event) => {
    event.preventDefault(); //preventDefault has to be called explicitly, prevents the automatic refresh action when the button is clicked.

    let updatedTask = {

      text: event.target.Input.value,
      done: false
    }

    if (updatedTask.text === " ") {
      alert('We need an actual to-do(real like)')
    } else {
      this.state.todos.push(updatedTask);

    }

    this.setState({
      text: " ",
      todos: [...this.state.todos]

    });

  }


  itemSelected = (index) => {
    let currentTask = this.state.todos[index];
    currentTask.done = !currentTask.done
    this.setState({
      todos: this.state.todos

    })

  }

  clearComplete = () => {
    let filteredList = this.state.todos.filter((item) => {
      return !item.done

    })

    this.setState({
      todos: filteredList
    })


  }


  stopButton = () => {
    return !this.state.todos.some((item) => { // Use.some to check if any of the todos has been completed.
      return item.done
    }
    )
  }



  render() {
    let listItems = this.state.todos.map((item, index) => {
      return <Todo
        selected={() => this.itemSelected(index)}
        text={item.text}
        done={item.done}
        key={index} // this attr is needed by React when creating an array and to keep track of changes.

      />
    });


    return (

      <div class="container-fluid" >

        <h1 class="text-center" id="heading">

          Victor's To-dos <em>(not really)</em></h1>

        <List
          filteredList={() => this.clearComplete()}
          stopped={this.stopButton()}



        />


        <Input
          submitText={this.handleSubmit}


        />

        <div>
          {listItems}


        </div>



      </div>


    );
  }
}

export default App;
