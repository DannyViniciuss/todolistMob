import React from 'react';

class DropdownList extends React.Component {

    onDropdown(event) {
        console.log(event.target.value);
    }

    render() {
        return (
                <div className="ui dropdown" onChange={this.onDropdown}>
                    <div>
                        <select className="ui dropdown">
                            <option value="">Category</option>
                            <option value="1">Cat1</option>
                            <option value="0">Cat2</option>
                            <option value="0">Cat3</option>
                            <option value="0">Cat4</option>
                        </select>
                    </div>
                </div>
        )
    }
}

export default DropdownList;
