import React from 'react';

const List = props => (
    <ul class="listSize">
        {
            props.items.map((item, index) => <li key={index}>{item} <button type="button" className="removeItem">x</button> </li>)
        }
    </ul>
);

export default List;