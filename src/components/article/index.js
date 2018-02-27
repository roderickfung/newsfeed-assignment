import React from 'react';

const Article = ({data}) => {
  let { source, author, title, description, url, urlImage, publishedAt} = data;

  return (
    <a className='container' href={url} target='_blank'>
      <div className='title-container'>
        <span className='title'>{title}</span> 
      </div>
      <div className='image-container'>
        <img src={urlImage} alt=''/>
      </div>
      <div className='description-container'>
        <span className='description'>
          {description}
        </span>
      </div>
      <div className='footer'>
        <span className='published'>By {author} on {publishedAt}</span>
      </div>
    </a>
  )
}

export default Article