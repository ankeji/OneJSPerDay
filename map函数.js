/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-02-04 16:43:18
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-04 16:48:25
 */

// =================会返回新数组============================//

// map()方法定义在JavaScript的Array中，它返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。

map() // 1:不会对空数组进行检测;2:不会改变原始数组

// 语法

// 参数说明：
// function(currentValue, index, arr)：必须。为一个函数，数组中的每个元素都会执行这个函数。其中函数参数：
// 1.currentValue：必须。当前元素的的值。
// 2.index：可选。当前元素的索引。
// 3.arr：可选。当前元素属于的数组对象。

// thisValue：可选。对象作为该执行回调时使用，传递给函数，用作"this"的值。

array.map((currentValue, index, arr)=>{},thisIndex)


// 实例
let array = [1, 2, 3, 4, 5];

let newArray = array.map((item) => {
    return item * item;
})

console.log(newArray)  // [1, 4, 9, 16, 25]


