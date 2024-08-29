// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
  console.log("HELLO")
});