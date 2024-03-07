import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <ul className="ul">
      {blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
