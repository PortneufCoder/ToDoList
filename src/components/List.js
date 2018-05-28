import React from 'react';

class List extends React.Component {

    render() {

        //Need to create my array of to-dos, pass in props from App representing the array
        //They all need to have keys
        //create State
        //Assigning the array into a variable and using .map to iterate. How do I save this into state?

        return (
            <div className="text-center">
                <button
                    type="button" className="btn btn-success"
                    disabled={this.props.stopped} onClick={this.props.filteredList} >

                    Remove Completed Task(s)
                
    </button>


            </div>

        );

    }


}

export default List;