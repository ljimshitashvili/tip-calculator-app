$(document).ready(function() {
    $('#price').on('keyup', function() {
      var val = $(this).val();
      if (val != '' && !isNaN(val)) {
        $(this).val('$' + val);
      }
    });
  });