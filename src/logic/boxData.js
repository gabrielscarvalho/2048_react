
export class BoxData {

    value =  0;
    untouched = true;
    position = null;

    constructor(value, untouched) {
        this.value = value;
        this.untouched = untouched;
    }

    canMerge(otherBox) {
        return (otherBox && 
            otherBox.untouched && this.untouched
            && otherBox.value === this.value
            && this.value !== 0);
    }

    canProvidePosition() {
        return (this.value === 0);
    }

    receives(otherBox) {
        if(otherBox) {
            this.value = otherBox.value;
            this.untouched = otherBox.untouched;
            otherBox.clean();
        } else {
            throw new Error('Cannot receive empty boxData');
        }
    }

    merge(otherBox) {
        if(this.canMerge(otherBox)) {
            this.value = this.value * 2;
            this.untouched = false;
            otherBox.clean();
        }
    }

    clean() {
        this.value = 0;
        this.untouched = true;
    }


    cleanTemporaryData() {
        this.position = null;
        this.untouched = true;
    }

    /**
     * Informs the position of the box
     * @param Position object
    */
    setPosition(position) {
        this.position = position;
    }
    
};
export default BoxData;