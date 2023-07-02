import React from 'react'
import instaicon from "../../assets/sidebar/instagram.svg";
import homeIcon from "../../assets/sidebar/home.svg";
import searchIcon from "../../assets/sidebar/search.svg";
import settingicon from "../../assets/sidebar/setting.svg";
import plusicon from "../../assets/sidebar/plus.svg";
import fvrticon from "../../assets/sidebar/favorite.svg";
import chaticon from "../../assets/sidebar/chat.svg";
import menuicon from "../../assets/sidebar/menu.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="flex flex-col items-center py-6">
          <img src={instaicon} className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 py-8 md:py-16">
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={homeIcon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={searchIcon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={chaticon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={fvrticon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={plusicon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={settingicon} />
          <img className="hover:scale-110 transition-all duration-300 w-6 h-6 md:w-8 md:h-8" src={menuicon} />
        </div>
      </div>


    </>
  )
}

export default Sidebar;