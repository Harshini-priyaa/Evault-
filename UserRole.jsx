import React, { Component } from 'react';

class UserRole extends Component {
    render() {
        return (
            <div>
                {this.props.isJudge ? (
                    <p>Judge</p>
                ) : this.props.isLawyer ? (
                    <p>Lawyer</p>
                ) : this.props.isClient ? (
                    <p>Client</p>
                ) : (
                    <p>Not authenticated</p>
                )}
            </div>
        );
    }
}

export default UserRole;