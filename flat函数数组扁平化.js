/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-20 17:08:14
 * @LastEditors: ankeji
 * @LastEditTime: 2020-10-20 17:16:07
 */
const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]

const flat = (arr, newArr) => {
    const flatArr = newArr || []
    return arr.reduce((prevRes, item) => {
        // 如果当前值是一个数组，则继续递归
        if (Array.isArray(item)) {
            return flat(item,prevRes)
        }else{
            return prevRes.concat(item);
        }
    },flatArr)
}
console.log(flat(arr));