import React from "react";
import { generateTabs } from "../../utils/funcs";

export default function Help() {
  return (
    <div className="w-max">
      <ul>
        <li><span className="text-green-400">help</span> {generateTabs(9)} - Display this help</li>
        <li><span className="text-green-400">clear</span> {generateTabs(8)} - Clear the screen</li>
        <li><span className="text-green-400">banner</span> {generateTabs(7)} - Show the banner</li>
        <li><span className="text-green-400">about</span> {generateTabs(8)} - Display the "about" section</li>
        <li><span className="text-green-400">experiences</span> {generateTabs(2)} - Display the "experiences" section</li>
      </ul>

      <br />

      <div>Tab or Ctrl + i&nbsp; =&gt; autocomplete the command</div>
      <div>Up Arrow {generateTabs(5)} =&gt; go back to the previous command</div>
      <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
    </div>
  );
}
