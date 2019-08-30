import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import { userLogin } from "../actions/Login";

class Login extends React.Component{


    onSubmit = (e) => {
        e.preventDefault();
        const {email , password} = this.state;

        userLogin({
            email, 
            password
        }).then(response => {
            console.log(response);
        }).catch(error => {
        this.setState({err:true,message:'Server Error!'});
        });

        this.props.history.push('/dashboard');
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <>  
                <Header location={this.props.location}/>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                                {/* <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fa fa-eye"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div> */}
                            </div>
                            <div className="card-body">
				                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input onChange={this.onChange.bind(this)} name="email" type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key"></i></span>
                                        </div>
                                        <input onChange={this.onChange.bind(this)} name="password" type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox" />Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer" style={{color: '#fff'}}><Link to="/register">Don't have account?</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;