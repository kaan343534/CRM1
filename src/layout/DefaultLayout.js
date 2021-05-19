import React from 'react'
import Footer from './partials/Footer.comp'
import Header from './partials/Header.comp'

const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
           <div className="header mb-2">
               <Header />
            </div>
            <div className="main" >
              {children}
            </div>
            <div className="footer">
              <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout
