import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgurl, newsUrl, author, date } = props

    return (
      <div className='my-3'>
        <div className="card">
          <img src={imgurl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%"}}>{author}</span></h5>
            <p className="card-text">{description}....</p>
            <p className='card-text'><small className='text-muted'>By <span style={{ color: "red" }}>{author ? author : "Unknown"}</span> <br />On  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
