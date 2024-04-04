import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import "./NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
    const { user, login, logout } = useContext(AuthContext)

    const imgStyle = {
        width: '30px',
        borderRadius: '15px',
        margin: '2px',
    }

    return (
        <div className="nav container">
            <div>
                { user ? <img src={user ? user.user.photoURL : null} style={imgStyle} alt="" /> : null }
                
                <span>{ user ? user.user.displayName : null }</span>
            </div>
            
            <ul className="p-0">
                { user ? <li><Link onClick={() => logout()}><button type="button" className="btn btn-outline-primary mb-2">Çıkış Yap</button></Link></li> : <li><Link onClick={() => login()}><button type="button" className="btn btn-outline-primary"><img src="/images/google-logo.png" alt="" style={{ width: "30px" }} />  Google ile Giriş Yap</button></Link></li> }
            </ul>
        </div>
    )
}

export default NavBar