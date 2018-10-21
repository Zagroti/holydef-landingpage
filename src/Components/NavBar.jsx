import React,{Component} from 'react';
import {NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from './../Assets/images/logo.png';






class NavBarFa extends Component{

    render(){
        let attachedClasses = ['menuFa' ,  'tablet' , 'close'];
        let btnClass1 = ['lines' , 'line1' ]
        let btnClass2 = ['lines' , 'line2' ]
        let btnClass3 = ['lines' , 'line3' ]
        let backDrop =  ['backDrop'  , 'tablet' ]

        if (this.props.open) {
            attachedClasses =  ['menuFa' ,  'tablet' , 'open'];
            btnClass1 = ['lines' , 'line11' ]
            btnClass2 = ['lines' , 'line22' ]
            btnClass3 = ['lines' , 'line33' ]
            backDrop =  ['backDropOpen'  , 'tablet' ]
        }
        return(

                <div>
                    <div className="container" >
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink className="navbar-brand bebello-logo" activeClassName="" to="/"> 
                                <div className="cloud">
                                    <img src={logo} alt="falang logo" />
                                </div>
                            </NavLink>

                            <div className="menuEn desktop" >
                                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav rowReverse">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " exact to={"/"}   >خانه</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link " to={"/About"}  > درباره ما </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to={"/Contact"}  > تماس با ما </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="humbergerDiv tablet"  onClick={this.props.clicked} >
                                <div className="navigation" >
                                    <button className="menuBtnEn" >
                                        <span className={btnClass1.join(' ')} ></span>
                                        <span className={btnClass2.join(' ')} ></span>
                                        <span className={btnClass3.join(' ')} ></span>
                                    </button>
                                </div>
                            </div>
                            <div className={backDrop.join(' ')} onClick={this.props.closeMenu} >
                            </div>
                            <div className={attachedClasses.join(' ')} open={this.props.open} >
                                <div className="collapse navbar-collapse justify-content-end navbarNavTablet" id="navbarNavTablet">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " exact to={"/"}  onClick={this.props.clicked}  >خانه</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " to={"/About"}   onClick={this.props.clicked}> درباره ما </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/Contact"}   onClick={this.props.clicked}> تماس با ما </NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

        );
    }
}

export default NavBarFa;