function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    let marks = [];
    marks[0] = mark;
    this.marks = marks;
    } else {
      let arr = this.marks;
      arr.push(mark);
    }
  }
  
Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
    let marks = [];
    marks.push(...mark);
    this.marks = marks;
    } else {
      let arr = this.marks;
      arr.push(...mark);
    }
}

Student.prototype.getAverage = function () {
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

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
