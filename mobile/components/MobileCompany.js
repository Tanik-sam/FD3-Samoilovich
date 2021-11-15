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
    filtered:0, //0--все, 1 -активные, 2- заблокированные
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
  let changed=false
    for (let i=0;i<k.length;i++){
      if ((k[i].id==clSn.id)&&((k[i].surname!=clSn.surname)||(k[i].surname!=clSn.surname)||(k[i].surname!=clSn.surname)||(k[i].surname!=clSn.surname))){
        k[i]=clSn;
        changed=true
       console.log('нашли неравные')
       }
    }
    if (changed==true){
      this.setState({clientsEdt:k})
      
    }
  
  }

  clientDefault=(clD)=>{ this.setState({cardMode:1})}

  clientEdit = (edtCdVl) => {
    this.setState({cardMode:2})
   }
  addClient=()=>{
    
    var lll=this.state.clientsEdt.length+101
    var nn={id:lll,surname:"",nameCl:"",patronymic:"",status:true,balance:0}
    var ll=[...this.state.clientsEdt];
    //ll.push(nn)
    ll=[...ll,nn]
    this.setState({clientsEdt:ll})
    
    this.clientSelected(lll)
    this.setState({cardMode:2})
  }
  clientSelected=(clId)=>{
    this.setState({selectedClientId: clId} ); 
    function ffff(v,i,a){return v.id==clId }
    let cl=[...this.state.clientsEdt]; 
    let cll=cl.filter(ffff); 
    this.setState ({cardShown:cll})
   
    }

allClients=()=>{
  this.setState({filtered:0}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
activeClients=()=>{
  this.setState({filtered:1}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
blockedClients=()=>{
  this.setState({filtered:2}) //0--все, 1 -активные, 2- заблокированные
  this.setState ({cardShown:[]})
}
  render() {

    var cG=[];
    for (var a=0; a<this.props.columnName.length; a++ ) {
      var columnN=this.props.columnName[a];
      let cGs = <th className='ColumnN' key={columnN.code}>  {columnN.text}</th>
      cG.push(cGs);
    }

    console.log("MobileCompany render");
    console.log(this.state.clientsEdt);
    var clientFiltered=this.state.clientsEdt
    if (this.state.filtered==1){let clientActive=[...this.state.clientsEdt]; 
      function f1(v,i,a){return v.balance>0 }
      clientFiltered=clientActive.filter(f1);}
      else {
      if (this.state.filtered==2){let clientBlocked=[...this.state.clientsEdt]; 
        function f2(v,i,a){return v.balance<=0 }
        clientFiltered=clientBlocked.filter(f2);}
     }
    var clientsCode=clientFiltered.map(client =>
      <MobileClient key={client.id} info={client} selectedClientId={this.state.selectedClientId} />
    );
    

    if (this.state.cardShown!=[]) {var clientSelected=this.state.cardShown.map(v=>
      <MobileClientCard  key={v.id} info={v} cardMode={this.state.cardMode}
      nameRow={this.props.columnName} selectedClientId={this.selectedClientId}/>)}
    return (
      <div className='MobileCompany'>
        <input className='notTable' type="button" value="=МТС" onClick={this.setName1} />
        <input className='notTable' type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <hr/>
        <input className='notTable' type="button" value="Все" onClick={this.allClients}  />
        <input className='notTable' type="button" value="Активные" onClick={this.activeClients}  />
        <input className='notTable' type="button" value="Заблокированные" onClick={this.blockedClients}  />
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
