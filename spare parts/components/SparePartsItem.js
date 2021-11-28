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
      articulCode: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      priceNDS: PropTypes.number.isRequired,
      equipment: PropTypes.string.isRequired,
      
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
    console.log("SparePartsItem code="+this.props.info.code+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

   setSelectedSp=(eo)=>{
     spEvents.emit('SpClicked',this.props.info.code);
     console.log('emited',this.props.info.code)
   }
   editRow=(eo) =>{
    spEvents.emit('SpEdit',this.props.info.code);
    console.log('SpEdit',this.props.info.code)
    this.setState({editMode:0});
   }
   deleteRow=(eo) =>{
    console.log (eo)
    if(eo){ 
    eo.stopPropagation();}
    spEvents.emit('SpDelete',this.props.info.code);
    console.log('SpDelete',this.props.info.code)
   }
 
  render() {
    console.log("SparePartsItem render","code",this.props.info.code);
    
    var classSp="SparePartsItem"
    if (this.props.selectedSparePartsId==this.props.info.code) {classSp="SpItemChosen"} else classSp="SparePartsItem"   
    console.log (this.props.selectedSparePartsId)

    return (
      <tr className={classSp} onClick={this.setSelectedSp}>
      <td className="StatusActive">{this.state.info.spName}</td>
      <td className="StatusActive">{this.state.info.articul}</td>
      <td className="StatusActive">{this.state.info.articulCode}</td>
      <td className="StatusActive">{this.state.info.price}</td>
      <td className="StatusActive">{this.state.info.priceNDS}</td>
      <td className="StatusActive">{this.state.info.equipment}</td>
      <td className="StatusActive">{this.state.info.quantity}</td>
      <td className={this.state.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.state.info.quantity>0?"active":"blocked"}</td>
      <td className="StatusActive"><input className="inTable" type='button' value='Редактировать' onClick={this.editRow} disabled={this.state.editMode==0}/></td>   
      <td className="StatusActive"><input className="inTable" type='button' data={'del'+this.props.info.code} value='Удалить' onClick={this.deleteRow} disabled={this.state.editMode==0}/> </td>   
      </tr>
    )        
  }

}

export default SparePartsItem;

