import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://avatars.githubusercontent.com/u/82101177?v=4" alt="" />
                <span>Tin</span>
                <button>logout</button>
            </div>
        </div>
    );
}

export default Navbar;