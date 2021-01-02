import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import logo from '../../components/img/logo.png';

const HomePage = () => (
  <div className='pt-5 mt-4 homepage'>
  <Link to="/">
    <img height='200' src={logo} alt='logo' className='pt-3 mt-3 font-bold'/>                
  </Link>
    
    <h4 className='font-body-bold pb-3'>صحتك عندنا في أمان</h4>
    <Directory/>
  </div>
);

export default HomePage;
