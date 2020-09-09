import 'babel-polyfill';
import { getScores } from './mock_ups/mocker';

test('The method is able to fetch correct user name from the provided URL', async () => {
  const result = await getScores();

  expect(result.user).toBe('UserOne');
  expect(result.user).not.toBe('TestUser');
});
