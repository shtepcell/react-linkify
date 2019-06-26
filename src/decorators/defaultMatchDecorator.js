// @flow

import LinkifyIt from 'linkify-it';

const linkify = new LinkifyIt();

export default (text: string): Array<Object> => {
  return linkify.match(text);
};
