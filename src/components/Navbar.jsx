import React, { useState, useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [show, setShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}  `}>
            <div className={"nav_contents"}>
                <img className={"nav_logo"}
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix_logo" />
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt={"netflix_avatar_logo"} />
            </div>
        </div>
    )
}

export default Navbar