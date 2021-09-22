import React from "react";

// custom components
import Room from "./Room";

export default function Floor({ floorData }) {
   // console.log("(floor.jsx) floorData = ", floorData);
   return (
      <>
         <h2>{floorData.floorName}</h2>
         {floorData.rooms.map((roomData) => {
            // console.log("(floor.jsx) roomData = ", roomData)
            return (
               <div key={roomData.roomId}>
                  <Room roomData={roomData} />
               </div>
            );
         })}
      </>
   );
}

/*

import React, { useState, useEffect } from "react";

// custom
import Rooms from "./Rooms";
import { FloorInfo, RoomInfo, SectionInfo } from "./HouseInfo";

// constants
import { houseData } from "../constants/RoomsConstants";

export default function Floor() {
   const [interests, setInterests] = useState();

   useEffect(() => {
      const interestArr = [];

      houseData.map((floor, floorIndex) => {
         interestArr.push(FloorInfo(floor.id, floor.name, []));
         floor.floorData.map((room) => {
            interestArr[floorIndex].rooms.push(
               RoomInfo(room.roomId, room.name, room.blueprintPicture, room.sectionPictures)
            );
         });
      });
      console.log("interestArr = ", interestArr)
      setInterests(interestArr);
   }, []);

   return (
      <>
         {/ * {houseData.map((floor, floorIndex) => {
            return (
               <>
                  <div key={floor.name}>
                     <h2 style={{ color: "red" }}>{floor.name}</h2>
                     {interests && (
                        <Rooms
                           interests={interests[floorIndex]}
                           setInterests={setInterests}
                        />
                     )}
                  </div>
               </>
            );
         })}

         <div id="test">...</div> * /}
      </>
   );
}
*/