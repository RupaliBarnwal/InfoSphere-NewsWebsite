import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class News extends Component {
    
    articles= [
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "US one step closer to avoiding government shutdown",
        "description": "The House of Representatives approves a temporary funding solution - which excludes aid for Ukraine.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66973976",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12303/production/_131299447_gettyimages-1708710583.jpg",
        "publishedAt": "2023-09-30T19:07:18.952783Z",
        "content": "The US House of Representatives has approved a temporary funding bill aimed at avoiding a government shutdown due to start at midnight (05:00 GMT).\r\nIt includes disaster funds, but no US aid for Ukra… [+1823 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Tupac Shakur: Sister calls new murder charge 'pivotal moment'",
        "description": "The rapper's sister welcomes news that a former gang leader has been charged with his murder.",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-66969851",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1492D/production/_131296248_mediaitem131296247.jpg",
        "publishedAt": "2023-09-30T11:37:18.4374908Z",
        "content": "Media caption, Watch: Three things we learned about Tupac murder arrest\r\nThe charge of a former gang leader with the murder of Tupac Shakur 1996 is a \"pivotal moment\", the late rapper sister's says.\r… [+3152 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Israeli conscripts banned as guards after allegations of sex with Palestinian inmate",
        "description": "The female soldier allegedly had an intimate relationship with a Palestinian serving a life sentence.",
        "url": "http://www.bbc.co.uk/news/world-middle-east-66968029",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/52B1/production/_131296112_mediaitem120617264.jpg",
        "publishedAt": "2023-09-30T10:22:22.5009681Z",
        "content": "Female Israeli soldiers are to be banned from serving as high security prison guards after allegations of sex with a Palestinian inmate.\r\nIsraeli media say a soldier admitted to physical intimacy wit… [+1557 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Nagorno-Karabakh: Armenia says 100,000 refugees flee region",
        "description": "Almost the entire ethnic Armenian population has fled the region since Azerbaijan seized it last week.",
        "url": "http://www.bbc.co.uk/news/world-europe-66969845",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ACED/production/_131296244_mediaitem131296044.jpg",
        "publishedAt": "2023-09-30T10:22:21.421155Z",
        "content": "More than 100,000 people have fled the Nagorno-Karabakh region, Armenia says.\r\nIt means that that almost the entire population of the ethnic Armenian enclave has left since Azerbaijan seized the regi… [+2495 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Prostate cancer trial: Radiotherapy doses can be cut safely",
        "description": "Experts say the findings could lead to \"enormous change\" in the way the treatment is delivered.",
        "url": "http://www.bbc.co.uk/news/health-66946336",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/548B/production/_107834612_cancer11.jpg",
        "publishedAt": "2023-09-30T06:22:18.1206747Z",
        "content": "Men undergoing treatment for prostate cancer could be safely given far less radiotherapy, a major trial has found. \r\nDoses can be cut by three-quarters meaning five higher doses is enough, instead of… [+3662 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Why finding alien life in Universe is now 'only a matter of time'",
        "description": "Experts are optimistic of detecting life signs on a faraway world within our lifetimes - possibly in the next few years.",
        "url": "http://www.bbc.co.uk/news/science-environment-66950930",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/122B2/production/_131281447_europa3.jpg",
        "publishedAt": "2023-09-30T01:37:17.8703084Z",
        "content": "Many astronomers are no longer asking whether there is life elsewhere in the Universe. \r\nThe question on their minds is instead: when will we find it? \r\nMany are optimistic of detecting life signs on… [+8224 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Man charged with leaking Donald Trump tax returns",
        "description": "He is also accused of stealing tax return details of \"thousands\" of the US's \"wealthiest individuals\".",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66968025",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1427/production/_131295150_83a1026aefd07da770de0251d2c569efd2436018.jpg",
        "publishedAt": "2023-09-30T00:37:11.9961822Z",
        "content": "A man in the US has been charged with leaking the tax returns of a \"high-ranking government official\" who is understood to be Donald Trump.\r\nProsecutors said Charles Littlejohn, a contractor for the … [+2287 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Trump co-defendant pleads guilty in Georgia election interference case",
        "description": "Scott Hall has agreed to a plea deal that requires him to testify in the election interference case.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66967877",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0B85/production/_131294920_bondsmannew.jpg",
        "publishedAt": "2023-09-29T22:37:16.9334448Z",
        "content": "One of 18 co-defendants of former President Donald Trump has pleaded guilty to five charges in the Georgia election interference case.\r\nBail bondsman Scott Hall has struck a plea deal with prosecutor… [+1870 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Obituary: Dianne Feinstein, trailblazing senator who defied CIA and White House",
        "description": "The Senate's longest-serving woman broke gender barriers, but her age was an issue late in her career.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66965949",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16395/production/_131292019_gettyimages-1447876511.jpg",
        "publishedAt": "2023-09-29T20:37:23.8399876Z",
        "content": "Media caption, Watch: Dianne Feinstein in her own voice\r\nThe camera bulbs flashed and Dianne Feinstein took the podium, beaming confidently in front of hundreds of cheering supporters.\r\n\"Tonight, his… [+11892 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "New York City: State of emergency over flash flooding",
        "description": "Subway systems in the city have flooded and a terminal at LaGuardia Airport is closed.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66965396",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8D21/production/_131292163_6749f9d4a61ea749f5db87c265917df912f29bb5.jpg",
        "publishedAt": "2023-09-29T15:22:21.949395Z",
        "content": "A state of emergency has been declared in New York City as strong storms have brought flash flooding. \r\nMany of the city's subway systems, streets and highways have flooded, while at least one termin… [+411 chars]"
        }
        ]
    constructor(){
        super();
        // console.log("Hi");
        this.state={
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>InfoSphere- Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((ele)=>{
                return <div className='col-md-4' key={ele.url}>
                <NewsComponent title={ele.title.length >= 45 ? ele.title.slice(0, 45) : ele.title} description={ele.description.slice(0,88)} imgUrl={ele.urlToImage} newsUrl={ele.url}/>
            </div>
            })}
            
        </div>
        
      </div>
    )
  }
}

export default News
