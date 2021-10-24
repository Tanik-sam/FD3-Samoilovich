var iShop = React.createClass({

  displayName: 'iShop',

  render: function() {

    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      var cGs=React.DOM.th({key:columnGood.code,className:'ColumnN'},columnGood.text);
      cG.push(cGs);
    }
    var rG=[];
    for ( var b=0; b<this.props.rowG.length; b++ ) {
      var rowGood=this.props.rowG[b];
      var rGs=        
        React.DOM.tr({key:rowGood.codeGood,className:'Row'},
          React.DOM.td({className:'RowN'},rowGood.nameGood),
          React.DOM.td({className:'RowN'},rowGood.priceGood),
          React.DOM.td({className:'RowN'},
           React.DOM.img({className:'Img', src: rowGood.urlGood, width:150, height:150}),
           ),
          React.DOM.td({className:'RowN'},
           React.DOM.span({className:'RowNN'},rowGood.quantityGood),
          )
        )
        rG.push(rGs);
    }
    return React.DOM.div( {className:'iShop'}, 
      
      React.DOM.table({className:'tableIshop'}, 
        React.DOM.caption( {className:'MarketName'}, this.props.marketName ),
        React.DOM.tbody( {className:'tableBody'}, 
         React.DOM.tr( {className:'ColumnName'}, cG ),
         rG,
        ),
      )
      
    );
  },

});