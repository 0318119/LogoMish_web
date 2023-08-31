import React from 'react'
import styles from '../packages/assets/css/package.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logodesign from './Logodesign';
import Websitepkg from './websitepkg';
import EcommercePkg from './EcommercePkg';
import SocialMediaPkg from './SocialMediaPkg';
import SeoPkg from './SeoPkg';
import MobileAppPkg from './MobileAppPkg';
import UIdesignPkg from './UIdesignPkg';
import 'react-tabs/style/react-tabs.css';

function packages() {
  return (
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-lg-12">
                  <Tabs>
                      <TabList className={styles.tablist}>
                          <Tab className={styles.tab}>Logo <br /> packages</Tab>
                          <Tab className={styles.tab}>Website <br /> Packages</Tab>
                          <Tab className={styles.tab}>Ecommerce <br /> Packages</Tab>
                          <Tab className={styles.tab}>SEO <br /> Packages </Tab>
                          <Tab className={styles.tab}>Social Media <br /> Marketing Packages</Tab>
                          <Tab className={styles.tab}>UI Design  <br /> Package</Tab>
                          <Tab className={styles.tab}>Mobile App <br /> Development</Tab>
                      </TabList>

                      <TabPanel>
                          <Logodesign />
                      </TabPanel>
                      <TabPanel>
                          <Websitepkg />
                      </TabPanel>
                      <TabPanel>
                          <EcommercePkg />
                      </TabPanel>
                      <TabPanel>
                          <SeoPkg />
                      </TabPanel>
                      <TabPanel>
                          <SocialMediaPkg />
                      </TabPanel>
                      <TabPanel>
                          <UIdesignPkg />
                      </TabPanel>
                      <TabPanel>
                          <MobileAppPkg />
                      </TabPanel>
                  </Tabs>
            </div>
        </div>
    </div>
      
  )
}

export default packages