import React, { useState } from 'react';

function Authorize({setCurrentUser}) {
    const  [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/users`, {
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

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" onClick={() => console.log("Login Clicked")} />
            <br/>
            <input type="submit" value="Signup" onClick={() => console.log("Sign Up Clicked")} />
        </form>
    )

}

export default Authorize; 