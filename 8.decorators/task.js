function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item['hash'] === hash);
    if (objectInCache) { 
      console.log("Из кэша: " + objectInCache['value']);
      return "Из кэша: " + objectInCache['value'];
    }

    let result = func(...args);
    cache.push({hash: String(args), value: result}) ;
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let isThrottled = false;
  return function() {
    if (isThrottled) {
      return;
    } 

  const result = func();
  isThrottled = true;
  setTimeout(() => isThrottled = false, delay);
  return result;
  }
}

function debounceDecorator2(func, delay) {
  let isThrottled = false;
  function wrapper() {
    if (isThrottled) {
      return;
    } 
    
    const result = func();
    isThrottled = true;
    setTimeout(() => isThrottled = false, delay);
    wrapper.count ++;
    return result;
  }
  wrapper.count = 0;
  return wrapper;
}


