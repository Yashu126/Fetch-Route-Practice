import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const formatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
    }
    this.setState({blogData: formatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogData
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info">
            <h2 className="h2">{title}</h2>
            <div className="author-img">
              <img src={avatarUrl} alt={author} className="avt-pic" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-img" />
            <p className="p2">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
