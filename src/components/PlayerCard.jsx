/* eslint-disable react/prop-types */
import { useState } from "react";


const PlayerCard = ({ data }) => {
  const { name, team } = data;
  const [toggleTeam, setToggleTeam] = useState(false);

  return (
    <div>
      <h2 className="my-2 text-2xl">Player: {name}</h2>
      {toggleTeam && <h3 className="my-2 text-xl">Team: {team}</h3>}
      <button 
        onClick={()=>setToggleTeam(!toggleTeam)}
        className="bg-pink-500 rounded-md p-2 hover:bg-pink-300 text-white my-2">
        {toggleTeam ? "Hide Team" : "View Team"}
      </button>
    </div>
  );
};

export default PlayerCard;
