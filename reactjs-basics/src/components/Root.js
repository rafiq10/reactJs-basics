import React from 'react';
import {Header} from './Header';
import {Container, Row} from 'reactstrap';

export class Root extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                        <br />
                    </div>
                </Row>
                <Row>
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </Row>
            </Container>
        );
    }
}