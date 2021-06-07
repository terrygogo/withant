
import React from 'react'
import { Empty } from 'antd';
import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json());

function Setting () {
  const { data, error } = useSWR('api/post/abc?name=kimch0i', fetcher)
 
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello {data.name}!</div>
}
export default Setting