import React,{useEffect} from 'react'
import styled from 'styled-components'
import AppbarSimple from '../header/AppbarSimple'
import Header from '../header/header'

const PageLayoutLoginCheckNon = ({ children, appbar, title }) => {


 


    return (
        <div>
            <Page>
                <div className="wrapper">
                    {appbar ? <AppbarSimple title={title} /> : null}
                    <div className="content">
                        {children}
                    </div>
                </div>
            </Page>
        </div>
    )
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(197, 197, 197);
    .wrapper {
      height: 100vh;
      width: 100%;
      /* box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -webkit-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -moz-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842); */
      display: flex;
      flex-direction: column;
      overflow: hidden;
  
      @media (min-width:767.98px) {
        width: 440px;
        height: calc(100vh - 60px);
        border-radius: 20px;
        
      }
  
      .content{
        width:100%;
        flex:1;
        background-color:#ffffff;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
        }
    }
`

export default PageLayoutLoginCheckNon
