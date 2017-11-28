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


  createEvent: function(event) {
      console.log("event", event);
      return axios.post("/api/events", event);
  },

  searchEvent: function(searchTerm) {
      // Search for events whose name is LIKE the search term
      console.log("search term", searchTerm);
      return axios.get("/api/events/name/" + searchTerm);
  }

};
