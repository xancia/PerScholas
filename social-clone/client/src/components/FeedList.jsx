import Post from "./Post"

const FeedList = () => {
    let post = [
        {
            img: '',
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


  return (
    <div className="">
        <div className="flex flex-col mx-8 my-4 bg-white">
            {post.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default FeedList