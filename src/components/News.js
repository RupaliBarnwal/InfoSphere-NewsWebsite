import React, { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
    useEffect(()=>{
        updateNews()
        document.title= `${capitalizeFirstLetter(props.category)}-InfoSphere`;
        // eslint-disable-next-line
    },[])


  // const handleNextClick=async ()=>{
  //     console.log("Next");
  //     if(!(page+1> Math.ceil(totalResults/props.pageSize))){

  //         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  //     // let url=""
  // setPage(page+1)
  //     // console.log(page+1)
  //     setLoading(true)
  //     let data= await fetch(url);
  //     let parsedData= await data.json()
  //     // console.log(parsedData);
  //     
  //         setPage (page+1)
  //         setArticles (parsedData.articles)
  //         setLoading (false)
  //    
  //     }

  // }
  // const handlePreClick=async()=>{
  //     console.log("Previous");
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
  // setPage(page-1)
  //     // console.log(page-1);
  //     // let url=""
  //     setLoading(true)
  //     let data= await fetch(url);
  //     let parsedData= await data.json()
  //     // console.log(parsedData);
  //     setPage (page-1)
  //         setArticles (parsedData.articles)
  //         setLoading (false)
  // }

//   const handlePostClick=async()=>{
//     setPage(page+1)
//     updateNews();
//   }
//   const handlePreClick=async()=>{
//     setPage(page-1)
//     updateNews();
//   }


  const fetchMoreData = async () => {
    // setPage(page+1)
    // console.log(page);
    let url = `https://gnews.io/api/v4/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apiKey}&page=${
      page+1
    }&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
      setArticles (articles.concat(parsedData.articles))
      settotalResults (parsedData.totalResults)
   
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: "70px 35px 0px" }}>
        InfoSphere- Top Headlines On{" "}
        {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />}
      {/* infinite Scroll */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* {!loading &&  */}
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsComponent
                    title={ele.title ? ele.title.slice(0, 45) : ""}
                    description={
                      ele.description ? ele.description.slice(0, 88) : ""
                    }
                    imgUrl={ele.image}
                    newsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* previous and next Switch */}

        {/* <div className="d-flex mb-3">
            <div className="p-2">
            <button disabled={page<=1} type="button" className="btn btn-outline-success" onClick={handlePreClick}>&larr;Pre</button>
            </div>
            <div className="ms-auto p-2">
            <button type="button"disabled={page+1> Math.ceil(totalResults/props.pageSize)} className="btn btn-outline-success" 
                  onClick={handleNextClick}>Next &rarr;</button>
            </div>
            </div> */}
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
