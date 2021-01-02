import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SingUp from '../sign-up/sign-up.component';

import './sign-in-and-sign-out.styles.scss';

const SignInAndSignOut = () => (
    <div className='pt-5 mt-5 sign-in-and-sign-out row container'>
        <SignIn />
        <SingUp />
    </div>
)

export default SignInAndSignOut;