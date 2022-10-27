import { Overlay, ModalForm} from './Modal.styled'

export const Modal = ({ item, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalForm>
        <img src={item.largeImageURL} alt="" />
      </ModalForm>
    </Overlay>
  );
};
