export const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");

  const data = await response.json();
  return data;
};

export const getRandomJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  return data;
};
