import axios from 'axios';

const fetchData = (() => {
  const api = {
    key: 'AIzaSyCCmiD2cIhH6Q5CgXFIfJ9kSgDL7Q_46P4',
    baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  };

  const url = `${api.baseurl}${api.key}/scores/`;

  const saveScore = (user, score = 0) => {
    const details = { user, score };
    return axios.post(url, details).then(response => response.data);
  };

  const getScores = () => axios.get(url).then(response => response.data.result);

  return {
    saveScore, getScores,
  };
})();

export default fetchData;
