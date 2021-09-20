function chessBoard ()  {

    let size = 7;
    let whiteCell = "0";
    let blackCell = "#";
    let board;

    for (let i = 1; i <= size; i++){
        if (i % 2 === 0){
            board = ((whiteCell + blackCell).repeat(size));
            console.log(board.slice(size));
        }
        else {
            board = ((blackCell + whiteCell).repeat(size));
            console.log(board.slice(size));
        }
    }
}
chessBoard();
