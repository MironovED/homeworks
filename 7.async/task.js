class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;  
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
            return true;
        }
        return false;
    }

    getCurrentFormattedTime () {
        const currentTime = (new Date().getHours() + ":" + new Date().getMinutes());
        return currentTime;
    }

    start() {
        function checkClock(alarm) {
            if (alarm === getCurrentFormattedTime) {
                callback();
            }
        }
        if (this.timerId === null) {
                const newInterval = setInterval(this.alarmCollection.forEach(() => checkClock), 2000);
                this.timerId = newInterval;
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((element) => console.log(`Будильник №${element.id}: ${element.time}`));
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => {phoneAlarm.printAlarms()}, 1);

    const plusOneMinutes = (new Date().getHours() + ":" + (new Date().getMinutes() + 1));
    const plusFiveMinutes = (new Date().getHours() + ":" + (new Date().getMinutes() + 5));

    phoneAlarm.addClock(plusOneMinutes, () => {
        phoneAlarm.printAlarms();
        phoneAlarm.removeClock(2);
    }, 2);

    phoneAlarm.addClock(plusFiveMinutes, () => {
        phoneAlarm.printAlarms();
        phoneAlarm.stop();
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    
    phoneAlarm.printAlarms();
    
    phoneAlarm.start();
}



