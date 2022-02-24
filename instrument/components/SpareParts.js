import React from 'react';
import PropTypes from 'prop-types';
import SparePartsItem from './SparePartsItem';
import EquipmentSelect from './EquipmentSelect';
import EquipmentSort from './EquipmentSort';
import './SpareParts.css';
import SparePartsItemCard from './SparePartsItemCard';
import SparePartsItemCardView from './SparePartsItemCardView';
import {spEvents} from './events';



class SpareParts extends React.PureComponent {
  
 
  static propTypes = {
    adm:PropTypes.bool.isRequired,
    spParts:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        spName: PropTypes.string.isRequired,
        articul: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        quantity:PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        joint: PropTypes.string.isRequired,
        equipment: PropTypes.string.isRequired,
        urlSP: PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        subcategory:PropTypes.string.isRequired,
        group:PropTypes.string.isRequired,

      })
    ),
  };
 
  state = {
    code:this.props.code,
    spParts: this.props.spParts,
    spName: this.props.spName,
    articul:this.props.articul,
    manufacturer: this.props.manufacturer,
    quantity:this.props.quantity,
    status:  this.props.quantity>0?true:false,
    price:this.props.price,
    joint:this.props.joint,
    equipment:this.props.equipment,
    spPartsEdt: this.props.spParts.slice(),
    selectedSparePartsId: null,
    cardShown: [],
    cardMode:1, //1 - режим просмотра
    editMode:1,
    equip:[],
    equipmentSelected:'',
    equipmentSorted:'',
    dataReady: false,
    name: "???",
    sp_Parts: [],
    column_Name: [],
    viewTable: "Карточки",
    tView2: "tableViewNone",
    tView: "tableView"

  };

  componentDidMount = () => {
    spEvents.addListener('SpClicked',this.spSelected);
    spEvents.addListener('SpDelete',this.spDelete);
    spEvents.addListener('SpEdit',this.spEdit);
    spEvents.addListener('SpSave',this.spSave);
    spEvents.addListener('SpDefault',this.spDefault);
    spEvents.addListener('ButtonEnbled',this.buttonEnbled)
  
  };

  componentWillUnmount = () => {
    spEvents.removeListener('SpClicked',this.spSelected);
    spEvents.removeListener('SpDelete',this.spDelete);
    spEvents.removeListener('SpEdit',this.spEdit);
    spEvents.removeListener('SpSave',this.spSave);
    spEvents.removeListener('SpDefault',this.spDefault);
    spEvents.removeListener('ButtonEnbled',this.buttonEnbled)
    
  };

  eqClicked=(eq)=>{
    this.setState({equipmentSelected:eq})
  }


  buttonEnbled=()=>{
    this.setState({editMode:1})
    this.setState({cardMode:1})
    }
  spDelete=(clDl)=>{
    function fff(v,i,a){return v.code!=clDl}
    let kk=[...this.state.spPartsEdt]
    let k=kk.filter(fff);
     this.setState({cardShown:[]})
     this.setState({spPartsEdt:k})
     
  }



  spSave=(clSn)=>{
      
  let k=[...this.state.spPartsEdt]
  let changed=false
  let changedSp=[]
    for (let i=0;i<k.length;i++){
      if ((k[i].code==clSn.code)&&(k[i].spName==clSn.spName)&&((k[i].articul!=clSn.articul)||(k[i].manufacturer!=clSn.manufacturer)||(k[i].quantity!=clSn.quantity)||(k[i].price!=clSn.price)||(k[i].equipment!=clSn.equipment)||(k[i].urlSP!=clSn.urlSP))){
       
        let newSpData={...k[i]}
        newSpData.spName=clSn.spName
        newSpData.price=clSn.price
        newSpData.articul=clSn.articul
        newSpData.manufacturer=clSn.manufacturer
        newSpData.quantity=clSn.quantity
        newSpData.equipment=clSn.equipment
        newSpData.urlSP=clSn.urlSP
        changed=true
        k[i]=newSpData
        changedSp=[newSpData]
       
      }
      this.setState({cardMode:1})
      spEvents.emit('ButtonEnbled');
    }
    if (changed==true){
      this.setState({spPartsEdt:k})
      this.setState ({cardShown:changedSp}) 

    }
  
  }
 
  spDefault=(clD)=>{ this.setState({cardShown:[]})} //({cardMode:1})}

  spEdit = (edtCdVl) => {
    this.setState({cardMode:2})
    this.setState({editMode:0})
   }
  addSp=()=>{
    var ll=[...this.state.spPartsEdt];
    var llll=ll.map(v=>v.code)
    let maxId = Math.max.apply(Math, llll) 
    var nn={code:(maxId+1),spName:"",articul:"",quantity:0,status:false,price:0, joint:0, equipment:"",urlSP:""}
    
    ll=[...ll,nn]
    this.setState({spPartsEdt:ll})
    let lastCl=[];
    lastCl=[...lastCl,nn]
    this.setState ({cardShown:lastCl})
    this.setState({cardMode:2})
  }
  spSelected=(clId)=>{
   
    this.setState({selectedSparePartsId: clId} ); 
    function ffff(v,i,a){return v.code==clId }
    let cl=[...this.state.spPartsEdt]; 
    let cll=cl.filter(ffff); 
    this.setState ({cardShown:cll})
    
   }


