import './index.css'

import {Component} from 'react'

import {IoSearch} from 'react-icons/io5'

import EachSong from '../EachSong'

class MusicPlayList extends Component {
  state = {
    tracksList: this.props.initialTracksList,
    search: '',
    notFound: false,
    updatedList: this.props.initialTracksList,
  }

  deleteSong = id => {
    const {updatedList} = this.state
    const updatedPlayList = updatedList.filter(eachItem => eachItem.id !== id)
    if (updatedPlayList.length === 0) {
      this.setState({notFound: true})
    }
    this.setState({updatedList: updatedPlayList})
  }

  renderUpdatedList = () => {
    const {tracksList, search} = this.state
    const updateSearchedList = tracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(search.toLowerCase()),
    )
    console.log(updateSearchedList.length)
    if (updateSearchedList.length === 0) {
      this.setState({notFound: true})
    }
    this.setState({updatedList: updateSearchedList})
  }

  onSearch = event => {
    this.setState({search: event.target.value}, this.renderUpdatedList)
  }

  render() {
    const {search, notFound, updatedList} = this.state
    return (
      <div className="main-container">
        <div className="artist-section">
          <h1 className="artist-title">Ed Sheeran</h1>
          <p className="artist-designation">Singer</p>
        </div>
        <div className="songs-section">
          <div className="top-section">
            <h1 className="artist-title">Songs PlayList</h1>
            <div className="input-section">
              <input
                type="search"
                className="input-field"
                placeholder="Search"
                value={search}
                onChange={this.onSearch}
              />
              <IoSearch className="icon-styling" />
            </div>
          </div>
        </div>
        {!notFound && (
          <>
            <ul className="song-list-styling">
              {updatedList.map(eachItem => (
                <EachSong
                  eachItem={eachItem}
                  key={eachItem.id}
                  deleteSong={this.deleteSong}
                />
              ))}
            </ul>
          </>
        )}
        {notFound && <p className="not-found-text">No Songs Found</p>}
      </div>
    )
  }
}

export default MusicPlayList
