import React from 'react';


class InputBar extends React.Component {

    onInputChange(event) {
    console.log(event.target.value)
    }

    render() {
        return (
                <form className="ui form">
                        <input type="text" onChange={this.onInputChange} />
                </form>
        )};
}

export default InputBar;