import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGalleryBox } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as Api from 'services/Api';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    loadMoreAllowed: false,
    error: null,
  };

  itemsPerPage = 12;

  searchImages = async searchQuery => {
    try {
      this.setState({ isLoading: true });
      const galleryImages = await Api.galleryCardsApi(searchQuery, 1, this.itemsPerPage);
      this.setState({
        page: 1,
        query: searchQuery,
        images: galleryImages.hits,
        loadMoreAllowed: galleryImages.hits.length < galleryImages.totalHits,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: 'No images found',
      });
    }
  };

  loadMore = async () => {
    try {
      this.setState({ isLoading: true });
      const galleryImages = await Api.galleryCardsApi(
        this.state.query,
        this.state.page + 1,
        this.itemsPerPage
      );
      this.setState(state => ({
        page: state.page + 1,
        images: [...state.images, ...galleryImages.hits],
        loadMoreAllowed: (state.page * this.itemsPerPage) + galleryImages.hits.length < galleryImages.totalHits,
        isLoading: false,
      }));
    } catch (error) {}
  };

  render() {
    const { isLoading, images, query, error, loadMoreAllowed } = this.state;

    return (
      <Container>
        <Loader isLoading={isLoading} />
        <SearchBar
          onSubmit={this.searchImages}
          isSubmitting={isLoading}
          searchQuery={query}
        />
        {error && <p>{error}</p>}
        {images.length > 0 && <ImageGalleryBox items={images} />}
        {loadMoreAllowed && <ButtonLoadMore onClick={this.loadMore}/>}
      </Container>
    );
  }
}
