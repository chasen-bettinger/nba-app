import React from "react";

const ArticleBody = props => {
  const renderBody = () => {
    return props ? (
      <div className="article-body-wrapper">
        <h1 className="article-title">{props.article.title}</h1>
        <div
          className="article-body-image"
          style={{
            backgroundImage: `URL(../images/articles/${props.article.image})`
          }}
        />
        <p className="article-copy">{props.article.body}</p>
      </div>
    ) : null;
  };

  return renderBody();
};

export { ArticleBody as default };
