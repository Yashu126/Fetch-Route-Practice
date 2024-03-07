import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {eachBlog} = props
  const {author, avatarUrl, id, imgUrl, title, topic} = eachBlog
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="li">
        <img src={imgUrl} alt={id} className="img-url" />
        <div>
          <p className="topic">{topic}</p>
          <h2 className="title">{title}</h2>
          <div className="avt-name">
            <img src={avatarUrl} alt={author} className="avt" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
