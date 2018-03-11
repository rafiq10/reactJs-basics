import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLink,
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("constructor");

    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should Component Update", nextProps, nextState);
        // if (nextState.status ===1){
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age +3
        }); 
        console.log(this.age);
    }

    onChangeName(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
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
                <br/>
                <br/>

                <input type="text" value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}></input>
                <br/>
                <button onClick={this.onChangeName.bind(this)} className="btn btn-primary" >change header link</button>
                
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initielaAge: PropTypes.number,
    greet: PropTypes.func,
    initialLink: PropTypes.string,
};