import { IPost } from '@/utils/types'
import PostItem from './PostItem'
import UserCard from './UserCard'

interface IProps {
  post: IPost
}

const PostCard = ({ post }: IProps) => {
  return (
    <div className="bg-white rounded-lg px-6 py-4 md:w-[640px] mx-auto shadow-md space-y-3">
      <UserCard id={post.userId} />
      <div className="border-b" />
      <PostItem title={post.title} body={post.body} />
    </div>
  )
}

export default PostCard
