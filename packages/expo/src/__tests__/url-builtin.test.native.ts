// Uncomment to see the default native behavior
// import 'react-native/Libraries/Core/setUpXHR';

describe(URL, () => {
  it(`uses the Expo built-ins`, () => {
    expect((URL as any)[Symbol.for('expo.builtin')]).toBe(true);
  });
  it(`supports getter`, () => {
    expect(new URL('https://acme.com').hostname).toBe('acme.com');
  });
  it(`can construct standard URLs`, () => {
    expect(new URL('http://acme.com').toString()).toBe('http://acme.com/');
    expect(new URL('/home', 'http://localhost:3000').toString()).toBe('http://localhost:3000/home');
  });
  it(`supports canParse`, () => {
    expect(URL.canParse('http://acme.com')).toBe(true);
    expect(URL.canParse('invalid url')).toBe(false);
  });
});

describe(URLSearchParams, () => {
  it(`uses the Expo built-ins`, () => {
    expect((URLSearchParams as any)[Symbol.for('expo.builtin')]).toBe(true);
  });
  it(`uses the working URLSearchParams builtin from the global`, () => {
    expect(() => new URLSearchParams({ a: 'b' }).set('a', 'c')).not.toThrow();
  });
});
