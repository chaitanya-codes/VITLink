"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import img from "@/app/images/logo.png";
import img2 from "@/app/images/anandp.png";
import img3 from "@/app/images/html5.png";
import img4 from "@/app/images/johnwick.jpg";
import "@/app/styles/faculty.css";
import { useRouter } from "next/navigation";

import { useSearchParams } from 'next/navigation';

const Logo = () => (
  <Image
    src={img}// Corrected path, relative to the public folder
    height={10} // Desired height
    width={58} // Desired width
    alt="LOGO"
  />
);
const SkillH = () => (
    <Image
      src={img3}// Corrected path, relative to the public folder
      height={50} // Desired height
      width={50} // Desired width
      alt="html5"
    />
  );
const picarray = [img2,img4];
const Alim = () => (
  <div>
    <Image
      src={img2}// Corrected path, relative to the public folder
      height={200} // Desired height
      width={200} // Desired width
      alt="Man"
    />
    
  </div>

);


export default function NextPage({req}) {
    const searchParams = useSearchParams();

  // Retrieve query parameters
  const name = searchParams.get('name');
  const index = searchParams.get('inde');
   
  return (
    <div>
      <Navbar showLogin={false} />
      <div className="facultyPro py-10">
        <div className="ttext mx-10"><p >Home/Alumni/{name}{index}</p></div>
        <div className="flex fp2">
            <div className="alphotu my-10 mx-10"><Alim></Alim></div>
            <div className="fpside">
                <div className="bigname mx-20 mt-10" >{name}{index}{index}</div>
                <div className="shortdes mx-20 "><p>A white hat hacker who’s earned bug bounties from Facebook, Twitter, and Uber</p></div>
                <div className="loc mx-20 my-10">Location: {name}</div>
            </div>
        </div>
      </div>
      <div className="botbox flex">
        <div className="leftbox mx-20 py-10">
            <div className="alprofile my-10"><p>Alumni Profile</p></div>
            <div className="smolprofile "><p>Anand Prakash is a Bangalore-based ethical hacker. He started his career as a security engineer in Flipkart in 2014. He founded AppSecure, a cyber security startup in May 2016. He then collaborated with another co-founder, Rohit Raj, and rebranded his startup as Hakerhive.Prakash was featured in the Forbes "30 under 30 Asia" list. In 2015, Facebook awarded him US$15,000 as bounty for logging in without an account. He received US$5,000 from Uber for booking a free ride and US$4,700 from Tinder. He has worked with the Bengaluru-based food tech startup.
            Blog Link : https://www.freecodecamp.org/news/meet-anand-prakash-a-white-hat-hacker-whos-earned-bug-bounties-from-facebook-twitter-and-uber-74e30d709b97/</p></div>
            <div className="alprofile my-10"><p>Contact</p></div>
            <div className="contact flex flex-wrap ">
                <div className="smoldetails mx-5 my-3"><p>twitter.com/Sagar122</p></div>
                <div className="smoldetails mx-5 my-3"><p>twitter.com/Sagar122</p></div>
                <div className="smoldetails mx-5 my-3"><p>twitter.com/Sagar122</p></div>
            </div>
            
        </div>
        <div className="rightbox mx-20 my-10">
            <div className="skillz alprofile my-10"><p>Skills</p></div>
            <div className="smolprofile "><p>Learn about the technology and tools that {name} uses. </p></div>
            <div className="skillbox flex flex-wrap">
              <div className="Skillpic my-10 mx-10"><SkillH></SkillH></div>
              <div className="Skillpic my-10 mx-10"><SkillH></SkillH></div>
              <div className="Skillpic my-10 mx-10"><SkillH></SkillH></div>
              <div className="Skillpic my-10 mx-10"><SkillH></SkillH></div>
              <div className="Skillpic my-10 mx-10"><SkillH></SkillH></div>
            </div>
        </div>
      </div>
    </div>
  );
}