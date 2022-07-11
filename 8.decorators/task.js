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
    let timeout;
    function wrapper(...args) {  
      if (!timeout) {
        func.apply(...args);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(...args), delay);
    }
    return wrapper;
  }

function debounceDecorator2(func, delay) {
  wrapper.count = 0;
  let timeout;
  function wrapper(...args) {
    if (!timeout) {
      func.apply(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(...args), delay);
    wrapper.count ++;
  }
  return wrapper;
}