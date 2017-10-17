import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export class UrlDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        axios.get('/api/nameUrl/' + this.props.params.nameUrl).then((res) => {
            if (res.data.length == 0) {
                browserHistory.push('/');
            }
            var { name, name_url, properties } = res.data[0];
            this.setState({ name, name_url, properties });
            console.log(res.data[0]);
        });
    }
    render(){
        var properties = null;
        if (this.state.properties) {
            properties = (
                <div id="properties-container">
                    <p>Properties:</p>
                    <ul id="properties-list">
                        {Object.keys(this.state.properties).map(key => <li>{key}: {this.state.properties[key] == true ? 'Yes' : this.state.properties[key]} </li>)}
                    </ul>
                </div>
            )
        }
        return(
            <div>
                <h3 className="your-result">Your Result:</h3>
                <h4 className="product-name">{this.state.name}</h4>
                {properties}
            </div>
        );
    }
}
