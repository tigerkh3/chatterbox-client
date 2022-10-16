// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.render();
    $('#rooms button').on('click', RoomsView.handleClick);
    $('#rooms select').on('click', RoomsView.handleChange);
  },

  render: function() {
    // Render out the list of rooms.
    // we can use Rooms._data to get our data (in an array) of all room names
    // iterate over the array of all rooms data
    // call render room on each current (unique) room name
    // this will add it
    var currentRoom = $('select').val();

    $('select').empty();
    for (var i = 0; i < Rooms._data.length; i++) {
      var roomName = Rooms._data[i];
      RoomsView.renderRoom(roomName);
    }
    if (currentRoom !== null) {
      $('select').val(currentRoom);
    }
  },

  renderRoom: function(roomname) {
    var $roomBox = $('<option></option>').text(roomname);
    $roomBox.appendTo('select');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.render();
  },

  handleClick: function(event) {
    //Handle the user clicking the "Add Room" button.
    var newRoomName = window.prompt('Enter name of new room:');
    Rooms.add(newRoomName);
  }

};
