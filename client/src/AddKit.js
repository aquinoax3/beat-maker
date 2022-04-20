import React, {useState} from 'react'

function AddKit() {
    const [formData, setFormData] = useState({
        name: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault()
        
    }

    return (
        <div>AddKit</div>
    )
}
export default AddKit