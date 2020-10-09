import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-image: linear-gradient(164deg,#90cc41,#21954a);
`;

const BottomFooter = () => {
  return (
    <Wrapper className="text-white p-12 mt-8">
      Adoration Farms LTD is an agricultural technology company duly registered with the CAC with RC Number: xxxxx.
      adorationfarms.com is an agribusiness (agriculture business) that is helping solve the world’s biggest challenge:
      How can we sustainably match food production against a rising population?One farmer at a time,
      our goal is to make Africa the food basket of the world by providing smallholder farmers with access to
      high quality farm inputs, finance, data driven advisory and premium markets for their produce.
      With our platform, We increase digital participation in agriculture by providing agro based high
      yield investment opportunities that guarantee profitable returns for you and captures value for the
      farmers.
    </Wrapper>
  )
}

export default BottomFooter
