import NewsFeed from '@/components/newsfeed/NewsFeed'
import { ENDPOINTS } from '@/utils/endpoints'
import { IPost } from '@/utils/types'

const HomePage = async () => {
  const data = await fetch(ENDPOINTS.posts)
  if (!data.ok) {
    throw new Error('Failed to get posts')
  }
  const posts: IPost[] = await data.json()

  return <NewsFeed posts={posts} />
}

export default HomePage
