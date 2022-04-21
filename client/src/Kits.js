import React, { useEffect, useState } from "react";
import KitCard from './KitCard';
import AddKit from "./AddKit";
import KitDropDown from "./KitDropDown";

function Kits() {

    const [kits, setKits] = useState([])
    const [user, setUser] = useState([])
    const [kitId, setKitId] = useState([])

    useEffect (() => {

      fetch('/users/{:id}')
      .then(resp => resp.json())
      .then(kitsData => {
        //   console.log("Kits brought in from backend:", kitsData)
          setKits(kitsData.kits);
          setUser(kitsData);
      })
  }, []);

    console.log("here are the kits", kits)
    console.log("here are the user", user)

    // const mapKits = kits.map((kit) => {
    //     return (
    //       <KitCard key={kit.id} kit={kit} active={true} user={kit.user_id}/>
    //     )
    // })

    const mapKitDropDown = kits.map((kit) => {
        return (
          <KitDropDown key={kit.id} kit={kit} active={true} user={kit.user_id}/>
        )
    })

    function handleChange(event) {
        console.log("event target kit", event.target.value)
        // console.log("this kit", kit)
        setKitId(event.target.value)
        // setFormData({
        //     ...formData,
        //     [event.target.name]: event.target.value,
        // });
    }

    console.log("current state for setKitId", kitId)


    return (  
        <div>
            <h2>Select a Kit and Start Droppin That Shiit</h2>
            <label className="form-labels">
            Kit:
            <select 
                type="text"
                name="user_id"
                // value="kit"
                onChange={handleChange}
            >
                <option> Select Kit </option>
                {mapKitDropDown}
            </select>
            </label>
                {/* {mapKits} */}
            <h3>Starting A New Wave? Create a New Kit Below</h3>
            <AddKit kits={kits} user={user}/>
        </div>
    );
}

export default Kits;

