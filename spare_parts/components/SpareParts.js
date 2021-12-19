﻿import React from 'react';
import PropTypes from 'prop-types';
import SparePartsItem from './SparePartsItem';
import EquipmentSelect from './EquipmentSelect';
import EquipmentSort from './EquipmentSort';
import './SpareParts.css';
import SparePartsItemCard from './SparePartsItemCard';
import {spEvents} from './events';



class SpareParts extends React.PureComponent {
  
 
  static propTypes = {
    
    spParts:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        spName: PropTypes.string.isRequired,
        articul: PropTypes.string.isRequired,
        articulCode: PropTypes.string.isRequired,
        quantity:PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        joint: PropTypes.string.isRequired,
        equipment: PropTypes.string.isRequired,
        urlSP: PropTypes.string.isRequired,

      })
    ),
  };
 
  state = {
    code:this.props.code,
    spParts: this.props.spParts,
    spName: this.props.spName,
    articul:this.props.articul,
    articulCode: this.props.articulCode,
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
      if ((k[i].code==clSn.code)&&(k[i].spName==clSn.spName)&&((k[i].articul!=clSn.articul)||(k[i].articulCode!=clSn.articulCode)||(k[i].quantity!=clSn.quantity)||(k[i].price!=clSn.price)||(k[i].equipment!=clSn.equipment)||(k[i].urlSP!=clSn.urlSP))){
       
        let newSpData={...k[i]}
        newSpData.spName=clSn.spName
        newSpData.price=clSn.price
        newSpData.articul=clSn.articul
        newSpData.articulCode=clSn.articulCode
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

  render() {

    console.log("SpareParts render");
    //--------------------------------------------------------------------сортировка 
    let sortArr=['Сброс сортировки','Сортировать по названию','Сортировать по артикулу','Сортировать по узлу']
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
     }
    
       function s1(v,i){if (v.spName<i.spName) return -1;if (v.spName>i.spName) return 1;return 0; }
       function s2(v,i){if (v.articulCode<i.articulCode) return -1;if (v.articulCode>i.articulCode) return 1;return 0; }
       function s3(v,i){if (v.joint<i.joint) return -1;if (v.joint>i.joint) return 1;return 0; }
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
      let equipTypeItem=[]
      let equipTypeItem0=[]
          for (let i=0;i<kk.length;i++){
          let o=[]
          o=kk[i].equipment.split(',')
          for (let j=0;j<o.length;j++){
            equipTypeItem0.push(o[j].trim())
       }
      }
      equipTypeItem.push(equipTypeItem0[0])
      for (let i=0;i<equipTypeItem0.length;i++){
        let u=0;
        if (equipTypeItem[i]!=equipTypeItem[0]){
          
          for (let j=0;j<equipTypeItem.length; j++){
            if (equipTypeItem[j]==equipTypeItem0[i]){u++;}
          }
          if (u==0) {equipTypeItem.push(equipTypeItem0[i])}
      
        }
      }
      equipTypeItem.sort();
      equipTypeItem.unshift('Оборудование на странице')
   //----------------------------------------------------------------------фильтрация_end
  
    var spCode=spFiltered.map(sp =>
      <SparePartsItem key={sp.code} info={sp} selectedSparePartsId={this.state.selectedSparePartsId} />
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
    return (
      <div className='SpareParts2'>
        <select className="EquipmentSort" onChange={this.setSortEq}>
        {eqSort}
        </select>
        <select className="EquipmentSelect" onChange={this.setSelectedEq}>
        {eqSelect}
        </select>
        <hr/>
        <div className='SparePartsItem'>
          <table>
            <tbody>
        <tr className="SparePartsItemEven">
        <th className='ColumnN'>  {this.props.columnName.code}</th>
        <th className='ColumnN'>  {this.props.columnName.spName}</th>
        <th className='ColumnN'>  {this.props.columnName.articul}</th>
        <th className='ColumnN'>  {this.props.columnName.articulCode}</th>
        <th className='ColumnN'>  {this.props.columnName.quantity}</th>
        <th className='ColumnN'>  {this.props.columnName.price}</th>
        <th className='ColumnN'>  {this.props.columnName.joint}</th>  
        <th className='ColumnN'>  {this.props.columnName.equipment}</th>
        <th className='ColumnN'>Наличие</th> 
        <th className='ColumnN'>Редактировать</th> 
        <th className='ColumnN'>Удалить</th>  
          </tr> 
          {spCode}
          </tbody>
          </table>
        </div>
        <input className="inTable" data='add' type="button" value="Добавить позицию" onClick={this.addSp} disabled={this.state.editMode==0} />
      
        {spSlctd}
        
      </div>
    )
    ;

  }

}

export default SpareParts;
