import { useContext } from "react";
import { Theme } from "../provider/ThemeProvider";

function ThemeSwitcher() {
  
   const { isDarkMode, toggleTheme } = useContext(Theme);
  return (
    <div className="flex gap-4 items-center justify-between">
      <p className="text-text text-lg">Dark Mode</p>
       <div
        className="relative inline-block w-14 h-7 p-1 rounded-full cursor-pointer transition-colors duration-300"
        style={{ background: "var(--toggle)" }}
      >
        <input
          type="checkbox"
          checked={isDarkMode}
          className="appearance-none size-5  bg-card rounded-full 
          checked:bg-white checked:left-7 relative cursor-pointer transition-colors duration-300"
          onClick={toggleTheme}
        />
      </div>
    </div>
     
      
    // <div class="relative inline-block w-11 h-5">
    //   <input
    //     checked
    //     id="switch-component"
    //     type="checkbox"
    //     class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
    //   />
    //   <label
    //     for="switch-component"
    //     class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
    //   ></label>
    // </div>
  );
}

export default ThemeSwitcher;
