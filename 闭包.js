/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-02-04 15:34:01
 * @LastEditors: ankeji
 * @LastEditTime: 2021-02-04 15:41:22
 */

//闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包
function A() {
    let a = 1
    function B() {
        console.log(a)
    }
    return B()
  }

//   你是否会疑惑，为什么函数 A 已经弹出调用栈了，为什么函数 B 还能引用到函数 A 中的变量。因为函数 A 中的变量这时候是存储在堆上的。现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。

// 经典面试题，循环中使用闭包解决 var 定义函数的问题
for ( var i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}

// 首先因为 setTimeout 是个异步函数，所有会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。

// 解决办法
// 第一种使用闭包
for (var i = 1; i <= 5; i++) {
    (function(j) {
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }

//   第二种就是使用 setTimeout 的第三个参数

for ( var i=1; i<=5; i++) {
	setTimeout( function timer(j) {
		console.log( j );
	}, i*1000, i);
}


// 第三种就是使用 let 定义 i 了
for ( let i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}


// 拓展知识面关于setTimeout的第三个参数的问题


// setTimeout的第三个参数就是给setTimeout的第一个函数传的参数
// 例子
function sum(x,y,z){
    console.log(x+y+z);
}
setTimeout(sum,1000,1,2,3); // 这里的123就是代表的x,y,z