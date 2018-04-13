import React from "react";
import FontAwesome from "react-fontawesome";
import moment from "moment";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.teamId === team;
    });

    if (data) return data.name;
  };

  const formatDate = date => {
    return moment(date).format(" MM-DD-YYYY");
  };

  return (
    <div className="card-info">
      <span className="card-team">{teamName(props.teams, props.team)}</span>
      <FontAwesome name="clock" className="card-date-icon" />
      <span className="card-date">{formatDate(props.date)}</span>
    </div>
  );
};

export { CardInfo as default };
