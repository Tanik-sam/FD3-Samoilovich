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
    editMode:1,
  };
  
  componentDidMount = () => {
    clientEvents.addListener('ButtonEnbled',this.buttonEnbled)
  }
  componentWillUnmount = () => {
    clientEvents.removeListener('ButtonEnbled',this.buttonEnbled)
  }
  buttonEnbled=()=>{
  this.setState({editMode:1})
  }
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
    this.setState({editMode:0});
   }
   deleteRow=(eo) =>{
    console.log (eo)
    if(eo){ 
    eo.stopPropagation();}
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
      <td className="StatusActive"><input className="inTable" type='button' value='Редактировать' onClick={this.editRow} disabled={this.state.editMode==0}/></td>   
      <td className="StatusActive"><input className="inTable" type='button' data={'del'+this.props.info.id} value='Удалить' onClick={this.deleteRow} disabled={this.state.editMode==0}/> </td>   
      </tr>
    )        
  }

}

export default MobileClient;

