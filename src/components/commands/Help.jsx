import React from "react";
import { generateTabs } from "../../utils/funcs";

export default function Help() {
  return (
    <div className="w-full">
      <ul>
        <li>help {generateTabs(9)} - Display this help</li>
        <li>clear {generateTabs(8)} - Clear the screen</li>
        <li>banner {generateTabs(7)} - Show the banner</li>
        <li>about {generateTabs(8)} - Display the "about" section</li>
      </ul>

      <br />

      <div>Tab or Ctrl + i&nbsp; =&gt; autocomplete the command</div>
      <div>Up Arrow {generateTabs(5)} =&gt; go back to the previous command</div>
      <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
    </div>
  );
}
