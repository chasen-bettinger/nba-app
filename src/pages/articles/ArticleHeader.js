import React from "react";
import moment from "moment";

const ArticleHeader = props => {
  const renderTeamInfo = team => {
    return team ? (
      <div className="team-info-wrapper">
        <div
          className="team-logo"
          style={{
            backgroundImage: `URL(../images/teams/${team.logo}`
          }}
        />
        <div className="team-copy-wrapper">
          <h2>{team.name}</h2>
          <div className="record-wrapper">
            <span>W {team.stats[0].wins}</span> -
            <span> L {team.stats[0].defeats}</span>
          </div>
        </div>
      </div>
    ) : null;
  };

  const formatDate = date => {
    return moment(date).format(" MM-DD-YYYY");
  };

  const renderAuthorInfo = (author, date) => {
    return author && date ? (
      <div className="author-info-wrapper">
        <h5 className="article-author">{author}</h5>
        <p className="article-date">{formatDate(date)}</p>
      </div>
    ) : null;
  };

  return (
    <div>
      {renderTeamInfo(props.team)}
      {renderAuthorInfo(props.author, props.date)}
    </div>
  );
};

export { ArticleHeader as default };
