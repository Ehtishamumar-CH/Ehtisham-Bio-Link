import Image from 'next/image';
import { LinkButton } from '@/components/link-button';
import { Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  const links = [
    {
      href: "https://ehtisham-umar.netlify.app/",
      icon: <Globe />,
      text: "My Portfolio / Website",
      dataAiHint: "portfolio website"
    },
    {
      href: "https://github.com/Ehtishamumar-CH",
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
      href: "https://x.com/EhtishamUmar_CH",
      icon: <Twitter />,
      text: "Follow me on X (Twitter)",
      dataAiHint: "twitter social"
    },
    {
      href: "mailto:ehtishamumar327@gmail.com",
      icon: <Mail />,
      text: "Send me an Email",
      dataAiHint: "email contact"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md">
        <div className="space-y-8 rounded-xl bg-card p-6 py-10 shadow-lg hover:shadow-symmetrical-glow transition-shadow duration-300 ease-in-out sm:p-8 sm:py-12">
          <div className="flex flex-col items-center space-y-4 w-full ">
            <Image
              src="/ehtisham-profile.jpeg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full  aspect-square shadow-lg border-4 border-background"
              data-ai-hint="profile avatar"
              priority
            />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ehtisham Umar
              </h1>
              <p className="mt-2 text-base sm:text-md text-muted-foreground max-w sm:max-w-sm">
              UI/UX Engineer focused on AI-powered development and automation. I specialize in scalable apps, design systems, and agile workflows.
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
