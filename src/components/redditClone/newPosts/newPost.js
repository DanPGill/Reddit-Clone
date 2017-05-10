import React from 'react'
import Form from 'components/core/form'
import styles from './styles'

export default props => {
  return (
    <div>
      <div>
        <Form onSubmit={() => props.onAddPost()} className={styles.newPostContainer}>
          <label htmlFor="link">
            Link:
          </label>
          <input id="link" className={styles.inputField} onChange={e => props.onUpdatePostLink(e.target.value)} value={props.currentlyEditingPost} />
          <div className={styles.padding} />
          <label htmlFor="title">
            Title:
          </label>
          <input id="title" className={styles.inputField} onChange={e => props.onUpdatePostTitle(e.target.value)} value={props.currentlyEditingPost} />
          <div className={styles.padding} />
          <button className={styles.newPostButton}>Create a New Post</button>
        </Form>
      </div>
    </div>
  )
}
