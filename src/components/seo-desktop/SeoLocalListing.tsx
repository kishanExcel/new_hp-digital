import React from 'react'
import SeoLocalListingCard from './SeoLocalListingCard'

import SeoListTable from './SeoListTable'

const SeoLocalListing = () => {
  return (
    <div className='w-full flex-col flex my-10 justify-center items-center flex-auto grow  gap-6 '>
       <div className="flex  justify-start items-start w-full px-10 gap-3">
        <SeoLocalListingCard
          title={"131"}
          subTitle={"Good"}
          titleColor={
            "linear-gradient(180deg, #00914C -5.21%, #00A550 48.68%, #64C08A 102.57%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #00914C -5.13%, #00A550 48.77%, #64C08A 102.66%)"
          }
        />

        <SeoLocalListingCard
          title={"181"}
          subTitle={"Incorrect"}
          titleColor={
            "linear-gradient(180deg, rgba(250, 172, 24, 0.94) -5.21%, #FFCA05 48.68%, #FFE7A3 102.57%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #FAAC18 -5.13%, #FFCA05 48.77%, #FFE7A3 102.66%)"
          }
        />

        <SeoLocalListingCard
          title={"13"}
          subTitle={"Doesn’t exist"}
          titleColor={
            "linear-gradient(180deg, #CF232A -3.84%, #EC1C24 50.06%, #F37E5F 103.95%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #CF232A -3.84%, #EC1C24 50.06%, #F37E5F 103.95%)"
          }
        />
       
      </div>
      <SeoListTable />
    </div>
  )
}

export default SeoLocalListing