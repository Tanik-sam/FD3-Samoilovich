import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        nameCl: PropTypes.string.sRequired,
        partonymic: PropTypes.string.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    surname: this.props.surname,
    nameCl:this.props.nameCl,
    partonymic: this.props.partonymic,
    status:  this.props.balance>0?true:false,
    clientsEdt: this.props.clients.slice(),
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId ) {
      //if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
      }
    } );
    this.setState({clients:newClients});
  };

  /*
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  */
  addClient=()=>{
    var lll=this.state.clientsEdt.length+101
    
    var nn={id:lll,surname:"",nameCl:"",partonymic:"",status:true,fio:'',balance:''}
    var ll=this.state.clientsEdt
    
    ll.push(nn)
    
    this.setState({clientsEdt:ll})
    console.log(this.state.clientsEdt, lll);
    
  }
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    var cG=[];
    for (var a=0; a<this.props.columnName.length; a++ ) {
      var columnN=this.props.columnName[a];
      let cGs = <th className='ColumnN' key={columnN.code}>  {columnN.text}</th>
      cG.push(cGs);
    }

    console.log("MobileCompany render");

    var clientsCode=this.state.clientsEdt.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input className='notTable' type="button" value="=МТС" onClick={this.setName1} />
        <input className='notTable' type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <hr/>
        <input className='notTable' type="button" value="Все"  />
        <input className='notTable' type="button" value="Активные"  />
        <input className='notTable' type="button" value="Заблокированные"  />
        <hr/>
        <div className='MobileCompanyClients'>
          <table>
            <tbody>
        <tr className="MobileClient">{cG}</tr> 
          {clientsCode}
          </tbody>
          </table>
        </div>
        <input  type="button" value="Добавить клиента" onClick={this.addClient} />
         
      </div>
    )
    ;

  }

}

export default MobileCompany;
