import {
  get
} from '../index'


export const getHitokoto = p => get('', {
  c: 'i',
  encode: 'json'
});