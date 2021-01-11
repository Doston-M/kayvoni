class ApiService {
  static _host = "https://kayvoni.uz";
  static _apiBase = this._host + "/api";
  static _headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  static updateData = (url, token, form) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(form),
    }).then((res) => res.json());
  };

  static postData = (url, token, form) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(form),
    }).then((res) => res.json());
  };
  static getResources = (url, token = null) => {
    let headers = [];

    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }

    return fetch(this._apiBase + url, { headers }).then((res) => res.json());
  };
}
export default ApiService;
