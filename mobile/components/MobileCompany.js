import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';
import MobileClientCard from './MobileClientCard';
import {clientEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        nameCl: PropTypes.string.isRequired,
        patronymic: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    surname: this.props.surname,
    nameCl:this.props.nameCl,
    patronymic: this.props.patronymic,
    status:  this.props.balance>0?true:false,
    balance:this.props.balance,
    clientsEdt: this.props.clients.slice(),
    selectedClientId: null,
    cardShown: [],
    cardMode:1,
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

  componentDidMount = () => {
    clientEvents.addListener('ClientClicked',this.clientSelected);
    clientEvents.addListener('ClientDelete',this.clientDelete);
    clientEvents.addListener('ClientEdit',this.clientEdit);
    clientEvents.addListener('ClientSave',this.clientSave);
    clientEvents.addListener('ClientDefault',this.clientDefault);
    
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('ClientClicked',this.clientSelected);
    clientEvents.addListener('ClientDelete',this.clientDelete);
    clientEvents.removeListener('ClientEdit',this.clientEdit);
    clientEvents.removeListener('ClientSave',this.clientSave);
    clientEvents.removeListener('ClientDefault',this.clientDefault);
  };

  clientDelete=(clDl)=>{
    function fff(v,i,a){return v.id!=clDl}
    let kk=[...this.state.clientsEdt]
    let k=kk.filter(fff);
     this.setState({cardShown:[]})
     this.setState({clientsEdt:k})
  }



  clientSave=(clSn)=>{
   let k=[...this.state.clientsEdt]
    for (let i=0;i<k.length;i++){
      if (k[i].id==clSn.id){
        k[i]=clSn;
       console.log(k[i])
        }
      }
   
  this.setState({clientsEdt:k})
  console.log ("новый массив",k)
  }

  clientDefault=(clD)=>{ this.setState({cardMode:1})}

  clientEdit = (edtCdVl) => {
    this.setState({cardMode:2})
   }
  addClient=()=>{
    this.clientEdit()
    var lll=this.state.clientsEdt.length+101
    var nn={id:lll,surname:"",nameCl:"",patronymic:"",status:true,balance:''}
    var ll=[...this.state.clientsEdt];
    ll.push(nn)
    this.setState({clientsEdt:ll})
    console.log(this.state.clientsEdt, lll);
    
  }
  clientSelected=(clId)=>{
    this.setState({selectedClientId: clId} ); 
    function ffff(v,i,a){return v.id==clId }
    let cl=[...this.state.clients]; 
    let cll=cl.filter(ffff); 
    this.setState ({cardShown:cll})
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

    var clientsCode=this.state.clientsEdt.map(client =>
      <MobileClient key={client.id} info={client} selectedClientId={this.state.selectedClientId} />
    );
    if (this.state.cardShown!=[]) {var clientSelected=this.state.cardShown.map(v=>
      <MobileClientCard  key={v.id} info={v} cardMode={this.state.cardMode}
      nameRow={this.props.columnName} selectedClientId={this.selectedClientId} saveNew={this.state.saveNew}/>)}
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
        <input className="inTable" type="button" value="Добавить клиента" onClick={this.addClient} />
        {clientSelected}
      </div>
    )
    ;

  }

}

export default MobileCompany;
