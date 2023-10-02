import React, { Component } from 'react'

export class NewsComponent extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author,date,source}=this.props;
    return (
        <>
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
      {source}</span>
  <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/8D21/production/_131292163_6749f9d4a61ea749f5db87c265917df912f29bb5.jpg":imgUrl} 
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-success">Read More</a>
  </div>
</div>
        
      </div>
      
      </>
    )
  }
}

export default NewsComponent
