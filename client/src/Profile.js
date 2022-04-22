import React, { useEffect, useState } from "react";

function Profile() {
    const [profile, setProfile] = useState([])
    const [reviewText, setReviewText] = useState(profile.profile)
	const characterLimit = 400;

    useEffect (() => {
        fetch('/users/{:id}')
        .then(resp => resp.json())
        .then(profileData => {
        //   console.log("Kits brought in from backend:", profileData)
            setProfile(profileData);
            setReviewText(profileData.profile)
            // setUser(kitsData);
        })
    }, []);

    function handleChange(event){
		if (characterLimit - event.target.value.length >= 0) {
			setReviewText(event.target.value);
		}
	}

    // //PATCH HERE WHEN USER CLICKS SAVE
    function handleSaveClick() {
        console.log("Updated profile:", profile)
        console.log("Updated review text", reviewText)
        fetch(`/users/${profile.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"profile": reviewText})
        })
        profile.profile = reviewText
    }


    return ( 
        <div className='profile-card-container'>
        <div className='profile-card'>
        {/* <div className="profile-card-split"> */}
            <h3 className="welcome-card">Welcome: </h3> <h3 className="welcome-card"> {profile.username} </h3>
            <div className="review-header-holder">
            <div className="review-header">
                <textarea
                    rows='8'
                    cols='25'
                    placeholder='Type to add a review...'
                    value={reviewText}
                    onChange={handleChange}
                >{profile.profile}
                </textarea>
            </div>
            </div>
            <div className="review-header-holder">
            <div className='review-footer'>
                <button className='submit-button' 
                onClick={() => handleSaveClick()}
                >
                    Save
                </button>
            </div>
            </div>
            <div className="profile-pic-holder">
                <img className="profile-pic" src={profile.image} alt="profile"></img>  
            </div>
        {/* </div> */}
        </div>
        </div>
    );
}

export default Profile;