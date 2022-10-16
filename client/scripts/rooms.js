// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // store the list of rooms
  _data: [],

  update: function (input) {
    for (var i = 0; i < input.length; i++) {
      var roomName = input[i].roomname;
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