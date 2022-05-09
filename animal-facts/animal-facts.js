import { findById } from '../utils.js';
import { animals } from '../data.js';
import { renderListItemDetail } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const main = document.querySelector('main');

const animal = findById(params.get('id'), animals);
const animalDiv = renderListItemDetail(animal);
main.append(animalDiv);


