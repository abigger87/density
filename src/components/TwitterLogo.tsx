import { Link as ChakraLink } from '@chakra-ui/react'
import styled from "@emotion/styled";
import twitterLogo from '../assets/twitter-logo.svg';

const TwitterLogo = ({twitter_link, twitter_handle}) => {

  return (
    <FooterContainer>
      <TwitterImage alt="Twitter Logo" src={twitterLogo} />
      <TwitterLink
        href={twitter_link}
        target="_blank"
        rel="noreferrer"
      >{`built on @${twitter_handle}`}</TwitterLink>
    </FooterContainer>
  )
}

const TwitterLink = styled(ChakraLink)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-bottom: 45px;
`;

const TwitterImage = styled.img`
  width: 35px;
  height: 35px;
`;

export default TwitterLogo;