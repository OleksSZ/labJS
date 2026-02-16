function createIdGenerator() {
    let id = 0;
    
    return function() {
        id++;
        return id;
    };
}

const generateId = createIdGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());