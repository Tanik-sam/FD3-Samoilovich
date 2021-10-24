var iShopTr = React.createClass({

  displayName: 'iShopTr',



  selectedGoodClicked: function(eo){
  this.props.cbselectedGood(this.props.codeValue);
  console.log("сработал selectedGoodClicked", this.props.codeValue);
  },
  deleteRow: function(eo){
    eo.stopPropagation();
    console.log("ты меня нажал", "я", this.props.codeValue);
    this.props.cbdeleteGood(this.props.codeValue);
  },

  render: function() {
    var classGoodName="iShopTr"
    if (this.props.selectedGoodId==this.props.codeValue) {classGoodName="iShopTrRed"} else classGoodName="iShopTr"
    console.log(classGoodName)
   
    return React.DOM.tr({key:this.props.codeGood,className:classGoodName,  onClick:this.selectedGoodClicked }, 
           React.DOM.td({className:'RowN'},this.props.nameGood),
           React.DOM.td({className:'RowN'},this.props.priceGood),
           React.DOM.td({className:'RowN'},
           React.DOM.img({className:'Img', src: this.props.urlGood, width:150, height:150}),
           ),
           React.DOM.td({className:'RowN'},this.props.quantityGood),
           React.DOM.td({className:'RowN'},
           React.DOM.input( {type:'button',value:'delete',onClick:this.deleteRow} ), ),)
           
         
  },

})
