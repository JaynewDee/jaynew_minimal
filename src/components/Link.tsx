import React from 'react'

interface LinkProps {
   name: string
}
const Link:React.FC<LinkProps> = ({name}) => {
  return (
    <div className="navLink">{name}</div>
  )
}

export default Link;