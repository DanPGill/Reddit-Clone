import React from 'react'
import Form from 'components/core/form'

export default props => {
  return (
    <div>
      <div>
        <Form onSubmit={() => props.onAddPost()}>
          Link:
          <input onChange={e => props.onUpdatePostLink(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          Title:
          <input onChange={e => props.onUpdatePostTitle(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          <button>Create a New Post</button>
        </Form>
      </div>
    </div>
  )
}
