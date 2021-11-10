import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      nameCl: PropTypes.string.sRequired,
      partonymic: PropTypes.string.isRequired,
      //status:PropTypes.bool,
      fio: PropTypes.string.isRequired,
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

  SelectedClient = null;

   setSelectedClient=(ref)=>{
    this.SelectedClient=ref;
    console.log(this.SelectedClient)
    
  }


  render() {
    console.log("MobileClient render","id=",this.props.info.id);
    
    var classClient="MobileClient"
    if (this.SelectedClient) {classClient="MobileClientChosen"} else classClient="MobileClient"   
    console.log (classClient)

    return (
      <tr  className={classClient} ref={this.setSelectedClient} onClick={this.setSelectedClient}>
      <td className="StatusActive">{this.state.info.surname}</td>
      <td className="StatusActive">{this.state.info.nameCl}</td>
      <td className="StatusActive">{this.state.info.partonymic}</td>
      <td className="StatusActive">{this.state.info.balance}</td>
      <td className={this.state.info.balance>0?"StatusActive":"StatusBlocked"}>{this.state.info.balance>0?"active":"blocked"}</td>
      <td className="StatusActive"><input type='button' value='Редактировать' ref={this.setNewDelRef}/></td>   
      <td className="StatusActive"><input type='button' value='Удалить' onClick={this.editRow}/></td>   
      </tr>
    )        
  }

}

export default MobileClient;

