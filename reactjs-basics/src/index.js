import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./components/header";
import  { Home } from "./components/home"; 
import {Container, Row, Col} from 'reactstrap';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
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
    render () 
    {
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
                        <Home 
                            name={"Rafal"} 
                            initielaAge={34} 
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                        />
                    </div>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);