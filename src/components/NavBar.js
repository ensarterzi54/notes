import React from 'react'
import { login, logout } from '../firebase/auth'
const NavBar = () => {
    const clickLogin = () => {
        console.log("click")
        login()
    }
    const clickLogout = () => {
        console.log("click")
        logout()
    }
    return (
        <div>
            <ul>
                <li><button onClick={() => clickLogin()}>Giriş Yap</button></li>
                <li><button onClick={() => clickLogout()}>Çıkış Yap</button></li>

                <li><button>Kayıt Ol</button></li>
            </ul>
        </div>
    )
}

export default NavBar