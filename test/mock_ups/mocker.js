import 'babel-polyfill';

const getScores = () => Promise.resolve({ user: 'UserOne', score: 200 });
const saveScores = () => Promise.resolve({ user: 'UserTwo', score: 20 });

export { getScores, saveScores };
