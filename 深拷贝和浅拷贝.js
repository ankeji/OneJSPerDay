/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-10-21 15:09:31
 * @LastEditors: ankeji
 * @LastEditTime: 2020-10-21 17:00:16
 */

/**
 * JS中有两种数据类型，原始数据类型和引用数据类型，当我们需要把一个变量赋给另一个变量时，对于原始数据类型来说就是直接拷贝的地址，原始数据类型是存在栈中的，引用数据类型是存在堆中的，
 * 当var b = a时，这个时候应为是原始数据类型直接拷贝的值   所以任意一个改变是不会影响对方的值的
 */
var a = 2;
var b = a;
b = 3;
// console.log(a,b);

/**
 * 引用数据类型是存在堆中的，在栈中的只是这个引用数据类型的地址，当使用var d = c;实际上是把c的地址给了d，因此c和d的地址是一样的，
 * 所以指向的值也是一样的，当执行d.s = 3;时，这个时候改变的是同一个值   ，，因此d改变，c也会改变！
 */
var c = {
    s: 2
};
var d = c;
d.s = 3;
// console.log(c,d);



// 最简单的实现方法就是用JSON.stringify先将对象转换为字符串，然后再用JSON.parse重新解析为JSON，这样新生成的对象与原对象就完全没有关系了
let target2 = {
    name: 'John',
    age: 20,
    drive: () => { },
    girlFriend: undefined
}
let newObj2 = JSON.parse(JSON.stringify(target2));
// console.log(newObj2);//{ name: 'John', age: 20 } 明显看出是没有drive和girlFriend的，因为JSON.stringify不能将方法和undefined属性转化为字符串，在转换为字符串过程中就丢了，再解析回来自然也没有了。



// 一层深拷贝实现
let target = {
    name: 'John',
    age: 20,
    friend: {
        name: 'Michel',
        age: 30
    }
}

// 直接遍历target对象，将它赋给一个新对象就行
const shallowCopy = (obj) => {
    //判断数据类型
    const result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}


var newObj = shallowCopy(target)
newObj.age = 30 //{ name: 'John', age: 30, friend: { name: 'Michel', age: 30 } } { name: 'John', age: 20, friend: { name: 'Michel', age: 30 } }
newObj.friend.age = 60//{ name: 'John', age: 30, friend: { name: 'Michel', age: 60 } } { name: 'John', age: 20, friend: { name: 'Michel', age: 60 } }
// console.log(newObj, target);

// 递归遍历
// 这样只是实现了一层的深拷贝，接下来用递归改进一下
let targetdeep = {
    name: 'John',
    age: 20,
    friend: {
        name: 'Michel',
        age: 30
    }
}
// 这样就实现的深层次的拷贝
const deepCopy = (obj) => {
    //判断数据类型
    const result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key])
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

var newObj1 = deepCopy(targetdeep)
newObj1.age = 30 //{ name: 'John', age: 30, friend: { name: 'Michel', age: 30 } } { name: 'John', age: 20, friend: { name: 'Michel', age: 30 } }
newObj1.friend.age = 60//{ name: 'John', age: 20, friend: { name: 'Michel', age: 60 } } { name: 'John', age: 20, friend: { name: 'Michel', age: 30 } }
// console.log(newObj1, targetdeep);


// 拷贝Symbol
let target3 = {
    [Symbol('name')]: 'John',
    age: 20,
    drive: () => { },
    girlFriend: undefined
}
/**
 * Reflect.ownKeys会返回对象的所有自有属性，包括Symbol属性和不可枚举属性，但是不包括继承属性。
 */
const deepCopy3 = (obj) => {
    //判断数据类型
    const result = Array.isArray(obj) ? [] : {};
    for (let key of Reflect.ownKeys(obj)) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepCopy3(obj[key])
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

var newObj3 = deepCopy3(target3)
// console.log(newObj3);

/**
 * for..of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合.但是不能遍历对象,因为没有迭代器对象.与forEach()不同的是，它可以正确响应break、continue和return语句
 * for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法：
 */
for (const key in target) {
    if (target.hasOwnProperty(key)) {
        const e = key;
        // console.log(e);
    }
}
for (var key of Object.keys(target)) {
    // console.log(key);
}



// 最终改进
const pick = (originObj, property) => {
    const map = new WeakMap();
    function dp(obj) {
        const result = Array.isArray(obj) ? [] : {};
        const existObj = map.get(obj);
        if (existObj) {
            return existObj;
        }
        map.set(obj, result);
        for (let key of Reflect.ownKeys(obj)) {
            // 只需要加一个检测，看看key是不是我们需要的属性就行
            if (obj.hasOwnProperty(key) && key === property) {
                if (obj[key] && typeof obj[key] === 'object') {
                    result[key] = dp(obj[key])
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }
    return dp(originObj);
}