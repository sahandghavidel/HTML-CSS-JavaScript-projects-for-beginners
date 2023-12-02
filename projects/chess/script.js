document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
  
    // Create chessboard
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;
        board.appendChild(cell);
      }
    }
  
    // Initial chess pieces setup
    const pieces = [
      ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
      ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
      ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ];
  
    // Place pieces on the board
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      cell.textContent = pieces[row][col];
    });
  
    // Piece movement
    let selectedPiece = null;
  
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (!selectedPiece) {
          selectedPiece = cell;
        } else {
          // Move the piece
          cell.textContent = selectedPiece.textContent;
          selectedPiece.textContent = "";
          selectedPiece = null;
        }
      });
    });
  });