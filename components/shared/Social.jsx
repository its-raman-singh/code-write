import React from 'react';
import { Code2Icon, Github, LucideLinkedin, MailPlus, Twitter, Link2 } from 'lucide-react'; 

function Social() {
  return (
    <div className="p-4">
      {/* Social Links */}
      <div className="flex justify-around items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/raman-prakash/"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
          rel="noopener noreferrer"
        >
          <LucideLinkedin className="text-xl w-8 h-8" />
        </a>
       
        <a
          href="https://github.com/its-raman-singh"
          className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
          rel="noopener noreferrer"
        >
          <Github className="text-xl w-8 h-8" />
        </a>
        
        <a
          href="https://x.com/Its_raman_singh"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
          rel="noopener noreferrer"
        >
          <Twitter className="text-xl w-8 h-8" />
        </a>
        
        <a
          href="mailto:raman1672003@gmail.com"
          className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
          rel="noopener noreferrer"
        >
          <MailPlus className="text-xl w-8 h-8" />
        </a>

      </div>
    </div>
  );
}

export default Social;
