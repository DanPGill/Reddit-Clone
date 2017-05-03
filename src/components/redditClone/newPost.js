import React from 'react'

export default props => {
  return (
    <div>
      <form />
      <button onClick={() => props.onAddPost('https://www.amazon.co.uk', "Earth's Most Customer- centric Company", 'post100')}>Create a New Post</button>
    </div>
  )
}
