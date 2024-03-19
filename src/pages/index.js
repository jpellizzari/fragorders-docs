import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import { Box } from '@mui/material/';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs/intro" className="button button--secondary button--lg">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for Frag Orders">
      <HomepageHeader />
      <main>
        <div className={styles.textContainer}>
          <Box m={1} marginBottom={4}>



            <h2 style={{ textAlign: 'center' }}>
              For Mission Creators
            </h2>



            <Box m={1}>
              <b>Publish your mission:</b> Frag Orders extracts mission data
              and publishes to a hosted web page so that mission
              participants can see important information, such as waypoints,
              threat rings, and enemy locations.
            </Box>
            <Box m={1}>
              <b>Auto-generate kneeboards:</b> Automatically create briefing
              materials using data extracted straight from the DCS .miz file
              with the press of a button.
            </Box>
            <Box m={1}>
              <b>Let the pilots plan:</b> Mission participants will be able
              to drop waypoints, set radio frequencies, and set laser codes ahead of the mission, without asking the mission creator for manual changes.
            </Box>
            <Box marginTop={2}>
              <h2 style={{ textAlign: 'center' }}>
                For Mission Participants
              </h2>
              <Box m={1}>
                <b>Review the plan:</b> Start building your situational
                awarness before the mission.
              </Box>
              <Box m={1}>
                <b>Collaborate with your wingmen: </b> Frag Orders includes
                planning and drawing tools to help organize and communicate
                with your flight.
              </Box>
              <Box m={1}>
                <b>Plan your flight:</b> Add and modify waypoints from the
                planning interface that will be written to the .miz file.
                Planners can also edit radio frequencies and add notes to
                their in-game kneeboard.
              </Box>
            </Box>
          </Box>
        </div>
        <Box m={4}>
          <div style={{ textAlign: 'center' }}>
            <h2>Video Tutorial</h2>
          </div>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.iframe}
              src="https://www.youtube.com/embed/GquZeyn8qJs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Box>
        <Box m={4}>
          <div style={{ textAlign: 'center' }}>
            <h2>Pricing</h2>
          </div>
          <div className={styles.textContainer}>
            <h3>Frag Orders Basic</h3>
          </div>
          <div className={styles.textContainer}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 24, fontWeight: 600 }}>Free</span>
              <div>
                <Box mt={2} style={{ textAlign: 'center' }}>
                  <p><b>Frag Orders Basic includes:</b></p>
                </Box>
              </div>
              <div style={{ textAlign: 'left' }}>
                <ul>
                  <li>
                    Publicly accessible mission visualization map
                  </li>
                  <li>
                    Drawing tools for participant coordination and planning
                  </li>
                  <li>
                    Generated kneeboard preview
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Box mt={4}>
            <div className={styles.textContainer}>
              <h3>Frag Orders Premium Subscription</h3>
            </div>
            <div className={styles.textContainer}>
              <div>
                <span style={{ fontSize: 24, fontWeight: 600 }}>$5</span> per month or{' '}<span style={{ fontSize: 24, fontWeight: 600 }}>$50</span> per year
              </div>
            </div>
            <div className={styles.textContainer}>
              <div>
                <Box mt={2} style={{ textAlign: 'center' }}>
                  <p><b>Frag Orders Premium includes:</b></p>
                </Box>
                <ul>
                  <li>
                    Flight planning for mission participants
                  </li>
                  <li>
                    Auto-generated kneeboards injected directly into your .miz file
                  </li>
                  <li>
                    Radio preset and laser code configuration
                  </li>
                  <li>
                    Countrol measure drawing for mission participants
                  </li>
                  <li>
                    Batch edit and CSV import features
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.textContainer}>
              <div style={{ textAlign: 'center' }}>
                <h3>Pricing FAQs</h3>
                <Box mt={2}>
                  <div style={{ textAlign: 'left' }}>
                    <div>Q: Do mission participants and planners need to subscribe?</div>
                    <div>A: No, mission participants and planners can use Frag Orders without a subscription </div>
                  </div>
                </Box>
                <Box mt={2}>
                  <div style={{ textAlign: 'left' }}>
                    <div>Q: Are volume discounts available?</div>
                    <div>A: Not currently, but that feature is coming soon!</div>
                  </div>
                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </main>
    </Layout>
  );
}
