const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let комп = {
  увімкнено: false,
  
  увімкнути() {
    if (this.увімкнено) {
      console.log("Комп'ютер уже працює.");
    } else {
      this.увімкнено = true;
      console.log("Комп'ютер увімкнено → Піуууу...");
    }
  },
  
  вимкнути() {
    if (!this.увімкнено) {
      console.log("Комп'ютер і так вимкнений.");
    } else {
      this.увімкнено = false;
      console.log("Комп'ютер вимкнено → ...тиша...");
    }
  },
  
  показатиСтатус() {
    console.log("Стан:", this.увімкнено ? "Увімкнений" : "Вимкнений");
  }
};

function показатиМеню() {

  console.log("        Комп'ютер            ");
  console.log("------------------------------");
  console.log(" 1 → Увімкнути               ");
  console.log(" 2 → Вимкнути                ");
  console.log(" 3 → Показати статус         ");
  console.log(" 0 → Вийти                   ");
  console.log("------------------------------");
  
  rl.question("Вибір: ", (відповідь) => {
    const вибір = відповідь.trim();
    
    if (вибір === "1") {
      комп.увімкнути();
    } else if (вибір === "2") {
      комп.вимкнути();
    } else if (вибір === "3") {
      комп.показатиСтатус();
    } else if (вибір === "0") {
      console.log("До побачення!");
      rl.close();
      return;
    } else {
      console.log("Невірний вибір. Спробуй 1, 2, 3 або 0.");
    }
    
    показатиМеню();
  });
}


console.log("Ласкаво просимо до симулятора комп'ютера");
комп.показатиСтатус();
показатиМеню();