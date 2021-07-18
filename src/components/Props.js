import React from 'react';

const Props = (props) => {
  
    return (
        <>
          <div className = "cards">
      <div className = "card">
        <img src={props.imgsrc} alt = "myImg" width = {400} height = {400}/>
        <div className = "card__info">
          <b><span className = "card__catagory">{props.title}</span></b>
          <h2 className = "card__title">{props.sname}</h2>
            
            
            <a href={props.link} target = "_blank">
              <button> Watch Now</button>
            </a>
        </div>
      </div>

    </div>  
        </>
    )
}
export default Props;
