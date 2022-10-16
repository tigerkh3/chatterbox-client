// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function(input) {

      // Render _all_ the messages.
      $('#chats').empty();
      var messages = Messages.retrieve();
      // get current room we are in and load only those
      var currentRoom = $('select').val();
      // iterate through messages
      for (var i = 0; i < messages.length; i++) {
        // take the current element
        var currElement = messages[i];
        // call the renderMessage on the current element
        if (currElement.roomname === currentRoom) {
          MessagesView.renderMessage(currElement);
        }
      }

  },

  renderMessage: function(message, boolean) {
    // Render a single message.

    var currUser = message.username;
    var currText = message.text;
    // create a parent box to hold user and message as separate elements
    var $messageBox = $('<div class="messageBox"></div>');
    $messageBox.css('background-color', '#D3D3D3');
    // create user element to append to message box
    var $user = $("<p class=username></p>").text(currUser + ':');
    $user.appendTo($messageBox);
    // Convert & to &amp;, Convert < to &lt;, Convert > to &gt;, Convert " to &quot;, Convert ' to &#x27;, Convert / to &#x2F;
    // use regex expression to replace illegal values
    var illegal = ['&', '<', '>', '"', '\'', '/'];
    // iterate over illegal
    for (var i = 0; i < illegal.length; i++) {
      var currIllegal = illegal[i];
      currText = currText.replaceAll(currIllegal, 'x');
    }
    // create text element to append to message box
    var $messageText = $("<p></p>").text(currText);
    // check to see if they're friends or not
    // if they are we want to change the css stlying to bold out the message before appending to the DOM
    if (Friends._data.includes(currUser)) {
      $messageText.css('font-weight', 'bold');
    }
    // apply our text to our box now
    $messageText.appendTo($messageBox);
    // handle the click portion
    $user.on('click', MessagesView.handleClick);
    // conditional for if we want to post a message and have it sit at the top of the page
    if (boolean) {
      $('#chats').prepend($messageBox);
      // conditional for if want to just normall re-render the page
    } else {
      $('#chats').append($messageBox);
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // each message should have a reference to the user
    // when the message is clicked, add that user to Friends._data

    Friends.toggleStatus(event.target.innerText);

  }

};