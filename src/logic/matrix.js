
import { Position, MAX_COLUMN, MAX_LINE} from './position';
import BoxData from './boxData';

const TOP_TO_DOWN = Symbol('TOP-TO-DOWN');
const DOWN_TO_TOP = Symbol('DOWN-TO-TOP');

const LEFT_TO_RIGHT = Symbol('LEFT-TO-RIGHT');
const RIGHT_TO_LEFT = Symbol('RIGHT-TO-LEFT');




/**
 * Class that deals with the matrix of data.
 * 
*/
class Matrix {


    constructor(data) { 
        if (typeof data === 'array' && data.length === MAX_LINE + 1){
            this.data = data;
        } else {
            throw new Error (`Informed data does not has expected format. Received [${data}]`);
        }
    }

    static emptyBoardData() {
        let data = [];

        for(let line = 0; line <= MAX_LINE; line++) {
            for(let column = 0; column <= MAX_COLUMN; column++) {
                if(typeof data[line] === 'undefined') {
                    data[line] = [];
                }
                data[line][column] =  new BoxData(0, true);
            }
        }
        return data;
    }

    /**
     * When user pressed up button.
     */
    pressedUp() {
        const self = this;
        this.forEveryElement(DOWN_TO_TOP, LEFT_TO_RIGHT, (elm, left, top, right, bottom) => {
            if(top.canMerge(elm)) {
                top.merge(elm);
                elm.clean();
                self.updateData([top, elm]);
            }
        });

        this.cleanGarbage();
    }


    /**
     * Gives all elements collect in the order you need.
     * @param moveY - how should it move in Y vector? 
     * @examples TOP_TO_BOTTOM, BOTTOM_TO_UP
     * @param moveX - how should it move in X vector? 
     * @examples LEFT_TO_RIGHT, RIGHT_TO_LEFT
     * @param callback a callback function that you give the element you must work and the surrounding ones.
     * @example callback(elem, left, top, right, bottom);
     * 'elem' is the element you must work.
     * 'left' is the element at left position of the 'elem'. If doesnot exists, will return null.
     * 
    */
    forEveryElement(moveY, moveX, callback) {
        const self = this;
        this.forEveryLine(moveY, (line) => {

            self.forEveryColumn(moveX, (column) => {
                const position = new Position(line, column);

                const elem = self.getElement(position, true); 
                const top = self.getElement(position.getTop());
                const bottom = self.getElement(position.getBottom());
                const left = self.getElement(position.getLeft());
                const right = self.getElement(position.getRight());

                callback(elem, left, top, right, bottom);
            })

        });
    }

    /**
     * Execute the for lace in each line and return the position.
     * @param move TOP_TO_DOWN or DOWN_TO_TOP
     * @param callback - a function that receives the line number.
    */
    forEveryLine(move, callback) { 
        if(move === TOP_TO_DOWN) {
            for(let line = 0; line <= MAX_LINE; line++) {
                callback(line);
            }
        }  else if(move === DOWN_TO_TOP) {
            for(let line = MAX_LINE; line >= 0; line--) {
                callback(line);
            }
        } else { 
            throw new Error(`Invalid movement: [${move}]`);
        }  
    }

    /**
     * Execute the for lace in each column and return the position.
     * @param move LEFT_TO_RIGHT or RIGHT_TO_LEFT
     * @param callback - a function that receives the column number.
    */
    forEveryColumn(move, callback) {
        if(move === LEFT_TO_RIGHT) {
            for(let column = 0; column <= MAX_COLUMN; column++) {
                callback(column);
            }
        }  else if(move === RIGHT_TO_LEFT) {
            for(let column = MAX_COLUMN; column >= 0; column--) {
                callback(column);
            }
        } else { 
            throw new Error(`Invalid movement: [${move}]`);
        }  
    }

    /**
     * Return the element based on its position.
     * @param position the class Position
     * @param mustExist bool - throws exception in case of required but not found.
     * @return BoxData object
    */
    getElement(position, mustExist = false) {
     
        if (position && position.isValidPosition()) {
            const elem = this.data[position.line][position.column];
            elem.setPosition(position);
            return elem;
        } 
        if(mustExist) {
            throw new Error(`Cannot find element line: [${position}]`);
        }
        return null;
    }

    /**
     * Update the matrix with the informed element.
     * @param elm BoxData or array of BoxData
    */
    updateData(elms) {
        const self = this;
        if(typeof elms !== 'array') {
            elms = [elms];
        }

        elms.forEach( elm => {
            if(!elm || !elm.position) {
                throw new Error('Cannot update null element or without position');
            }
            
            if (elm.position.isValidPosition()) {
                const {line, column} = elm.position;
                self.data[line][column] = elm;
            }
        });
    }


    /**
     * Clean the garbage after the turn.
    */
    cleanGarbage() {
        const self = this;
        this.forEveryElement(DOWN_TO_TOP, LEFT_TO_RIGHT, (elm, left, top, right, bottom) => {
            elm.cleanPosition();
            self.updateData(elm);
        });
    }

    /**
     * Prints in console the matrix.
     * 
    */
    print() {
        const self = this;
        this.forEveryLine(TOP_TO_DOWN, (line) => {
            let lineStr = '';

            self.forEveryColumn(LEFT_TO_RIGHT, (column) => {
                let elm = self.getElement(new Position(line, column));
                lineStr = `${lineStr}\t${elm.value}`; 
            });
            console.log(lineStr);
        });
    }
}

export default Matrix;