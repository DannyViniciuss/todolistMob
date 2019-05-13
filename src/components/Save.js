import React from 'react';

class Save extends React.Component {

    static onSave(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui teal buttons" onChange={Save.onSave}>
                <div className="ui button">Save</div>
                <div className="ui floating dropdown icon button">
                    <i className="dropdown icon"/>
                    <div className="menu">
                        <div className="item"><i className="edit icon"/> Edit Post</div>
                        <div className="item"><i className="delete icon"/> Remove Post</div>
                        <div className="item"><i className="hide icon"/> Hide Post</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Save;
