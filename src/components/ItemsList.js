import React from 'react';

const List = props => (
    <ul className="listSize">
        {
            props.items.map((item, index) => <li key={index}>{item} <button type="button" onClick="onClickClose" className="removeItem">x</button> </li>)
        }
    </ul>
);

export default List;