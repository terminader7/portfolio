export const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");

  const data = await response.json();
  return data;
};

export const getRandomJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");

  const data = await response.json();
  return data;
};
