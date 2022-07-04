//Задание №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        }
        if (value >= 100) {
            this._state = 100;
        }
        if (value >= 0 && value < 100) {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(item => item[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const book = this.books.find(item => item['name'] === bookName);
        if (this.books.indexOf(book) !== -1) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book || null;
    }
}

//Задание №3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }


    checkMark(mark) {
        return mark > 0 && mark < 6;  
    }
    
    
    addMark(mark, subjectName) {
        if (this.checkMark(mark) === false) {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
        if (this.marks === undefined) {
            let marks = [];
            marks[0] = {[subjectName]:[mark]};
            this.marks = marks;
        } else {
            let arr = this.marks;
            for (let element of arr) {
                if (subjectName in element) {
                    let arrMarks = element[subjectName];
                    arrMarks.push(mark);
                    return;
                }
            }
            arr.push({[subjectName]:[mark]});
        }
    }

    getAverage () {
        let marks = [];
        for (let element of this.marks) {
            Object.values(element).forEach((value) =>  marks.push(...value));
        }
        let average;
        marks.reduce((acc, mark, index, marks) => {
            acc += mark;
            if (index === marks.length - 1) {
                average = acc/marks.length;
                return average;
            }
            return acc;
        }, 0)
        return average;
    }
    
    getAverageBySubject(subjectName) {   
        let arr = this.marks;
        let subjectMarks = [];
        for (let element of arr) {
            if (subjectName in element) {
                subjectMarks.push(...element[subjectName]);
            } else {
                console.log("Несуществующий предмет");
            }
        }
        let average;
        subjectMarks.reduce((acc, subjectMark, index, subjectMarks) => {
            acc += subjectMark;
            if (index === subjectMarks.length - 1) {
                average = acc/subjectMarks.length;
                return average;
            }
            return acc;
        }, 0)
        return average;
    }
      
    exclude(reason) {
        this.excluded = reason;
        delete this.marks;
        delete this.subject;
    }
}
    

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");    





