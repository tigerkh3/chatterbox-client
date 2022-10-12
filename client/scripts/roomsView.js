// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.

    // create storage array
    var storage = [];

    // get access to our _data
    var messageData = Messages.retrieve();
    // iterate through the _data
    for (var i = 0; i < messageData.length; i++) {
      // create variable for roomname
      var roomName = messageData[i].roomname;
      // conditional statement
      if (!storage.includes(roomName) && roomName !== null && roomName !== '') {
        renderRoom(roomName);
        storage.push(roomname);
      }
    }
    Rooms.add(storage);
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
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
