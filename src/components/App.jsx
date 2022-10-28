import { useState } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGalleryBox } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as Api from 'services/Api';
import { Container } from './App.styled';

export default function App() {
  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loadMoreAllowed, setloadMoreAllowed] = useState(false);
  const [error, setError] = useState(null);
  
 const itemsPerPage = 12;

 const searchImages = async searchQuery => {
    try {
      setisLoading(true);

      const galleryImages = await Api.galleryCardsApi(searchQuery, 1, itemsPerPage);

      setPage(1);
      setQuery(searchQuery);
      setImages(galleryImages.hits);
      setloadMoreAllowed(galleryImages.hits.length < galleryImages.totalHits);

      setisLoading(false);
      
    } catch (error) {
      setError('No images found');
    }
  };

  const loadMore = async () => {
    try {
      setisLoading(true);

      const galleryImages = await Api.galleryCardsApi(query, page + 1, itemsPerPage);

      setPage( page + 1 );
      setImages([...images, ...galleryImages.hits]);
      setloadMoreAllowed(        
        page * itemsPerPage + galleryImages.hits.length < galleryImages.totalHits);
      
      setisLoading(false);
      
    } catch (error) {}
  };

     return (
      <Container>
        <Loader isLoading={isLoading} />
        <SearchBar
          onSubmit={searchImages}
          isSubmitting={isLoading}
          searchQuery={query}
        />
        {error && <p>{error}</p>}
        {images.length > 0 && <ImageGalleryBox items={images} />}
        {loadMoreAllowed && <ButtonLoadMore onClick={loadMore}/>}
      </Container>
    );
  }

