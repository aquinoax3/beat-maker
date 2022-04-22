import React, { useState } from 'react'

function Login({setCurrentUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])
    
    
    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data here:", jsonData)   
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }

    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                // console.log(r)
                setCurrentUser(null);
                // routes you back to home
            }
        });
    }

    return(
        <div className="login-div">
        <h1 className="login-below">Login below:</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" onClick={() => setLogin(true)} />
            <br/>
        </form>
        <div className="logout-class">
            <h3 className="logout-header"> Sad to see you go... log out below</h3>
            <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
        </div>
        </div>
    )

}

export default Login