import { NextPage } from 'next'
import Head from 'next/head'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

import { SubTitle } from '../components/Typography/SubTitle'
import { Container } from '../layout/styles'

import {
  ContactSection,
  ContactSectionAddressContainer,
  ContactSectionCommunicationContainer,
  ContactSectionContactInfoContainer,
  ContactSectionContainer,
  ContactSectionContentContainer,
  ContactSectionMapContainer,
  ContactSectionSocialContainer,
  MapContainer,
  BannerSection,
  BannerSectionContainer,
  SocialItemContainer
} from '../styles/contato'

import { GoogleMap } from '../components/Elements/GoogleMap'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'

import { googleMapAddress } from '../data/data'

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
        <title>Danilo Fotografias | Contato</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <BannerSectionContainer>
        </BannerSectionContainer>
      </BannerSection>
      <ContactSection>
        <ContactSectionContainer>
          <Title
            content='Contato'
          />
          <ContactSectionContentContainer>
            <ContactSectionMapContainer>
              <SubTitle
                content='Visite nossa unidade'
              />
              <MapContainer>
                <GoogleMap
                  addressUrl={googleMapAddress}
                  size='small'
                />
              </MapContainer>
            </ContactSectionMapContainer>
            <ContactSectionContactInfoContainer>
              <ContactSectionSocialContainer>
                <SubTitle
                  content='Redes sociais'
                />
                <SocialItemContainer>
                  <FiInstagram className='socialContactIcons' />
                  <Text
                    content='@ramirezesesteticaclinic'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiFacebook className='socialContactIcons' />
                  <Text
                    content='ramirezesesteticaclinic'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiLinkedin className='socialContactIcons' />
                  <Text
                    content='ramirezesestetica-234221'
                  />
                </SocialItemContainer>
              </ContactSectionSocialContainer>
              <ContactSectionAddressContainer>
                <SubTitle
                  content='Endereço'
                />
                <Text
                  content='Rua João Ozório, número 123, João Monlevade - MG.'
                />
              </ContactSectionAddressContainer>
              <ContactSectionCommunicationContainer>
                <SubTitle
                  content='Contato'
                />
                <Text
                  content='(31) 991234123'
                />
                <Text
                  content='esthetic-clinic@ramirez.com'
                />
              </ContactSectionCommunicationContainer>
            </ContactSectionContactInfoContainer>
          </ContactSectionContentContainer>
        </ContactSectionContainer>
      </ContactSection>
    </Container >
  )
}

export default Home