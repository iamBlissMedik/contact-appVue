export const useFirstLetter = () => {
  const capitalizeFirstLetter = (string) => {
    const formattedWord =
      string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

    return formattedWord;
  };
  return {
    capitalizeFirstLetter,
  };
};
