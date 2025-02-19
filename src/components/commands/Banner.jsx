import React from "react";

export default function Banner() {
  const asciiArt = `                                                            
                                                            
 /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$ 
|  $$ /$$/ /$$__  $$ /$$__  $$ /$$__  $$ |____  $$| $$__  $$
 \\  $$$$/ | $$$$$$$$| $$  \\__/| $$  \\ $$  /$$$$$$$| $$  \\ $$
  >$$  $$ | $$_____/| $$      | $$  | $$ /$$__  $$| $$  | $$
 /$$/\\  $$|  $$$$$$$| $$      |  $$$$$$$|  $$$$$$$| $$  | $$
|__/  \\__/ \\_______/|__/       \\____  $$ \\_______/|__/  |__/
                               /$$  \\ $$                    
                              |  $$$$$$/                    
                               \\______/                      
                                                            `;

  return (
<div className="w-full">
  <p>Welcome to the terminal! Type 'help' to get started.</p>
  <div className="overflow-x-auto w-full">
    <pre className="whitespace-pre overflow-x-auto text-[8px] sm:text-xs lg:text-base text-green-400 p-4 rounded-md">
      {asciiArt}
    </pre>
  </div>
</div>

  );
}
