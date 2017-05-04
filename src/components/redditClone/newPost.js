import React from 'react'

export default props => {
  return (
    <div>
      <div>
        <button onClick={() => props.onAddPost('https://www.amazon.co.uk', "Earth's Most Customer- centric Company")}>Create a New Post</button>
      </div>
    </div>
  )
}
