import React, { Component } from 'react'

export class NewsComponent extends Component {
  render() {
    let {title, description, imgUrl, newsUrl}=this.props;
    return (
        <>
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/8D21/production/_131292163_6749f9d4a61ea749f5db87c265917df912f29bb5.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-success">Read More</a>
  </div>
</div>
        
      </div>
      
      </>
    )
  }
}

export default NewsComponent
