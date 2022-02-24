import React from 'react';
import PropTypes from 'prop-types';

import './SparePartsItem.css';
import {spEvents} from './events';

class SparePartsItem extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      
      code:PropTypes.number.isRequired,
      spName: PropTypes.string.isRequired,
      articul: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      quantity:PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      joint: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      ht:0
      
      
    }),
  };
 


  state = {
    info: this.props.info,
    editMode:1,
  };
  
  componentDidMount = () => {
    spEvents.addListener('ButtonEnbled',this.buttonEnbled)
  }
  componentWillUnmount = () => {
    spEvents.removeListener('ButtonEnbled',this.buttonEnbled)
  }
  buttonEnbled=()=>{
  this.setState({editMode:1})
  }
  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
  };

   setSelectedSp=(eo)=>{
     spEvents.emit('SpClicked',this.props.info.code);
   }
   editRow=(eo) =>{
    spEvents.emit('SpEdit',this.props.info.code);
    this.setState({editMode:0});
   }
   deleteRow=(eo) =>{
    if(eo){ 
    eo.stopPropagation();}
    this.setState({ht:1})
    setTimeout(this.deleteRow1,500)
   }

   deleteRow1=() =>{
    spEvents.emit('SpDelete',this.props.info.code);
    }
   
  render() {
    console.log("SparePartsItem render","code",this.props.info.code);
    
    var classSp="SparePartsItemOdd"
    
    if (this.props.selectedSparePartsId==this.props.info.code) {classSp="SpItemChosen"} else if (this.props.info.code%2==0) {classSp="SparePartsItemEven"} else {classSp="SparePartsItemOdd"}
    if (this.state.ht==1) {classSp="SparePartsItemClose"} 
    if (this.props.adm==true){
    return (
      <tr className={classSp} onClick={this.setSelectedSp}  >
      <td className="StatusActiveName">{this.state.info.code}</td>
      <td className="StatusActiveName">{this.state.info.spName}</td>
      <td className="StatusActive">{this.state.info.articul}</td>
      <td className="StatusActive">{this.state.info.manufacturer}</td>
      <td className="StatusActive">{this.state.info.quantity}</td>
      <td className="StatusActive">{this.state.info.price}</td>
      <td className="StatusActive">{this.state.info.joint}</td>
      <td className="StatusActive">{this.state.info.equipment}</td>
      <td className={this.state.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.state.info.quantity!==0?"в наличии":"нет в наличии"}</td>
      <td className="StatusActive"><input className="inTable" type='button' value='Редактировать' onClick={this.editRow} disabled={this.state.editMode==0}/></td>   
      <td className="StatusActive"><input className="inTable" type='button' data={'del'+this.props.info.code} value='Удалить' onClick={this.deleteRow} disabled={this.state.editMode==0}/> </td>   
      </tr>
    )        
   }
   else{
    return (
      <tr className={classSp} onClick={this.setSelectedSp}  >
      <td className="StatusActiveName">{this.state.info.code}</td>
      <td className="StatusActiveName">{this.state.info.spName}</td>
      <td className="StatusActive">{this.state.info.articul}</td>
      <td className="StatusActive">{this.state.info.manufacturer}</td>
      <td className="StatusActive">{this.state.info.quantity}</td>
      <td className="StatusActive">{this.state.info.price}</td>
      <td className="StatusActive">{this.state.info.joint}</td>
      <td className="StatusActive">{this.state.info.equipment}</td>
      <td className={this.state.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.state.info.quantity!==0?"в наличии":"нет в наличии"}</td>
      </tr>
    )        
   }
}

}

export default SparePartsItem;

