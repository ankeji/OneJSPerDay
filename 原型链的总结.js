/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-23 11:37:16
 * @LastEditors: ankeji
 * @LastEditTime: 2020-10-23 13:16:35
 */

/**
 * prototype //原型
 * constructor //构造
 * __proto__ //原始值 
 */


function Puppy(age) {
    this.puppyAge = age;
}

// 实例化时可以传年龄参数了
const myPuppy = new Puppy(2);

myPuppy.__proto__===Puppy.prototype //true
// 翻译  myPuppy的原始值 等于 Puppy的原型 ？  很明显是正确的
Puppy.prototype.__proto__ === Object.prototype
// 翻译  Puppy的原型的原始值 等于 Object对象的原型 ？  很明显是正确的

// 因此：
myPuppy.__proto__.__proto__ === Object.prototype  // true
// myPuppy的原始值的原始值 等于 Object对象的原型


Object.prototype.__proto__  //null

Puppy.prototype.constructor === Puppy  //true
// 翻译 Puppy原型的构造者就是自己本身Puppy

myPuppy.constructor === Puppy
// 翻译 构造函数myPuppy的构造者就是Puppy

// 因此
myPuppy.constructor === Puppy.prototype.constructor
// 翻译myPuppy 的构造器 等于 Puppy的原型的构造者 等于 Puppy本身



//向上面的这样持续往上查找的链式结构就是原型链



// 手写一个new函数
// new其实就是生成了一个对象，这个对象能够访问类的原型，知道了原理，我们就可以自己实现一个new了。
function myNew(func, ...args) {
    const obj = {};     // 新建一个空对象
    const result = func.call(obj, ...args);  // 执行构造函数
    obj.__proto__ = func.prototype;    // 设置原型链
  
    // 注意如果原构造函数有Object类型的返回值，包括Functoin, Array, Date, RegExg, Error
    // 那么应该返回这个返回值
    const isObject = typeof result === 'object' && result !== null;
    const isFunction = typeof result === 'function';
    if(isObject || isFunction) {
      return result;
    }
  
    // 原构造函数没有Object类型的返回值，返回我们的新对象
    return obj;
  }
  
  function Puppy(age) {
    this.puppyAge = age;
  }
  
  Puppy.prototype.say = function() {
    console.log("汪汪汪");
  }
  
  const myPuppy3 = myNew(Puppy, 2);
  
  console.log(myPuppy3.puppyAge);  // 2
  console.log(myPuppy3.say());     // 汪汪汪

//   自己实现一个instanceof
// instanceof不就是检查一个对象是不是某个类的实例吗？换句话说就是检查一个对象的的原型链上有没有这个类的prototype，知道了这个我们就可以自己实现一个了
function myInstanceof(targetObj, targetClass) {
    // 参数检查
    if(!targetObj || !targetClass || !targetObj.__proto__ || !targetClass.prototype){
      return false;
    }
  
    let current = targetObj;
  
    while(current) {   // 一直往原型链上面找
      if(current.__proto__ === targetClass.prototype) {
        return true;    // 找到了返回true
      }
  
      current = current.__proto__;
    }
  
    return false;     // 没找到返回false
  }
  
  // 用我们前面的继承实验下
  function Parent() {}
  function Child() {}
  
  Child.prototype.__proto__ = Parent.prototype;
  
  const obj = new Child();
  console.log(myInstanceof(obj, Child) );   // true
  console.log(myInstanceof(obj, Parent) );   // true
  console.log(myInstanceof({}, Parent) );   // false
  


// 总结：
/**
 * JS中的函数可以作为函数使用，也可以作为类使用
 * 作为类使用的函数实例化时需要使用new
 * 为了让函数具有类的功能，函数都具有prototype属性。
 * 为了让实例化出来的对象能够访问到prototype上的属性和方法，实例对象的__proto__指向了类的prototype。所以prototype是函数的属性，不是对象的。对象拥有的是__proto__，是用来查找prototype的。
 * prototype.constructor指向的是构造函数，也就是类函数本身。改变这个指针并不能改变构造函数。
 * 对象本身并没有constructor属性，你访问到的是原型链上的prototype.constructor。
 * 函数本身也是对象，也具有__proto__，他指向的是JS内置对象Function的原型Function.prototype。所以你才能调用func.call,func.apply这些方法，你调用的其实是Function.prototype.call和Function.prototype.apply。
 * prototype本身也是对象，所以他也有__proto__，指向了他父级的prototype。__proto__和prototype的这种链式指向构成了JS的原型链。原型链的最终指向是Object的原型。Object上面原型链是null，即Object.prototype.__proto__ === null
 * 另外评论区有朋友提到：Function.__proto__ === Function.prototype。这是因为JS中所有函数的原型都是Function.prototype，也就是说所有函数都是Function的实例。Function本身也是可以作为函数使用的----Function()，所以他也是Function的一个实例。类似的还有Object，Array等，他们也可以作为函数使用:Object(), Array()。所以他们本身的原型也是Function.prototype，即Object.__proto__ === Function.prototype。换句话说，这些可以new的内置对象其实都是一个类，就像我们的Puppy类一样。
 * ES6的class其实是函数类的一种语法糖，书写起来更清晰，但原理是一样的。
 */