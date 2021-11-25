
class Scales {

    list:Array<object>;
    
    constructor() {
        this.list=[];
        
    }

      add(product:object):void {
        this.list.push(product)
        console.log(this.list)
      }

      getSumScale() {
        let totalWeight:number=0;
        for (let i=0;i<this.list.length;i++){
       // totalWeight+=this.list[i].weight
        }
      }
     
      getNameList():void {
        
        for (let i=0;i<this.list.length;i++){
        //console.log=this.list[i].name
        }
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

    constructor(_color:string, _taste:string,_weight:number) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(); 
        this.color=_color;
        //this.taste=_taste;
        this.weight=_weight

    }

}

class Tomato extends Products {  //со сметаной
    
   
    color:string;
    //taste:'sour'|'sweet'|'plain';
    weight:number;

    constructor(_color:string, _taste:string,_weight:number) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(); 
        this.color=_color;
        //this.taste=_taste;
        this.weight=_weight

    }
    }


var scales:Scales=new Scales
let apple1:Apple=new Apple('yelow','sweet',200);
let tomato1:Tomato=new Tomato('red','sour',200);
scales.add(apple1);
scales.add(tomato1);

