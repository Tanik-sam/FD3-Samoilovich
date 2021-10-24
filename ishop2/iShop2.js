var iShop2 = React.createClass({

  displayName: 'iShop2',

  getInitialState: function() {
    return { 
      selectedGoodId: 23,
      rowG2: this.props.rowG.slice()
       
    };
  },
 
   selectedGood: function(cdVl){
     
    this.setState({selectedGoodId: cdVl} ); 
    console.log("this.state.selectedGoodId=",this.state.selectedGoodId,)
  },
  deleteGood: function(delCdVl){
    function fff(v,i,a){return v.codeGood!=delCdVl}
    var k=this.state.rowG2.filter(fff);
    
     this.setState({rowG2:k})
    console.log(this.state.rowG2)
    console.log("длина",this.state.rowG2.length)
     
    
    
  },

  render: function() {
    var b=1;
    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      var cGs=React.DOM.th({key:columnGood.code,className:'ColumnN'},columnGood.text);
      cG.push(cGs);
    }
     
     var stringSelect=this.state.rowG2.map( v =>
     React.createElement(iShopTr, {key:v.codeGood,codeValue:v.codeGood,
        nameGood:v.nameGood, priceGood:v.priceGood, urlGood:v.urlGood, quantityGood:v.quantityGood, 
        selectedGoodId:this.state.selectedGoodId,
        cbselectedGood:this.selectedGood,
        cbdeleteGood:this.deleteGood})
        )
    




     return React.DOM.div( {className:'iShop2'}, 
      React.DOM.table({className:'tableIshop'}, 
        React.DOM.caption( {className:'MarketName'}, this.props.marketName ),
        React.DOM.tbody( {className:'tableBody'}, 
         React.DOM.tr( {className:'ColumnName'}, cG ), 
         stringSelect,
                  ),
      )
      
    );
  },

});