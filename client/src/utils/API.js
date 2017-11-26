var axios = require("axios");

export default {
  // Gets info of currently logged in user.
  getUserInfo: function() {
    return axios.get("/api/auth/loggedinUser");
  },
  logout: function() {
  	return axios.get("/api/auth/logout");
  },
  // createEvent: function(event) {
  //   //console.log("event", event);
  //   return axios.post("/api/event", event);
  // }
};
