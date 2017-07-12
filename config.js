var config = {
    apiKey: "AIzaSyCd8l9-kNG29CVGrDmc0zV47ovzdWOuiYA",
    authDomain: "slider-cangih.firebaseapp.com",
    databaseURL: "https://slider-cangih.firebaseio.com",
    projectId: "slider-cangih",
    storageBucket: "slider-cangih.appspot.com",
    messagingSenderId: "986030450678"
  };
firebase.initializeApp(config);

function writeUrl(hash) {
  firebase.database().ref('slider-cangih/').set({
    hash:hash
  });
}

var listenerUrl = firebase.database().ref('slider-cangih/');
listenerUrl.on('value', function(url) {
  var data = url.val()
  window.location.hash = data.hash
});

$(window).on('hashchange', function(){
  writeUrl(window.location.hash)
});
