import React, { useEffect, useState } from "react";
import AddKit from "./AddKit";
import Sounds from "./Sounds";



function KitCard ({kit, addKit, setKits, kits}) {
    const [beatsInKit, setBeatsInKit] = useState([]);
    const [displayedKit, setDisplayedKit] = useState([]);

    // console.log("kit", kit)
    // console.log("kit sounds data", beatsInKit)
    // console.log("kit displayed", displayedKit)

    function clickKit (event) {
        // handleClickKit(kit);
        event.preventDefault();
        // setBeatsInKit([]);
        // console.log("Kit was clicked", kit)
        fetch(`/kits/${kit.id}`)
        .then(resp => resp.json())
        .then(kitsData => {
            // console.log(kitsData)
            // // setBeatsInKit();
            setBeatsInKit(kitsData.sounds);
            addKit(kitsData)
        })
    }


    // function handleDisplayedKit (kitSounds) {
    //     // console.log("this is new review:", newReview)
    //     setDisplayedKit([kitSounds])
    // }

    // function onClicky () {
    //     //console.log("This bot clicked:", bot)
    //     // addBot(bot)
    //     addKit(kit)
    //   }

    // // const thisKit = useEffect (() => {
    //     fetch('/kits/${kit.id}')
    //     .then(resp => resp.json())
    //     .then(kitsData => {
    //         console.log(kitsData.kits)
    //         // setBeatsInKit(kitsData.kits);
    //     })
    // }, []);

    
    // function deleteClick(event) {     
    //     // event.preventDefault()
    //     // console.log("delete clicked")
    //     fetch(`/kits/${kit.id}`,{
    //         method: "DELETE",
    //     })
    function deleteClick (kit) {
        // const kitId = kit.id
        // console.log(kit)
            fetch(`/kits/${kit.id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            // .then(() => {
            //     setKits(kits.filter(function(currentKit){
            //       return currentKit.id !== kit.id
            //     }))})
            window.location.reload();
            // .then(jsonData => console.log("data:", kit))
        // const removekit = kits.filter(data => data.id !== kit.id)
        // setKits(removekit)
    }

    
    return (
        <div className="kit-card" >
            {/* <a href="http://localhost:4000/sounds" onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</a> */}
            <h1 onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</h1>
            {/* <h2 onClick={() => onClicky(kit)} >Click on this Div</h2> */}
            {/* <Sounds beatsInKit={beatsInKit}/> */}
            <p className="delete-line">Delete Your Kit Below</p>
            <button onClick={()=>deleteClick(kit)}>Delete</button>
        </div>
    )
}

export default KitCard;