import React, { useState } from 'react'

function Login() {

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
            <input type="submit" value="Login" onClick={() => setLogin(true)} />
            <br/>
            <input type="submit" value="Signup" onClick={() => console.log("Signup Clicked")} />
        </form>
    )

}

export default Login