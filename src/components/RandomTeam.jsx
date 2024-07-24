import React, { useState } from "react";
import { TEAM_LIST } from "../components/TeamList";
import { DRIVER_LIST } from "../components/DriverList";
import { Button } from "react-bootstrap";

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

  const handleReset = () => {
    setTeam({});
    setDriver({});
  };

  return (
    <div className="random-team-container">
      <h1>Formula One Random Generator!</h1>
      <h2>You can either choose a Team or generate a random Driver!</h2>
      <Button variant="danger" onClick={handleGenerateTeam}>
        Generate Team
      </Button>
      <Button variant="warning" onClick={handleGenerateDriver}>
        Generate Driver
      </Button>
      <Button variant="success" onClick={handleReset}>
        {" "}
        Reset{" "}
      </Button>
      <h3 className="display-team">Team: {team.team_name}</h3>
      <div className="display-team-image">
        {team.image && <img src={team.image} alt={team.team_name} />}
      </div>
      <h3 className="display-driver">Driver: {driver.driver_name}</h3>
      <div className="display-driver-image">
        {driver.driver_image && (
          <img src={driver.driver_image} alt={driver.driver_name} />
        )}
      </div>
    </div>
  );
}
