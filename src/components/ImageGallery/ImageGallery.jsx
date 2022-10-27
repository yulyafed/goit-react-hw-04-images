import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGalleryBox = ({ items }) => {
  return (
    <>
      <List>
        {items.map(item => (
          <ImageGalleryItem item={item} key={item.id} />
        ))}
      </List>
    </>
  );
};

ImageGalleryBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
