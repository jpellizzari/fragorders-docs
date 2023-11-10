import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import { Typography } from '@mui/material';
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
        <HomepageFeatures />

        <div className={styles.textContainer}>
          <Box m={1} marginBottom={4}>
            <Typography textAlign="center" fontWeight={600} fontSize={18}>
              For Mission Creators
            </Typography>

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
              to drop waypoints, set radio frequencies, and add briefing
              notes to their in-game kneeboards.
            </Box>
            <Box marginTop={2}>
              <Typography textAlign="center" fontWeight={600} fontSize={18}>
                For Mission Participants
              </Typography>
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

        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/GquZeyn8qJs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </main>
    </Layout>
  );
}
