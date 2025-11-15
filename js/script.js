$(document).ready(function() {
  // Example: Simple Form Validation (You can expand this)
  $('#contactForm').submit(function(e) {
    e.preventDefault();  // Prevent form submission

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if (name && email && message) {
      alert('Form submitted successfully');
      // You can add an AJAX request here to send form data to your server.
    } else {
      alert('Please fill out all fields.');
    }
  });
});
