import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import {restaurants} from '../materials/mock'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// root.render(createElement(
// 'div',
// {},// {style: {color: 'red'}, className: 'someClass otherClass'}
// [1, 2, 3, 4, 5, 6].map((item) => createElement('li', {}, item))
// ));

root.render(createElement(
  'div',
  {},// {style: {color: 'red'}, className: 'someClass otherClass'}
  createElement(
    'div',
    {},
    createElement('h2', {}, restaurants[0].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, 
      createElement('li', {}, restaurants[0].menu[0].name),
      createElement('li', {}, restaurants[0].menu[1].name),
      createElement('li', {}, restaurants[0].menu[2].name)
    ),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {},
      createElement('li', {}, restaurants[0].reviews[0].text),
      createElement('li', {}, restaurants[0].reviews[1].text),
    )
  ),
  createElement(
    'div',
    {},
    createElement('h2', {}, restaurants[1].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, 
      createElement('li', {}, restaurants[1].menu[0].name),
      createElement('li', {}, restaurants[1].menu[1].name),
    ),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {},
      createElement('li', {}, restaurants[1].reviews[0].text),
      createElement('li', {}, restaurants[1].reviews[1].text),
      createElement('li', {}, restaurants[1].reviews[2].text),
    )
  ),
  createElement(
    'div',
    {},
    createElement('h2', {}, restaurants[2].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, 
      createElement('li', {}, restaurants[2].menu[0].name),
      createElement('li', {}, restaurants[2].menu[1].name),
      createElement('li', {}, restaurants[2].menu[2].name),
    ),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {},
      createElement('li', {}, restaurants[2].reviews[0].text),
    )
  ),
  createElement(
    'div',
    {},
    createElement('h2', {}, restaurants[3].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, 
      createElement('li', {}, restaurants[3].menu[0].name),
      createElement('li', {}, restaurants[3].menu[1].name),
    ),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {},
      createElement('li', {}, restaurants[3].reviews[0].text),
      createElement('li', {}, restaurants[3].reviews[1].text),
    )
  ),
));