import Image from 'next/image'
import { Twitter, Github, Mail, ExternalLink, DonutIcon, Dot, MessageCircleDashed, Workflow, CloudLightningIcon, BellDot, LucideDot, Linkedin, LucideGithub, Code2Icon, LucideLinkedin, MailPlus } from 'lucide-react'
import Projects from './shared/Projects'
import Education from './shared/Education'
import myimage from "../components/photo/MyLogo.jpg"
import Link from 'next/link'
import X from '@/public/icon/x'
import Social from './shared/Social'
import Infomation from './shared/Infomation'
import WorkExperience from './shared/WorkExperience'
import Frontend from './shared/Frontend'

export default function Hero() {
 

  return (
    <div className="min-h-screen text-white p-8 ">
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <Image
            src={myimage}
            alt="raman"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Raman Prakash</h1>
            <p className="text-gray-400">@itsramansingh</p>
          </div>
        </div>

          {/* Introduction */}
        <Infomation/>

          {/* Social Links */}
          <Social/>
          {/*<WorkExperience/>*/}
          <Frontend/>
        {/* front & back end */}
          {/* <Projects/> */}
      {/* dev.to or hashnode vlog fetch */}
          <Education/>
        </div>
    </div>
  )
}


