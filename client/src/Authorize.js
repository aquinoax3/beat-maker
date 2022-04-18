import React from 'react';

function Authorize() {

    function onSubmit(e){
        e.preventDefault()
        const user = {
            // username,
            // password
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
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input type="text"name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )

}

export default Authorize; 