'use client';

import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const roles = ['Machine Learning Engineer', 'Data Scientist', 'Backend Developer'];

const skills = [
  {
    title: 'Machine Learning & Data Science',
    items: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'EDA', 'Clustering', 'PCA'],
  },
  {
    title: 'Data Visualization',
    items: ['Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Backend Development',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Web Development',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
  },
];

const projects = [
  {
    title: 'Automatic Timetable Generator',
    description:
      'Intelligent scheduling system that generates optimized academic timetables using constraint logic and genetic algorithms.',
    points: ['Teacher workload balancing', 'Lab scheduling constraints', 'Room allocation', 'Leave management with substitute suggestions', 'PDF/Excel export'],
    stack: ['Node.js', 'React', 'MySQL', 'Genetic Algorithms'],
    href: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'E-Commerce Performance Dashboard',
    description:
      'Power BI dashboard for revenue, logistics, customer reviews, and seller performance across large-scale commerce datasets.',
    points: ['100K+ records analyzed', 'Executive-level KPI dashboards', 'Revenue + logistics insights'],
    stack: ['Power BI', 'SQL', 'PostgreSQL', 'Power Query'],
    href: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'Used Car Price Analysis',
    description: 'Exploratory data analysis of factors affecting resale prices using statistical techniques and visual storytelling.',
    points: ['Feature relationship analysis', 'Outlier and distribution checks', 'Insightful visual reports'],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    href: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'Machine Learning Clustering Experiments',
    description: 'Built and compared K-Means, Hierarchical, and DBSCAN models with Silhouette Score and PCA-based interpretation.',
    points: ['Algorithm comparison', 'Silhouette score evaluation', 'PCA visualization pipeline'],
    stack: ['Python', 'Scikit-learn'],
    href: 'https://github.com/irfan-mohamed',
  },
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((value) => value + 1);
          return;
        }

        if (deleting && subIndex > 0) {
          setSubIndex((value) => value - 1);
          return;
        }

        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
        }
      },
      deleting ? 45 : subIndex === current.length ? 1100 : 85,
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, subIndex, words]);

  return `${words[index].slice(0, subIndex)}`;
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const typed = useTypewriter(roles);

  return (
    <main className="relative overflow-x-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.09),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.07),transparent_40%)]" />
      <Navbar />

      <section id="home" className="section-container pt-36 md:pt-44">
        <motion.div initial="hidden" animate="visible" variants={reveal}>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/35 bg-sky-500/10 px-4 py-2 text-xs tracking-wide text-sky-300">
            <Sparkles size={14} /> OPEN TO WORK
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Irfan Mohamed</h1>
          <p className="mt-5 text-lg text-slate-300 md:text-2xl">
            <span className="font-medium text-white">{typed}</span>
            <span className="text-primary">|</span>
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            I build intelligent systems, data-driven applications, and scalable backend solutions using machine learning and modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download>
                <Download size={16} className="mr-2" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <a href="https://github.com/irfan-mohamed" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:border-primary/50 hover:text-primary">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/irfanmohamedvdk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:border-primary/50 hover:text-primary">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:irfanmohamedvdk@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:border-primary/50 hover:text-primary">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section id="about" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
        <h2 className="section-heading">About</h2>
        <Card className="space-y-5 text-slate-300 md:text-[15px]">
          <p>
            I am a Machine Learning and Data Science enthusiast with a strong foundation in data analysis, backend engineering, and intelligent system design.
          </p>
          <p>
            Currently working as a Data Science Intern, I analyze real-world datasets, build business intelligence dashboards, and develop machine learning solutions.
          </p>
          <p>
            My interests include Machine Learning, Data Engineering, AI systems, Backend development, and Data visualization. I enjoy solving real-world problems using data, algorithms, and scalable software systems.
          </p>
        </Card>
      </motion.section>

      <motion.section id="skills" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <h2 className="section-heading">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6 }}>
              <Card className="h-full">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={reveal}>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <a href={project.href} target="_blank" rel="noreferrer" className="rounded-md border border-border p-2 text-slate-300 hover:border-primary/50 hover:text-primary" aria-label={`Open ${project.title} on GitHub`}>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="experience" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <h2 className="section-heading">Experience & Education</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-primary">
              <Briefcase size={18} /> Data Science Intern
            </h3>
            <p className="mt-2 text-slate-300">Bridgeon Solutions</p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
              <li>• Built Power BI dashboards for business insights</li>
              <li>• Performed exploratory data analysis on large datasets</li>
              <li>• Cleaned and validated transactional data</li>
              <li>• Conducted statistical analysis</li>
              <li>• Delivered executive-level analytics dashboards</li>
            </ul>
          </Card>

          <Card>
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-accent">
              <GraduationCap size={18} /> Bachelor of Technology
            </h3>
            <p className="mt-2 text-slate-300">Artificial Intelligence and Data Science</p>
            <p className="text-sm text-slate-400">Anna University</p>
            <p className="mt-4 font-medium text-white">CGPA: 7.4</p>
          </Card>
        </div>
      </motion.section>

      <motion.section id="github" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
        <h2 className="section-heading">GitHub Activity</h2>
        <Card className="overflow-x-auto">
          <GitHubCalendar
            username="irfan-mohamed"
            colorScheme="dark"
            blockMargin={5}
            blockSize={13}
            theme={{ dark: ['#0b1220', '#123046', '#1b4f70', '#26789e', '#38bdf8'] }}
          />
        </Card>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Card className="p-2">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=irfan-mohamed&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=e2e8f0"
              alt="Top languages"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </Card>
          <Card className="p-2">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=irfan-mohamed&theme=transparent&hide_border=true&stroke=38bdf8&ring=38bdf8&fire=f97316&currStreakLabel=38bdf8"
              alt="GitHub streak"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </Card>
        </div>
      </motion.section>

      <motion.section id="contact" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
        <h2 className="section-heading">Contact</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="space-y-4 text-sm text-slate-300">
            <p className="inline-flex items-center gap-2"><Mail size={15} /> irfanmohamedvdk@gmail.com</p>
            <a className="inline-flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noreferrer" href="https://linkedin.com/in/irfanmohamedvdk">
              <Linkedin size={15} /> linkedin.com/in/irfanmohamedvdk
            </a>
            <a className="inline-flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noreferrer" href="https://github.com/irfan-mohamed">
              <Github size={15} /> github.com/irfan-mohamed
            </a>
            <p className="inline-flex items-center gap-2"><MapPin size={15} /> Kerala, India</p>
          </Card>

          <Card>
            <form className="space-y-4" aria-label="Contact form">
              <input required aria-label="Name" placeholder="Your name" className="input" />
              <input required aria-label="Email" type="email" placeholder="Your email" className="input" />
              <textarea required aria-label="Message" placeholder="Your message" className="input min-h-32 resize-y" />
              <Button className="w-full" type="submit">
                <MessageSquare size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </motion.section>

      <footer className="border-t border-border/80 py-8 text-center text-sm text-slate-400">© 2026 Irfan Mohamed</footer>
    </main>
  );
}
