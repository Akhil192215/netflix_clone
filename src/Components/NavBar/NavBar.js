import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>
            <div className="navbar">
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" />
                <ul className='nav'>
                    <li>
                        Home
                    </li>
                    <li>
                        TV Shows
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        New & Popular
                    </li>
                    <li>
                        MyList
                    </li>
                </ul>
                <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="" />
            </div>
        </div>
    )
}

export default NavBar