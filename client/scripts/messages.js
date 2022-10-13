// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
//   // Define how you want to store your messages.
  _data: [],

//   // TODO: Define methods which allow you to retrieve from,
//   // add to, and generally interact with the messages.
  update: function (input) {
    Messages._data = input;
  },

  retrieve: function () {
    return Messages._data;
  },

  add: function(message, boolean) {
    // just add a message we created and push into _data
    // Messages._data.push(message);
    MessagesView.renderMessage(message, boolean);
  },
};