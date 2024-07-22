import React, { useState } from "react";
import { TEAM_LIST } from "../components/TeamList";
import { DRIVER_LIST } from "../components/DriverList";

export default function RandomTeam() {
  const [team, setTeam] = useState({});
  const [driver, setDriver] = useState({});

  const handleGenerateTeam = () => {
    const randomIndex = Math.floor(Math.random() * TEAM_LIST.length);
    const randomTeam = TEAM_LIST[randomIndex];
    setTeam(randomTeam);
  };

  const handleGenerateDriver = () => {
    const randomIndex = Math.floor(Math.random() * DRIVER_LIST.length);
    const randomDriver = DRIVER_LIST[randomIndex];
    console.log(randomDriver);
    setDriver(randomDriver);
  };

  return (
    <div className="random-team-container">
      <h1>Formula One Team Randomizer!</h1>
      <h2>You can either choose a team or generate a random driver!!!!</h2>
      <button onClick={handleGenerateTeam}>Generate Team</button>
      <button onClick={handleGenerateDriver}>Generate Driver</button>
      <h3 className="display-team">Team: {team.team_name}</h3>
      <div>{team.image && <img src={team.image} alt={team.team_name} />}</div>
      <h3 className="display-driver">Driver: {driver.driver_name}</h3>
      <div>
        {driver.driver_image && (
          <img src={driver.driver_image} alt={driver.driver_name} />
        )}
      </div>
    </div>
  );
}
