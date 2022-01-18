import React from 'react';
import PropTypes from 'prop-types';
import './MoviePageDetail.css';
import {movieEvents} from './events';
import { NavLink } from 'react-router-dom';
class MoviePageDetail extends React.Component {

 /* static propTypes = {
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
      
    })
  }*/
   

  render() {


    console.log("SparePartsItemCard render");
     
    let br= this.props.info.show.summary
    let newStr=[]
    let newStr1=[]
    if (br){
    let newArr=br.split(/<p>|<\/\bp>/g)
       
    for(let i=0; i<newArr.length;i++){
        if (newArr[i]!=''){
            if (newArr[i].indexOf('<b>')!=-1){
             
            let newArr1=newArr[i].split(/<b>|<\/\bb>/g)
             
            for(let j=0; j<newArr1.length;j++){
                if (newArr1[j]==''){
                    newStr1.push(<b key={j+'k'}>{newArr1[j+1]}</b>)
                   j=j+1;}
                else{newStr1.push(newArr1[j])}
                
            }   
               
            newArr[i]=newStr1}
           newStr.push(<p key={i}>{newArr[i]}</p>)}
        }
    
    }
    return (
    
<div className="Head" >
    <div className='SelectionMovie1'>
    <NavLink to={"/"+'main'+"/"+'main'}className='Nav'> <div className="Close">
           {'<'} 
        </div></NavLink>
        <div className='Detail'>
            {this.props.info.show.name}
        </div> 

    </div> 
    <div className='Fill'> 
<img className='Img' src={this.props.info.show.image.medium} width={300}  float="left"/> 

        <table className='itemData'>
            <tbody>
            <tr >
                   <td   colSpan={2} className="MovieName">
                   {this.props.info.show.name}
                   </td>  
            </tr>  
                <tr>
                    <td className='itemData'>
                        Id
                    </td>
                    <td  className='itemData'>
                        {this.props.info.show.id}
                    </td>
               </tr>
              <tr>
                    <td className='itemData'>
                        Type
                    </td>
                    <td  className='itemData'>
                        {this.props.info.show.type}
                    </td>  
              
             </tr> 
             <tr>
                    <td className='itemData'>
                        Language
                    </td>
                    <td  className='itemData'>
                        {this.props.info.show.language}
                    </td>  
             </tr> 
             <tr>
                    <td className='itemData'>
                         Runtime
                    </td>
                    <td  className='itemData'>
                         {this.props.info.show.runtime}
                    </td>  
             </tr> 
             <tr>
                    <td className='itemData'>
                        Premiered
                    </td>
                    <td  className='itemData'>
                        {this.props.info.show.premiered}
                    </td>  
             </tr> 
             <tr>
                    <td className='itemData'>
                         URL
                     </td>
          
                    <td className='itemData'>
                         {this.props.info.show.url}
                    </td> 
             </tr> 
             <tr>
                    <td className='itemData'>
                         Rating 
                    </td>
                    <td  className='itemData'>
                        {this.props.info.show.rating.average}
                    </td>  
             </tr> 

             <tr >
                   <td   colSpan={2} className='Summary'>
                        {newStr}
                   </td>  
            </tr>  
        </tbody>
        </table>
      </div> 
      </div> 
    

        
 
    )   
  

  }
}

  export default MoviePageDetail;
