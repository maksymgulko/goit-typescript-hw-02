import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticlesWithTopic } from "./imageFetch";
import { useState } from "react";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const openModal = (image: Photo): void => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  async function fetchPhotos(newTopic: string): Promise<void> {
    setPage(1);
    setTopic(newTopic);
    setPhotos([]);
    setErrorMsg(false);

    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(newTopic);
      setPhotos(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    } finally {
      setLoader(false);
    }
  }

  async function addPhotos(): Promise<void> {
    const nextPage = page + 1;
    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(topic, nextPage);
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={fetchPhotos} />
      {errorMsg ? (
        <ErrorMessage />
      ) : (
        <ImageGallery data={photos} getModal={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        selectedImage={selectedImage}
        onRequestClose={closeModal}
      />
      {loader && <Loader />}
      {photos.length > 0 && <LoadMoreBtn onAdd={addPhotos} />}
    </>
  );
}

export default App;
