import React from 'react';

class Save extends React.Component {

    onSave(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui teal buttons" onChange={this.onSave}>
                <div className="ui button">Save</div>
                <div className="ui floating dropdown icon button">
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item"><i className="edit icon"></i> Edit Post</div>
                        <div className="item"><i className="delete icon"></i> Remove Post</div>
                        <div className="item"><i className="hide icon"></i> Hide Post</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Save;