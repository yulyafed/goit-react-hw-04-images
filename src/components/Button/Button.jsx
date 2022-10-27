import PropTypes from 'prop-types';
import { ButtonForm } from './Button.styled';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <ButtonForm type="button" onClick={onClick}>
      Load more
    </ButtonForm>
  );
};

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
};
