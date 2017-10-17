import React from 'react';
import axios from 'axios';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.searchNow = this.searchNow.bind(this);
    }
    handleChange(e){
        this.setState({
            search: e.target.value
        });
    }
    searchNow() {
        this.setState({
            search: ''
        });
        if (this.state.search && this.state.search.length > 0){
            axios.get('/api/name/' + this.state.search)
                .then(res => {
                    if (res.data.length > 0) {
                        console.log(res.data);
                        var { name, name_url, properties } = res.data[0];
                        this.setState({ name, name_url, properties });
                    }
                });
        }
    }
    render(){
        var result = null;
        if (this.state.name && this.state.name_url && this.state.properties) {
            result = (
                <div>
                    <h3 className="your-result">Your Result:</h3>
                    <h4 className="product-name">{this.state.name}</h4>
                    <div id="properties-container">
                        <p>Properties:</p>
                        <ul id="properties-list">
                            {Object.keys(this.state.properties).map(key => <li>{key}: {this.state.properties[key] == true ? 'Yes' : this.state.properties[key]} </li>)}
                        </ul>
                    </div>
                </div>
            );
        }
        return(
            <div>
                <div className="search-input">
                    <input name="product-search" placeholder="Enter Product Name" onChange={this.handleChange} value={this.state.search} /><button id="search-button"  onClick={this.searchNow}>Search</button>
                </div>
                {result}
            </div>
        );
    }
}
