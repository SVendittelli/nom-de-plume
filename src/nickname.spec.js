const { replaceBrackets, replaceOrAppendBrackets } = require('./nickname');

describe('replaceBrackets', () => {
  test('should replace existing brackets', () => {
    expect(replaceBrackets('test [replace me]', 'replaced')).toStrictEqual(
      'test [replaced]'
    );
  });

  test('should not modify if there are no brackets', () => {
    expect(replaceBrackets('test', 'replaced')).toStrictEqual('test');
  });
});

describe('replaceOrAppendBrackets', () => {
  test('should replace existing brackets', () => {
    expect(
      replaceOrAppendBrackets('test [replace me]', 'replaced')
    ).toStrictEqual('test [replaced]');
  });

  test('should append if there are no brackets', () => {
    expect(replaceOrAppendBrackets('test', 'append')).toStrictEqual(
      'test [append]'
    );
  });
});
