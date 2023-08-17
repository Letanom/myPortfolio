import React from 'react'
import Navibar from '../components/NaviBar'
const RootLayout = ({ children }) => {
    
    return (
        <div className='root-layout'>
            <Navibar/>
         
           

            <main>
                {children}
              
            </main>
        </div>
    )
}

export default RootLayout