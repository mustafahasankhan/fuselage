import { parse } from '../src';
import { paragraph, plain, mentionUser, mentionChannel } from '../src/utils';

test.each([
  ['@guilherme.gazzo', [paragraph([mentionUser('guilherme.gazzo')])]],
  [
    '@guilherme.gazzo. ',
    [paragraph([mentionUser('guilherme.gazzo.'), plain(' ')])],
  ],
  ['#GENERAL', [paragraph([mentionChannel('GENERAL')])]],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
