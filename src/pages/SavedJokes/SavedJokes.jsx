import { BeatLoader } from "react-spinners";
import "./SavedJokes.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/CardList/CardList";

export default function SavedJokes() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const PORT = import.meta.env.VITE_PORT;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchSavedJokes = async () => {
    try {
      const url = `http://${BASE_URL}:${PORT}/saved`;
    
      const { data } = await axios.get(url);

      console.log(data);

      setJokes(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedJokes();
  }, []);

  if (isLoading) {
    return <BeatLoader color="#000000" />;
  }

  if (error) {
    return <p>Error fetching post: {error.message}</p>;
  }

  return <CardList jokes={jokes} />;
}
