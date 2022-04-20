import React, {useState} from 'react'

function AddKit() {
    const [formData, setFormData] = useState({
        user_id: "",
        name: ""

    })
    
    const [error,setError] = useState("")

    console.log(kit.user_id)

    
    
    function handleSubmit(event){
        event.preventDefault()
        console.log("clicked")
        console.log("form data",formData)
        
        // if(formData.name === "") {
        //     setError('Error! Complete Field');
        //     setFormData({
        //         name: "",
        //     })
        // }
            
        fetch(`/kits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: formData.user_id,
                name: formData.name
                // sound: formData.sound,
                // key: formData.key
                }),
            })
            .then(resp => resp.json())
            .then((kit) => (kit))
            setFormData({
                name: "",
                // sound: "",
                // key:""
            })
            alert("Added sound to kit");
        
        
    }

    function handleChange(event) {
        // console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>AddKit
            <form onSubmit={handleSubmit}>
                <h2>Create a kit</h2>
                <label>Name:
                    <input type="text" name="name" placeholder="Choose a name" onChange={handleChange} />
                </label>
                {/* <label>Sound:
                    <input type="text" name="sound" placeholder="Choose a sound"/>
                </label>
                <label>Key:
                    <input type="text" name="key" placeholder="Assign a key" />
                </label> */}
                <input type="submit" />
            </form>
        </div>
    )
}
export default AddKit