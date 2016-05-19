var Firebase       = require( "firebase" ),
    myFirebaseRef  = new Firebase( "https://youtubetomp3.firebaseio.com/" ),
    firebaseUtils  = { postContent: postContent };

function postContent( payload ) {
    myFirebaseRef.push( payload );
}

module.exports = firebaseUtils;