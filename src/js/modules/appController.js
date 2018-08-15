appController = (function(bookCtrl, userCtrl) {

    var loginForm       = document.getElementById('login-form'),
        logOutBtn       = document.querySelector('.js-logout')
    ;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        userLogIn();
    });

    logOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        userLogOut();
    });


    var userLogIn = function() {
        var temp = userCtrl.userLogin();

        if (temp !== undefined) {
            bookCtrl.showAllBooks();
            bookCtrl.sortable();
            bookCtrl.createForm();
        }
    }

    var userLogOut = function() {
        userCtrl.userLogOut();

        bookCtrl.showPublicBooks()
        bookCtrl.removeSortable()
        //bookCtrl.hideAlert()
        bookCtrl.removeForm()
    }


})(booksFormController, userAuthorizationController);
