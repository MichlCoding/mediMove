const modal=document.querySelector('#modal');
const closeModal=document.querySelector('.close-button');
const openModal=document.querySelector('.press');

// Where is this needed? Comment what this is doing or where it is used! //TODO lin
openModal.addEventListener('click', ()=> {
    modal.showModal();
})

// Where is this needed? Comment what this is doing or where it is used! //TODO lin
openModal.addEventListener('click', ()=> {
    modal.showModal();
})

// Where is this needed? Comment what this  is doing or where it is used! //TODO lin
closeModal.addEventListener('click', ()=> {
    modal.close();
})

// Where is this needed? Comment what this is doing or where it is used! //TODO lin
function goBackFunction(){
    window.history.back();
}