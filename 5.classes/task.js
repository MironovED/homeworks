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
        return book;
    }

}