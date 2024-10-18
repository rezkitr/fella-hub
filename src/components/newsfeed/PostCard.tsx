import { ENDPOINTS } from '@/utils/endpoints'
import { IPost, IUser } from '@/utils/types'
import { useEffect, useState } from 'react'
import { FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { FaRegShareFromSquare } from 'react-icons/fa6'
import PostItem from './PostItem'
import UserCard from './UserCard'

interface IProps {
  post: IPost
}

const PostCard = ({ post }: IProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(ENDPOINTS.user(post.userId))
      if (!res.ok) {
        throw new Error('Failed to get user')
      }

      const data = await res.json()
      setUser(data)
    }
    getUser()
  }, [post])

  if (!user) {
    return false
  }

  return (
    <div className="bg-white rounded-lg px-6 py-4 md:w-[640px] mx-auto shadow-md space-y-3">
      <UserCard user={user} />
      <div className="border-b" />
      <PostItem title={post.title} body={post.body} />
      <div className="border-b" />
      <div className="flex items-center gap-x-3 text-gray-500">
        <FaRegHeart />
        <FaRegShareFromSquare />
        <FaRegBookmark />
      </div>
    </div>
  )
}

export default PostCard
