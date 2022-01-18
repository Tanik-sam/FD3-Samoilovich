import React from 'react';
import PropTypes from 'prop-types';
import MovieSelect from './MovieSelect';
import './MoviePage.css';
import MoviePageCards from './MoviePageCards';
import MoviePageDetail from './MoviePageDetail';

class MoviePage extends React.PureComponent {
  
 
 /* static propTypes = {
    movies:PropTypes.arrayOf(
      PropTypes.shape({
        score: PropTypes.number.isRequired,
        show: PropTypes.objectOf(
          PropTypes.shape({
          _links : PropTypes.object.isRequired,
          averageRuntime :PropTypes.number.isRequired,
          dvdCountry :PropTypes.string.isRequired,
          ended :PropTypes.string.isRequired,
          externals :PropTypes.object.isRequired,
          genres :PropTypes.array.isRequired,
          id: PropTypes.number.isRequired,
          image : PropTypes.object.isRequired,
          language :PropTypes.string.isRequired,
          name :PropTypes.string.isRequired,
          network :PropTypes.object.isRequired,
          officialSite :PropTypes.string.isRequired,
          premiered :PropTypes.string.isRequired,
          rating :PropTypes.object.isRequired,
          runtime :PropTypes.number.isRequired,
          schedule :PropTypes.object.isRequired,
          status :PropTypes.string.isRequired,
          summary :PropTypes.string.isRequired,       
          type :PropTypes.string.isRequired,
          updated :PropTypes.number.isRequired,
          url :PropTypes.string.isRequired,
          webChannel :PropTypes.string.isRequired,
          weight :PropTypes.number.isRequired,
        }),
      )}))
   };*/
 
  state = {

    movieEdt: this.props.movies.slice(),
    selectedMovieId: null,
     
    movieSelected:'',
  };


setSelectedMovie=(eo)=>{
  this.setState({movieSelected:eo.target.value})
  console.log(eo.target.value)
}

  render() {
     console.log("MoviePage render");
     var movieFiltered=this.state.movieEdt
   //----------------------------------------------------------------------фильтрация
    
    if (this.state.movieSelected){
     var movFiltered=this.state.movieSelected
     if (movFiltered!='All'){
     if (movFiltered){
     
      function f3(v,i,a){return v.show.name.indexOf(movFiltered)!=-1}
      let movFiltered2=[...movieFiltered]
      movieFiltered=movFiltered2.filter(f3)
      }
    }
  }
      let kk=[...movieFiltered] //отбираются уникальные строки с видом орудия для формирования выпадающего списка
       
      let movItem=[]
      
          for (let i=0;i<kk.length;i++){
           movItem.push(kk[i].show.name)
          }
      movItem.unshift('All')
   //----------------------------------------------------------------------фильтрация_end


    var movSelect= movItem.map(movie =>
      <MovieSelect key={movie+'k'} movie={movie} />
      
    );

  
    var movieSlctd=movieFiltered.map(v=>
        <MoviePageCards  key={v.show.id} info={v.show} cardMode={this.state.cardMode}
                        selectedMovieId={this.selectedMovieId}/>)
         
    return (
      <div className='movieParts2'>
        <div className='SelectionMovie'>
          <select className="MovieSelect" onChange={this.setSelectedMovie}>
          {movSelect}
          </select>
        </div>
       
        <div className='movieItem'>
       
          <div className='flexDiv'>
          {movieSlctd}
        
          </div>
        </div>
        
       
        
      </div>
    )
          };

  }



export default MoviePage;
