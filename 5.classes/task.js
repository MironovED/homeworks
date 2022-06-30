//Задание №1

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        if((this.state *= 1.5) >= 100){
        this.state = 100;
        } 
    }

    set state(value){
        if(value < 0){
        this._state = 0;
        }
        if(value >= 100){
        this._state = 100;
        }
        if(0 < value < 100){
        this._state = value;
        }
    }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание №2

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        const book = this.books.find(item => item[type] === value);
        return book || null;
    }

    giveBookByName(bookName){
        const book = this.books.find(item => item['name'] === bookName);
        this.books.splice(this.books.indexOf(book), 1);
        return book || null;
    }

}

//Задание №3

class Student {
    constructor(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    }


    checkMark(mark){
        if(mark > 0 && mark < 6){
            return mark;
        }
    }
    
    
    addMarkSubjectName(mark, subjectName) {
        if(this.checkMark(mark) === undefined){
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
        if(this.marks === undefined){
          let marks = [];
          marks[0] = {[subjectName]:[mark]};
          this.marks = marks;
          } else {
              let arr = this.marks;
              for(let element of arr){
                if(subjectName in element){
                    let arrMarks = element[subjectName];
                    arrMarks.push(mark);
                    break;

                }else{
                    arr.push({[subjectName]:[mark]});
                    break;
                }
            }
            
          }
        }
        
    //  addMarks(...mark) {
    //     if(this.marks === undefined){
    //       let marks = [];
    //       marks.push(...mark);
    //       this.marks = marks;
    //       } else {
    //         let arr = this.marks;
    //         arr.push(...mark);
    //       }
    //   }
      
    getAverage () {
        let items = this.marks;
        let average;
        items.reduce((acc, item, index, items)=> {
          acc += item;
          if(index === items.length - 1){
            average = acc/items.length;
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
    

      stud = new Student("Антон", "мужской", 20);
      stud.addMarkSubjectName(4, "algebra");
      stud.addMarkSubjectName(5, "geometry");
      stud.addMarkSubjectName(3, "algebra");
      stud.addMarkSubjectName(2, "geometry");





