
import React from 'react'
import Image from 'next/image'

import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json());

function Setting () {
  const { data, error } = useSWR('api/post/abc?name=kimch0i', fetcher)
 
  if (error) return 
   <Image
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
  
  if (!data) return <div>loading...</div>

  // render data
  return  <div>tt loading...</div>
}
export default Setting