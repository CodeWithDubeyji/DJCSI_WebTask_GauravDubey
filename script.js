
// var x = document.getElementById("resp_Nav");
// var y = document.getElementById("bar_btn");

// y.addEventListener("click", () => {
//     let isRes = false;
//     if (!isRes) {
//         x.style.display = 'block';
//         isRes = true;
//     } else {
//         x.style.display = 'none';
//         isRes = false;
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('bar_btn');
    const list = document.getElementById('resp_Nav');

    button.addEventListener('click', () => {
        if (list.classList.contains('resp_Navbar')) {
            list.classList.remove('resp_Navbar');
            list.classList.add('responsive');
        } else {
            list.classList.remove('responsive');
            list.classList.add('resp_Navbar');
        }
    });
});