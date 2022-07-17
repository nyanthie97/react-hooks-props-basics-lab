import react from "react";

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        <a href={props.linkedin}> Linkedin </a> 
        <a href={props.github}> Github </a>
      </div>
    );
  }

  export default Links;