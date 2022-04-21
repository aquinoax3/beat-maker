import React, { useState } from "react";

function KitDropDown({kit}) {
    // const [errorMessage, setErrorMessage] = useState('');
    // const [formData, setFormData] = useState ({
    //     content: "",
    //     rating: "",
    //     user_id: "",
    //     house_id: ""
    // });

    
  
    // function handleSubmit(event) {
    //     event.preventDefault();
      
    //     if(formData.content === "") {
    //       setErrorMessage('Error! Complete All Fields');
    //       setFormData({
    //         content: "",
    //         rating: "",
    //     })
    //     } else if (formData.rating === "") {
    //         setErrorMessage('Error! Complete All Fields');
    //         setFormData({
    //             content: "",
    //             rating: "",
    //         })
    //     // } else if (formData.location === "") {
    //     //     setErrorMessage('Error! Complete All Fields');
    //     //     setFormData({
    //     //         content: "",
    //     //         rating: "",
    //     //     })
    //     } else {
            
    //     fetch('http://localhost:9292/reviews', {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         content: formData.content,
    //         rating: formData.rating,
    //         user_id: formData.user_id,
    //         house_id: formData.house_id
    //       }),
    //     })
    //     .then(resp => resp.json())
    //     .then((newReview) => handleAddReview(newReview))

    //     setFormData({
    //         content: "",
    //         rating: "",
    //         user_id: 1,
    //         house_id: 1
    //     })
    //     alert("Added to reviews list");
    //   }
    // }

    return (
        <option key={kit.id} value={kit.id}>
                        {kit.name}
        </option>    
    )
}

export default KitDropDown