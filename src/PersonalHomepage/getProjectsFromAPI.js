import axios from 'axios';
import personalData from './personalData.json';

export const getProjectsFromAPI = async () => {
    try {
        const response = await axios.get(personalData.githubAPI_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching GitHub projects:', error);
    }
};