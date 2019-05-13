import React, { Component } from "react";
import "./todolist.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    console.log('my state', this.state);
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        }
        catch (e) {
          this.setState({[key]: value});
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    this.setState({[key]: value});
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      category: this.state.category
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  onChange(event) {
    console.log('on change has been executed', event.target.value);
    this.setState({category: event.target.value});
  }

  onChangeFilter(event) {
    const catValue = event.target.value;
    const filteredList = this.state.list.filter(item => item.category === catValue);
    this.setState({items: filteredList});
    console.log('filtered items', this.items);
  }

  render() {
    return (
      <div>
        <label>What is to be done?</label>
        <div>
          <div>
            <input className="itemAdd"
                   type="text"
                   placeholder="Enter Task Here"
                   value={this.state.newItem}
                   onChange={e => this.updateInput("newItem", e.target.value)}
            />
          </div>
          <div>

          </div>
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >&#43;</button>
          <div className="ui dropdown">
            <div>
              <label>Add to List</label>
              <select className="ui fluid dropdown" onChange={this.onChange.bind(this)} value={this.state.value}>
                <option value="">Choose Option</option>
                <option value="Cat1">Personal</option>
                <option value="Cat2">Work</option>
                <option value="Cat3">Eat</option>
                <option value="Cat4">Shopping</option>
                <option value="Cat5">Gym</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <ul className="itemsList">
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="removeItem" onClick={() => this.deleteItem(item.id)}>
                    x
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="ui dropdown">
            <div>
              <label>Filter items</label>
              <select className="ui fluid dropdown" onChange={this.onChangeFilter.bind(this)}>
                <option value="">Choose Option</option>
                <option value="Cat1">Personal</option>
                <option value="Cat2">Work</option>
                <option value="Cat3">Eat</option>
                <option value="Cat4">Shopping</option>
                <option value="Cat5">Gym</option>
              </select>
            </div>
          </div>
        </div>

        <label>Due date</label>
        {/*<input className="itemAdd"*/}
        {/*type="text"*/}
        {/*placeholder="Set the date"*/}
        {/*value={this.state.newItem}*/}
        {/*onChange={e => this.updateInput("newItem", e.target.value)}*/}
        {/*/>*/}
        <DatePicker className="itemAdd"
                    type="text"
                    placeholder="Set the date"
                    value={this.state.newItem}
                    // onChange={e => this.updateInput("newItem", e.target.value)}
                    selected={this.state.date}
                    onSelect={this.handleSelect} //when day is clicked
                    onChange={this.handleChange} //only when value has changed
        />
        <div>
          <p>Elements from category</p>
          <ul className="itemsList2">
            {this.state.items && this.state.items.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="removeItem" onClick={() => this.deleteItem(item.id)}>
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

