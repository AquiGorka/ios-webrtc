/* @ioswebrtc */

var onDeviceReady = function() {
  //console.log('Device ready');
  cordova.plugins.iosrtc.registerGlobals();
  //
  $('#btn').click(function() {
    var url = $('#fetch').val() + '?r=' + Math.random();
    $.getScript(url);
  });
};
//
document.addEventListener('deviceready', onDeviceReady, false);
