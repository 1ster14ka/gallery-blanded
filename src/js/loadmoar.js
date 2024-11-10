import { refs } from './refs';

export function showBtn() {
  refs.loadMoar.classList.remove('is-hidden');
}

export function hideBtn() {
  refs.loadMoar.classList.add('is-hidden');
}
