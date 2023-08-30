import React from 'react'
import port from './Portfolios/assets/css/port.module.css'
import style from '../pages/assest/css/home.module.css'
import LogoPort from './Portfolios/logo/LogoPort'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebPort from './Portfolios/Web/WebPort';
import VideoPort from './Portfolios/video/VideoPort';
import MobilePort from './Portfolios/Mobile/MobilePort';
import StationaryPort from './Portfolios/Staionary/StationaryPort';
import BusinessAdvertisingPort from './Portfolios/BusinessAdvertising/BusinessAdvertisingPort';
import BookAndMegaZinePort from './Portfolios/BookAndMegazine/BookAndMegaZinePort';
import PakagingLabelPort from './Portfolios/PaakagingLabel/PakagingLabelPort';
import SeoSmmPort from './Portfolios/seo_smm/SeoSmmPort';

const HomePort = () => {
  return (
    <>
    <section className={`${style.homePortSection}`}>
      <div className="container">
        <div className="row">
          <h5 className={`${style.homePortHead}`}>HALL OF FAME</h5>
          <span className={`${style.homePortDes}`}>
            At Logomish, our pursuit of success knows no bounds. We wholeheartedly embrace the privilege of delighting our clients with extraordinary outcomes that surpass expectations. We have garnered invaluable working experience across a multitude of industries, enriching our expertise and knowledge base. Our relentless pursuit of success continues unabated as we steadfastly believe in achieving the indomitable. Indulge in our captivating portfolio, where exemplars of our craft await, immerse yourself in the realms of inspiration, as your next venture takes shape.
          </span>
        </div>

        <div className="row mt-5" id={`${port.homeTabsPort}`}>
          <Tabs >
            <TabList>
              <Tab>Logo</Tab>
              <Tab>Web</Tab>
              <Tab>Video</Tab>
              <Tab>Mobile</Tab>
              <Tab>STATIONARY</Tab>
              <Tab>BUSINESS ADVERTISING</Tab>
              <Tab>BOOK AND MAGAZINE</Tab>
              <Tab>PACKAGING LABEL</Tab>
              <Tab>SEO & SMM</Tab>
            </TabList>

            <TabPanel>
              <LogoPort />
            </TabPanel>

            <TabPanel>
              <WebPort />
            </TabPanel>

            <TabPanel>
              <VideoPort />
            </TabPanel>

            <TabPanel>
              <MobilePort />
            </TabPanel>

            <TabPanel>
              <StationaryPort />
            </TabPanel>

            <TabPanel>
              <BusinessAdvertisingPort />
            </TabPanel>

            <TabPanel>
              <BookAndMegaZinePort />
            </TabPanel>

            <TabPanel>
              <PakagingLabelPort />
            </TabPanel>

            <TabPanel>
              <SeoSmmPort />
            </TabPanel>

          </Tabs>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomePort