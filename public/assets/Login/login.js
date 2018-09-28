$(document).ready(function () {

    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            //	redirect to homepage if logged in
            window.location.href = '../index.html';
        } else {
            //	User is signed out
            console.log('User is signed out');
        }
    });

    $('#login-btn').click(function (event) {
        event.preventDefault();
        signIn();
    });
});