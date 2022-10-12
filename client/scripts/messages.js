// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
//   // TODO: Define how you want to store your messages.
  _data: [],

//   // TODO: Define methods which allow you to retrieve from,
//   // add to, and generally interact with the messages.
  retrieve: function () {
    //retrieve
    $.ajax({
      async: false,
      // This is the url you should use to communicate with the API server.
      // 'GET' is the ajax method by default
      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/rpp',
      //callback function to run if GET is successful
      success: function (data) {
        _data = data;
        console.log('chatterbox: Messages received');
      },
    });
    return _data;
  },

  add: function(message) {
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/rpp',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
    // // storage our message in a unique key
    // // to contain the message (object form);
    // data[message.text] = message;
  },
};

//   var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// Q: how do we access the remote API server?
// A: GET /target server/ (HTTP/1.1) <-- not too sure about this
// Q: are we using the GET method to receive the message?
// Q: what format will we receive the message in, object? JSON?