// Modal elements
const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const modal = document.getElementById('createRoomModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Show Create Room modal
createRoomBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10);
   
});

// Close modal
function closeModalFunction() {
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500);
}

closeModal.addEventListener('click', closeModalFunction);

// Close on backdrop click
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModalFunction();
    }
});

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunction();
    }
});
