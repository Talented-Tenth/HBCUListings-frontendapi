import React from "react";
import "./App.css";

function Signup() {
    return (
       <div>
        <div className="Form">
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <button>Sign Up</button>
        </div>
        <a
              className="App-link"
              href='/home'>
            Sign Up
            </a>
       </div>
    );
}

export default Signup;