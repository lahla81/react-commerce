import fullMilk  from '../../components/img/milk/full-cream-milk.jpg';
import rayeb850  from '../../components/img/rayeb/rayeb-850.jpg';
import yogurt75  from '../../components/img/yogurt/yogurt-75.jpg';
import sheader550  from '../../components/img/chees/sheder-550.jpg';
import samna750  from '../../components/img/butter/samna.jpg';
import mango850  from '../../components/img/juice/mango850.jpg'
import vanilia200  from '../../components/img/iceCream/icecreamVanilia200.jpg'

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
        linkUrl:'shop/iceCream'
    },{
        title:'سمن',
        imageUrl: samna750,
        id: 7,
        linkUrl:'shop/butter'
    },{
        title:'Yogurt',
        imageUrl: yogurt75,
        id: 8,
        linkUrl:'shop/yogurt'
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