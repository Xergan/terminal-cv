import React from "react";

export default function Experiences() {
  const asciiArt = `
    Date      Entreprise   Poste       Description      
------------ ------------ -------- -------------------- 
 01/01/1970   Place        Holder   I'm a placeholder.  

 
`;

  return (
    <div className="w-max">
      <pre>{asciiArt}</pre>
    </div>
  );
}
