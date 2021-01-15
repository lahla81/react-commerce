import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
    return(
        <div className='container row'>
            {sections.map(({id, ...otherSectionProps})=> (
                <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    )
}
const mapStateToprops = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToprops)(Directory);