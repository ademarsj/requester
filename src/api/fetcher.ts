export default class Fetcher {
  private baseURL : string;

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  async get() {
    //1
    return fetch(this.baseURL);
  }
  async post() {
    //1
  }
  async put() {
    //1
  }
  async delete() {
    //1
  }
}