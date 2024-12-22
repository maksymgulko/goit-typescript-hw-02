import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onAdd }) => {
  return (
    <button onClick={onAdd} type="button" className={s.button}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
