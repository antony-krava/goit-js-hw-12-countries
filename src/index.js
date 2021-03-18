import './styles.css';
import API from './js/api/fetchCountries';
import linksRef from './js/components/refs';
import _debounce from 'lodash';
import { pnotifyError, closeNotice } from './js/components/notify';
import createBaseMarkup from '../src/js/markup/createBaseMarkup';
import createMarkup from '../src/js/markup/createMarkup';
import countryCard from './templates/countryCard.hbs';
import countriesList from './templates/countriesList.hbs';

createBaseMarkup();

const { searchResultRef, inputRef } = linksRef();

function inputChange({ target }) {
    closeNotice();
    
    const searchQuery = target.value;
    
    if (!searchQuery.trim()) return;

    API.fetchCountries(searchQuery)
        .then(response => {
            if (response.length === 1) {
                const resultOneCountry = response.reduce((acc, item) => item);

                createMarkup(searchResultRef, countryCard({ ...resultOneCountry }));

                console.log(response);
                console.log(resultOneCountry);
            } else if (response.length <= 10) {
                createMarkup(searchResultRef, countriesList(response));
            } else {
                throw 'Слишком много совпадений..';
            }
        }).catch(error => {
            createMarkup(searchResultRef, '');
            pnotifyError(error);
        });
}

const search = () => inputRef.addEventListener('input', _.debounce(inputChange, 500));

search();