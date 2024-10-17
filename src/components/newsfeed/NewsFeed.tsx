'use client'

import { IPost } from '@/utils/types'
import { useEffect, useRef, useState } from 'react'
import PostCard from './PostCard'

interface IProps {
  posts: IPost[]
}

const NewsFeed = ({ posts }: IProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentPosts, setCurrentPosts] = useState<IPost[]>(posts.slice(0, 5))
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const loaderRef = useRef(null)

  const loadMoreItems = () => {
    setIsLoadingData(true)
    const newPosts = posts.slice(0, 5 * (currentPage + 1))
    setCurrentPosts(newPosts)
    setCurrentPage((prev) => prev + 1)
    setTimeout(() => {
      setIsLoadingData(false)
    }, 1000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && currentPosts.length < posts.length) {
        loadMoreItems()
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loaderRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaderRef, currentPosts])

  return (
    <div className="space-y-4">
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {isLoadingData && <p className="text-center">Loading...</p>}
      <div ref={loaderRef} className="h-2" />
    </div>
  )
}

export default NewsFeed
