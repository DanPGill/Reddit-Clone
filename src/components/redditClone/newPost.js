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
          <input id="link" onChange={e => props.onUpdatePostLink(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          <label htmlFor="title">
            Title:
          </label>
          <input id="title" onChange={e => props.onUpdatePostTitle(e.target.value)} value={props.currentlyEditingPost} />
          <br />
          <button>Create a New Post</button>
        </Form>
      </div>
    </div>
  )
}
