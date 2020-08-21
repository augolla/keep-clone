import React,{createContext} from 'react'
import $ from 'jquery'
import { RiLightbulbFlashLine} from 'react-icons/ri'
import { FiMenu } from 'react-icons/fi'
import './Header.css'

export const ShowContext=createContext()

function Header(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-brand btn orange darken-1">
                    <RiLightbulbFlashLine color="#F2EBDA" size="1.5rem" />
                    <span className='text-white'>KEEP</span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SignUp</a>
                        </li>
                    </ul>
                </div>
            </nav>
            // <nav className="nav-wrapper white">
            //     <div className="container-fluid">
            //         <span className=' menu'>
            //             <FiMenu color='black' size='2rem'/>
            //         </span>
            //         <a href="" className="brand-logo grey-text">
            //              <div className="d-flex align-items-center">
            //              </div>
            //         </a>
            //         <ul className='right'>
            //             <li>
            //                 <h6 href="#login" className='grey-text modal-trigger'>Log In</h6>
            //                 <div className="modal" id='login'>Testing</div>
            //             </li>
            //             <li>
            //                 <button className="btn orange darken-1">
            //                     <h6 href="#" className='grey-text'>Sign Up</h6>
            //                 </button>
            //                 <h6 href="#" className='grey-text'>Sign Up</h6></li>
            //             <li>
            //                 <a href='#' className='btn-floating orange center'>
            //                     <i className="material-icons">supervised_user_circle</i>
            //                 </a>
            //                 </li>
            //         </ul>
            //     </div>
            // </nav>
        )
}

export class ShowProvider extends React.Component{
    state={show:false}
    render(){
        return(
            <ShowContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShowContext.Provider>
        )
    }
}


export  default Header