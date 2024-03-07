import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

class Home extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imgUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsData: formatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogsData={blogsData} />
        )}
      </div>
    )
  }
}
export default Home
