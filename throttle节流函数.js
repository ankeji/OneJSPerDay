/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-20 17:27:43
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-26 09:48:41
 */

const throttle1 = (fn, waitTime) => {
    let isRunnig = false;
    return function() {
        let args = [].slice.apply(arguments);
        if (!isRunnig) {
            isRunnig = true;
            setTimeout(() => {
                fn.apply(this, args);
                isRunnig = false;
            }, waitTime)
        }
    }
}


const throttle2 = function(func, delay) {
    var prev = Date.now();
    return function() {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    }
  };
