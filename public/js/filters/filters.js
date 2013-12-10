vimeoApp.filter('videoDescription', function() {
  return function(input) {
    return input.split('\n')[0];
  };
});

