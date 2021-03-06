import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const ValidationHeader = styled.div`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
  height: 100vh;
  a {
    text-transform: uppercase;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo siteTitle='Robby Webb | Success' />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ValidationHeader>
          <div className='header-container'>
            <h2>Form successfully submitted</h2>
            <Link to='/'>Return Home</Link>
          </div>
        </ValidationHeader>
      </motion.section>
    </Layout>
  );
};

export default NotFoundPage;
