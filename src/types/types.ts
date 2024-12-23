type Photo = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type ImageCardProps = {
  photo: Photo;
  onClick: () => void;
};

type ImageGalleryProps = {
  data: Photo[];
  getModal: (item: Photo) => void;
};

type ImageModalProps = {
  isOpen: boolean;
  selectedImage: Photo | null;
  onRequestClose: () => void;
};

type SearchBarProps = {
  onSearch: (topic: string) => Promise<void>;
};

type LoaderProps = {
  visible: boolean;
};

type LoadMoreProps = {
  onAdd: () => Promise<void>;
};
