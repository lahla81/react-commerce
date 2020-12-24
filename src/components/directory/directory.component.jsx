import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import juiceImg    from '../img/juice.jpg';
import milkImg    from '../img/milk.jpg';
import cheeseImg    from '../img/cheese.jpg'
class Directory extends React.Component {
    constructor() {
        super();

        this.state ={
            sections: [{
                title:'Milks',
                imageUrl: milkImg,
                id: 1,
                linkUrl:'milks'
            },{
                title:'Juice',
                imageUrl: juiceImg,
                id: 2,
                linkUrl:'juice'
            },{
                title:'Cheese',
                imageUrl: cheeseImg,
                id: 3,
                linkUrl:'cheese'
            },{
                title:'yogurt',
                imageUrl: milkImg,
                size:'large',
                id: 4,
                linkUrl:'yogurt'
            },{
                title:'iceCreem',
                imageUrl: milkImg,
                size:'large',
                id: 5,
                linkUrl:'iceCreem'
            },
        ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=> (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;