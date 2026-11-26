import { useContext } from "react";
import "./App.css";
import OverviewCard from "./component/OverviewCard";
import SocialMediaCard from "./component/SocialMediaCard";
import SocialMediaHeader from "./component/SocialMediaHeader";
import ThemeSwitcher from "./component/ThemeSwitcher";
import data from "./data.json";
import { Theme } from "./provider/ThemeProvider";

function App() {
   const { isDarkMode } = useContext(Theme);
  return (
    <div data-theme={isDarkMode ? "dark":"light"} className="bg-bg min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-4">

        {/* Header */}
        <div className="md:flex justify-between">
           <SocialMediaHeader dashboard={data.dashboard}/>
           <hr className="md:hidden my-6 border-t-text border-transparent"/>
           <ThemeSwitcher/>
        </div>

        {/* Social Media Cards */}
        <SocialMediaCard socialMedia={data.socialAccounts} />

        <p className="mt-10 mb-2 font-semibold text-2xl">Overview - Today</p>

      <OverviewCard overviews={data.overviews}/>
        
      </div>
   
    </div>
  ); 
}

export default App;
