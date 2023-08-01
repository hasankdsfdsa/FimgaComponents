import React from 'react'
import { Heading ,Container, Flex, Paragraph,Image, Button,Menu, Ancor, SolutionCard, CommonCard, BuldCard} from './components'
import { BannerOne, BannerThree, BannerTwo, Logo, SolutionA, SolutionB,SolutionC,SolutionD, StickerOne, StickerTwo,SolutionE,SolutionF } from './assets'

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

   <section>
           <Menu text="Home" des = "footer"/>
           <Menu text="About" des = "footer"/>
           <Menu text="Benifit" des = "footer"/>
           <Menu text="Pricing" des = "footer"/>
           <Menu text="Blog" des = "footer"/>
           <Menu text="Task Management" des = "footer"/>
           <Menu text="Company growth" des = "footer"/>
           <Menu text="Time tracking" des = "footer"/>
   </section>


   <section>
      <Heading  as ="h1" text="Professional task manager tool to grow " />
      <Heading  as ="h2" text="The best solutions in one tool" className="w-[564px]"/>
      <Heading  as ="h2" text="Join with any business tasks and any goals" className="w-[689px]"/>
      <Heading  as ="h2" text="Build the right plan for your team." className="w-[689px]"/>
     <Heading  as ="h2" text="Build the right plan for your team." className="w-[689px]"/>
     <Heading  as ="h2" text="Ready to get started? Start your free trial." className="w-[820px]"/>
     <Heading  as ="h3" text="Set Daily Alarms"/>
     <Heading  as ="h3" text="Advanced Search"/>
     <Heading  as ="h3" text="Share Blog Posts"/>
     <Heading  as ="h3" text="Archive Content"/>
     <Heading  as ="h3" text="Secure Checkout"/>
     <Heading  as ="h3" text="Faster Response Time"/>
  </section>

<section className='m-5'>
    <Button text="Contact Us" type="navBtn"/>
    <Button text="Sign up" />
    <Button text="Artificial Intelligence" />
    <Button text="Get started" />
</section>

<section>
    <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime." className="w-[516px]"/>
    <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem." className="w-[653px]"/>
    <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." className="w-[392px]"/>
</section>

<section>
   <CommonCard heading="Join with any business tasks and any  goals " headingStyle="w-[689px]" paragraph="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem." btnText="Sign up"  paragraphStyle="w-[578px] mt-[24px] mb-[48px]"/>

   <CommonCard heading="No more messy distribution lists." headingStyle="w-[502px]" paragraph="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos." btnText="Get Started"  paragraphStyle="w-[575px] mt-[24px] mb-[48px]"/>
</section>

<section>
  
<Flex className="justify-between flex-wrap gap-y-10">
          <SolutionCard heading="Set Daily Alarms" image={SolutionA}/>
          <SolutionCard heading="Advanced Search" image={SolutionD}/>
          <SolutionCard heading="Advanced Search" image={SolutionC}/>
          <SolutionCard heading="Advanced Search" image={SolutionD}/>
          <SolutionCard heading="Advanced Search" image={SolutionE}/>
          <SolutionCard heading="Advanced Search" image={SolutionF}/>       
</Flex>     
       <Ancor/>
</section>


<section>
    <Image src={Logo}/>
    <Image src={BannerOne}/>
    <Image src={BannerTwo} />
    <Image src={BannerThree}/>
    <Image src={StickerOne}/>
    <Image src={StickerTwo}/>
</section>  


<section>
<Flex className="justify-between">
    <BuldCard heading="Intro" peraA="300GB" peraB="Not Avai." peraC="Unlimited" peraD="Not Avai." peraE="Not Avai."/>
    <BuldCard heading="Pro" peraA="700GB" peraB="Unlimited" peraC="Available"  peraD="Included" peraE="Yesß"/>
    <BuldCard heading="Exclusive" peraA="900GB" peraB="Unlimited" peraC="Available" peraD="Available" peraE="Available"/>
   </Flex>
</section>
    
  </Container>  
          




  
    
 
    
    {/* <Flex>
      <p>dfds</p>
      <p>dfds</p>
    </Flex> */}


   
   
    

  </>

  )
}

export default App