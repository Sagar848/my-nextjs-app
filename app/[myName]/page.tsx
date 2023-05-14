import React from 'react'

interface PageProps {
    params: {
        myName: string
    }
}

const Page = (props: PageProps) => {
  return (
    <div>My name is {props.params.myName}</div>
  )
}

export default Page