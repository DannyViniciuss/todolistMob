import { Component } from 'react';
import React from "react";

class FilterItemsDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        };
    }

    onChangeFilter(event) {
        const catValue = event.target.value;
        const filteredList = this.state.list.filter(item => item.category === catValue);
        this.setState({items: filteredList});
        console.log('filtered items', this.items);
    }

    render() {
        return (
            <div className="ui dropdown">
                <div>
                    <label>Filter items</label>
                    <select className="ui fluid dropdown" onChange={this.onChangeFilter.bind(this)}>
                        <option value="">Choose Option</option>
                        <option value="Cat1">Cat1</option>
                        <option value="Cat2">Cat2</option>
                        <option value="Cat3">Cat3</option>
                        <option value="Cat4">Cat4</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FilterItemsDropdown;
