import{_ as t,o as a,c as i,l as n,t as s,N as o}from"./chunks/framework.Gjrf2Eoj.js";const b=JSON.parse('{"title":"git-stripspace | x-cmd man (git man1) | Remove unnecessary whitespace","titleTemplate":false,"description":"x-cmd man (git man1 Manual Page) | git-stripspace - Remove unnecessary whitespace","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"git-stripspace | x-cmd man (git man1) | Remove unnecessary whitespace"}],["meta",{"name":"og:description","content":"x-cmd man (git man1 Manual Page) | git-stripspace - Remove unnecessary whitespace"}]]},"headers":[],"params":{"isMan":true,"man":"git-stripspace","category":"git man1","desc":"Remove unnecessary whitespace"},"relativePath":"git/man1/git-stripspace.md","filePath":"git/man1/git-stripspace.md"}'),p={name:"git/man1/git-stripspace.md"},r={class:"visually-hidden"},c=o(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>git-stripspace - Remove unnecessary whitespace</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stripspace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --strip-comments]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stripspace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --comment-lines]</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Read text, such as commit messages, notes, tags and branch descriptions, from the standard input and clean it in the manner used by Git.</p><p>With no arguments, this will:</p><blockquote><p>·</p><p>remove trailing whitespace from all lines</p></blockquote><blockquote><p>·</p><p>collapse multiple consecutive empty lines into one empty line</p></blockquote><blockquote><p>·</p><p>remove empty lines from the beginning and end of the input</p></blockquote><blockquote><p>·</p><p>add a missing <em>\\n</em> to the last line if necessary.</p></blockquote><p>In the case where the input consists entirely of whitespace characters, no output will be produced.</p><p><strong>NOTE</strong>: This is intended for cleaning metadata, prefer the <strong>--whitespace=fix</strong> mode of <strong>git-apply</strong>(1) for correcting whitespace of patches or files in the repository.</p><h2 id="options" tabindex="-1">OPTIONS <a class="header-anchor" href="#options" aria-label="Permalink to &quot;OPTIONS&quot;">​</a></h2><p>-s, --strip-comments</p><blockquote><p>Skip and remove all lines starting with comment character (default <em>#</em>).</p></blockquote><p>-c, --comment-lines</p><blockquote><p>Prepend comment character and blank to each line. Lines will automatically be terminated with a newline. On empty lines, only the comment character will be prepended.</p></blockquote><h2 id="examples" tabindex="-1">EXAMPLES <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;EXAMPLES&quot;">​</a></h2><p>Given the following noisy input with <em>$</em> indicating the end of a line:</p><blockquote><pre><code>|A brief introduction   $
|   $
|$
|A new paragraph$
|# with a commented-out line    $
|explaining lots of stuff.$
|$
|# An old paragraph, also commented-out. $
|      $
|The end.$
|  $
</code></pre></blockquote><p>Use <em>git stripspace</em> with no arguments to obtain:</p><blockquote><pre><code>|A brief introduction$
|$
|A new paragraph$
|# with a commented-out line$
|explaining lots of stuff.$
|$
|# An old paragraph, also commented-out.$
|$
|The end.$
</code></pre></blockquote><p>Use <em>git stripspace --strip-comments</em> to obtain:</p><blockquote><pre><code>|A brief introduction$
|$
|A new paragraph$
|explaining lots of stuff.$
|$
|The end.$
</code></pre></blockquote><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,27);function l(e,h,m,d,g,u){return a(),i("div",null,[n("h1",r,s(e.$params.man),1),c])}const f=t(p,[["render",l]]);export{b as __pageData,f as default};
