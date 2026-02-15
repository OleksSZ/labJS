const words = ["яблуко", "кіт", "сонце", "ліс", "програма", "код"];

const AllLongerThan3 = words.every(word => word.length > 3);

console.log(AllLongerThan3);          // false  (бо є "кіт" і "ліс")