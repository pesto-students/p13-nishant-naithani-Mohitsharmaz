
import React from 'react'
class BookDetail extends React.PureComponent{
constructor(props){
    super(props)
}
details = this.props.details
render(){
    return <>
     <div style={{background:"grey", color:"white", border:"1px solid red", margin:"2rem", textDecoration:"none" , listStyleType:"none"}}>
      <h1>{this.details.title}</h1>
      <p>{this.details.author}</p>
      <p>{this.details.year}</p>
    </div>
    </>
}
}

export default BookDetail