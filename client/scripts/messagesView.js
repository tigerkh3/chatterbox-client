// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // probably want to render the messages
    var messages = Messages.retrieve();
    console.log(messages);
    // iterate through messages._data
    for (var i = 0; i < messages.length; i++) {
      // take the current element
      var currElement = messages[i];
      // call the renderMessage on the current element
      MessagesView.renderMessage(currElement);
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // does something to post message

    // input message would be object containing all message info

    // create variable to access username
    var currUser = message.username;
    // create variable to acces text
    var currText = message.text;

    var $message = $('<div class="message"></div>');
    var $text = $("<p></p>").text(currUser + ': ' + currText);
    $text.appendTo($message);
    $message.appendTo('#chats');
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};