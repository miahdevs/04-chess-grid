const cb = document.getElementById("chessboard");

const pieces = [
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['', '',  '',  '',  '',  '',  '',  ''],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
];

for (let i = 0; i < 64; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");

  const row = Math.floor(i / 8);
  const col = i % 8;

  const piece = pieces[row][col];
  const span = document.createElement("span");
  if (piece !== " ") {
    span.textContent = piece;
    div.appendChild(span);
  }

  cb.appendChild(div);
}