import React from "react";

export default function Experiences() {
  const asciiArt = `
  ┌────────────┬─────────────────┬────────────┬─────────────────────────┐
  │    Date    │   Entreprise    │   Poste    │       Description       │
  ├────────────┼─────────────────┼────────────┼─────────────────────────┤
  │ 01/01/1970 │ Office Notarial │ Archiviste │ Classement des dossiers │
  └────────────┴─────────────────┴────────────┴─────────────────────────┘  

`;

  return (
    <div className="w-max">
      <pre>{asciiArt}</pre>
    </div>
  );
}
