import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const children = React.cloneElement(this.props.children, {
        });
        return(
            <div>
                <Header />
                <div className="body-container">
                    <div className="child-display">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

function Header() {
    return(
        <div className="site-header">
            <h2>versus exercise</h2>
        </div>
    );
}
