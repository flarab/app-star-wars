const BASE_URL = 'https://swapi.dev/api';

export const swapiService = {
    fetchMovies: async () => {
        try {
            const response = await fetch(`${BASE_URL}/films/`);
            if (!response.ok) {
                throw new Error('Error fetching movies');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    fetchCharacter: async (characterUrl: string) => {
        try {
            const response = await fetch(characterUrl);
            if (!response.ok) {
                throw new Error('Error fetching character');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};