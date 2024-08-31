export const scrollBottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

export const submitMessage = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.key == 13) {
      e.preventDefault();
      $('button').trigger('click');
      e.target.value = "";
    };
  });
};
