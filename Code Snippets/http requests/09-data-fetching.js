//Using React & axios to get data 

import React, {PropTypes, Component} from 'react'
import axios from 'axios'

class RepoListContainer extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    fetch: PropTypes.func,
  }
  static defaultProps = { fetch: axios.get }
  state = {repos: null, loading: false, error: null}

  componentDidMount() {
    this.fetchRepos()
  }

  fetchRepos() {
    this.setState({repos: null, loading: true, error: null})
    this.props.fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=100&sort=pushed`)
      .then(
        ({data: repos}) => this.setState({repos, error: null, loading: false}),
        error => this.setState({repos: null, error, loading: false})
      )
  }

  render() {
    const {repos, loading, error} = this.state
    const {username} = this.props
    return (
      <div>
        {!loading ? null : <div>Loading...</div>}
        {!error ? null : (
          <div>
            Error loading info for <code>{username}</code>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
        {!repos ? null : <RepoList username={username} repos={repos} />}
      </div>
    )
  }
}

function RepoList({username, repos}) {
  return (
    <div>
      <h1>{username}'s repos</h1>
      <ul style={{textAlign: 'left'}}>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </div>
  )
}
RepoList.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

export const example = () => (
  <RepoListContainer username="kentcdodds" fetch={mockFetch} />
)

// This is for you. Merry Christmas 🎅 🎄 🎁
function mockFetch() {
  const delay = 0 // set this to `Number.MAX_VALUE` test the loading state
  const sendError = false // set this to `true` to test out the error state
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sendError) {
        reject({
          message: 'Something went wrong',
          status: 500,
        })
      } else {
        resolve({
          data: [
            {id: 12345, name: 'turbo-sniffle'},
            {id: 54321, name: 'ubiquitous-succotash'},
            {id: 43234, name: 'solid-waffle'},
          ]
        })
      }
    }, delay)
  })
}

export default RepoListContainer
