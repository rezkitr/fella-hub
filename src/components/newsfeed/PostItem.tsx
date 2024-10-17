interface IProps {
  title: string
  body: string
}

const PostItem = ({ title, body }: IProps) => {
  return (
    <div>
      <h1 className="font-bold text-lg md:text-xl underline">{title}</h1>
      <p className="mt-3">{body}</p>
    </div>
  )
}

export default PostItem
