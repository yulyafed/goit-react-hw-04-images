import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/ClipLoader';

export const Loader = ({ isLoading }) => {
  return (
    <BeatLoader
      color="green"
      loading={isLoading}
      size={60}
      aria-label="Loading Spinner"
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};