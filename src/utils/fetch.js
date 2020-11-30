import { privateFetch } from ".";

export default {
  async get(path, data) {
    return await privateFetch(path, "GET", data);
  },
  async post(path, data) {
    return await privateFetch(path, "POST", data);
  }
};
