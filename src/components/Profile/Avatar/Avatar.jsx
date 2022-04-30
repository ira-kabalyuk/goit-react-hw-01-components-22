import PropTypes from 'prop-types';
import styles from './Avatar.module.scss'

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={styles.avatar}/>
  )
}
  
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export {Avatar}