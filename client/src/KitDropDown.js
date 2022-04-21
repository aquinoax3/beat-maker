import React, { useEffect, useState } from "react";

function KitDropDown({kit}) {
    
    const [kits, setKits] = useState([])
    const [user, setUser] = useState([])

    // useEffect (() => {

    //     fetch('/kits/')
    //     .then(resp => resp.json())
    //     .then(kitsData => {
    //         console.log("Kits brought in from backend:", kitsData)
    //     })
    // }, []);

    useEffect (() => {

        fetch('/users/{:id}')
        .then(resp => resp.json())
        .then(kitsData => {
            console.log("Kits brought in from backend:", kitsData)
            setKits(kitsData.kits);
            setUser(kitsData);
        })
    }, []);
    
    // const mapKitDropDown = kits.map((kit) => {
    //     return (
    //       <KitDropDown key={kit.id} kit={kit} active={true} user={kit.user_id}/>
    //     )
    // })

    

    // function handleChange(event) {
    //     console.log("event target kit", event.target.value)
    //     // console.log("this kit", kit)
    //     setKitId(event.target.value)
    //     // setFormData({
    //     //     ...formData,
    //     //     [event.target.name]: event.target.value,
    //     // });
    // }

    // const filterKits = kits.filter((kit) => {
    //     // console.log("this is the kit id", kit.id)
    //     // console.log("this is the STATE kit id", kitId)
    //     console.log(kit.id == kitId)
    //     const checkKits
    //         // return kit.id === kitId
    //         // if (kit.id == kitId) 
    //         //     return <KitCard key={kit.id} kit={kit} active={true} user={kit.user_id}/>
    //         // else (console.log("Kit not found"))
    //     })

    return (
        <div>
            <h2>Select a Kit and Start Droppin That Shiit</h2>
                    <label className="form-labels">
                        Kit:
                        <select 
                            type="text"
                            name="user_id"
                            value={kit}
                            // onChange={handleChange}
                        >
                            <option> Select Kit </option>
                            {/* {mapKitDropDown} */}
                            <option>First Kit</option>
                            <option>Second Kit</option>
                        
                        </select>
                    
                    {/* <option key={kit.id} value={kit.id}>
                                    {kit.name}
                    </option>  */}
                </label>   
        </div>
    )
}

export default KitDropDown