import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        return(
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, your age is {this.props.age} </p>
                <p>User object => Name: {this.props.user.name} </p>
                <div>
                    <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};