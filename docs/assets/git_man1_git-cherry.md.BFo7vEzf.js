import{_ as e,o as a,c as i,l as o,t as s,N as n}from"./chunks/framework.Bbd9fWQx.js";const b=JSON.parse('{"title":"git-cherry | x-cmd man (git man1) | Find commits yet to be applied to upstream","titleTemplate":false,"description":"x-cmd man (git man1 Manual Page) | git-cherry - Find commits yet to be applied to upstream","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"git-cherry | x-cmd man (git man1) | Find commits yet to be applied to upstream"}],["meta",{"name":"og:description","content":"x-cmd man (git man1 Manual Page) | git-cherry - Find commits yet to be applied to upstream"}]]},"headers":[],"params":{"isMan":true,"man":"git-cherry","category":"git man1","desc":"Find commits yet to be applied to upstream"},"relativePath":"git/man1/git-cherry.md","filePath":"git/man1/git-cherry.md"}'),r={name:"git/man1/git-cherry.md"},c={class:"visually-hidden"},h=n(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>git-cherry - Find commits yet to be applied to upstream</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cherry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-v] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">limit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]]</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Determine whether there are commits in <strong>&lt;head&gt;..&lt;upstream&gt;</strong> that are equivalent to those in the range <strong>&lt;limit&gt;..&lt;head&gt;</strong>.</p><p>The equivalence test is based on the diff, after removing whitespace and line numbers. git-cherry therefore detects when commits have been &quot;copied&quot; by means of <strong>git-cherry-pick</strong>(1), <strong>git-am</strong>(1) or <strong>git-rebase</strong>(1).</p><p>Outputs the SHA1 of every commit in <strong>&lt;limit&gt;..&lt;head&gt;</strong>, prefixed with <strong>-</strong> for commits that have an equivalent in &lt;upstream&gt;, and <strong>+</strong> for commits that do not.</p><h2 id="options" tabindex="-1">OPTIONS <a class="header-anchor" href="#options" aria-label="Permalink to &quot;OPTIONS&quot;">​</a></h2><p>-v</p><blockquote><p>Show the commit subjects next to the SHA1s.</p></blockquote><p>&lt;upstream&gt;</p><blockquote><p>Upstream branch to search for equivalent commits. Defaults to the upstream branch of HEAD.</p></blockquote><p>&lt;head&gt;</p><blockquote><p>Working branch; defaults to HEAD.</p></blockquote><p>&lt;limit&gt;</p><blockquote><p>Do not report commits up to (and including) limit.</p></blockquote><h2 id="examples" tabindex="-1">EXAMPLES <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;EXAMPLES&quot;">​</a></h2><h3 id="patch-workflows" tabindex="-1">Patch workflows <a class="header-anchor" href="#patch-workflows" aria-label="Permalink to &quot;Patch workflows&quot;">​</a></h3><p>git-cherry is frequently used in patch-based workflows (see <strong>gitworkflows</strong>(7)) to determine if a series of patches has been applied by the upstream maintainer. In such a workflow you might create and send a topic branch like this:</p><blockquote><pre><code>$ git checkout -b topic origin/master
# work and create some commits
$ git format-patch origin/master
$ git send-email ... 00*
</code></pre></blockquote><p>Later, you can see whether your changes have been applied by saying (still on <strong>topic</strong>):</p><blockquote><pre><code>$ git fetch  # update your notion of origin/master
$ git cherry -v
</code></pre></blockquote><h3 id="concrete-example" tabindex="-1">Concrete example <a class="header-anchor" href="#concrete-example" aria-label="Permalink to &quot;Concrete example&quot;">​</a></h3><p>In a situation where topic consisted of three commits, and the maintainer applied two of them, the situation might look like:</p><blockquote><pre><code>$ git log --graph --oneline --decorate --boundary origin/master...topic
* 7654321 (origin/master) upstream tip commit
[... snip some other commits ...]
* cccc111 cherry-pick of C
* aaaa111 cherry-pick of A
[... snip a lot more that has happened ...]
| * cccc000 (topic) commit C
| * bbbb000 commit B
| * aaaa000 commit A
|/
o 1234567 branch point
</code></pre></blockquote><p>In such cases, git-cherry shows a concise summary of what has yet to be applied:</p><blockquote><pre><code>$ git cherry origin/master topic
- cccc000... commit C
+ bbbb000... commit B
- aaaa000... commit A
</code></pre></blockquote><p>Here, we see that the commits A and C (marked with <strong>-</strong>) can be dropped from your <strong>topic</strong> branch when you rebase it on top of <strong>origin/master</strong>, while the commit B (marked with <strong>+</strong>) still needs to be kept so that it will be sent to be applied to <strong>origin/master</strong>.</p><h3 id="using-a-limit" tabindex="-1">Using a limit <a class="header-anchor" href="#using-a-limit" aria-label="Permalink to &quot;Using a limit&quot;">​</a></h3><p>The optional &lt;limit&gt; is useful in cases where your topic is based on other work that is not in upstream. Expanding on the previous example, this might look like:</p><blockquote><pre><code>$ git log --graph --oneline --decorate --boundary origin/master...topic
* 7654321 (origin/master) upstream tip commit
[... snip some other commits ...]
* cccc111 cherry-pick of C
* aaaa111 cherry-pick of A
[... snip a lot more that has happened ...]
| * cccc000 (topic) commit C
| * bbbb000 commit B
| * aaaa000 commit A
| * 0000fff (base) unpublished stuff F
[... snip ...]
| * 0000aaa unpublished stuff A
|/
o 1234567 merge-base between upstream and topic
</code></pre></blockquote><p>By specifying <strong>base</strong> as the limit, you can avoid listing commits between <strong>base</strong> and <strong>topic</strong>:</p><blockquote><pre><code>$ git cherry origin/master topic base
- cccc000... commit C
+ bbbb000... commit B
- aaaa000... commit A
</code></pre></blockquote><h2 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h2><p><strong>git-patch-id</strong>(1)</p><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,38);function p(t,l,m,g,d,u){return a(),i("div",null,[o("h1",c,s(t.$params.man),1),h])}const y=e(r,[["render",p]]);export{b as __pageData,y as default};
