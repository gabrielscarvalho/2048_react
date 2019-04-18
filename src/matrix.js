



class Matrix {

    /**
     * data[0] = [ 0,0,0,0 ]
     * data[1] = [ 0,0,0,0 ]
     * data[2] = [ 2,2,2,0 ]
     * data[3] = [ 8,4,2,0 ]
    */
    constructor(data){  
        this.data = data;
    }

    onPressUp(){
        for(let i=0; i<4; i++){
            this.onPressUpFn();
        }
        return this.data;
    }

    onPressUpFn() {

        for(let line = 3; line >=1; line --) {
            let nextLine = line-1;             

            let data = this.data[line];
            let nextData = this.data[nextLine];

            for(let column =0; column <=3; column++) {
                if(data[column] === nextData[column]){
                    this.data[line][column] = 0;
                    this.data[nextLine][column] = nextData[column] * 2;
                }
            }
        }
        
        //Removes empty spaces.
        for(let line = 0; line <=2; line ++) {
            let nextLine = line+1;             

            let data = this.data[line];
            let nextData = this.data[nextLine];

            for(let column =0; column <=3; column++) {
                if(data[column] === 0) {
                    this.data[line][column] = nextData[column];
                    this.data[nextLine][column] = 0;
                }
            }
        }

        return this.data;
    }


    onPressDown(){
        for(let i=0; i<4; i++){
            this.onPressDownFn();
        }
        return this.data;
    }

    onPressDownFn() {

        for(let line = 0; line <=2; line++) {
            let nextLine = line+1;             

            let data = this.data[line];
            let nextData = this.data[nextLine];

            for(let column =0; column <=3; column++) {
                if(data[column] === nextData[column]){
                    this.data[line][column] = 0;
                    this.data[nextLine][column] = nextData[column] * 2;
                }
            }
        }
        console.log(this.data);
        //Removes empty spaces.
        for(let line = 3; line >=1; line --) {
            let nextLine = line-1;             

            let data = this.data[line];
            let nextData = this.data[nextLine];

            for(let column =0; column <=3; column++) {
                if(data[column] === 0) {
                    this.data[line][column] = nextData[column];
                    this.data[nextLine][column] = 0;
                }
            }
        }

        return this.data;
    }

    onPressRight(){
        for(let i=0; i<4; i++){
            this.onPressRightFn();
        }
        return this.data;
    }
    onPressRightFn() {

        for(let line = 0; line <=3; line++) {
            let data = this.data[line];
            
            for(let column =0; column <=2; column++) {
                let nextColumn = column + 1;
                if(data[column] == data[nextColumn]) {
                    this.data[line][column] = 0;
                    this.data[line][nextColumn] = data[nextColumn] * 2;
                }

            }
        }

        for(let line = 0; line <=3; line++) {
            let data = this.data[line];
            
            for(let column =3; column >=1; column--) {
                let nextColumn = column - 1;
                if(data[column] == 0) {
                    this.data[line][column] = data[nextColumn];
                    this.data[line][nextColumn] = 0;
                }
            }
        }


        return this.data;
    }


    onPressLeft(){
        for(let i=0; i<4; i++){
            this.onPressLeftFn();
        }
        return this.data;
    }

    onPressLeftFn() {

        for(let line = 0; line <=3; line++) {
            let data = this.data[line];
            
            for(let column =3; column >=1; column--) {
                let nextColumn = column - 1;
                if(data[column] == data[nextColumn]) {
                    this.data[line][column] = 0;
                    this.data[line][nextColumn] = data[nextColumn] * 2;
                }

            }
        }

        for(let line = 3; line >=0; line--) {
            let data = this.data[line];
            
            for(let column =0; column <=2; column++) {
                let nextColumn = column + 1;
                if(data[column] == 0) {
                    this.data[line][column] = data[nextColumn];
                    this.data[line][nextColumn] = 0;
                }
            }
        }


        return this.data;
    }


}

export default Matrix;