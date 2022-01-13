import React from 'react';
import PropTypes from 'prop-types';


import './SparePartsItemCardView.css';
import {spEvents} from './events';
class SparePartsItemCardView extends React.PureComponent {

 
  static propTypes = {
    info:PropTypes.shape({
      
      code:PropTypes.number.isRequired,
      spName: PropTypes.string.isRequired,
      articul: PropTypes.string.isRequired,
      articulCode: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      joint: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      urlSP: PropTypes.string.isRequired,
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
    
    var classSp="SparePartsItemCardView"
    
    if (this.props.selectedSparePartsId==this.props.info.code) {classSp="SpItemChosenCard"} 
    
    return (

      <div className={classSp} onClick={this.setSelectedSp}>
      <div className="SparePartsItemCardNmb" >{this.state.info.code} </div>
      <img className='Img' src={this.props.info.urlSP} width={250} height={165} float="left"/> 
      <table className='itemCard'>
          <tbody>
              <tr>
                 <td className='itemCardaName' colSpan={2}>
                    {this.props.info.spName}
                </td>
              </tr>
              <tr>
                <td className='itemCard'>
                  {this.props.nameRow.articulCode}
                </td>
                <td  className='itemCard'>
                  {this.props.info.articulCode}
                </td>  
              
              </tr> 
              <tr>
                <td className='itemCard'>
                Статус
                </td>
          
              <td className={this.props.info.quantity >0?"itemCard":"StatusBlocked"}>{this.props.info.quantity >0?"в наличии":"нет в наличии"}
              </td>
                 
              </tr> 
              <tr>
                <td className='itemCard'>
                  {this.props.nameRow.equipment}
                </td>
                <td  className='itemCard'>
                  {this.props.info.equipment}
                </td>  
              </tr> 
            
        </tbody>
        </table>
      </div> 
    )        
  }

}
  export default SparePartsItemCardView;
