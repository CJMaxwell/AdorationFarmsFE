import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
.about {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 50vh;
}
.title {
  background: -webkit-linear-gradient(164deg,#7E1A16,#FE7A15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mission-vision {
  background-image: linear-gradient(164deg,#90cc41,#21954a);
}
`;

const About = () => {
  return (
    <Wrapper>
      <section className="p-8 lg:p-24 about lg:flex sm:block">
        <section className="lg:w-2/5 sm:w-full">
          <h1 className="font-semibold text-4xl title">About Us</h1>
        </section>
        <section className="lg:w-3/5 lg:pr-32 text-lg sm:w-full sm:pr-4">
          <article>
            Adoration Farms is a platform that helps individuals invest in agriculture without being involved
            in the activities. It assigns farmland to investors where palm trees are uniquely grown and managed
            for them. This takes the burden of the plumbing activities which is usually a turn-off for
            agribusiness lovers.
          </article>
        </section>
      </section>

      <section className="mission-vision lg:flex lg:justify-center lg:items-center lg:space-x-20 p-8 lg:p-24 sm:block">
        <section className="bg-white p-20 border border-white rounded-md">
          <h1 className="font-semibold text-4xl title">Vision</h1>
          <section className="pt-4">
            <article>
              To be your one-stop agribusiness partner in terms of quality
              and healthy palm oil.
          </article>
          </section>
        </section>
        <section className="bg-white p-20 border border-white rounded-md lg:mt-0 mt-8">
          <h1 className="font-semibold text-4xl title">Mission</h1>
          <section className="pt-4">
            <article>
              To give everyone the opportunity to participate in agriculture
              thereby helping to meet the sustainable development goal of
              zero hunger.
          </article>
          </section>
        </section>
      </section>
    </Wrapper>
  )
}

export default About
