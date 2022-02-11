/**
   * Build a carousel slide DOM element
   * @param {Object} picture single picture data object retrieved from API
   * @returns {HTMLElement} the element
   */
export default (picture) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('carousel-cell');

  const img = document.createElement('img');
  img.setAttribute('data-flickity-lazyload', `https://picsum.photos/id/${picture.id}/${window.innerWidth - 96}/${window.innerHeight - 96}`);
  img.classList.add('image');

  const loader = document.createElement('div');
  loader.classList.add('loader');

  const author = document.createElement('div');
  author.classList.add('author');
  author.innerHTML = `by ${picture.author} <a href="${picture.url}" target="_blank" rel="noreferer">&gt;</a>`;

  wrapper.appendChild(img);
  wrapper.appendChild(loader);
  wrapper.appendChild(author);

  return wrapper;
};
