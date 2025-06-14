import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import Lists from './Lists'
import InfoBox from '../InfoBox/InfoBox'

function FilesList() {
  return (
     <>
     <div className="grid grid-cols-12 pt-6">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <BreadCrumbs/>
          <InfoBox/>
          <Lists/>
        </div>
        <div className="col-span-1"></div>
      </div>
     </>
  )
}

export default FilesList