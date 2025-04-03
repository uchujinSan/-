/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*eslint-env es6*/
/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*jshint jquery: true*/
/*jshint node: true*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env es6*/
/*eslint-env jquery*/
/*eslint-env browser*/
/*eslint no-console: 0*/

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar-dark');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')


navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// function for send email notification
function amazingSample() {
  swal.fire({
    title: "Thank you!",
    text: "Email sent successfully.",
    icon: "success",
　});
}