import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const DiscographyContainer = styled.div`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
`;

const AlbumsContainer = styled.article`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  max-width: 2000px;

  @media (min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SingleAlbum = styled.section`
  position: relative;
  cursor: pointer;

  :hover .release-info {
    opacity: 1;
  }
  .release-info {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.2s;
    background-color: var(--pinkFaded);
    color: var(--bg-primary);
    h3 {
      padding: 1rem;
    }
  }
`;

const Discography = ({ data }) => {
  const { nodes: albumData } = data.allDataJson;

  const albums = albumData.map((image) => (
    <LazyLoad height={200}>
      <Link to={`/${image.slug}`} key={image.id}>
        <SingleAlbum>
          <GatsbyImage
            image={getImage(image.image.childImageSharp.gatsbyImageData)}
            alt={`${image.artist}, ${image.record}`}
          />
          <div className='release-info'>
            <h3>{`${image.artist} "${image.record}"`}</h3>
          </div>
        </SingleAlbum>
      </Link>
    </LazyLoad>
  ));

  return (
    <DiscographyContainer>
      <section className='header-container'>
        <h2>Discography</h2>
      </section>
      <AlbumsContainer>{albums}</AlbumsContainer>
    </DiscographyContainer>
  );
};

export default Discography;
