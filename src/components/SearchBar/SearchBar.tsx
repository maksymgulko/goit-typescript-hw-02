import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const topic = form.elements.namedItem("search") as HTMLInputElement;
    const searchValue = topic.value;

    if (searchValue.trim() === "") {
      toast.error("This didn't work.");
      return;
    }

    onSearch(searchValue);
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
