import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CharacterResponse } from "./types";

const fetchCharacterById = async (
  id: string
): Promise<CharacterResponse | null> => {
  if (!id) {
    return null;
  }
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch character:", error);
    throw error;
  }
};

export const useCharacter = (id?: string) => {
  return useQuery<CharacterResponse | null>({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id!),
    staleTime: 1000 * 60 * 5,
  });
};
