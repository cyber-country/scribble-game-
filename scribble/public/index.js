// ===== Modal elements =====
const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const modal = document.getElementById('createRoomModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

const joinRoomModal = document.getElementById('joinRoomModal');
const closeJoinModal = document.getElementById('closeJoinModal');
const joinRoomForm = document.getElementById('joinRoomForm');

// ===== Scroll Lock Helpers =====
function lockScroll() {
  document.body.classList.add('no-scroll');
  document.documentElement.classList.add('no-scroll');
}

function unlockScroll() {
  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');
}

// ===== Auto-generate Room Code =====
function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// ===== Show Create Room Modal =====
createRoomBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modalContent.classList.add('show');
  }, 10);

  document.getElementById('roomCode').value = generateRoomCode();
  lockScroll();
});

// ===== Close Create Room Modal =====
function closeModalFunction() {
  modalContent.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
  unlockScroll();
}

closeModal.addEventListener('click', closeModalFunction);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunction();
  }
});

// ===== Show Join Room Modal =====
joinRoomBtn.addEventListener('click', () => {
  joinRoomModal.classList.remove('hidden');
  setTimeout(() => {
    joinRoomModal.querySelector('.modal-slide').classList.add('show');
  }, 10);
  lockScroll();
});

// ===== Close Join Room Modal =====
function closeJoinRoomModal() {
  joinRoomModal.querySelector('.modal-slide').classList.remove('show');
  setTimeout(() => {
    joinRoomModal.classList.add('hidden');
  }, 500);
  unlockScroll();
}

closeJoinModal.addEventListener('click', closeJoinRoomModal);
joinRoomModal.addEventListener('click', (e) => {
  if (e.target === joinRoomModal) {
    closeJoinRoomModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !joinRoomModal.classList.contains('hidden')) {
    closeJoinRoomModal();
  }
});

// ===== Handle Join Room Form Submit =====
joinRoomForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const roomCode = document.getElementById('joinRoomCode').value.trim();
  const roomName = document.getElementById('joinRoomName').value.trim();
  const userName = document.getElementById('joinUserName').value.trim();

  if (roomCode && roomName && userName) {
    window.location.href = `game.html?room=${encodeURIComponent(roomCode)}&roomName=${encodeURIComponent(roomName)}&name=${encodeURIComponent(userName)}`;
  } else {
    alert('Please fill in all fields.');
  }
});
