var axios = require("axios");

export default {
  // Gets info of currently logged in user.
  getUserInfo: function() {
    return axios.get("/api/auth/loggedinUser");
  },
  logout: function() {
  	return axios.get("/api/auth/logout");
  },
  getAllEvents: function() {
  	return axios.get("/api/events");
  },
  getEventsHostedByUser: function (hostUserId) {
      return axios.get(`/api/events?hostUser=${hostUserId}`);
  },
  getEventsAttendedByUser: function (attendeeUserId) {
      return axios.get(`/api/events?attendees=${attendeeUserId}`);
  },
  getUserIdByLinkedinId: function(userLinkedinId) {
      return axios.get(`/api/users?linkedinId=${userLinkedinId}`).then((res) => {
        return (res && typeof res.data[0] !== "undefined" && typeof(res.data[0]._id) !== "undefined") ? res.data[0]._id : "";
      });
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
