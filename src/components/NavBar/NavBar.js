import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
const NavBar = () => {
    const { user, login, logout } = useContext(AuthContext)

    const imgStyle = {
        width: '30px',
        borderRadius: '15px',
        margin: '2px',
    }

    return (
        <div>
            <ul>
                <li><button onClick={() => login()}>Giriş Yap</button></li>
                <li><button onClick={() => logout()}>Çıkış Yap</button></li>
            </ul>

            <div>
                
                user bilgisi gelecek <br />
                <img src={user ? user.user.photoURL : null} style={imgStyle} alt="" />
                
                { user ? user.user.email : null }
            </div>
        </div>
    )
}

export default NavBar