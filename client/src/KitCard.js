import React, { useEffect, useState } from "react";
import Sounds from "./Sounds";



function KitCard ({kit, handleClickKit}) {
    const [beatsInKit, setBeatsInKit] = useState([]);
    const [displayedKit, setDisplayedKit] = useState([]);

    // console.log("kit", kit)
    // console.log("kit sounds data", beatsInKit)
    console.log("kit displayed", displayedKit)

    function clickKit (event) {
        // handleClickKit(kit);
        event.preventDefault();
        // setBeatsInKit([]);
        console.log("Kit was clicked", kit)
        fetch(`/kits/${kit.id}`)
        .then(resp => resp.json())
        .then(kitsData => {
            // console.log(kitsData)
            // setBeatsInKit();
            setBeatsInKit(kitsData.sounds);
            // handleDisplayedKit(kitsData)
        })
    }


    // function handleDisplayedKit (kitSounds) {
    //     // console.log("this is new review:", newReview)
    //     setDisplayedKit([kitSounds])
    // }

    // // const thisKit = useEffect (() => {
    //     fetch('/kits/${kit.id}')
    //     .then(resp => resp.json())
    //     .then(kitsData => {
    //         console.log(kitsData.kits)
    //         // setBeatsInKit(kitsData.kits);
    //     })
    // }, []);

    
    function deleteClick(event) {
        event.preventDefault()
        // console.log(“delete clicked”)
        fetch(`/users/${kit.id}`,{
            method: "DELETE",
        })
        .then(response => response.json())
        .then(jsonData => console.log("data:", kit))
    }

    
    return (
        <div className="kit-card" >
            {/* <a href="http://localhost:4000/sounds" onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</a> */}
            <h1 onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</h1>
            <Sounds beatsInKit={beatsInKit}/>
            <p>Delete Your Kit Below</p>
            <button onClick={deleteClick}>Delete</button>
        </div>
    )
}

export default KitCard;