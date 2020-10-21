/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-20 17:27:43
 * @LastEditors: ankeji
 * @LastEditTime: 2020-10-21 10:36:11
 */

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