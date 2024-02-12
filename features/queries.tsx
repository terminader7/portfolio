export const getRandomQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching the quote", error);
  }
};
