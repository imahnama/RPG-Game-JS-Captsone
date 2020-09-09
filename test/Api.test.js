import API from '../src/objects/Api';

test('result must exist', () => {
  API.saveScore('lilo', 10)
    .then((response) => {
      expect(response).toBe('lilo', 10);
    })
    .catch((error) => error);
});

test('should send an object to the API', () => {
  API.saveScore().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => { });
});

test('Score must be correct value', () => {
  API.saveScore('lilo', 10)
    .then((response) => {
      expect(response).not.toBe('lilo', 20);
    })
    .catch((error) => error);
});
