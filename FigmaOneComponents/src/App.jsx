import React from 'react'
import { Container, Flex, Heading, Menu, Paragraph,Image, Button, CounterCard, ServiceCard, ChoseCard, LikeCard, CommonCard} from './components'
import { About, Banner, ChosseOne, ChosseThree, ChosseTwo, CreateLogoOne, CreateLogoTwo, Logo, SarviceFive, SarviceFour, SarviceOne, SarviceThree, SarviceTwo,  } from './assets'
import CheackBox from './components/card/CheackBox'
function App() {
  return (
    <>
  

 
  <Container>
    <section>
      <Flex className="gap-x-10">
        <Menu text="Home" type/>
        <Menu text="About" type/>
        <Menu text="Service" type/>
        <Menu text="Portfolio" type/>
        <Menu text="Price" type/>
        <Menu text="Blog" type/>
     </Flex>
    </section>

    <section className='bg-blue-500'>
           <Menu text="Home" des = "footer"/>
           <Menu text="About" des = "footer"/>
           <Menu text="Benifit" des = "footer"/>
           <Menu text="Pricing" des = "footer"/>
           <Menu text="Blog" des = "footer"/>
    </section>

  <section>
    <CommonCard heading = "Why Choose Us" paragraph="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs." className="w-[393px] pt-[9px] pb-[41px]"/>
    <CommonCard heading = "What We Do" paragraph="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology " className="w-[350px] pt-[20px] pb-[30px]"/>
  </section>

  <search>
      <LikeCard heading="Punto Pago Allows Quick And Secure 
      Payments For Services In Panama"/>
      <LikeCard heading="Punto Pago Allows Quick And Secure 
      Payments For Services In Panama"/>
      <LikeCard heading="The User Can Also Replenish A Balance Make Remittances "/>
      <LikeCard heading="Punto Pago Allows Quick And Secure 
      Payments For Services In Panama"/>
      <LikeCard heading="Punto Pago Allows Quick And Secure 
      Payments For Services In Panama"/>
  </search>

  <section>
    <Flex className="justify-between">
       <ChoseCard headingOne="Basic" headingTwo="160" image={ChosseOne}/>
       <ChoseCard headingOne="Professional" headingTwo="240"  image={ChosseTwo}/>
       <ChoseCard headingOne="Exclusive" headingTwo="160" image={ChosseThree}/>
   </Flex>
  </section>

<section>
    <CheackBox paragraph="We solve real-world problems through people and the web."/>
    <CheackBox paragraph="We make processes and technology work efficiently together."/>
    <CheackBox paragraph="We solve real-world problems through people and the web."/>
    <CheackBox paragraph="We advance improve existing technology through research and development."/>
    <CheackBox paragraph="We develop long-lasting and scalable solutions, relationships partnerships."/>
 </section>


  <section>
    <Flex className="flex-wrap gap-5">
      <ServiceCard image={SarviceOne} heading="web Design & Dev" paragraph="Social Media has changed the way we interact & do business while creating a new avenue."/>
      <ServiceCard image={SarviceTwo} heading="Content Writing" paragraph="Social Media has changed the way we interact & do business while creating"/>
      <ServiceCard image={SarviceThree} heading="Digital Marketing" paragraph="Social Media has changed the way we interact & do business while creating a new avenue."/>
      <ServiceCard image={SarviceFour} heading="web Design & Dev" paragraph="Social Media has changed the way we interact & do business while creating"/>
      <ServiceCard image={SarviceFive} heading="Support & Training" paragraph="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
    </Flex>
  </section>

  <section>
  <Flex className="justify-between">
   <CounterCard  headingOne="53k" headingTwo="Happy client"/> 
   <CounterCard  headingOne="10k" headingTwo="Projects Done"/> 
   <CounterCard  headingOne="120" headingTwo="Gets Award"/> 
   <CounterCard  headingOne="16" headingTwo="Operated Years"/> 
  </Flex>
  </section>



  <section className='bg-[#160C6D] py-[20px]'>
   <Button text ="Contact Us" type="navBtn"/>
   <Button text ="Get Free Quoto" />
   <Button text ="Learn More" />
  </section>

<section>
   <Button text ="Contact Us" type="footerBtn"/>
   <Button text ="Contact Us" type="footerBtn"/>
</section>

<section>
<Image  src={Logo}/>
    <Image  src={Banner}/>
    <Image  src={SarviceOne} className='mb-96'/>
    <Image  src={SarviceTwo}/>
    <Image  src={SarviceThree}/>
    <Image  src={SarviceFour}/>
    <Image  src={SarviceFive}/>
    <Image  src={ChosseOne}/>
    <Image  src={ChosseTwo}/>
    <Image  src={ChosseThree}/>
    <Image  src={CreateLogoOne}/>
    <Image  src={CreateLogoTwo}/>
    <Image  src={About}/>
</section>

<section>

<Paragraph text="A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. " type="banner" />
<Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." type="footer" />

<Paragraph text="We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
" className="w-[350px]" />

</section>

<section>
            <Heading as="h1" text="You're Unique. Your Website Should be too" className = "bg-teal-500"/> 
            <Heading as="h2" text="Why Choose Us" /> 
            <Heading as="h2" text="What We Do" /> 
            <Heading as="h2" text="We create real impact" /> 
            <Heading as="h2" text="Choose The Right Plan" /> 
            <Heading as="h2" text="What The People Thinks About Us " /> 
            <Heading as="h2" text="You May Also Like " className="text-[50px] text-black"/>
            <Heading as="h3" text="Content Writing" />
            <Heading as="h3" text="Digital Marketing" />
            <Heading as="h3" text="Support & Training" />
            <Heading as="h3" text="Competitive analysis" />
            <Heading as="h3" text="Strategy And research" />
            <Heading as="h3" text="Exclusive" />
            <Heading as="h3" text="Basic" />
            <Heading as="h3" text="Happy client"  className="text-4xl"/>
            <Heading as="h3" text="Exclusive" />
            <Heading as="h3" text="The User Can Also Replenish A Balance Make Remittances " className="w-[530px]"/>
            <Heading as="h3" text="The User Can Also Replenish A Balance Make Remittances " className="w-[530px]"/>
            <Heading as="h3" text="Punto Pago Allows Quick And Secure Payments For Services In Panama" className="w-[530px]"/>
            <Heading as="h4" text="10k" />
            <Heading as="h4" text="120" />
            <Heading as="h4" text="16k" />
</section>

<section>
  <Flex>
    <p>Hasan</p>
    <p>Tamim</p>
  </Flex>
</section>

</Container>
  
    </>
  )
}

export default App