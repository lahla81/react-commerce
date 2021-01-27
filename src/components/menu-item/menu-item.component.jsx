import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, history, linkUrl, slug, match}) => (
    <div 
        className='collection-item col-md-6 col-lg-4 col-12'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        <div className='overlay'>
            <div className="text-center c-latest__right">
                <img className="mt-2" src={imageUrl} alt={slug}/>
            </div>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>تسوق الآن</span>
            </div>
        </div>
    </div>
)

export default withRouter(MenuItem);