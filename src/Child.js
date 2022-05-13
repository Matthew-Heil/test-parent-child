import React from "react";
// Child.js our Child class
class Child extends React.Component{

    onTrigger =(event) => {
        this.props.parentCallback(event.target.something.value);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit = {
                    this.onTrigger}>
                        <input type = "text"
                        name = "something" placeholder="Enter Name"/>
                        <br></br>
                        <input type ="submit" value ="Submit"/>

                    </form>
            </div>
        );
    }
}

export default Child