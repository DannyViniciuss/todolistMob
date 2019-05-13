import React from 'react';

class NoOption extends React.Component {

    onNoOption(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui dropdown" onChange={this.onNoOption}>
                <div>
                    <select className="ui dropdown">
                        <option value="">No option</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default NoOption;