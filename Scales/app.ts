
class Scales {

    list:Array<Products>;
    
    constructor() {
        this.list=[];
 
    }

      add(product:Products):void {
        this.list.push(product)
        console.log(this.list)
      }

      getSumScale():void {
        
        let totalWeight:number=0;
        for (let i=0;i<this.list.length;i++){
        totalWeight+=this.list[i].weight
        console.log(totalWeight)
        }
      }
     
      getNameList():void{
        
        for (let i=0;i<this.list.length;i++){
        console.log(this.list[i].name)
        }
        console.log (this.list)
      }
    
}

class Products {

    weight:number;
    name:string;
     
    color:string;
    taste:'sour'|'sweet'|'plain';

    constructor() {
        this.weight=0; 
    }

      getScale():void {
        console.log(this.weight)
      }
      getName():void {
        console.log(this.name)
      }
    
}

class Apple extends Products {
    name:string;
    color:string;
    taste:'sour'|'sweet'|'plain';
    weight:number;

    constructor(_name:string,_color:string, _taste:'sour'|'sweet'|'plain',_weight:number) {
        // конструктор класса-потомка должен вызвать конструктор класса-предка
        super(); 
        this.name=_name;
        this.color=_color;
        this.taste=_taste;
        this.weight=_weight

    }

}

class Tomato extends Products {  //со сметаной
    name:string;   
    color:string;
    taste:'sour'|'sweet'|'plain';
    weight:number;

    constructor(_name:string,_color:string, _taste:'sour'|'sweet'|'plain',_weight:number) {

        super(); 
        this.name=_name;
        this.color=_color;
        this.taste=_taste;
        this.weight=_weight

    }
    }

var scales:Scales=new Scales
let apple1:Apple=new Apple('golden','yelow','sweet',200);
let tomato1:Tomato=new Tomato('red gigant','red','sour',250);
scales.add(apple1);
scales.add(tomato1);
scales.getSumScale()
scales.getNameList()
apple1.getScale();
tomato1.getName();
