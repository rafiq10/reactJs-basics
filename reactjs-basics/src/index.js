import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./components/header";
import  { Home } from "./components/home"; 
import {Container, Row, Col} from 'reactstrap';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet(){
        alert("nice!");
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render () 
    {
        let homeCmp = "";

        if (this.state.homeMounted) {
            homeCmp = (
                <Home 
                name={"Rafal"} 
                initialAge={34} 
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLink={this.state.homeLink}/>
            );
        } 

        return (
            <Container>
                <Row>
                    <Col>
                        <Header homeLink={this.state.homeLink}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </Row>
                <Row>
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)}>(Un)mount home component</button>
                    </div>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);