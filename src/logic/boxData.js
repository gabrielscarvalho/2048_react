
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
            !otherBox.untouched && !this.untouched
            && otherBox.value === this.value
            && this.value !== 0);
    }

    merge(otherBox) {
        if(this.canMerge(otherBox)) {
            this.value = this.value * 2;
            this.untouched = false;
        }
    }

    clean() {
        this.value = 0;
        this.untouched = true;
    }


    cleanPosition() {
        this.position = null;
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