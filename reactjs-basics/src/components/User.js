import React from 'react';
 export class User extends React.Component{
     render(){
         return(
            <div>
                <h3>The user Page</h3>
                <p>User ID: {this.props.match.params.id}</p>
            </div>
         );
     }
 }
