//Задание №1

function parseCount(value) {
    if(isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    }
        return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error){
        return error;
    }
}

//Задание №2

class Triangle {
    constructor(firstSide, secondSide, thirdSide){
        if(((firstSide + secondSide) < thirdSide) || ((secondSide + thirdSide)< firstSide) || ((firstSide + thirdSide) < secondSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }else{
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        }
    }

    getPerimeter() {
    return Number(this.firstSide + this.secondSide + this.thirdSide);
    }

    getArea() {
    const halfPerimetr = 0.5 * (this.firstSide + this.secondSide + this.thirdSide);
    return Number(Math.sqrt(halfPerimetr * (halfPerimetr - this.firstSide) * (halfPerimetr - this.secondSide) * (halfPerimetr - this.thirdSide)).toFixed(3));
    }

    
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try{
        return new Triangle(firstSide, secondSide, thirdSide);
    }catch(error){
        try{        
            return {
            getArea: getArea(),
            getPerimeter: getPerimeter()
            }
        }catch(err){
            return String("Ошибка! Треугольник не существует");
        }
    }
}

