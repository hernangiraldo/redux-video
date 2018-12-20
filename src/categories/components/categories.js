import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search';

function Categories(props) {
    return(
        <div className="Categories">
            <SearchContainer />
            {
                props.categories.map( c => {
                    return <Category key={c.id} {...c} handleClick={props.handleToggleModal} />
                })
            }
        </div>
    )
}

export default Categories;