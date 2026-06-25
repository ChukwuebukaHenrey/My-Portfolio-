import React from 'react';
import { 
  Award, 
  Droplets, 
  Blocks, 
  Cpu, 
  Palette, 
  FileText, 
  Code2, 
  FileCode, 
  Atom, 
  Layout, 
  Wind, 
  Server, 
  Network, 
  GitBranch, 
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Compass,
  BookOpen,
  Send,
  Copy,
  Check,
  ChevronRight,
  Layers,
  Flame,
  Globe,
  Rocket
} from 'lucide-react';

export function getIcon(name: string, className: string = "w-5 h-5") {
  switch (name.toLowerCase()) {
    case 'award': return <Award className={className} />;
    case 'droplets': return <Droplets className={className} />;
    case 'blocks': return <Blocks className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'palette': return <Palette className={className} />;
    case 'filetext': return <FileText className={className} />;
    case 'code2': return <Code2 className={className} />;
    case 'filecode': return <FileCode className={className} />;
    case 'atom': return <Atom className={className} />;
    case 'layout': return <Layout className={className} />;
    case 'wind': return <Wind className={className} />;
    case 'server': return <Server className={className} />;
    case 'network': return <Network className={className} />;
    case 'gitbranch': return <GitBranch className={className} />;
    case 'sparkles': return <Sparkles className={className} />;
    case 'terminal': return <Terminal className={className} />;
    case 'compass': return <Compass className={className} />;
    case 'bookopen': return <BookOpen className={className} />;
    case 'flame': return <Flame className={className} />;
    case 'rocket': return <Rocket className={className} />;
    default: return <Layers className={className} />;
  }
}
