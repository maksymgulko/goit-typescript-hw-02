import s from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({ photo, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        className={s.image}
      />
    </div>
  );
};
export default ImageCard;
