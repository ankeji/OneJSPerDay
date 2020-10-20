/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-20 17:27:43
 * @LastEditors: ankeji
 * @LastEditTime: 2020-10-20 17:51:23
 */
// 时间戳版本
var timer = null;
const throttle2 = (fn, waitTime) => {
    clearInterval(timer)
    return (...args) => {
        timer = setTimeout(() => {
            fn(...args);
        }, waitTime)
    }
}

const throttle = (fn, waitTime) => {
    let isRunnig = false;
    return (...args) => {
        if (!isRunnig) {
            isRunnig = true;
            setTimeout(() => {
                fn(...args);
                isRunnig = false;
            }, waitTime)
        }
    }
}