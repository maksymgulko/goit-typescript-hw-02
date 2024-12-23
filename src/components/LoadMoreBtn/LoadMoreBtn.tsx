import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onAdd }) => {
  return (
    <button onClick={onAdd} type="button" className={s.button}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
