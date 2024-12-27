import React from "react";

export default function Banner() {
  const asciiArt = `                                                            
                                                            
 /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$ 
|  $$ /$$/ /$$__  $$ /$$__  $$ /$$__  $$ |____  $$| $$__  $$
 \  $$$$/ | $$$$$$$$| $$  \__/| $$  \ $$  /$$$$$$$| $$  \ $$
  >$$  $$ | $$_____/| $$      | $$  | $$ /$$__  $$| $$  | $$
 /$$/\  $$|  $$$$$$$| $$      |  $$$$$$$|  $$$$$$$| $$  | $$
|__/  \__/ \_______/|__/       \____  $$ \_______/|__/  |__/
                               /$$  \ $$                    
                              |  $$$$$$/                    
                               \______/                     `;

  return (
    <div>
      <p>Bienvenue dans le terminal ! Tapez 'help' pour commencer.</p>
      <pre>{asciiArt}</pre>
    </div>
  );
}
