// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // Send a message to the Parse API.
    var messageText = document.querySelector('#message').value;

    // Convert & to &amp;, Convert < to &lt;, Convert > to &gt;, Convert " to &quot;, Convert ' to &#x27;, Convert / to &#x2F;
    // use regex expression to replace illegal values
    var illegal = ['&', '<', '>', '"', '\'', '/'];
    // iterate over illegal to apply regex to replace them
    for (var i = 0; i < illegal.length; i++) {
      var currIllegal = illegal[i];
      messageText = messageText.replaceAll(currIllegal, 'x');
    }

    var selectedRoom = document.querySelector('#rooms select').value;

    var message = {
      username: App.username,
      text: messageText,
      roomname: selectedRoom
    };
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};