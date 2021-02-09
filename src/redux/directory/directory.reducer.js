import fullMilk  from '../../assets/img/milk.jpg';
import rayeb850  from '../../assets/img/rayeb-850.jpg';
import yogurt75  from '../../assets/img/yogurt-75.jpg';
import sheader550  from '../../assets/img/sheder-550.jpg';
import samna750  from '../../assets/img/samna.jpg';
import mango850  from '../../assets/img/apple850.jpg'
import vanilia200  from '../../assets/img/icecreamChoc200.jpg'
import honey950 from '../../assets/img/honey_950gm.jpg'

const INITIAL_STATE = {
    sections: [{
        title:'ألبان',
        imageUrl: fullMilk,
        id: 1,
        linkUrl:'shop/milks'
    },{
        title:'رايب',
        imageUrl: rayeb850,
        id: 2,
        linkUrl:'shop/rayeb'
    },{
        title:'زبادي',
        imageUrl: yogurt75,
        id: 3,
        linkUrl:'shop/yogurt'
    },{
        title:'أجبان',
        imageUrl: sheader550,
        id: 4,
        linkUrl:'shop/cheese'
    },{
        title:'عصائر',
        imageUrl: mango850,
        id: 5,
        linkUrl:'shop/juice'
    },{
        title:'أيس كريم',
        imageUrl: vanilia200,
        id: 6,
        linkUrl:'shop/icecream'
    },{
        title:'سمن',
        imageUrl: samna750,
        id: 7,
        linkUrl:'shop/butter'
    },{
        title:'عسل نحل',
        imageUrl: honey950,
        id: 8,
        linkUrl:'shop/honey'
    },{
        title:'Yogurt',
        imageUrl: yogurt75,
        id: 9,
        linkUrl:'shop/yogurt'
    },{
        title:'Yogurt',
        imageUrl: yogurt75,
        id: 10,
        linkUrl:'shop/yogurt'
    },{
        title:'Yogurt',
        imageUrl: yogurt75,
        id: 11,
        linkUrl:'shop/yogurt'
    },{
        title:'Yogurt',
        imageUrl: yogurt75,
        id: 12,
        linkUrl:'shop/yogurt'
    },
    ]
};
const directoryReducer = ( state= INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;