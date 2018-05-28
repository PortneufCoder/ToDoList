import React from 'react';
import todo from './todo.css'



class Todo extends React.Component {

    render() {



        return (
            <div>
                <li className="list-group-item" >

                    <input id="task" selected={this.props.done} onClick={this.props.selected} type="checkbox" />
                    <label
                        className={this.props.done ? "done" : null}
                        htmlFor="Todo"
                        type="text"

                    >

                        {this.props.text}

                    </label>

                </li>

            </div>


        );

    }

}

export default Todo;