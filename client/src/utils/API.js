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
  // 	axios.get("/api/auth/loggedinUser")  
  // 	  .then(function (response) {
  //   	var linkedInId = (response && response.data && response.data.id) ? response.data.id : "";
	 //    console.log(`responseData:...... ${JSON.stringify(linkedInId)}`);
	 //  })
	 //  .catch(function (error) {
	 //    console.log(error);
	 //  });
  // }
  getAllEvents: function() {
  	return axios.get("/api/events");
  },
  getEventsHostedByCurrentUser: function (hostLinkedinId) {
    // // axios.get("/api/auth/loggedinUser")
    // //   .then(function(response) {
    // //     var linkedinId="IJngCO4geP";
    // //     return axios.get(`/api/users?linkedinId=${linkedinId}`);
    // //   });
     // var hostLinkedinId="33333596e85f07235822f6dc";
      return axios.get(`/api/events?hostUser=${hostLinkedinId}`);
      // return axios.get(`/api/events`);

  },
  getEventsAttendedByCurrentUser: function (linkedinUrlPart) {
      var linkedinUrlPart="kiglaze";
      return axios.get(`/api/events?attendees=${linkedinUrlPart}`);
      // return axios.get(`/api/events`);
  }
};
