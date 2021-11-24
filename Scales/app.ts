
class Scales {

    weight:number=0;
    list:Array<object>;
    product:{name:string, weight:number};

    constructor(_weight:number) {
        this.weight=_weight; 
    }

      add(product:object):void {
        this.list.push(product)
      }

      getSumScale(weight:number):number {
        this.weight=weight+this.product.weight
      }
     
      getNameList():void {
        console.log (this.list)
      }
    
}


class Products {

    weight:number;
    product:{name:string, weight:number};

    constructor() {
        this.weight=0; 
    }

    getScale():void {
        console.log(this.product.weight)
    }
    getName():void {
        console.log(this.product.name)
    }
    
}

class Apple extends Products {

    color:string;
    taste:'sour'|'sweet'|'plain';
    weight:number;

    constructor(color:string, taste:string,weight:number) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(); 
        this.color=color;
        this.taste=taste;
        this.weight=weight

    }

}

class Tomato extends Products {
    
   
    color:string;
    taste:'sour'|'sweet'|'plain';
    weight:number;

    constructor(color:string, taste:string,weight:number) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(); 
        this.color=color;
        this.taste=taste;
        this.weight=weight

    }
    }
}

let apple1:Apple=new Apple();

