console.log('connected');
console.log(firebase);
var auth = firebase.auth();
var firestore = firebase.firestore();
var signUpForm = document.querySelector('.signUpForm')
console.log(signUpForm);
var signupFormSubmit = async(e) => {
        e.preventDefault();
        try {
            var name = document.querySelector('.signupName')
            var email = document.querySelector('.signupEmail')
            var pass = document.querySelector('.signupPassword')

            if (name && email && pass) {
                var user = await auth.createUserWithEmailAndPassword(email, pass);
                console.log(user);
                console.log(name)
            }

        } catch (error) {

        }
    }
    // signInFormSubmit(e);
signUpForm.addEventListener("submit", (e) => signupFormSubmit(e));