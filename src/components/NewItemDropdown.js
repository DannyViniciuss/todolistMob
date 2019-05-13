import { Component } from 'react';
import React from "react";

class NewItemDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  onChange(event) {
    console.log('on change has been executed', event.target.value);
    this.setState({category: event.target.value});
  }

  render() {
    return (
        <div>
          <label>New item category</label>
          <select className="ui fluid dropdown" onChange={this.onChange.bind(this)} value={this.state.value}>
            <option value="">Choose Option</option>
            <option value="Cat1">Cat1</option>
            <option value="Cat2">Cat2</option>
            <option value="Cat3">Cat3</option>
            <option value="Cat4">Cat4</option>
          </select>
        </div>
    )
  }
}

export default NewItemDropdown;
