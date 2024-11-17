import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Image from './components/Image'
import logo from '../src/assets/Fresh.png'
import one from '../src/assets/one.png'
import two from '../src/assets/Sweats.png'
import three from '../src/assets/three.png'
import four from '../src/assets/four.png'
import five from '../src/assets/five.png'
import six from '../src/assets/six.png'
import seven from '../src/assets/seven.png'
import star from '../src/assets/Stars.png'
import Bimage from '../src/assets/b_i_two.png'
import Bimagetwo from '../src/assets/b_i_three.png'
import points from '../src/assets/points2.png'
import Menu from './components/Menu'
import Flex from './components/Flex'
import Container from './components/Container'
import Heading from './components/Heading'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Nave bar */}
    <section className=" bg-[#FAE3B6]">
    <Container >
    <Flex>
    <div className="w-[15%] mt-[25px]">
      <Image imgsrc={logo}/>
    </div>
    <div className="w-[60%] ">
    <Flex className={"justify-between"}>
    <Menu menuName={"Men"} className={"px-[40px] text-[25px] mt-[30px] hover:text-red-500 duration-500"}/>
    <Menu menuName={"Woman"} className={"px-[40px] text-[25px] mt-[30px] hover:text-red-500 duration-500"}/>
    <Menu menuName={"Kids"} className={"px-[40px] text-[25px] mt-[30px] hover:text-red-500 duration-500"}/>
    <Menu menuName={"Collection"} className={"px-[40px] text-[25px] mt-[30px] hover:text-red-500 duration-500"}/>
    <Menu menuName={"Trends"}  className={"px-[40px] text-[25px] mt-[30px] hover:text-red-500 duration-500"}/>
    </Flex>
    </div>
    <div className="w-[25%] ">
      <Button btnSrc={"Login"}  className={" px-[40px] text-[25px] mt-[20px] py-[10px] hover:bg-red-500 duration-500 hover:text-white rounded-lg  mr-[10px]"}/>
      <Button btnSrc={"Sign up"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] hover:bg-red-500 duration-500  hover:text-white rounded-lg "}/>
    </div>
    </Flex>
    </Container>
    </section>
    {/* Nave bar */}

    {/* Banner Part */}
    <section className=" bg-[#FAE3B6]">
      <Container className={"py-[100px] "}>
       <Flex>
       <div className="w-[50%]">
        <Heading text={"Find The Best Fashion Style For You"} as={"h1"} className={"text-[50px] mt-[30px] pr-[150px] font-bold"}/>
        <p className="text-[20px]  pr-[110px] mt-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
        <Button btnSrc={"SHOP NOW"}  className={"px-[40px] text-[25px] mt-[50px] py-[20px] bg-[#000000] text-white rounded-lg hover:bg-red-500 duration-500 hover:text-white"}/>
        </div>
        <div className="w-[50%] ml-[330px] ">
          <Image imgsrc={one} />
        </div>
       
       </Flex>
      </Container>
    </section>
    {/* Banner Part */}

    {/* Collection Part */}

    <section>
      <Container className="my-[100px] "> 
      <Flex className="  w-[100%] justify-center my-[100px]">
      
      <Heading text={"New Collection"} as={"h2"} className={"text-[50px] mt-[50px]  font-bold text-center"}/>

      </Flex>

      <Flex className={"justify-between "}>
      <div className="relative">
      <Image imgsrc={two}/>
      <Button className={"absolute h-[60px] w-[270px] bg-white top-[290px] left-[40px] rounded-[20px] hover:bg-red-500 duration-500 hover:text-white text-[26px]"} btnSrc={"Sweater"}/>
      </div>
      <div className="relative">
      <Image imgsrc={three}/>
      <Button className={"absolute h-[60px] w-[270px] bg-white top-[290px] left-[40px] rounded-[20px] hover:bg-red-500 duration-500 hover:text-white text-[26px]"} btnSrc={"Jeans"}/>
      </div>
      <div className="relative">
      <Image imgsrc={four}/>
      <Button className={"absolute h-[60px] w-[270px] bg-white top-[290px] left-[40px] rounded-[20px] hover:bg-red-500 duration-500 hover:text-white text-[26px]"} btnSrc={"Baskets"}/>
      </div>
      
      
      
      </Flex>

      
      </Container> 
    </section>
    {/* Collection Part */}

     
    <section className='py-[150px]'>
      <Container>
        <Flex >
         <div className=" w-1/2 z-10">

        <Image imgsrc={five} className={""}/>
          </div> 
         <div className=" w-1/2  relative">
         <Heading text={"Best Fashion Since 2010"} as={"h1"} className={"text-[50px] ml-[100px] font-bold mt-[130px] pr-[200px]"}/>
         <p className="text-[20px]  pr-[231px] mt-[50px]  ml-[100px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
         <div className=" w-[600px] h-[200px] bg-[#FEECC8] rounded-lg absolute -translate-x-16 translate-y-[150px]">
          <Flex className={"justify-around"}>
          <div className="  ml-[40px]">
          <Flex> <div className="">
          <Heading text={"2010"} as={"h1"} className={"text-[20px]  mt-[55px] font-bold"}/>
          <Heading text={"Founded"} as={"h1"} className={"text-[20px] mt-[20px] font-bold"}/>
          </div>
          <div className=" h-[120px] w-[3px] bg-black rounded-lg
  mt-[40px]  ml-[30px]"></div></Flex>
          </div>
          <div className=" ">
          <Flex> <div className="">
          <Heading text={"5000+"} as={"h1"} className={"text-[20px]  mt-[55px] font-bold"}/>
          <Heading text={"Product Sold"} as={"h1"} className={"text-[20px] mt-[20px] font-bold"}/>
          </div>
          <div className=" h-[120px] w-[3px] bg-black rounded-lg mt-[40px]  ml-[30px]"></div></Flex>
          </div>
           <div className="">
          <Heading text={"4500+"} as={"h1"} className={"text-[20px]  mt-[55px] font-bold"}/>
          <Heading text={"Best Reviews"} as={"h1"} className={"text-[20px] mt-[20px] font-bold"}/>

          </div>
          
          </Flex>
         </div>
         </div> 
         
        </Flex>
      </Container>
    </section>

     {/* Footer Part */}
    <section className='bg-[#CFA485] mt-[50px] h-[550px]'>
    <Container className={"my-[100px] "}>
       <Flex>
       <div className="w-[45%]">
        <Heading text={"Best Seller Product"} as={"h1"} className={"text-[50px] mt-[70px] pr-[300px] font-bold leading-[70px] font-Ruhl"}/>
        <p className="text-[20px]  pr-[257px] mt-[30px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
        <Button btnSrc={"SHOP NOW"}  className={"px-[40px] text-[25px] mt-[30px] py-[20px] bg-[#000000] text-white rounded-lg hover:bg-red-500 duration-500 hover:text-white"}/>
        </div>
        <div className="w-[55%]   flex justify-around  ">
      
       <div className="w-[300px] h-[450px] bg-white rounded-t-[50px] mt-[50px]">
          <Image imgsrc={Bimage} className=""/>
         <div className="ml-[20px] mt-[10px]">
         <Image imgsrc={star} className="  "/>
         </div>

         <Heading text={"Sweater Shirt"} as={"h4"} className={" ml-[20px] text-[20px]  font-bold font-pop"}/>
         <Flex>
          <p className='mx-[20px] text-[#C4C4C4] text-[20px]'>$45.99</p>
         <p className='text-[20px]'>$35.99</p>
         </Flex>
        </div>
        <div className="w-[300px] h-[450px] bg-white rounded-t-[50px] mt-[50px]">
          <Image imgsrc={Bimagetwo} className=""/>
         <div className="ml-[20px] mt-[10px]">
         <Image imgsrc={star} className="  "/>
         </div>

         <Heading text={"Pants fashion"} as={"h4"} className={" ml-[20px] text-[20px]  font-bold font-pop"}/>
         <Flex>
          <p className='mx-[20px] text-[#C4C4C4] text-[20px]'>$55.00</p>
         <p className='text-[20px]'>$44.99</p>
         </Flex>
        </div>

      
        
        </div>
        
       
       </Flex>
      </Container>

    </section>
    {/* Footer Part */}

    </>
  )
}

export default App

