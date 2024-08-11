import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const EachSong = props => {
  const {eachItem, deleteSong} = props
  const {duration, genre, id, imageUrl, name} = eachItem

  const onRemove = () => {
    deleteSong(id)
  }

  return (
    <li className="list-styling">
      <div className="album-icon-section">
        <img src={imageUrl} alt="track" className="album-icon" />
        <div className="song-info">
          <p className="name-styling">{name}</p>
          <p className="genre-styling">{genre}</p>
        </div>
      </div>
      <div className="duration-section">
        <p className="name-styling">{duration}</p>
        <button
          type="button"
          className="button-styling"
          onClick={onRemove}
          data-testid="delete"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default EachSong
