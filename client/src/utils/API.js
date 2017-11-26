var axios = require("axios");

export default {
  // Gets info of currently logged in user.
  getUserInfo: function() {
    return axios.get("/api/auth/loggedinUser");
  },
  logout: function() {
  	return axios.get("/api/auth/logout");
  },
  // getEventsCurrentUser: function() {
  // 	return axios.get("/api/auth/loggedinUser")  
  // 	  .then(function (response) {
  //   	var linkedInId = (response && response.data && response.data.id) ? response.data.id : "";
	 //    console.log(`responseData:...... ${JSON.stringify(linkedInId)}`);
	 //  })
	 //  .catch(function (error) {
	 //    console.log(error);
	 //  });
  // },
  getAllUserInfo: function() {
  	return axios.get("api/user/all");
  }
};
