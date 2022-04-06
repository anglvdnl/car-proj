import React, { Component } from 'react'
import classes from './_Auth.module.scss'
import Input from '../Authorization/Input/Input'
import is from 'is_js'
import axios from 'axios'

export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter a valid email',
                valid: false,   
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Password must contain at least 6 characters',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvVAJCPpaQdHUAnXLLs6irg75qD3VPw9U', authData)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvVAJCPpaQdHUAnXLLs6irg75qD3VPw9U', authData)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    submitHandler = event => {
        event.preventDefauld()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if(validation.required){
            isValid = value.trim() !== ' ' && isValid
        }

        if(validation.email) {
            isValid = is.email(value) && isValid
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) =>{
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value.slice(-1) == ' ' ? event.target.value.slice(0, -1) : event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input 
                key={controlName + index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event,controlName)}
                />
            )
        })
    }

    render() {
        return(
            <div className={classes.Auth}>
                <div className={classes.AuthDiv}>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}
    
                        <button
                        className={classes.AuthBtn}
                        type="signin"
                        onClick={this.loginHandler}
                        disabled={!this.state.isFormValid}
                        >
                            Sign in</button>

                        <button
                        className={classes.AuthBtn}
                        type="signup"
                        onClick={this.registerHandler}
                        disabled={!this.state.isFormValid}
                        >
                            Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}