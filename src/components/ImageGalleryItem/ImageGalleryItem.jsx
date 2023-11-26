import { ModalContainer } from 'components/Modal/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, largeImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };
  return (
    <div>
      <Image src={smallImg} alt="pic" onClick={toggleModal} />
      <ModalContainer
        url={largeImg}
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
      />
    </div>
  );
};

// openModal = () => {
//   this.setState({ isModalOpen: true });
// };
// closeModal = () => {
//   this.setState({ isModalOpen: false });
// };
