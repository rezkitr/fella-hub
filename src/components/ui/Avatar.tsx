interface IProps {
  fullName: string
}

const Avatar = ({ fullName }: IProps) => {
  const getInitials = () => {
    const names = fullName.split(' ')
    const initials = names.map((name) => name.charAt(0).toUpperCase()).join('')

    return initials
  }

  return (
    <div className="rounded-full bg-amber-200 w-10 h-10 flex items-center justify-center font-semibold">
      {getInitials()}
    </div>
  )
}

export default Avatar
