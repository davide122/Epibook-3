import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const SingleBook =(props)=> {
 const [selectbook, setSelectBook] = useState(true)
 
    return (
      <>
        <Card
          onClick={() =>setSelectBook({ selectbook: !selectbook })}
          style={{ border: setSelectBook ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {selectbook && <CommentArea asin={props.book.asin} />}
      </>
    )
  }


export default SingleBook;
