import React from 'react'
import useFatch from '../useFatch';

function Login() {
  const [data] = useFatch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      login page
      {data &&
   data.map((item) => {
   return <p key={item.id}>{item.title}</p>;
   })}

    </div>
  )
}

export default Login
