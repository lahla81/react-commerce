import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../../pages/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SingUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert(" password don't match ");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: displayName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
        } catch (error) {
            console.log(error)
        }
    };
    handleChange = event => {
        const{ name, value } = event.target;
        this.setState({ [name]: value })
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up col-12 col-md-6'>
                <h2 className='tite'>I Do Not Have An Acount</h2>
                <span>Sign Up with Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'DispalyName'
                        required
                    />
                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingUp;