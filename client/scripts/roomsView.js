// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();

    $('#rooms button').on('click', RoomsView.handleClick);
  },

  render: function() {
    // Render out the list of rooms.

    // we can use Rooms._data to get our data (in an array) of all room names
    // iterate over the array of all rooms data
    // call render room on each current (unique) room name
    // this will add it
    $('select').empty();
    for (var i = 0; i < Rooms._data.length; i++) {
      var roomName = Rooms._data[i];
      RoomsView.renderRoom(roomName);
    }
  },

  renderRoom: function(roomname) {
    var $roomBox = $('<option></option>').text(roomname);
    // append it to select
    $roomBox.appendTo('select');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    //Handle the user clicking the "Add Room" button.
    var newRoomName = window.prompt('Enter name of new room:');
    Rooms.add(newRoomName);
  }

};
