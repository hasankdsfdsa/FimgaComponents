import React from 'react'
import { Flex,Container, Heading, Paragraph ,Image, Button, Menu, ServiceCard, BlogCard, CreativeCard} from './components'
import { BannerOne, BannerTwo, Blog, CreativeOne, CreativeThree, CreativeTwo,  Logo, ProtfolioOne, ProtfolioTwo, ServiceOne, ServiceThree, ServiceTwo, WorkFive, WorkFour, WorkOne, WorkSix, WorkThree, WorkTwo } from './assets'


function App(){
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

    <section>
          <Menu text="Home" des = "footer" />
           <Menu text="About" des = "footer"/>
           <Menu text="Benifit" des = "footer"/>
           <Menu text="Pricing" des = "footer"/>
           <Menu text="Blog" des = "footer"/>
    </section>

   
     <section>
          <Flex className="justify-between">
          <ServiceCard heading="Marketing Strategy" src={ServiceOne}/>
          <ServiceCard heading="Marketing Strategy" src={ServiceTwo}/>
          <ServiceCard heading="Marketing Strategy" src={ServiceThree}/>
          </Flex>
     </section>

     <section>
           <CreativeCard stepOne = "Step-1" heading="Global SEO Research"/>
           <CreativeCard stepOne = "Step-2" heading="Launching the Application"/>
           <CreativeCard stepOne = "Step-3" heading="Launching the Application"/>
     </section>


    <section>
      <Flex className="justify-between">
           <BlogCard heading="How to Be Ahead of Stock Changes" span="By John-5 Comments"/>
           <BlogCard heading="Online Reputation And Management" span="By Amin  - 10 Comments"/>
           <BlogCard heading="Tips To Move Your Project More Forward" span="By Insider  - 15 Comments"/>
      </Flex>  
    </section>

    <section>
       <Button text="Contact Us"/>
       <Button text="Get Free Quoto"/>
    </section>

    <section>
            <Heading text= "We Are Digital Marketing Agency" as="h1"/>
            <br/>
            <Heading text= "Our Services" as="h2"/>
            <br/>
            <Heading text= "Who We Are" as="h2"/>
            <br/>
            <Heading text= "Work Showcase " as="h2"/>
            <br/>
            <Heading text= "Our creative process." as="h2"/>
            <br/>
            <Heading text= "Client Review" as="h2"/>
            <br/>
            <Heading text= "Our Latest Blog" as="h2"/>
            <br/>
     </section>

     <section>
          <Paragraph text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. " type="bannerText" />
           <br/>
          <Paragraph text="We have been providing great flooring solutions service" className="w-[332px] text-lime-600" />
          <br/>
          <Paragraph text="Social Media has changed the way we interact & do business while creating" className="w-[257px]" />
          <br/>
          <Paragraph text="Social Media has changed the way we interact & do business while creating a new avenue." className="w-[257px]" />
          <br/>
          <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build" className="w-[257px]" />
          <br/>
          <Paragraph text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, " className="w-[442px]" />
          <br/>
          <Paragraph text="We provide digital experience services to startups and small businesses." className="w-[412px]" type="middleText"/>
          <br/>
          <Paragraph text="Practical tools and features make it easier to build and manage your site." className="w-[356px]" type="middleText"/>
          <br/>
          <Paragraph text="Practical tools and features make it easier to build and manage your site." className="w-[356px]" type="middleText"/>
          <br/>
          <Paragraph text="Practical tools and features make it easier to build and manage your site." className="w-[356px]" type="middleText"/>
          <br/>
          <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. " className="w-[270px]"/>
          <br/>
          <Paragraph text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  " className="w-[331px]"/>
          <br/>
          <Paragraph text="We provide digital experience services to startups and small businesses. " className="w-[331px] " type="footertext"/>
          <br/>
          <Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. " className="w-[450px] "type="middleText"/>
         
    </section>


    <section>
           <Image src={Logo}/>
           <Image src={BannerOne}/>
           <Image src={BannerTwo}/>
           <Image src={WorkOne}/>
           <Image src={WorkTwo}/>
           <Image src={WorkThree}/>
           <Image src={WorkFour}/>
           <Image src={WorkFive}/>
           <Image src={WorkSix}/>
           <Image src={ServiceOne}/>
           <Image src={ServiceTwo}/>
           <Image src={ServiceThree}/>
           <Image src={CreativeOne}/>
           <Image src={CreativeTwo}/>
           <Image src={CreativeThree}/>
           <Image src={ProtfolioOne}/>
           <Image src={ProtfolioTwo}/>
           <Image src={Blog}/>
    </section>

   </Container>

     </>
  )
}
export default App