setSelectedEq=(eo)=>{
  this.setState({equipmentSelected:eo.target.value})
  this.setState ({cardShown:[]})
}
setSortEq=(eo)=>{
  this.setState({equipmentSorted:eo.target.value})
  this.setState ({cardShown:[]})
} 
tableView=()=>{
    if (this.state.viewTable=="Таблица"){
        this.setState({tView:"tableView"});
        this.setState({tView2:"tableViewNone"});
        this.setState({viewTable:"Карточки"})
  }
    else{this.setState({viewTable:"Таблица"})
         this.setState({tView:"tableViewNone"})
         this.setState({tView2:"tableView"});
}
}

  render() {
    console.log(this.props.adm)
    console.log("SpareParts render");
    //--------------------------------------------------------------------сортировка 
    let sortArr=['Сброс сортировки','Сортировать по названию','Сортировать по артикулу','Сортировать по категории', 'Сортировать по производителю']
    var spFiltered=this.state.spPartsEdt
    if (this.state.equipmentSorted){
    switch (this.state.equipmentSorted){
       case 'Сортировать по названию':
        let spSortName=[...this.state.spPartsEdt]; 
        spFiltered=spSortName.sort(s1);
       break;
       case 'Сортировать по артикулу':
        let spSortArticul=[...this.state.spPartsEdt]; 
        spFiltered=spSortArticul.sort(s2);
       break;
       case 'Сортировать по узлу':
        let spSortJoint=[...this.state.spPartsEdt]; 
        spFiltered=spSortJoint.sort(s3);
       break;
       case 'Сортировать по производителю':
        let spSortManufacturer=[...this.state.spPartsEdt]; 
        spFiltered=spSortManufacturer.sort(s4);
       break;
     }
    
       function s1(v,i){if (v.spName<i.spName) return -1;if (v.spName>i.spName) return 1;return 0; }
       function s2(v,i){if (v.articul<i.articul) return -1;if (v.articul>i.articul) return 1;return 0; }
       function s3(v,i){if (v.joint<i.joint) return -1;if (v.joint>i.joint) return 1;return 0; }
       function s4(v,i){if (v.manufacturer<i.manufacturer) return -1;if (v.manufacturer>i.manufacturer) return 1;return 0; }
    }
   //----------------------------------------------------------------------сортировка_end

   //----------------------------------------------------------------------фильтрация
    
    if (this.state.equipmentSelected){
     var eqFiltered=this.state.equipmentSelected
     if (eqFiltered!='Оборудование на странице'){
     if (eqFiltered){
      function f3(v,i,a){return v.equipment.indexOf(eqFiltered)!=-1}
      let spFiltered2=[...spFiltered]
      spFiltered=spFiltered2.filter(f3)
      }
    }
  }
      let kk=[...spFiltered] //отбираются уникальные строки с видом орудия для формирования выпадающего списка
      let equipTypeItem1=[]
      for (let i=0;i<kk.length;i++){
          equipTypeItem1[i]=kk[i].equipment
          }
      function unique(anyArray){
            let eq1=anyArray[1]
            let uniqEq=[]
            uniqEq.push(eq1)
            for(let i=2; i<anyArray.length; i++){
            if (anyArray[i]!=eq1){
                uniqEq.push(anyArray[i]);
                eq1=anyArray[i]
              }
            }
            return(uniqEq)
          } 
          let equipTypeItem=unique(equipTypeItem1)
          console.log( equipTypeItem)
      equipTypeItem.sort();
      equipTypeItem.unshift('Оборудование на странице')
   //----------------------------------------------------------------------фильтрация_end
 
    
    var spCode=spFiltered.map(sp =>
      <SparePartsItem key={sp.code} info={sp} selectedSparePartsId={this.state.selectedSparePartsId} adm={this.props.adm}/>
    );
    
    var spCode2=spFiltered.map(sp =>
      <SparePartsItemCardView key={sp.code} info={sp} nameRow={this.props.columnName} selectedSparePartsId={this.state.selectedSparePartsId} />
    );

    var eqSelect= equipTypeItem.map(sp =>
      <EquipmentSelect key={sp+'k'} eq={sp} />
      
    );
    let sortItem=sortArr
    var eqSort= sortItem.map(sE =>
      <EquipmentSort key={sE} eqS={sE} />
      
    );
  
    if (this.state.cardShown!=[]) {var spSlctd=this.state.cardShown.map(v=>
      <SparePartsItemCard  key={v.code} info={v} cardMode={this.state.cardMode}
      nameRow={this.props.columnName} selectedSparePartsId={this.selectedSparePartsId}/>)}
    let adminAdd=<div></div>
    let adminMode=<tr className="SparePartsItemEven">
    <th className='ColumnN'>  {this.props.columnName.code}</th>
    <th className='ColumnN'>  {this.props.columnName.spName}</th>
    <th className='ColumnN'>  {this.props.columnName.articul}</th>
    <th className='ColumnN'>  {this.props.columnName.manufacturer}</th>
    <th className='ColumnN'>  {this.props.columnName.quantity}</th>
    <th className='ColumnN'>  {this.props.columnName.price}</th>
    <th className='ColumnN'>  {this.props.columnName.joint}</th>  
    <th className='ColumnN'>  {this.props.columnName.equipment}</th>
    <th className='ColumnN'>Наличие</th> 
      </tr> 

    if (this.props.adm==true){
     adminAdd=<input className="inTable" data='add' type="button" value="Добавить позицию" onClick={this.addSp} disabled={this.state.editMode==0} />
     adminMode=<tr className="SparePartsItemEven">
    <th className='ColumnN'>  {this.props.columnName.code}</th>
    <th className='ColumnN'>  {this.props.columnName.spName}</th>
    <th className='ColumnN'>  {this.props.columnName.articul}</th>
    <th className='ColumnN'>  {this.props.columnName.manufacturer}</th>
    <th className='ColumnN'>  {this.props.columnName.quantity}</th>
    <th className='ColumnN'>  {this.props.columnName.price}</th>
    <th className='ColumnN'>  {this.props.columnName.joint}</th>  
    <th className='ColumnN'>  {this.props.columnName.equipment}</th>
    <th className='ColumnN'>Наличие</th> 
    <th className='ColumnN'>Редактировать</th> 
    <th className='ColumnN'>Удалить</th>  
  </tr> 
    }
    
    return (
      <div className='SpareParts2'>
          <input className="inTable" data='view' type="button" value={this.state.viewTable} onClick={this.tableView} disabled={this.state.editMode==0} />
        <select className="EquipmentSort" onChange={this.setSortEq}>
        {eqSort}
        </select>
        <select className="EquipmentSelect" onChange={this.setSelectedEq}>
        {eqSelect}
        </select>
        <hr/>
        <div className='SparePartsItem'>
          <div className={this.state.tView}>
          <table>
            <tbody>
          {adminMode}
          {spCode}
          </tbody>
          </table>
          </div>
          <div className={this.state.tView2}>
          <div className='flexDiv'>
          {spCode2}
          </div>
          </div>
        </div>
        {adminAdd}
        {spSlctd}
        
      </div>
    )
    ;

  }

}

export default SpareParts;
