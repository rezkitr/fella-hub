import { IUser } from '@/utils/types'
import { AiOutlineMail } from 'react-icons/ai'
import { Avatar } from '../ui'

interface IProps {
  user: IUser
}

const UserCard = ({ user }: IProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <Avatar fullName={user.name} />
      <div className="space-y-1">
        <h5 className="text-sm text-sky-600">
          {user.name}{' '}
          <span className="text-xs text-gray-500">@{user.username}</span>
        </h5>
        <div className="flex items-center gap-x-1 text-gray-500">
          <AiOutlineMail className="text-sm" />
          <h5 className="text-xs leading-none">{user.email}</h5>
        </div>
      </div>
    </div>
  )
}

export default UserCard
