function debounce(debounceFn, wait, immediate) {
  let timeout,args ,context ,timestamp,result;
  let later = function() {
    let last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);

    }else{
      timeout = null;
      if (!immediate) {
        result = debounceFn.apply(context, args);
        if(!timeout) context = args = null;
      }
    
    }
  }
  return function() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    let callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = debounceFn.apply(context, args);
      context = args = null;
    }
    return result;  
  }
}