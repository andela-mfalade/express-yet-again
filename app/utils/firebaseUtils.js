var Firebase = require("firebase"),
    myFirebaseRef = new Firebase("https://youtubetomp3.firebaseio.com/");

var firebaseUtils = { postContent: postContent };

function postContent(payload) {
    myFirebaseRef.push(payload);
}

module.exports = firebaseUtils;