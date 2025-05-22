import Image from 'next/image';
import { LinkButton } from '@/components/link-button';
import { Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  const links = [
    {
      href: "https://example.com/portfolio",
      icon: <Globe />,
      text: "My Portfolio / Website",
      dataAiHint: "portfolio website"
    },
    {
      href: "https://github.com/yourusername",
      icon: <Github />,
      text: "GitHub Profile",
      dataAiHint: "github code"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin />,
      text: "LinkedIn Profile",
      dataAiHint: "linkedin professional"
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <Twitter />,
      text: "Follow me on X (Twitter)",
      dataAiHint: "twitter social"
    },
    {
      href: "mailto:youremail@example.com",
      icon: <Mail />,
      text: "Send me an Email",
      dataAiHint: "email contact"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md rounded-2xl p-1 bg-gradient-to-r from-[#5381B2] to-[#C2E8FF] animate-gradient-border-flow [background-size:200%_200%] shadow-xl">
        <div className="space-y-8 rounded-xl bg-card p-6 py-10 sm:p-8 sm:py-12">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="https://placehold.co/128x128.png"
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full object-cover shadow-lg border-4 border-background"
              data-ai-hint="profile avatar"
              priority
            />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ehtisham Umar
              </h1>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-sm">
              Senior Frontend Developer with 6+ years in UI/UX, Development, AI Automation, and Branding. I specialize in scalable web applications, design systems, and agile workflows.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                icon={link.icon}
                text={link.text}
              />
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Powered by O3 web tecnologies &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
