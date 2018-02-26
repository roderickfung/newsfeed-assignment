import React from 'react';

const Article = ({data}) => {
  let { source, author, title, description, url, urlImage, publishedAt} = data;

  return (
    <span>{author}</span>
  )
}

export default Article;