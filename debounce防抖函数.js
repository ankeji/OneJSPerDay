/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-21 09:11:07
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-22 15:04:03
 */
// 发起请求的函数
const sendRequest = () => {};

// 防抖函数
const debounce = (fn, waitTime) => {
  let timer = null;
  let waitTime = waitTime ||200
  return function() {
    const self = this;
    const args = [].slice.apply(arguments);
    if(timer){
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, waitTime);
    }
  }
}

const debouncedSendRequest = debounce(sendRequest, 500);