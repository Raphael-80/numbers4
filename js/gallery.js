// let previewContainer = document.querySelector('.picture-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.pictures-container .picture').forEach(picture => {
//     picture.onclick = () => {
//         previewContainer.style.display = 'flex';
//         let name = picture.getAttribute('data-name');
//         previewBox.forEach(preview => {
//             let target = preview.getAttribute('data-target');
//             if (name == target) {
//                 preview.classList.add('active')
//             }
//         });
//     };
// });

// previewBox.forEach(close => {
//     close.querySelector('#icon-close').onclick = () => {
//         close.classList.remove('active')
//         previewContainer.style.display = 'none';
//     }
// })


var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic) {
    fullImgBox.style.display = "flex"
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none"
}