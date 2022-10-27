import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.closeModal();
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <Item>
          <Image src={item.webformatURL} alt="" onClick={this.openModal} />
          {isModalOpen && <Modal item={item} onClose={this.closeModal} />}
        </Item>
      </>
    );
  }
};


