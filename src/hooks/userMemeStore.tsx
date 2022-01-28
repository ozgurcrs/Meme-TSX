import useFetch from "./useFetch";

export const useMemeStore = () => {
  const { data } = useFetch("https://api.imgflip.com/get_memes");

  return { data };
};
