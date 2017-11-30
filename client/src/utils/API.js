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
  },

  getEventByName: function(eventName) {
    console.log("I am here");
    console.log(eventName);
    return axios.get("/api/events/name/" + eventName)
     /*Get the data, make api get call, search all return object */
  },

  createEvent: function(event) {
      console.log("event", event);
      return axios.post("/api/events", event);
  },

  addUserToEvent: function(userObject){
    console.log("userObject");
    console.log(userObject);
    //debugger
    return axios.put("/api/events/addAttendee", userObject);
  },

  searchEvent: function(searchTerm) {
      // Search for events whose name is LIKE the search term
      console.log("search term", searchTerm);
      return axios.get("/api/events/name/" + searchTerm);
  }

};
