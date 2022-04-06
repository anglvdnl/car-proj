import React, { Component } from 'react'
import classes from './_Auth.module.scss'
import Input from '../Authorization/Input/Input'
import is from 'is_js'
import { auth } from '../../store/actions/auth'
import { connect } from 'react-redux'

class Auth extends Component {

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

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
    }

    registerHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )
    }

    submitHandler = event => {
        event.preventDefaut()
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

        control.value = event.target.value.slice(-1) === ' ' ? event.target.value.slice(0, -1) : event.target.value
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

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth)