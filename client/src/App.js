import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import FacilitiesList from './components/FacilitiesList';

class App extends Component {

    state = {
        signedIn: false,
        facilities: []
    }

    signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            await axios.post('/auth', payload)

            this.setState({signedIn: true})

        } catch (error) {
            console.log(error)
        }
    }

    signIn = async (email, password) => {
        try {
            const payload = {
                email,
                password
            }
            await axios.post('/auth/sign_in', payload)
            const facilities = await this.getFacilities()
            this.setState({signedIn: true, facilities})

        } catch (error) {
            console.log(error)
        }
    }
    getFacilities =  async() => {
        try {
            const response = await axios.get('/facilities')
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }
    }
    render() {

        const SignUpLogInComponent = () => (
            <SignUpLogIn
                signUp={this.signUp}
                signIn={this.signIn}/>
        )

        const FacilitiesComponent = () => (
            <FacilitiesList facilities={this.state.facilities}/>
        )
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/signUp" render={SignUpLogInComponent}/>
                        <Route exact path="/facilities" render={FacilitiesComponent}/>
                    </Switch>

                    {this.state.signedIn ? <Redirect to="/facilities"/> : <Redirect to="/signUp"/>}
                </div>
            </Router>
        )
    }
}

export default App