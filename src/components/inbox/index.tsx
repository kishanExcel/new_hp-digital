"use client";

import React, { FC, useState } from "react";
import AllMessages from "./allMessages";
import LayoutView from "../Layout/LayoutView";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import DesktopAllMessageView from "../../app/inboxDesktop/allMessages";

interface InboxViewProps {
  currentView: string;
  setSelectedMessage: (messageId: number) => void;
  setCurrentView: (view: string) => void;
}

interface tabsProbs {
  menuName: string;
  link: string;
}

const InboxView: FC<InboxViewProps> = ({
  currentView,
  setSelectedMessage,
  setCurrentView,
}) => {
  const [tabs, setTabs] = useState<tabsProbs[]>([
    {
      menuName: "All Messages",
      link: "",
    },
    {
      menuName: "Create Message",
      link: "",
    },
  ]);

  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
    setCurrentView("Chats");
  };
  return (
    if (isMobile){
      <LayoutView
      Childrens={
        <>
          <AllMessages onMessageClick={handleMessageClick} />
        </>
      }
      tabs={tabs}
      searchType="Conversation"
      component="InboxView"
    />
    } : <DesktopAllMessageView />
    // <DesktopAllMessageView />
  );
};

export default InboxView;
