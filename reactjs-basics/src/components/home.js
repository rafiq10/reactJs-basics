import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';

export class Home extends React.Component {
    constructor(props){
        super();
        this.age = props.age;
    }
    onMakeOlder(){
        this.age +=3;
        console.log(this.age);
    }
    render() {
        return(
            <div>
                <p>Your name is {this.props.name}, your age is {this.age} </p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn-circle">
                    <a href="/">Make Me Older</a>
                </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};