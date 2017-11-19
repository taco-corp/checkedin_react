var axios = require("axios");

export default {
  login: function() {
    return axios.get("api/auth/linkedin");
  }
};
