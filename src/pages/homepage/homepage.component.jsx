import React from 'react';
import { Link } from 'react-router-dom';

import {HomePageContainer} from './homepage.styles';
import Directory from '../../components/directory/directory.component'
import logo from '../../components/img/logo.png';

const HomePage = () => (
  <HomePageContainer>
    <Link to="/">
      <img height='200' src={logo} alt='logo' className='pt-3 mt-3 font-bold'/>                
    </Link>
    <h4 className='font-body-bold py-3'>الطاقة والحيوية في الأكلة الطبيعية</h4>
    <Directory/>
  </HomePageContainer>
);

export default HomePage;
