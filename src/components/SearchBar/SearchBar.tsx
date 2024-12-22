import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.search.value;

    if (form.elements.search.value.trim() === "") {
      toast.error("This didn't work.");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header className={s.bar}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.searchButton} aria-label="Search">
            <FaSearch size={20} />
          </button>
          <Toaster />
        </div>
      </form>
    </header>
  );
};
export default SearchBar;
