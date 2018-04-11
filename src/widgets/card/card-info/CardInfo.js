import React from "react";
import FontAwesome from "react-fontawesome";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.id === team;
    });

    if (data) return data.name;
  };

  return (
    <div className="card-info">
      <span className="card-team">{teamName(props.teams, props.team)}</span>
      <FontAwesome name="clock" className="card-date-icon" />
      <span className="card-date">{props.date}</span>
    </div>
  );
};

export { CardInfo as default };
