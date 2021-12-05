import React from 'react';
import PropTypes from 'prop-types';


import SparePartsItem from './SparePartsItem';
import EquipmentSelect from './EquipmentSelect';
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
        priceNDS: PropTypes.number.isRequired,
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
    priceNDS:this.props.priceNDS,
    equipment:this.props.equipment,
    spPartsEdt: this.props.spParts.slice(),
    filtered:0, //0--все, 1 -активные, 2- заблокированные
    selectedSparePartsId: null,
    cardShown: [],
    cardMode:1, //1 - режим просмотра
    editMode:1,
    equip:[],
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
    spEvents.addListener('SpDelete',this.spDelete);
    spEvents.removeListener('SpEdit',this.spEdit);
    spEvents.removeListener('SpSave',this.spSave);
    spEvents.removeListener('SpDefault',this.spDefault);
    spEvents.addListener('ButtonEnbled',this.buttonEnbled)
  };
  buttonEnbled=()=>{
    this.setState({editMode:1})
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
      if ((k[i].code==clSn.code)&&(k[i].articulCode==clSn.articulCode)&&((k[i].spName!=clSn.spName)||(k[i].quantity!=clSn.quantity)||(k[i].price!=clSn.price)||(k[i].priceNDS!=clSn.priceNDS)||(k[i].equipment!=clSn.equipment)||(k[i].urlSP!=clSn.urlSP))){

        let newSpData={...k[i]}
        newSpData.spName=clSn.spName
        newSpData.price=clSn.price
        newSpData.priceNDS=clSn.priceNDS
        
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
 
  spDefault=(clD)=>{ this.setState({cardMode:1})}

  spEdit = (edtCdVl) => {
    this.setState({cardMode:2})
    this.setState({editMode:0})
   }
  addSp=()=>{
    var ll=[...this.state.spPartsEdt];
    var llll=ll.map(v=>v.code)
    let maxId = Math.max.apply(Math, llll) 
    var nn={code:(maxId+1),spName:"",articul:"",quantity:0,status:false,price:0, priceNDS:0, equipment:"",urlSP:""}
    
    ll=[...ll,nn]
    this.setState({spPartsEdt:ll})
    let lastCl=[];
    lastCl=[...lastCl,nn]
    this.setState ({cardShown:lastCl})
    this.setState({cardMode:2})
  }
  spSelected=(clId)=>{
    console.log (clId)
    
    this.setState({selectedSparePartsId: clId} ); 
    function ffff(v,i,a){return v.code==clId }
    let cl=[...this.state.spPartsEdt]; 
    let cll=cl.filter(ffff); 
    this.setState ({cardShown:cll})
    
   
    }

allSp=()=>{
  this.setState({filtered:0}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
activeSp=()=>{
  this.setState({filtered:1}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
blockedSp=()=>{
  this.setState({filtered:2}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
  render() {
    console.log(this.props.columnName);
    console.log(this.props.spParts);
    var cG=[];
    for (var a=0; a<this.props.columnName.length; a++ ) {
      var columnN=this.props.columnName[a];
      let cGs = <th className='ColumnN' key={columnN.code}>  {columnN.text}</th>
      cG.push(cGs);
    }

    console.log("SpareParts render");
    console.log(this.state.spPartsEdt);

    var spFiltered=this.state.spPartsEdt
    if (this.state.filtered==1){let spActive=[...this.state.spPartsEdt]; 
      function f1(v,i){if (v.spName<i.spName) return -1;if (v.spName>i.spName) return 1;return 0; }
      spFiltered=spActive.sort(f1);
      }
      else {
      if (this.state.filtered==2){let spBlocked=[...this.state.spPartsEdt]; 
        function f2(v,i){if (v.articulCode<i.articulCode) return -1;if (v.articulCode>i.articulCode) return 1;return 0; }
        spFiltered=spBlocked.sort(f2);
        }
     }

      let kk=[...spFiltered]
      let equipType=[]
      equipType.push(kk[0].equipment)
      for (let i=0;i<kk.length;i++){
        let u=0;
        if (kk[i].equipment!=kk[0].equipment){
          
          for (let j=0;j<equipType.length; j++){
            if (equipType[j]==kk[i].equipment){u++;}
          }
          if (u==0) {equipType.push(kk[i].equipment)}
      
        }
      }
      equipType.sort();
     
    

    var spCode=spFiltered.map(sp =>
      <SparePartsItem key={sp.code} info={sp} selectedSparePartsId={this.state.selectedSparePartsId} />
    );
    var eqSelect= equipType.map(sp =>
      <EquipmentSelect key={sp} eq={sp} />
      
    );
 
    if (this.state.cardShown!=[]) {var spSlctd=this.state.cardShown.map(v=>
      <SparePartsItemCard  key={v.code} info={v} cardMode={this.state.cardMode}
      nameRow={this.props.columnName} selectedSparePartsId={this.selectedSparePartsId}/>)}
    return (
      <div className='SpareParts'>
        <input className='notTable' data='all' type="button" value="Все" onClick={this.allSp}  />
        <input className='notTable' data='active' type="button" value="Сортировать по названию" onClick={this.activeSp}  />
        <input className='notTable' data='blocked' type="button" value="Сортировать по артикулу" onClick={this.blockedSp}  />
        <select className="EquipmentSelect" >
        {eqSelect}
        </select>
        <hr/>
        <div className='SparePartsItem'>
          <table>
            <tbody>
        <tr className="SparePartsItemEven">{cG}</tr> 
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
