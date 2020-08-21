import React from 'react'

class SignUpPage extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className="row">
                    <form action="" className="col s8">
                        <div className="row">
                            <div className="input-field col s4">
                                <input placeholder="Username" id="first_name" type="text" className="validate"/>
                                <label for="first_name">Name</label>
                             </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="password" type="password" className="validate"/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="password2" type="password" className="validate"/>
                                <label for="password2">Confirm Password</label>
                            </div>
                        </div>
                        <a href="#"><i className="material-icons"></i></a>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpPage