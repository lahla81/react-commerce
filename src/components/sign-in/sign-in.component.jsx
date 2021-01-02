import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../../pages/form-input/form-input.component';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''});
        } catch(error) {
            console.log(error)
        }
    }
    
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value})
    }

    render(){
        return(
            <div className='sign-in col-12 col-md-6 p-3'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} className="g-3">
                    <div className="">
                        <FormInput 
                            name="email" 
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            className="form-control mb-3"
                            label='Email'
                            required/>
                    </div>
                    <div className="">
                        <FormInput 
                            name="password"
                            value={this.state.password} 
                            handleChange={this.handleChange}
                            className="form-control mb-3" 
                            label="Password"
                            required/>
                    </div>
                    <div className="col-md-12">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn