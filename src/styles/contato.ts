import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 120vh;

  @media(max-width: 1440px){
     min-height: 90vh;
  } 
  @media(max-width: 1080px){
    min-height: 56vh;
  }
  @media(max-width: 720px){
    min-height: 40vh;
  }
`;

export const BannerSectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/banner-contact.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContactSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const ContactSectionContentContainer = styled.div`
  display: flex;
  align-items: space-evenly;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactSectionMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px auto;
  align-self: center;
`;

export const ContactSectionContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 50%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const ContactSectionSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;
export const ContactSectionAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  & p, span{
    text-align: center;
  }
`;

export const ContactSectionCommunicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

export const SocialItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;