import { Component } from 'react';

class DropdownList extends Component {
  constructor(props) {
    super(props);
  }

  onDropdown(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui dropdown">
        <div>
          <select className="ui dropdown" onChange={this.onDropdown}>
            <option value="1">Category</option>
            <option value="1">Personal</option>
            <option value="0">Work</option>
            <option value="0">Eating</option>
            <option value="0">Shopping</option>
          </select>
        </div>
      </div>
    )
  }
}

export default DropdownList;
