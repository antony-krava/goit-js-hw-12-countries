import baseSearchMarkup from '../../templates/countrySearch.hbs';
import createMarkupFunction from './createMarkup';
import linksRef from '../components/refs';

const { bodyRef } = linksRef();

export default function createBaseMarkup() {
  createMarkupFunction(bodyRef, baseSearchMarkup());
}