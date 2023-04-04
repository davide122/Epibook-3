import { Component, useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea=()=> {
const [comments, setcomments]=useState([])
const [isLoading,setisloading]=useState(true)
const [isError,setiserror]=useState(false)

 




useEffect(()=>{
 const componentDidMount = async (props) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
         props.asin,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjQyNWY4MWI0MjAwMTM5YjI3ZDEiLCJpYXQiOjE2ODA2MTQ4MTcsImV4cCI6MTY4MTgyNDQxN30.lF3yGqzu-FwoUtyDJICHDf2nOGo9XViU0lfanZIguRQ",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setcomments({ comments: comments, isLoading: false, isError: false })
      } else {
        console.log('error')
        setcomments({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      setcomments({ isLoading: false, isError: true })
    }
  }
},[])

  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={3} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
    }

export default CommentArea;
