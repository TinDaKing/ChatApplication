import React from "react";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className="title">REGISTER</span>
                <form >
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="file" />
                    <button>Sign Up</button>
                </form>
                <p>You do have account? Login </p>
            </div>

        </div>
    );
}

export default Register;