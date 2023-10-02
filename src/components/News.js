import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }
    static propsTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    
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
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50adc12789f742489caedf8d1546256c&page=1&pageSize=${this.props.pageSize}`;
        // let url=""
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
             totalResults:parsedData.totalResults,
             loading: false
            })
    }
    handleNextClick=async ()=>{
        console.log("Next");
        if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){

            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50adc12789f742489caedf8d1546256c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // let url=""
        // console.log(this.state.page+1)
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        // console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
        }
        
        
    }
    handlePreClick=async()=>{
        console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50adc12789f742489caedf8d1546256c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // console.log(this.state.page-1);
        // let url=""
        this.setState({loading:true})
        let data= await fetch(url);
        let parsedData= await data.json()
        // console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })
    }
  render() {
    
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{margin:'35px 0px'}}>InfoSphere- Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((ele)=>{
                return <div className='col-md-4' key={ele.url}>
                <NewsComponent title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description?ele.description.slice(0,88):""}
                   imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
            </div>
            })}
            
        </div>
             <div className="d-flex mb-3">
            <div className="p-2">
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-success" onClick={this.handlePreClick}>&larr;Pre</button>
            </div>
            <div className="ms-auto p-2">
            <button type="button"disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-success" 
                  onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
      
      
      </div>
        
      
    )
  }
}

export default News
