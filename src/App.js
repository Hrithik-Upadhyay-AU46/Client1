import "./index.css";
// import './App.css';
import LandingPage from "./Component/LandingPage";
import homeLogo from "./Component/image/homeLogo.png";
import homeimg from "./Component/image/Rectangle159.png";
import company from "./Component/image/ACompny.png";
import bw from "./Component/image/BW.png";
import ftr from "./Component/image/Footer.png";
import lgo from "./Component/image/logo.png";


function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <div className="w-[100%] bg-[#000000]">
        <div className="w-[100%]">
          <section className="w-[100%] px-[36px] py-[20px] flex justify-between items-center">
            <img src={lgo} className="w-[102px]"></img>
            <div className="flex items-center ">
              <div className="text-white w-[617px] flex justify-between">
                <p className="cursor-pointer">ABOUT</p>
                <p className="cursor-pointer">WORK</p>
                <p className="cursor-pointer">SERVICES</p>
                <p className="cursor-pointer">BLOG</p>
                <p className="cursor-pointer">CLIENTS</p>
                <p className="cursor-pointer">EXPERTISE</p>
              </div>
              <button className="ml-[3rem] w-[140px] h-[50px] rounded-[5px] border-[2px] border-white text-white">LET'S TALK</button>
            </div>
          </section>




          <section className="h-[100vh] flex flex-col justify-between py-[6rem]">
            <div className="w-[100%] pl-[84px] pr-[84px] flex">
              <div
                className="   w-[750px]
                font-plus-jakarta-sans font-extrabold text-[48px] 
                 leading-[81%] tracking-[-0.02em] uppercase 
                text-white"
              >
                Experience the <br></br> difference with <br></br>Proleadz Media
              </div>
              <div
                className=" w-[614px] 
                  font-plus-jakarta-sans font-extrabold text-[48px] 
                  leading-[81%] tracking-[-0.02em] uppercase 
                  text-right text-white self-end"
              >
                where every<br></br> story becomes a<br></br> catalyst for
                growth
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <img className="w-[89.05px] h-[89.05px]" src={homeLogo}></img>
              </div>
              <h1
                class="  mt-[2rem]
            font-plus-jakarta-sans font-extrabold text-[128px] 
            leading-[81%] text-center uppercase 
            text-white border border-black"
              >
                Generating <span className="text-[#2DD975]">Your</span>{" "}
                <span className="text-[#6335F0]">Success</span> Story
              </h1>
            </div>
          </section>
          <section>
            <div className="w-[100%] flex justify-center">
              <img className="w-[1440px] h-[651px]" src={homeimg}></img>
            </div>
          </section>

          <section className="mt-[10rem] mb-[6rem]">
            <div className="w-[100%] flex justify-evenly">
              <div className="font-plus-jakarta-sans font-extrabold text-[48px] leading-[121.2%] text-[#2DD975] uppercase">
                About
              </div>

              <div className=" w-[921px]  ">
                <span className="font-plus-jakarta-sans font-extrabold text-[24px] leading-[160%] tracking-[-0.02em] text-white capitalize h-[174px]">
                  At Proleadz Media, we're on a mission to drive both brand and
                  business growth through strategic thinking and creative
                  ambition. With a focus on data and technology, we sculpt
                  full-funnel communication strategies. story.
                </span>
                <div className="mt-[3.5rem] font-plus-jakarta-sans font-extrabold text-[30px] text-[#6335F0]">
                  Dive Deeper Into Our Story.
                </div>
                <button className="text-white px-[30px] py-[10px] border-2 rounded-[10px] mt-[1rem] border-white ">
                  KNOW MORE
                </button>
              </div>
            </div>
          </section>

          <section className="px-[140px]">
            <div className=" mb-[3rem] font-plus-jakarta-sans font-extrabold text-[48px] leading-[121.2%] text-[#2DD975] uppercase">
              Services
            </div>

            <div className=" mb-[2.5rem] w-[1274px] h-[324px] flex">
              <div className="w-[455px] h-[100%] bg-[#E0E0E0]"></div>
              <div className="w-[817px] h-[100%] bg-[#6335F0]"></div>
            </div>
            <div className="flex justify-between w-[1274px]">
              <div className="w-[620px] h-[290px] bg-[#6335F0] p-[3rem] flex flex-col justify-between">
                <div className="font-roboto font-bold text-[24px] leading-[34px] text-white">
                  Lorem ipsum dolor
                </div>
                <div className="font-roboto  text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore...
                </div>
                <div className="font-roboto  text-white">Read More</div>
              </div>

              <div className="w-[620px] h-[290px] bg-[#6335F0] p-[3rem] flex flex-col justify-between">
                <div className="font-roboto font-bold text-[24px] leading-[34px] text-white">
                  Lorem ipsum dolor
                </div>
                <div className="font-roboto  text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore...
                </div>
                <div className="font-roboto  text-white">Read More</div>
              </div>
            </div>
          </section>

          <section className="px-[140px] mt-[12rem] mb-[12rem]">
            <div className="flex justify-between">
              <div className=" mb-[7rem] font-plus-jakarta-sans font-extrabold text-[48px] leading-[121.2%] text-[#2DD975] uppercase ">
                OUR CLIENTS
              </div>
              <div className=" w-[738px] font-plus-jakarta-sans font-extrabold text-[24px] leading-[160%] tracking-[-0.02em] text-white capitalize">
                Our success is fueled by partnerships. We extend our gratitude
                to our esteemed clients for entrusting us with their brands.
              </div>
            </div>
            <div className="w-[100%] flex justify-between">
              <div class=" h-[27px]  font-plus-jakarta-sans font-extrabold text-[36px] leading-[140.62%] text-center uppercase text-white/50">Penthouse</div>
              <div class=" h-[27px]  font-plus-jakarta-sans font-extrabold text-[36px] leading-[140.62%] text-center uppercase text-white/50">Backstage</div>
              <div class=" h-[27px]  font-plus-jakarta-sans font-extrabold text-[36px] leading-[140.62%] text-center uppercase text-white/50">Coco</div>
              <div class=" h-[27px]  font-plus-jakarta-sans font-extrabold text-[36px] leading-[140.62%] text-center uppercase text-white/50">Unplugged</div>
              <div class=" h-[27px]  font-plus-jakarta-sans font-extrabold text-[36px] leading-[140.62%] text-center uppercase text-white/50">Effingut</div>
            </div>
          </section>


          <section className="px-[40px] mb-[6rem]">
          <div className="pl-[100px] w-[1440px] h-[309px] bg-[#6335F0] flex flex-col justify-center">
            <div className="font-plus-jakarta-sans font-extrabold text-[96px] leading-[135px] text-white">DESIGN</div>
            <div className="font-plus-jakarta-sans font-extrabold text-[24px] leading-[34px] text-justify text-white">
            Crafting visual narratives that captivate, inspire, and seamlessly <br></br>communicate your brand's essence across all touchpoints.
            </div>
          </div>
          <div className="pl-[100px] w-[1440px] h-[309px] bg-[#2DD975] flex flex-col justify-center">
            <div className="font-plus-jakarta-sans font-extrabold text-[96px] leading-[135px] text-black">TECHNOLOGY</div>
            <div className="font-plus-jakarta-sans font-extrabold text-[24px] leading-[34px] text-justify text-black">
            Crafting visual narratives that captivate, inspire, and seamlessly <br></br>communicate your brand's essence across all touchpoints.
            </div>
          </div>
          <div className="pl-[100px] w-[1440px] h-[309px] bg-[#6335F0] flex flex-col justify-center">
            <div className="font-plus-jakarta-sans font-extrabold text-[96px] leading-[135px] text-white">MARKETING</div>
            <div className="font-plus-jakarta-sans font-extrabold text-[24px] leading-[34px] text-justify text-white">
            Crafting visual narratives that captivate, inspire, and seamlessly <br></br>communicate your brand's essence across all touchpoints.
            </div>
          </div>
          </section>


          <section className="w-[100%] mb-[5rem]">
            <div className="mb-[4rem]">
              <h1 className="mb-[1rem] font-inter font-semibold text-[48px] leading-[58px]  text-center  capitalize text-white">what our clients says</h1>
              <p className="text-white text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex justify-center">
              <img src={company} className="mr-[1rem] w-[674px] h-[472px]"></img>
              <div className="w-[510px] ml-[1rem] flex flex-col justify-center">
                <div className="font-inter font-medium text-[32px] leading-[48px] flex items-center tracking-[0.2px] capitalize text-white">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”</div>
                <div className=" mt-[2rem] text-[16px] text-white"><span className="font-bold">Name</span> - DESIGNITATION<br></br>Company Name</div>
              </div>
            </div>
          </section>


          <section className="w-[100%] h-[580px] text-black bg-[#2DD975] flex justify-center items-center">
            <div className="flex h-[286px] ">
            <div className="mr-[3rem] h-[100%] flex flex-col justify-between">
              <div>
                <div className="mb-[2rem] font-roboto font-normal text-[32px] leading-[38px] text-black">NEWS UPDATE/ BLOG</div>
                <div className="font-medium text-[18px]">Stay ahead of the curve with our latest insights and <br></br>industry updates.</div>
              </div>
              <div className="font-roboto font-normal text-[14px] leading-[20px] text-black/50">Discover actionable strategies and thought-provoking content from our<br></br> team of experts.</div>
            </div>
            <img src={bw} className="ml-[3rem] w-[491px] h-[286px]"></img>
            </div>
          </section>



          <section className="pb-[50px] px-[140px] w-[100%] h-[375px] mb-[375px] text-white flex items-center">
            <div className="mr-[6px]">
              <div className="font-plus-jakarta-sans font-extrabold text-[48px] leading-[68px] uppercase text-white">Let's <br></br>
              to get acquainted</div>
              <div>
                <button className="mr-[28px] mt-[24px] text-black px-[30px] py-[5px] w-[231px] rounded-[5px] bg-[#2DD975]">LET'S TALK</button>
                <button className="text-[#2DD975] border-[2px] px-[30px] py-[5px] w-[231px] rounded-[5px] border-[#2DD975]">Contact Us</button>
              </div>
            </div>
            <div className=" h-[100%] flex items-end">
              <div className="font-plus-jakarta-sans font-extrabold text-[24px] leading-[34px] text-white">We would love to explore your online opportunities together to <br></br>get the most out of your brand. A coffee? A little sparring? Why is <br></br>the world round? We love your emails, phone calls or DMs!</div>
            </div>

          </section>


          <section className="w-[100%] h-[500px] bg-[#6335F0]">
            <img src={ftr} className="w-[100%]"></img>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
