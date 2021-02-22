/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-02-22 10:50:50
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-22 10:53:58
 */
function reverseString(str) {
    if (str.length===1) return str
    return reverseString(str.slice(1)) + str[0];
}
var a = '123456'
console.log(reverseString(a));