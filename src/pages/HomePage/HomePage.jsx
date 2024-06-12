export default function HomePage() {
  const fetchJokes = async () => {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/jokes/"
    );
  };

  return;
}
