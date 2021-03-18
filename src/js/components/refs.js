export default function linksRef() {
  const refs = {
    searchResultRef: document.querySelector('.search-result'),
    inputRef: document.querySelector('#js-input'),
    bodyRef: document.querySelector('body'),
  };
  
  return refs;
}