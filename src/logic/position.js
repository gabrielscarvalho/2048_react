export const MAX_LINE = 3;
export const MAX_COLUMN = 3;


/**
 * Class that deals with the positioning in the board.
 * */ 
export class Position {

    constructor(line, column) {
        this.line = line;
        this.column = column;
    }

    getTop(){
        return new Position(this.line-1, this.column);
    }
    
    getBottom(){
        return new Position(this.line+1, this.column);
    }

    getLeft(){
        return new Position(this.line, this.column-1);
    }

    getRight(){
        return new Position(this.line, this.column+1);
    }

    isValidPosition() {
        const {line, column} = this;
        return line >= 0 &&  line <= MAX_LINE && 
                column >= 0 &&  column <= MAX_COLUMN;
    }
}

export default Position;
