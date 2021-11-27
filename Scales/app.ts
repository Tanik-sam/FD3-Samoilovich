
class Scales {

    list:Array<Products>;
    
    constructor() {
        this.list=[];
 
    }

      add(product:Products):Array<Products> {
        this.list.push(product)
        return (this.list)
      }

      getSumScale():number {
        
        let totalWeight:number=0;
        for (let i=0;i<this.list.length;i++){
        totalWeight+=this.list[i].weight
        }
        return (totalWeight)
      }
     
      getNameList():Array<string>{
        let nameList=[];
        for (let i=0;i<this.list.length;i++){
        nameList[i]=this.list[i].name
        }
        return (nameList)
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

      getScale():number{
        return(this.weight)
      }
      getName():string{
        return(this.name)
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
let addA1=scales.add(apple1);
console.log("Добавили яблоко ", addA1)
let addT1=scales.add(tomato1);
console.log("Добавили к яблоку помидор ", addT1)
let weightTotal=scales.getSumScale()
console.log("Суммарная масса ", weightTotal, " гр ")
let nameTotal=scales.getNameList()
console.log("Названия сортов добавленных продуктов", nameTotal)
let a1=apple1.getScale();
console.log("Масса одного яблока ", a1, " гр ");
let t1=tomato1.getName();
console.log("Сорт помидора", t1);