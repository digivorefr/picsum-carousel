import Flickity from 'flickity';
import readAndPick from 'scripts/modules/api';
import buildCell from 'scripts/modules/cell';

// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');
require('../images/icons/favicon-32x32.png');
require('../images/icons/favicon-16x16.png');
require('../images/icons/apple-icon-180x180.png');

const Carousel = async (imagesNumber = 10) => {
  // Retrieve app's root element
  const root = document.querySelector('#app');
  if (root === null) throw new Error('"#app" element not found.');

  root.classList.add('loading');

  // Listening theme checkbox to change theme.
  document.getElementById('theme').addEventListener('change', (event) => {
    if (event.target.checked === true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

  // Retrieve & pick pictures.
  const pictures = await readAndPick(imagesNumber);

  // Build cells HTML from pictures data.
  pictures.forEach((picture) => {
    root.appendChild(buildCell(picture));
  });

  // Generate carousel.
  return new Flickity(root, {
    autoPlay: 5000,
    setGallerySize: false,
    resize: true,
    selectedAttraction: 0.018,
    friction: 0.4,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 50,
      x3: 15,
    },
    lazyLoad: 1,
    on: {
      ready: () => {
        root.classList.remove('loading');
      },
    },
  });
};

// Ensures DOM is fully loaded before running app's main logic.
// Loading hasn't finished yet...
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Carousel);
  // `DOMContentLoaded` has already fired...
} else {
  Carousel(10);
}

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
