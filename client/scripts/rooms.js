// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  update: function (input) {
    // get access to our _data
    // clear out any old data
    // iterate through the _data
    for (var i = 0; i < input.length; i++) {
      // create variable for roomname
      var roomName = input[i].roomname;
      // conditional statement
      if (!Rooms._data.includes(roomName) && roomName !== null && roomName !== '') {
        Rooms._data.push(roomName);
      }
    }
  },

  add: function(roomName) {
    Rooms._data.push(roomName);
    RoomsView.renderRoom(roomName);
  },

  retrieve: function() {
    return Rooms._data;
  },

  select: function(roomName) {
    RoomsView.renderRoom(roomName);
  }
};