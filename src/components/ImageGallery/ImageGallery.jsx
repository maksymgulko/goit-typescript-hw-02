import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ data, getModal }) => {
  return (
    <ul className={s.list}>
      {data.map((item) => (
        <li key={item.id} className={s.listItem}>
          <ImageCard photo={item} onClick={() => getModal(item)} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
