

import Link from 'next/link';
import React from 'react';

const page = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  const users = data

  return (
    <div className='text-center'>
      {
        users.map(user => (
          <div key={user.id}>
            <Link href={`/details/${user.id}`}><h3 className='font-bold text-2xl'>Title: <span className='text-blue-500'>{user.title}</span></h3></Link>
          </div>
        ))
      }
    </div>
  );
};

export default page;
