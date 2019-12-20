import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import apis from '../api'

class WelcomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
        }
    }

    handleChangeInputLogin = async event => {
        const login = event.target.value
        this.setState({ login })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

handleAccessChecking = async(event) => {
    event.preventDefault()
    const {login, password} = this.state
    const payload = {login, password}
    await apis.getOwnerByLogin(payload).then(res => {
        window.alert(`Owner is OK!`)
            this.setState({
                login: '',
                password: '',
            })
    })
}

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1 className='m-4'>Welcome to E-Library!</h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className='demoForm' onSubmit ={this.handleAccessChecking}>
                            <h3 className='mt-4 mb-3'>Sign in:</h3>
                            <div className='form-group'>
                                <label htmlFor='login'></label>
                                <input type='text' className='form-control'
                                    name='login' placeholder='Login' value={this.state.login}
                                    onChange={this.handleChangeInputLogin} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'></label>
                                <input type='password' className='form-control'
                                    name='password' placeholder='Password' value={this.state.password}
                                    onChange={this.handleChangeInputPassword} />
                            </div>
                            <button type='submit' className='btn btn-primary mb-2'>
                                Sign in
                            </button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        )
    }
}

export default WelcomePage