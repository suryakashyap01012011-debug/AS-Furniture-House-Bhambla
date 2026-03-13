// Only one room open at a time (clean mobile UX)
const rooms = document.querySelectorAll('.room');

rooms.forEach(room => {
  room.addEventListener('toggle', () => {
    if(room.open){
      rooms.forEach(other => {
        if(other !== room) other.removeAttribute('open');
      });
    }
  });
});