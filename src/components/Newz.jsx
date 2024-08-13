import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Newz = (props) => {

const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [page,setPage] = useState(1)
const [totalResults,settotalResults] = useState(0)

const capiFirst = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  const updateNewz = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

   setLoading(true)

    let data = await fetch(url)
    props.setProgress(30);
    let passedData = await data.json()
    console.log(passedData)
    props.setProgress(60);

    setArticles(passedData.articles)
    settotalResults(passedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  useEffect(() => {
    document.title=`${
 capiFirst(props.category)} - Newz Nation`
    updateNewz();
    //eslint-disable-next-line
  },[page, props.category])

const fetchMoreData = async () => {

  
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
   setPage(page+1)
  let data = await fetch(url)
      let passedData = await data.json()
      console.log(passedData)
      setArticles(articles.concat(passedData.articles))
      settotalResults(passedData.totalResults)
    }      

    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: '35px 8px'}}>Newz Nation - Top <span style={{color:'#f53137'}}>{capiFirst(props.category)}</span> Headlines</h1>
        <h3 className='text-center'>{loading && <Loader/>}</h3>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loader/>}
        >
          <div className="container"></div>
        <div className="row">
          { articles.map((element) => {
              
               return <div className="col-md-4" key={element.url}>
                  <NewsItem 
                    title={element.title ? element.title.slice(0, 60) : "No Title"}
                    description={element.description ? element.description.slice(0, 80) : "NO description Click on Read more to get the full news"}
                    imgurl={element.urlToImage ? element.urlToImage : "/newss.jpeg"} 
                    newsUrl={element.url} author={element.author} date={element.publishedAt}
                  />
                </div>
            })
          }
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
}
Newz.defaultProps = {
  country: 'in',
  pageSize : 8,
  category : 'general'
  
}

Newz.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}
export default Newz
