import React from "react";

const Register = () => {
    return (
        <div classname='formContainer'>
            <div className="formWrapper">
                <span classname="logo">Chat App</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;