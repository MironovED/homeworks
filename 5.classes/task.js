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
        for (let i = 0; i < this.books.length; i++) {
            let items = Object.entries(this.books[i]);
            for(let item of items){
                if(item[0] === type && item[1] === value){
                    return this.books[i];
                }
            }
        }
        return null;
    }

    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
            let items = Object.entries(this.books[i]);
            for(let item of items){
                if(item[1] === bookName){
                    this.books.splice(i, 1);
                    return this.books[i];
                }    
            }
        }
        return null;
    }


}


