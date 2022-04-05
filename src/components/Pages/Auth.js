import React, { Component } from 'react'
import classes from './_Auth.module.scss'
import Input from '../Authorization/Input/Input'

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

export default class Auth extends Component {

    state = {
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

    loginHandler = () => {

    }

    registerHandler = () => {

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
            isValid = value.trim() !== '' && isValid
        }

        if(validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) =>{
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls
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
                        type="success"
                        onClick={this.loginHandler}
                        >
                            Sign in</button>

                        <button
                        className={classes.AuthBtn}
                        type="primary"
                        onClick={this.registerHandler}
                        >
                            Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}