import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initielaAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age +3
        }); 
        console.log(this.age);
    }
    render() {
        return(
            <div>
                <p>Your name is {this.props.name}, your age is {this.state.age} </p>
                <p>Status: {this.state.status} </p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn-circle">
                    <a href="/">Make Me Older</a>
                </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary" >Greet</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initielaAge: PropTypes.number,
    greet: PropTypes.func,
};