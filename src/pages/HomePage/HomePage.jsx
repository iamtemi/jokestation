import { useEffect, useState } from "react";
import Joke from "../../components/Joke/Joke";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import "./HomePage.scss";

export default function HomePage() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomJokes = async (category, noOfJokes) => {
    try {
      const { data } = await axios.get(
        `https://v2.jokeapi.dev/joke/${category}?type=twopart&amount=${noOfJokes}`
      );
      setJokes(data.jokes);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  if (isLoading) {
    return <BeatLoader color="#000000" />;
  }

  if (error) {
    return <p>Error fetching post: {error.message}</p>;
  }

  return (
    <section className="jokes">
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </section>
  );
}
