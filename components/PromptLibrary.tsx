'use client';
import { useMemo, useState } from 'react';
import { prompts, Prompt, PromptCategory } from '../data/prompts';

type ReverseResult = { title: string; category: string; summary: string; prompt: string; negativePrompt?: string; tags?: string[] };
const categories: Array<'All' | PromptCategory> = ['All', 'Picture', 'Video', 'Logo', 'Graphic Design'];

function extractVideoFrames(file: File): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video'); const url = URL.createObjectURL(file); video.src = url; video.muted = true; video.playsInline = true;
    video.onloadedmetadata = () => {
      const times = [0, Math.max(0.1, video.duration / 2), Math.max(0.1, video.duration - 0.1)]; const frames: string[] = []; let i = 0;
      const canvas = document.createElement('canvas'); canvas.width = Math.min(video.videoWidth, 1280); canvas.height = Math.round(canvas.width * (video.videoHeight / video.videoWidth)); const ctx = canvas.getContext('2d');
      const next = () => { if (i >= times.length) { URL.revokeObjectURL(url); resolve(frames); return; } video.currentTime = times[i]; video.onseeked = () => { ctx?.drawImage(video, 0, 0, canvas.width, canvas.height); frames.push(canvas.toDataURL('image/jpeg', 0.82)); i++; next(); }; }; next();
    }; video.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read that video.')); };
  });
}
function readImage(file: File): Promise<string> { return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(String(r.result)); r.onerror = () => reject(new Error('Could not read image.')); r.readAsDataURL(file); }); }

export default function PromptLibrary() {
  const [query, setQuery] = useState(''); const [category, setCategory] = useState<'All' | PromptCategory>('All'); const [selected, setSelected] = useState<Prompt | null>(null); const [copied, setCopied] = useState(false); const [reverse, setReverse] = useState<ReverseResult | null>(null); const [loading, setLoading] = useState(false); const [context, setContext] = useState(''); const [error, setError] = useState('');
  const filtered = useMemo(() => prompts.filter(p => (category === 'All' || p.category === category) && (`${p.title} ${p.description} ${p.tags.join(' ')}`).toLowerCase().includes(query.toLowerCase())), [query, category]);
  const copy = async (text: string) => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1400) };
  const upload = async (file: File) => { setError(''); setReverse(null); setLoading(true); try { let images = file.type.startsWith('video/') ? await extractVideoFrames(file) : [await readImage(file)]; const res = await fetch('/api/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ images, context }) }); const data = await res.json(); if (!res.ok) throw new Error(data.error || 'Analysis failed'); setReverse(data); } catch (e: any) { setError(e.message) } finally { setLoading(false) } };
  return <main>
    <header className="topbar"><div className="brand"><div className="logo">R</div><div><strong>Roland Prompt Library</strong><span>Personal visual prompt system</span></div></div><a href="#reverse" className="ghost">Reverse Prompt ↗</a></header>
    <section className="hero"><div><p className="eyebrow">PROMPT WORKSPACE</p><h1>Your creative prompts,<br /><em>organized and context-aware.</em></h1><p className="heroText">Search reusable prompts for pictures, video, logos and graphic design — or upload a reference and let AI reconstruct a production-ready prompt.</p></div><div className="stats"><div><b>{prompts.length}+</b><span>starter prompts</span></div><div><b>4</b><span>creative categories</span></div><div><b>AI</b><span>reverse prompting</span></div></div></section>
    <section className="toolbar"><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search prompts, styles, tags..." /><div className="chips">{categories.map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div></section>
    <section className="grid">{filtered.map(p => <article className="card" key={p.id} onClick={() => setSelected(p)}><div className="cardTop"><span className="pill">{p.category}</span><span>↗</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.slice(0, 3).map(t => <span key={t}>#{t}</span>)}</div></article>)}</section>
    {!filtered.length && <div className="empty">No prompts match that search.</div>}

    <section id="reverse" className="reverse"><div className="reverseHead"><div><p className="eyebrow">REVERSE PROMPT</p><h2>Upload a reference.<br />Get the prompt behind it.</h2><p>Images are analyzed directly. Videos are sampled into representative frames in your browser, then sent for visual analysis.</p></div><div className="drop"><label><input type="file" accept="image/*,video/*" onChange={e => e.target.files?.[0] && upload(e.target.files[0])} /><span>{loading ? 'Analyzing…' : '＋ Upload picture or video'}</span></label></div></div><textarea value={context} onChange={e => setContext(e.target.value)} placeholder="Optional context: e.g. 'I want this for a luxury fashion campaign, 9:16, realistic, keep the subject identity.'" />{error && <div className="error">{error}</div>}{reverse && <div className="result"><div className="resultMeta"><span className="pill">{reverse.category}</span><h3>{reverse.title}</h3><p>{reverse.summary}</p></div><div className="promptBox"><div className="boxHead"><b>Generated prompt</b><button onClick={() => copy(reverse.prompt)}>{copied ? 'Copied' : 'Copy'}</button></div><pre>{reverse.prompt}</pre></div>{reverse.negativePrompt && <div className="promptBox"><div className="boxHead"><b>Negative prompt</b><button onClick={() => copy(reverse.negativePrompt || '')}>Copy</button></div><pre>{reverse.negativePrompt}</pre></div>}</div>}</section>

    {selected && <div className="modalBackdrop" onClick={() => setSelected(null)}><div className="modal" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)}>×</button><span className="pill">{selected.category}</span><h2>{selected.title}</h2><p>{selected.description}</p><div className="promptBox"><div className="boxHead"><b>Prompt</b><button onClick={() => copy(selected.prompt)}>{copied ? 'Copied' : 'Copy prompt'}</button></div><pre>{selected.prompt}</pre></div><div className="tags">{selected.variables.map(v => <span key={v}>{{ subject: 'Subject', outfit: 'Outfit', location: 'Location' }[v] || v}</span>)}</div></div></div>}
    <footer>Roland Prompt Library · Built with Next.js · Designed for personal creative workflows</footer>
  </main>
}
