import React from 'react';
import img from './img.jpg'

class person extends React.Component{
     constructor(props){
        super(props) ; {
            this.state = {
                person:{
                    fullName :"Yasmine Bacha",
                    bio : "Hello",
                    imgSrc : <img src="img"></img>,
                    profession : "Makeup Artist",
            },
            show : true,
        }
    }
}
}
export default person