import { BASE_URL } from '../components/baseUrl';

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}name/${searchQuery}`).then(response => {
        if (!response.ok) throw `Ошибка: ${response.status}`;
        
        return response.json();
    });
};

export default { fetchCountries };