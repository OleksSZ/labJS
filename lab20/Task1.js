const user = {
    name: "Іван",
    score: 120,
    
    show: function() {
        console.log("Ім'я:", this.name);
        console.log("Рахунок:", this.score);
    }
};

user.show();
