export const scrollBottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

export const submitMessage = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = $(e.target).closest('form');
      $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        dataType: 'script',
        success: function() {
          e.target.value = "";
        },
        error: function(xhr) {
          console.error('Error:', xhr.responseJSON);
        }
      });
    }
  });
};
