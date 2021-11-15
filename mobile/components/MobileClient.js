import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      nameCl: PropTypes.string.isRequired,
      patronymic: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      
    }),
  };

  state = {
    info: this.props.info,
  };
  
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

   setSelectedClient=(eo)=>{
     clientEvents.emit('ClientClicked',this.props.info.id);
     console.log('emited',this.props.info.id)
   }
   editRow=(eo) =>{
    clientEvents.emit('ClientEdit',this.props.info.id);
    console.log('ClientEdit',this.props.info.id)
   }
   deleteRow=(eo) =>{
    eo.stopPropagation();
    clientEvents.emit('ClientDelete',this.props.info.id);
    console.log('ClientDelete',this.props.info.id)
   }
 
  render() {
    console.log("MobileClient render","id=",this.props.info.id);
    
    var classClient="MobileClient"
    if (this.props.selectedClientId==this.props.info.id) {classClient="MobileClientChosen"} else classClient="MobileClient"   
    console.log (this.props.selectedClientId)

    return (
      <tr className={classClient} onClick={this.setSelectedClient}>
      <td className="StatusActive">{this.state.info.surname}</td>
      <td className="StatusActive">{this.state.info.nameCl}</td>
      <td className="StatusActive">{this.state.info.patronymic}</td>
      <td className="StatusActive">{this.state.info.balance}</td>
      <td className={this.state.info.balance>0?"StatusActive":"StatusBlocked"}>{this.state.info.balance>0?"active":"blocked"}</td>
      <td className="StatusActive"><input className="inTable" type='button' value='Редактировать' onClick={this.editRow}/></td>   
      <td className="StatusActive"><input className="inTable" type='button' value='Удалить' onClick={this.deleteRow}/></td>   
      </tr>
    )        
  }

}

export default MobileClient;

