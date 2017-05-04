import React from 'react'
import Form from 'components/core/form'

export default props => {
  return (
    <div>
      <div>
        <Form onSubmit={() => props.onAddPost()}>
          <label htmlFor="link">
            Link:
          </label>
          <input type="link" onChange={e => props.onUpdatePostLink(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          <label htmlFor="title">
            Title:
          </label>
          <input type="title" onChange={e => props.onUpdatePostTitle(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          <button>Create a New Post</button>
        </Form>
      </div>
    </div>
  )
}
