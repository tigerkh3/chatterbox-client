// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomName) {
    _data.push(roomName);
    // use option element to append to dropdown select thing
    //
  },

  retrieve: function() {
    return _data;
  },

  select: function(roomName) {
    RoomsView.renderRoom(roomName);
  }
};