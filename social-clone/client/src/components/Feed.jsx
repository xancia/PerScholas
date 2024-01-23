import FeedList from "./FeedList"
import NewPost from "./NewPost"
import Container from "./util/Container"

const Feed = () => {
  return (
    <div>
        <Container className="pt-28 flex justify-center items-center">
            <div className="flex flex-col shadow-md w-9/12">
                <div className="">
                    <p className="p-4 text-4xl">Feed</p>
                </div>
                <NewPost />
                <FeedList />
            </div>
        </Container>
    </div>
  )
}

export default Feed