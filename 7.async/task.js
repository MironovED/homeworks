class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;  
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан");
        }
        if (this.alarmCollection.some(element => element['id'] === id)) {
            console.error("Будильник с таким id уже существует");
            return;
        }
        this.alarmCollection.push({id: id, time: time, callback: callback});
    }

    removeClock(id) { 
        const currentArr = this.alarmCollection;
        const newArr = currentArr.filter(element => element['id'] !== id);
        if (currentArr.length !== newArr.length) {
            this.alarmCollection = newArr;
            return true || false; //вернуть логическое значение об успешности или провала удаления
        }
    }

    getCurrentFormattedTime () {
        const currentTime = (new Date().getHours + ":" + new Date().getMinutes);
        return currentTime; //возвращает текущее время в строковом формате HH:MM
    }

    start() {
        function checkClock(alarm) {
            if (alarm === getCurrentFormattedTime) {
                callback();
            }
        }
        if (this.timerId === undefined) {
                const newInterval = setInterval(this.alarmCollection.forEach(() => checkClock), 2000);
                this.timerId = newInterval;
        }
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((element) => console.log(element.id + "," + element.time));
    }

    clearAlarms() {
        this.stop;
        // this.alarmCollection = [];
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

}

