// 1. Створюємо змінні різних типів
let str      = "45";           // string
let num      = 17;             // number
let isActive = true;           // boolean
let nothing  = undefined;      // undefined
let empty    = null;           // null

console.log("1. Значення та їх типи:");
console.log("str     →", str, "     typeof:", typeof str);
console.log("num     →", num, "      typeof:", typeof num);
console.log("isActive→", isActive, "   typeof:", typeof isActive);
console.log("nothing →", nothing, "  typeof:", typeof nothing);
console.log("empty   →", empty, "    typeof:", typeof empty);

console.log("───────────────────────────────────────"); // просто роздільник , щоб було краще видно 

// 2. Явне перетворення (примусове)

let fromStringToNumber  = Number("123");       
let fromStringToNumber2 = Number("12.5");
let fromStringToNumber3 = Number("45px");
let fromNumberToString  = String(1984);
let toBoolean1 = Boolean(1);
let toBoolean2 = Boolean(0);                  //виведе false
let toBoolean3 = Boolean("");
let toBoolean4 = Boolean("hello");
let toBoolean5 = Boolean(null);               //виведе false
let toBoolean6 = Boolean(undefined);          //виведе false

console.log("2. Явне перетворення:");
console.log('"123"     → Number →', fromStringToNumber);
console.log('"12.5"    → Number →', fromStringToNumber2);
console.log('"45px"    → Number →', fromStringToNumber3, "(NaN)");
console.log('1984      → String →', fromNumberToString);
console.log('1         → Boolean →', toBoolean1);
console.log('0         → Boolean →', toBoolean2);
console.log('""        → Boolean →', toBoolean3);
console.log('"hello"   → Boolean →', toBoolean4);
console.log('null      → Boolean →', toBoolean5);
console.log('undefined → Boolean →', toBoolean6);

console.log("───────────────────────────────────────");

// 3. Неявне перетворення (автоматичне)

console.log("3. Неявне перетворення:");

// Математичні операції → майже завжди намагається перетворити на число
console.log('"5" + 3       →', "5" + 3);         // (конкатенація)
console.log('"5" - 3       →', "5" - 3);         // (віднімання → число)
console.log('"10" * "2"    →', "10" * "2");      // (множення)
console.log('"15" / "3"    →', "15" / "3");      // (ділення)
console.log('true + 5      →', true + 5);        // (true →+1)
console.log('false + 10    →', false + 10);      // (false →+0)
console.log('null + 7      →', null + 7);        //(null →+0)
console.log('undefined + 2 →', undefined + 2);   // (NaN(ошибку))

// Конкатенація з рядком має пріоритет
console.log('5 + " apples" →', 5 + " apples");   // "5 apples"
console.log('"" + 42 + true →', "" + 42 + true); // "42true"

console.log("───────────────────────────────────────");

// 4. Функція, що повертає тип значення

function getType(value) {
    return typeof value;
}

console.log("4. Функція getType():");
console.log("getType(42)          →", getType(42));
console.log('getType("hello")     →', getType("hello"));
console.log("getType(true)         →", getType(true));
console.log("getType(undefined)    →", getType(undefined));
console.log("getType(null)          →", getType(null));
console.log("getType([1,2,3])       →", getType([1,2,3]));
console.log("getType(function(){})  →", getType(function(){}));

console.log("───────────────────────────────────────");

// 5. Порівняння == (з приведенням типів(true)) та === (без приведення(false))

console.log("5. Порівняння == vs ===");

console.log("0 == false          →", 0 == false);
console.log("0 === false         →", 0 === false);

console.log('"" == false         →', "" == false);
console.log('"" === false        →', "" === false);

console.log("null == undefined   →", null == undefined);
console.log("null === undefined  →", null === undefined);

console.log('"0" == 0            →', "0" == 0);
console.log('"0" === 0           →', "0" === 0);

console.log("[] == 0             →", [] == 0);
console.log("[] === 0            →", [] === 0);

console.log('"" == 0             →', "" == 0);
console.log('"" === 0            →', "" === 0);