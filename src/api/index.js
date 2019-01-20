import axios from 'axios';
import humps from 'humps';

const instance = axios.create({
  baseURL: `https://aircall-job.herokuapp.com`,
  timeout: 15000,
  headers: {},
});

export class ApiService {
  static get(url, params = {}, config = {}) {
    return instance
      .get(url, {
        params: humps.decamelizeKeys(params),
        ...config,
      })
      .then(res => res && res.data ? humps.camelizeKeys(res.data) : null);
  }

  static post(url, params = {}, config = {}) {
    return instance
      .post(url, humps.decamelizeKeys(params), config)
      .then(res => res && res.data ? humps.camelizeKeys(res.data) : null);
  }
}
