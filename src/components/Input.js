import React from 'react';

class Input extends React.Component {



    render() {


        return (



            <form onSubmit={this.props.submitText}>

                <div
                    className="input-group">
                   
                        <button
                            className="btn btn-primary" aria-pressed="false" type="Submit" >Hit me up!</button>
                  
                    <input type="text"
                        className="form-control" id="myForm" name='Input' placeholder="Organization is key!" />

                </div>

            </form>


        );


    }

}

export default Input;