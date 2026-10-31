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
          <Link to="/docs/v2/getting-started/intro" className="button button--secondary button--lg">
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
        <section className={styles.videoSection} aria-labelledby="v2-introduction">
          <Heading as="h2" id="v2-introduction">Introducing Frag Orders v2</Heading>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.iframe}
              src="https://www.youtube.com/embed/EV4NhSth9ys"
              title="Frag Orders v2 introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
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
            <h2>Pricing</h2>
          </div>
          <div className={styles.textContainer}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 24, fontWeight: 600 }}><Link to="/docs/v2/reference/pricing">View pricing information</Link></span>
            </div>
          </div>

        </Box>
      </main>
    </Layout>
  );
}
