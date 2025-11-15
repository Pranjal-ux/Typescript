// DIFF B/W Public and Private and Protected

//public=> HAR JAGHA USE KAR SAKTE HAI CLASS ME BHI AUR KISI DUSRI CLASS ME BHI

class BottleMaker{
    constructor(public name:string){
       

    }
}
class MetalBottleMaker extends BottleMaker{
    constructor(name:string){
        super(name)

    }
    getValue(){
        console.log(this.name)
    }
}
let obj1 = new MetalBottleMaker("LOHA")
// console.log(obj)
obj1.getValue()

// PRIVATE => JO CLASS PRIVATE HAI USSI ME HUM ACCESS KAR SAKTE HAI BAKKI KAHI NHI KAR SAKTE HAI

class BottleMakerS{
    constructor(private name:string){

    }
   
}
class MetalBottleMakerS extends BottleMakerS{
    constructor(name:string){
        super(name)

    }
    getValueS(){
        console.log(this.name)
    }
}
let obj = new MetalBottleMakerS("LOHA")
// console.log(obj)
obj.getValueS()


///PROTECTED => JO CLASS PROTECTED HAI USME USE KAR SAKTE HAI AUR EXTENDED CLASS ME USE KAR SAKTE HAI

class WaterBottle{
    protected name = "AppleBottle"
}


class LohaBody extends WaterBottle{
public material = "metal"

changeName(){
    this.name = "Cello"
    console.log(this.name)
    
    
}
}
let obj3 = new LohaBody();
obj3.changeName()