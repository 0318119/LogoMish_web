import React from 'react'
import styles from './assets/css/blog.module.css'

const blog = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
              <div className={styles.blog_Content_heading}>
                <h6>BLOG</h6>
              </div>
            </div>
        </div>
    </div>
  )
}

export default blog