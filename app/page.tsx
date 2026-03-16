'use client';

import { useEffect, useMemo, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const roles = ['Machine Learning Engineer', 'Data Scientist', 'Backend Developer'];

const skillGroups = {
  'Machine Learning & Data Science': [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Feature Engineering',
    'EDA',
    'Clustering',
    'PCA',
  ],
  'Data Visualization': ['Power BI', 'Matplotlib', 'Seaborn'],
  'Backend Development': ['Node.js', 'Express.js', 'REST APIs'],
  Databases: ['MySQL', 'PostgreSQL', 'SQL'],
  'Web Development': ['React', 'JavaScript', 'HTML', 'CSS'],
  Tools: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
};

const projects = [
  {
    title: 'Automatic Timetable Generator',
    description:
      'An intelligent scheduling system that automatically generates optimized academic timetables using constraint logic and genetic algorithms.',
    features: [
      'Teacher workload balancing',
      'Lab scheduling constraints',
      'Room allocation',
      'Leave management with substitute suggestions',
      'PDF/Excel timetable export',
    ],
    stack: ['Node.js', 'React', 'MySQL', 'Genetic Algorithms'],
    link: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'E-Commerce Performance Dashboard',
    description:
      'A Power BI dashboard analyzing revenue, logistics, customer reviews, and seller performance from large-scale e-commerce datasets.',
    features: [
      '100K+ transaction records analyzed',
      'Executive-level dashboards',
      'Revenue and logistics insights',
    ],
    stack: ['Power BI', 'SQL', 'PostgreSQL', 'Power Query'],
    link: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'Used Car Price Analysis',
    description:
      'Exploratory data analysis project analyzing factors affecting vehicle resale prices using statistical analysis and visualization.',
    features: ['Feature impact analysis', 'Distribution studies', 'Visual storytelling'],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/irfan-mohamed',
  },
  {
    title: 'Machine Learning Clustering Experiments',
    description:
      'Implemented K-Means, Hierarchical Clustering, and DBSCAN on real-world datasets and evaluated cluster quality using Silhouette Score and PCA visualization.',
    features: ['Algorithm benchmarking', 'Silhouette based evaluation', 'PCA visualization'],
    stack: ['Python', 'Scikit-learn'],
    link: 'https://github.com/irfan-mohamed',
  },
];

function useTypingEffect(words: string[]) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = deleting ? 55 : 95;

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (!deleting) {
          const next = currentWord.slice(0, prev.length + 1);
          if (next === currentWord) {
            setTimeout(() => setDeleting(true), 800);
          }
          return next;
        }

        const next = currentWord.slice(0, prev.length - 1);
        if (!next) {
          setDeleting(false);
          setWordIndex((idx) => (idx + 1) % words.length);
        }
        return next;
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const sectionAnim = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const typedRole = useTypingEffect(roles);

  const stats = useMemo(
    () => [
      { label: 'Top Languages', value: 'Python, SQL, JavaScript' },
      { label: 'GitHub Streak', value: 'Consistent Weekly Contributions' },
      { label: 'Open Source', value: 'Data + ML Focused Projects' },
    ],
    [],
  );

  return (
    <main className="pb-14">
      <Navbar />

      <section id="home" className="section-container flex min-h-screen flex-col justify-center pt-28">
        <motion.div initial="hidden" animate="visible" variants={sectionAnim}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm text-primary">
            <Sparkles size={15} /> Open to ML & Data Science Opportunities
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Irfan Mohamed</h1>
          <p className="mt-4 text-xl text-slate-300 md:text-2xl">{typedRole}<span className="text-primary">|</span></p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            I build intelligent systems, data-driven applications, and scalable backend solutions using
            machine learning and modern technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download>
                <Download className="mr-2" size={18} /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </motion.div>
        <a href="#about" className="mt-12 inline-flex items-center gap-2 text-primary">
          Scroll to explore <ArrowDown size={16} />
        </a>
      </section>

      <motion.section id="about" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">About</h2>
        <Card className="space-y-5 text-slate-300">
          <p>
            I am a Machine Learning and Data Science enthusiast with a strong foundation in data
            analysis, backend engineering, and intelligent system design.
          </p>
          <p>
            Currently working as a Data Science Intern, I analyze real-world datasets, build business
            intelligence dashboards, and develop machine learning solutions.
          </p>
          <p>My interests include Machine Learning, Data Engineering, AI systems, Backend development, and Data visualization.</p>
          <p>I enjoy solving real-world problems using data, algorithms, and scalable software systems.</p>
        </Card>
      </motion.section>

      <motion.section id="skills" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">Skills</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <motion.div key={category} whileHover={{ y: -4 }}>
              <Card>
                <h3 className="mb-4 font-semibold text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-sky-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -6 }}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-400">
                  {project.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="mt-6 inline-flex items-center gap-2 text-primary" href={project.link} target="_blank">
                  <Github size={16} /> View on GitHub
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="experience" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">Experience & Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-primary"><Briefcase size={18} /> Data Science Intern</h3>
            <p className="mt-2 text-slate-300">Bridgeon Solutions</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>• Built Power BI dashboards for business insights</li>
              <li>• Performed exploratory data analysis on large datasets</li>
              <li>• Cleaned and validated transactional data</li>
              <li>• Conducted statistical analysis</li>
              <li>• Delivered executive-level analytics dashboards</li>
            </ul>
          </Card>
          <Card>
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-accent"><GraduationCap size={18} /> Bachelor of Technology</h3>
            <p className="mt-2 text-slate-300">Artificial Intelligence and Data Science</p>
            <p className="text-sm text-slate-400">Anna University</p>
            <p className="mt-4 font-medium">CGPA: 7.4</p>
          </Card>
        </div>
      </motion.section>

      <motion.section id="github" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">GitHub Activity</h2>
        <Card className="overflow-x-auto">
          <GitHubCalendar
            username="irfan-mohamed"
            colorScheme="dark"
            theme={{
              dark: ['#0b1220', '#0f2a3a', '#165174', '#1f7ba9', '#38bdf8'],
            }}
          />
        </Card>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-sm font-medium text-slate-200">{stat.value}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="section-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnim}>
        <h2 className="mb-8 text-3xl font-semibold">Contact</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="space-y-4 text-slate-300">
            <p className="inline-flex items-center gap-2"><Mail size={16} /> irfanmohamedvdk@gmail.com</p>
            <a href="https://linkedin.com/in/irfanmohamedvdk" target="_blank" className="inline-flex items-center gap-2 text-primary"><Linkedin size={16} /> linkedin.com/in/irfanmohamedvdk</a>
            <a href="https://github.com/irfan-mohamed" target="_blank" className="block text-primary">github.com/irfan-mohamed</a>
            <p className="inline-flex items-center gap-2"><MapPin size={16} /> Kerala, India</p>
          </Card>

          <Card>
            <form className="space-y-4" aria-label="Contact form">
              <input className="w-full rounded-xl border border-border bg-slate-950 p-3 text-sm" placeholder="Your name" aria-label="Your name" />
              <input className="w-full rounded-xl border border-border bg-slate-950 p-3 text-sm" placeholder="Your email" type="email" aria-label="Your email" />
              <textarea className="min-h-32 w-full rounded-xl border border-border bg-slate-950 p-3 text-sm" placeholder="Your message" aria-label="Your message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </motion.section>

      <footer className="border-t border-border/80 py-8 text-center text-sm text-slate-400">
        © 2026 Irfan Mohamed
      </footer>
    </main>
  );
}
