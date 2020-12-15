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
                id: 1
            },{
                title:'Juice',
                imageUrl: juiceImg,
                id: 2
            },{
                title:'Cheese',
                imageUrl: cheeseImg,
                id: 3
            },{
                title:'mliks',
                imageUrl: milkImg,
                size:'large',
                id: 4
            },{
                title:'mliks',
                imageUrl: milkImg,
                size:'large',
                id: 5
            },
        ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size})=> (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;