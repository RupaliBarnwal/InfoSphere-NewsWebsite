import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class News extends Component {
    
    articles= []
    constructor(){
        super();
        // console.log("Hi");
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=50adc12789f742489caedf8d1546256c&page=1&pageSize=20";
        // let url=""
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
    handleNextClick=async ()=>{
        console.log("Next");
        if(this.state.page+1> Math.ceil(this.state.totalResults/20)){

        }else{
            let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=50adc12789f742489caedf8d1546256c&page=${this.state.page+1}&pageSize=20`;
        // let url=""
        console.log(this.state.page+1)
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles})
        }
        
        
    }
    handlePreClick=async()=>{
        console.log("Previous");
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=50adc12789f742489caedf8d1546256c&page=${this.state.page-1}&pageSize=20`;
        console.log(this.state.page-1);
        // let url=""
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles})
    }
  render() {
    
    return (
      <div className="container my-3">
        <h2>InfoSphere- Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((ele)=>{
                return <div className='col-md-4' key={ele.url}>
                <NewsComponent title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description?ele.description.slice(0,88):""} imgUrl={ele.urlToImage} newsUrl={ele.url}/>
            </div>
            })}
            
        </div>
             <div className="d-flex mb-3">
            <div className="p-2">
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-success" onClick={this.handlePreClick}>&larr;Pre</button>
            </div>
            <div className="ms-auto p-2">
            <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
      
      
      </div>
        
      
    )
  }
}

export default News
