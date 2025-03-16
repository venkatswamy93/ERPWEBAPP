import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
         Vj 
        </a>
        <span className="ms-1">&copy;</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Demo Verson</span>
       
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
