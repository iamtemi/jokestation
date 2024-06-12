import { useEffect, useState } from "react";
import Joke from "../../components/Joke/Joke";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export default function HomePage() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTenRandomJokes = async () => {
    try {
      const { data } = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10"
      );
      setJokes(data.jokes);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTenRandomJokes();
  }, []);

  if (isLoading) {
    return <BeatLoader color="#000000" />;
  }

  if (error) {
    return <p>Error fetching post: {error.message}</p>;
  }

  console.log(jokes);

  return (
    <>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
      ;
    </>
  );
}
