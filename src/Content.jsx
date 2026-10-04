import React from 'react'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Content = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    if ( items.length === 0) {
        return <div className='empty'>
            <h1>No Items Available</h1>
        </div>
    }
    function handleClick(index) {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }


  return (
      <>
          <div className='skills'>
              <h2>My Technical Skills</h2>
          </div>
      <div className='content'>
          {
              items.map((item, index) => (
                  <div key={index} className='content-item'>
                      <div className='content-item' onClick={() => handleClick(index)}>
                          <span>{item.title}</span>
                          <span>
                              {openIndex === index ? <FaChevronUp/> : <FaChevronDown/>}
                          </span>
                      </div>
                      {
                          openIndex === index && (
                              <div className='content-title'>
                                  {
                                      item.content
                                  }
                              </div>
                          )
                      }
                  </div>
              ))
          }
      
          </div>
          </>
  )
}

export default Content
