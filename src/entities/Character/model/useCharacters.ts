import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async (page: number, searchQuery: string) => {
  const response = await axios.get("https://swapi.dev/api/people/", {
    params: {
      page,
      search: searchQuery,
    },
  });
  return response.data;
};

export const useCharacters = (page: number, searchQuery: string) => {
  return useQuery({
    queryKey: ["characters", page, searchQuery],
    queryFn: () => fetchCharacters(page, searchQuery),
    staleTime: 1000 * 60 * 5,
  });
};
