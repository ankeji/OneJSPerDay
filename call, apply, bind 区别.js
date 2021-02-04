/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-02-04 15:58:50
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-04 16:12:50
 */
// call, apply, bind 区别

// 首先说下前两者的区别。

// call 和 apply 都是为了解决改变 this 的指向。作用都是相同的，只是传参的方式不同。

// 除了第一个参数外，call 可以接收一个参数列表，apply 只接受一个参数数组。

// 至于为什么call接收参数列表，而apply只接受一个参数数组！手动实现一个call和apply你就知道了

Function.prototype.myCall = function (context) {
    let context = context || window
    // context是传入的函数
    context.fn = this
    //取传进来的参数
    let args = [...arguments].slice(1)
    let result = context.fn(...args)//吧参数给传进来的函数，即this
    //然后删除创造出来的临时fn
    delete context.fn
    return result
}


Function.prototype.myApply = function (context) {
    var context = context || window
    context.fn = this

    var result
    // 需要判断是否存储第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}


// bind 和其他两个方法作用也是一致的，只是该方法会返回一个函数。并且我们可以通过 bind 实现柯里化。
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}