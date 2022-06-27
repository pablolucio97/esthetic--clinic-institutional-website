import type { NextPage } from 'next'
import { NextImage } from '../components/Next/NextImage'
import Head from 'next/head'

import { RevealFade } from '../components/Animations/RevealFade'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import {
  BannerSection,
  BannerSectionContainer,
  Container,
  CountUpContainer,
  CountUpGroupContainer,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer,
  MetricsSection,
  MetricsSectionContainer,
  ServicesSection,
  ServicesSectionContainer,
  ServicesSectionContentContainer,
  ServicesSurgeriesContainer,
  ServicesTreatmentsContainer
} from '../styles'
import { SubTitle } from '../components/Typography/SubTitle'
import dynamic from 'next/dynamic'
import { TextList } from '../components/Elements/TextList'
import { surgeriesList, treatmentsList } from '../data/data'

const CountUp = dynamic(() => import('react-countup'), { ssr: false })

const Home: NextPage = () => {

  return (
    <Container style={{ marginBottom: 120 }}>
      <Head>
        <title> MyPage | Home</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection>
        <BannerSectionContainer>
        <p>ok</p>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='sobremim'>
        <IntroductionSectionContainer>
          <IntroductionSectionImageContainer>
            <RevealFade>
              <NextImage
                imgUrl='/images/clinic.jpg'
                width={644}
                height={437}
              />
            </RevealFade>
          </IntroductionSectionImageContainer>
          <IntroductionSectionContentContainer>
            <Title
              content='Nossa clínica'
            />
            <RevealFade>
              <Text
                content='Construída em 1964, a clínica de tratamento estético Ramirez vem atendendo pacientes que desejam relizar tratamentos estéticos e cirurgias.'
              />
              <Text
                content='Contamos com uma equipe composta por profissionais qualificado e com sólida experiência. Nossa unidade é equipada com o que há de mais moderno para proporcionar procedimentos cirúrgicos da forma mais segura possível.'
              />
            </RevealFade>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <MetricsSection id='experiencia'>
        <MetricsSectionContainer>
          <RevealFade>
            <Title
              content='Nossa experiência'
            />
          </RevealFade>
          <CountUpGroupContainer>
            <CountUpContainer>
              <CountUp
                start={100}
                end={400}
                prefix='+ de '
                className='countUp'
                duration={3}
              />
              <SubTitle
                content='Cirurgias realizadas '
              />
            </CountUpContainer>
            <CountUpContainer>
              <CountUp
                start={200}
                end={650}
                prefix='+ de '
                className='countUp'
                duration={3}
              />
              <SubTitle
                content='Tratamentos finalizado'
              />
            </CountUpContainer>

            <CountUpContainer>
              <CountUp
                start={20}
                end={50}
                prefix='+ de '
                className='countUp'
                duration={4}
              />
              <SubTitle
                content='Anos de história'
              />
            </CountUpContainer>

          </CountUpGroupContainer>
        </MetricsSectionContainer>
      </MetricsSection>
      <ServicesSection>
        <ServicesSectionContainer>
          <Title
            content='Serviços'
          />
          <ServicesSectionContentContainer>
            <ServicesSurgeriesContainer>
              <SubTitle
                content='Tratamentos estéticos'
              />
              <TextList
                list={treatmentsList}
              />
            </ServicesSurgeriesContainer>
            <ServicesTreatmentsContainer>
              <SubTitle
                content='Cirurgias estéticas'
              />
              <TextList
                list={surgeriesList}
              />
            </ServicesTreatmentsContainer>
          </ServicesSectionContentContainer>
        </ServicesSectionContainer>
      </ServicesSection>
    </Container>
  )
}

export default Home
