/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-02-04 17:01:55
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-04 17:27:01
 */
// 定义：

// reduce()方法接受一个函数作为累加器，数组中的每个值（从左向右）开始缩减，最终计算为一个值。对空数组是不会执行回调函数的


// 语法
arr.reduce(callback,[initialValue])
//initialValue就等于是定义一个变量初始值

// reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。


// callback （执行数组中每个值的函数，包含四个参数）

//     1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
//     2、currentValue （数组中当前被处理的元素）
//     3、index （当前元素在数组中的索引）
//     4、array （调用 reduce 的数组）

// initialValue （作为第一次调用 callback 的第一个参数。）

var arr = ["apple","orange","apple","orange","pear","orange"];
function getWordCnt(){
  return arr.reduce(function(prev,next){
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  },{});
}


// 理解：

// reduce（callback,initialValue)会传入两个参数，回调函数（callback）和初始值（initialValue）。
// 当没有传入初始值时，prev是从数组中第一个元素开始的，next是数组的第二个元素；
// 当传入初始值（initialValue）后，第一个prev将是initialValue，next将是数组中的第一个元素。

