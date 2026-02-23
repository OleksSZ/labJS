class Користувач {
    constructor(Myname) {
        this.Myname = Myname;
    }
    
    представитися() {
        console.log("Привіт, мене звати " + this.Myname);
    }
}
const юзер = new Користувач("Олександр");
юзер.представитися();
