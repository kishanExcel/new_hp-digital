import React from 'react'
import Header from '../components/header';
import BottomBar from "../components/bottomBar"

interface layoutProps {
    Childrens: React.ReactNode
    hHeading: string,
}

const index: React.FC<layoutProps> = ({ Childrens, hHeading }) => {
    function showDrawer() {        
    }
    return (
        <div className='h-screen w-screen flex flex-col bg-cultured'>
            <Header showDrawer={showDrawer} hHeading={hHeading} />
            <div className='flex-1 overflow-hidden'>
                {Childrens}
            </div>
            <BottomBar />
        </div>
    )
}

export default index