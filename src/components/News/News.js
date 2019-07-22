import React from 'react';
import './News.css';

class Hello extends React.Component {  
    constructor(props){
        super(props);
        this.state ={
            articles: []
        }
    }

   componentDidMount () {
       fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-18&sortBy=publishedAt&apiKey=45bd0b61098140fcad82c07db5f0d10e')
       .then((response) => {
           return response.json();
       })
       .then((myJson) => {
           this.setState({
               articles: myJson.articles
           });
       });
   }
   render() {
       console.log(this.state);
       return(
           <div className ="Card" >
           {this.state.articles && this.state.articles.map((item, index) => {
               return(
                   <div >
                   <h3 > {item.title} </h3>
                        <ul className="Bottom">
                        <a href={item.url}>Read More</a>
                        <p >{item.author}</p>
                       
                        </ul>
                   </div>
               )
           })}
           
           </div>
       );
   }
}

export default Hello

//<img src={item.urlToImage} />   style ={ { backgroundImage: {item.urlToImage} } }
//                                  style="background-image: url("{{ artist.images[2].url }}")"
// <p>{item.content}</p>            style ={ { backgroundImage: `url(${item.urlToImage})`} }


// <img src={item.urlToImage} /> 
// style ={ { backgroundImage: `url(${item.urlToImage})`, WebkitFilter: 'blur(10px) saturate(2)'} 


// <div style ={ { backgroundImage: `url(${item.urlToImage})`} }>