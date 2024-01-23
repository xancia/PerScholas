/* eslint-disable react/prop-types */
import { useState } from "react"
import FeedList from "./FeedList"
import NewPost from "./NewPost"
import Container from "./util/Container"

let postSeed = [
    {
        img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Bob',
        timestamp: '1/22/2024',
        body: 'This is a test',
        likes: 3,
        comments: [
            {
                name: 'John',
                img: '',
                body: 'testing',
                timestamp: '1/23/2024'
            }
        ]
    },
    {
        img: '',
        name: 'Bob',
        timestamp: '1/22/2024',
        body: 'Testing number 2',
        likes: 1,
        comments: [
            
        ]
    }
]

const Feed = ({username}) => {
    const [post, setPost] = useState(postSeed)

    
  return (
    <div>
        <Container className="pt-28 flex justify-center items-center">
            <div className="flex flex-col shadow-md w-9/12">
                <div className="">
                    <p className="p-4 text-4xl">Feed</p>
                </div>
                <NewPost username={username} setPost={setPost} post={post}/>
                <FeedList post={post}/>
            </div>
        </Container>
    </div>
  )
}

export default Feed