import React, { FC, useEffect, useState } from "react";
import Drawer from "../../components/Drawer";
import CallView from "../../components/calls";
import InboxView from "../../components/inbox";
import EmailView from "../../components/mails";
import GlobalChatsView from "../../components/globalChat";
import { MyContext } from "@/utils/MyContext";
import Page404 from "../PageNotFound/Page404";
import Chats from "../../components/inbox/chats/chats";
import "../../app/globals.css";
interface HomeProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface ViewMap {
  [key: string]: JSX.Element;
}

const Home: FC<HomeProps> = ({ isOpen, setIsOpen }) => {
  const [currentView, setCurrentView] = useState<string>("InboxView");
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [view, setView] = useState<ViewMap>({
    CallView: <CallView />,
    InboxView: (
      <InboxView
        currentView={currentView}
        setSelectedMessage={setSelectedMessage}
        setCurrentView={setCurrentView}
      />
    ),
    EmailView: <EmailView />,
    GlobalChatsView: <GlobalChatsView />,
  });

  return (
    <MyContext.Provider value={{ currentView, setCurrentView }}>
      {/* DRAWER  */}
      <div className={`relative w-full flex`} style={{ height: "90%" }}>
        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${"bg-blackOlive opacity-75 w-full md:hidden sm:block h-full z-30 absolute top-0 left-0"}`}
          />
        )}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* ---------- */}
        {/* PAGES */}
        <div className={`relative  w-full bg-cultured`}>
          {currentView === "Chats" ? (
            <Chats
              messageId={
                selectedMessage !== null ? selectedMessage.toString() : ""
              }
            />
          ) : view[currentView] ? (
            view[currentView]
          ) : (
            <Page404 />
          )}
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default Home;
