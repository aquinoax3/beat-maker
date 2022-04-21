import React, { useState } from 'react';

function SignUp({setCurrentUser}) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signup, setSignup] = useState("")
    const [errors, setErrors] = useState([])


    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/signup`, {
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
            <br/>
            <input type="submit" value="Signup" onClick={() => setSignup(true)} />
        </form>
    )

}

export default SignUp; 