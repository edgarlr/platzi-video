import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarrouselItem.scss';

const CarrouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carrousel-item'>
      <img className='carrousel-item__img' src={cover} alt={title} />
      <div className='carrousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <i className='material-icons'>play_arrow</i>
          </Link>

          {isList ? (
            <i
              className='material-icons'
              onClick={() => handleDeleteFavorite(id)}
            >
              close
            </i>
          ) : (
            <i
              className='material-icons'
              onClick={handleSetFavorite}
            >
              add
            </i>
          )}

        </div>
        <p className='carrousel-item__details--title'>{title}</p>
        <p className='carrousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarrouselItem);
