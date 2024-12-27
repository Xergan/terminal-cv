import React from "react";
import { generateTabs } from "../../utils/funcs";

export default function Help() {
  return (
    <div key="help">
      <ul>
        <li>help {generateTabs(9)} - Afficher cette aide</li>
        <li>clear {generateTabs(8)} - Effacer l'écran</li>
        <li>banner {generateTabs(7)} - Afficher la bannière</li>
        <li>about {generateTabs(8)} - Afficher la session "à propos"</li>
      </ul>

      <br />

      <div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
      <div>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
      <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
    </div>
  );
}
