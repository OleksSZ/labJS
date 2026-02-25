const user = {
  name: "Олег",
  age: 24,

  greet() {
    console.log("Зовнішній this:", this.name);

    const sayAge = () => {
      console.log("Внутрішній this:", this.name);   // бере this ззовні
      console.log("Мені " + this.age + " роки");
    };

    sayAge();
  }
};

user.greet();