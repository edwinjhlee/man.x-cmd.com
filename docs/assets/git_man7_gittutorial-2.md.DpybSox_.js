import{_ as o,c as i,o as a,j as n,Y as s,t as r}from"./chunks/framework.BNTND4LZ.js";const b=JSON.parse('{"title":"gittutorial-2 | x-cmd man (git man7) | A tutorial introduction to Git: part two","titleTemplate":false,"description":"x-cmd man (git man7 Manual Page) | gittutorial-2 - A tutorial introduction to Git: part two","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"gittutorial-2 | x-cmd man (git man7) | A tutorial introduction to Git: part two"}],["meta",{"name":"og:description","content":"x-cmd man (git man7 Manual Page) | gittutorial-2 - A tutorial introduction to Git: part two"}]]},"headers":[],"params":{"isMan":true,"man":"gittutorial-2","category":"git man7","desc":"A tutorial introduction to Git: part two"},"relativePath":"git/man7/gittutorial-2.md","filePath":"git/man7/[man].md"}'),c={name:"git/man7/gittutorial-2.md"},l={class:"visually-hidden"};function d(e,t,h,g,u,p){return a(),i("div",null,[n("h1",l,r(e.$params.man),1),t[0]||(t[0]=s(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>gittutorial-2 - A tutorial introduction to Git: part two</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>You should work through <strong>gittutorial</strong>(7) before reading this tutorial.</p><p>The goal of this tutorial is to introduce two fundamental pieces of Git&#39;s architecture---the object database and the index file---and to provide the reader with everything necessary to understand the rest of the Git documentation.</p><h2 id="the-git-object-database" tabindex="-1">THE GIT OBJECT DATABASE <a class="header-anchor" href="#the-git-object-database" aria-label="Permalink to &quot;THE GIT OBJECT DATABASE&quot;">​</a></h2><p>Let&#39;s start a new project and create a small amount of history:</p><blockquote><pre><code>$ mkdir test-project
$ cd test-project
$ git init
Initialized empty Git repository in .git/
$ echo &#39;hello world&#39; &gt; file.txt
$ git add .
$ git commit -a -m &quot;initial commit&quot;
[master (root-commit) 54196cc] initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 file.txt
$ echo &#39;hello world!&#39; &gt;file.txt
$ git commit -a -m &quot;add emphasis&quot;
[master c4d59f3] add emphasis
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre></blockquote><p>What are the 7 digits of hex that Git responded to the commit with?</p><p>We saw in part one of the tutorial that commits have names like this. It turns out that every object in the Git history is stored under a 40-digit hex name. That name is the SHA-1 hash of the object&#39;s contents; among other things, this ensures that Git will never store the same data twice (since identical data is given an identical SHA-1 name), and that the contents of a Git object will never change (since that would change the object&#39;s name as well). The 7 char hex strings here are simply the abbreviation of such 40 character long strings. Abbreviations can be used everywhere where the 40 character strings can be used, so long as they are unambiguous.</p><p>It is expected that the content of the commit object you created while following the example above generates a different SHA-1 hash than the one shown above because the commit object records the time when it was created and the name of the person performing the commit.</p><p>We can ask Git about this particular object with the <strong>cat-file</strong> command. Don&#39;t copy the 40 hex digits from this example but use those from your own version. Note that you can shorten it to only a few characters to save yourself typing all 40 hex digits:</p><blockquote><pre><code>$ git cat-file -t 54196cc2
commit
$ git cat-file commit 54196cc2
tree 92b8b694ffb1675e5975148e1121810081dbdffe
author J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143414668 -0500
committer J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143414668 -0500

initial commit
</code></pre></blockquote><p>A tree can refer to one or more &quot;blob&quot; objects, each corresponding to a file. In addition, a tree can also refer to other tree objects, thus creating a directory hierarchy. You can examine the contents of any tree using ls-tree (remember that a long enough initial portion of the SHA-1 will also work):</p><blockquote><pre><code>$ git ls-tree 92b8b694
100644 blob 3b18e512dba79e4c8300dd08aeb37f8e728b8dad    file.txt
</code></pre></blockquote><p>Thus we see that this tree has one file in it. The SHA-1 hash is a reference to that file&#39;s data:</p><blockquote><pre><code>$ git cat-file -t 3b18e512
blob
</code></pre></blockquote><p>A &quot;blob&quot; is just file data, which we can also examine with cat-file:</p><blockquote><pre><code>$ git cat-file blob 3b18e512
hello world
</code></pre></blockquote><p>Note that this is the old file data; so the object that Git named in its response to the initial tree was a tree with a snapshot of the directory state that was recorded by the first commit.</p><p>All of these objects are stored under their SHA-1 names inside the Git directory:</p><blockquote><pre><code>$ find .git/objects/
.git/objects/
.git/objects/pack
.git/objects/info
.git/objects/3b
.git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad
.git/objects/92
.git/objects/92/b8b694ffb1675e5975148e1121810081dbdffe
.git/objects/54
.git/objects/54/196cc2703dc165cbd373a65a4dcf22d50ae7f7
.git/objects/a0
.git/objects/a0/423896973644771497bdc03eb99d5281615b51
.git/objects/d0
.git/objects/d0/492b368b66bdabf2ac1fd8c92b39d3db916e59
.git/objects/c4
.git/objects/c4/d59f390b9cfd4318117afde11d601c1085f241
</code></pre></blockquote><p>and the contents of these files is just the compressed data plus a header identifying their length and their type. The type is either a blob, a tree, a commit, or a tag.</p><p>The simplest commit to find is the HEAD commit, which we can find from .git/HEAD:</p><blockquote><pre><code>$ cat .git/HEAD
ref: refs/heads/master
</code></pre></blockquote><p>As you can see, this tells us which branch we&#39;re currently on, and it tells us this by naming a file under the .git directory, which itself contains a SHA-1 name referring to a commit object, which we can examine with cat-file:</p><blockquote><pre><code>$ cat .git/refs/heads/master
c4d59f390b9cfd4318117afde11d601c1085f241
$ git cat-file -t c4d59f39
commit
$ git cat-file commit c4d59f39
tree d0492b368b66bdabf2ac1fd8c92b39d3db916e59
parent 54196cc2703dc165cbd373a65a4dcf22d50ae7f7
author J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143418702 -0500
committer J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143418702 -0500

add emphasis
</code></pre></blockquote><p>The &quot;tree&quot; object here refers to the new state of the tree:</p><blockquote><pre><code>$ git ls-tree d0492b36
100644 blob a0423896973644771497bdc03eb99d5281615b51    file.txt
$ git cat-file blob a0423896
hello world!
</code></pre></blockquote><p>and the &quot;parent&quot; object refers to the previous commit:</p><blockquote><pre><code>$ git cat-file commit 54196cc2
tree 92b8b694ffb1675e5975148e1121810081dbdffe
author J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143414668 -0500
committer J. Bruce Fields &lt;bfields@puzzle.fieldses.org&gt; 1143414668 -0500

initial commit
</code></pre></blockquote><p>The tree object is the tree we examined first, and this commit is unusual in that it lacks any parent.</p><p>Most commits have only one parent, but it is also common for a commit to have multiple parents. In that case the commit represents a merge, with the parent references pointing to the heads of the merged branches.</p><p>Besides blobs, trees, and commits, the only remaining type of object is a &quot;tag&quot;, which we won&#39;t discuss here; refer to <strong>git-tag</strong>(1) for details.</p><p>So now we know how Git uses the object database to represent a project&#39;s history:</p><blockquote><p>·</p><p>&quot;commit&quot; objects refer to &quot;tree&quot; objects representing the snapshot of a directory tree at a particular point in the history, and refer to &quot;parent&quot; commits to show how they&#39;re connected into the project history.</p></blockquote><blockquote><p>·</p><p>&quot;tree&quot; objects represent the state of a single directory, associating directory names to &quot;blob&quot; objects containing file data and &quot;tree&quot; objects containing subdirectory information.</p></blockquote><blockquote><p>·</p><p>&quot;blob&quot; objects contain file data without any other structure.</p></blockquote><blockquote><p>·</p><p>References to commit objects at the head of each branch are stored in files under .git/refs/heads/.</p></blockquote><blockquote><p>·</p><p>The name of the current branch is stored in .git/HEAD.</p></blockquote><p>Note, by the way, that lots of commands take a tree as an argument. But as we can see above, a tree can be referred to in many different ways---by the SHA-1 name for that tree, by the name of a commit that refers to the tree, by the name of a branch whose head refers to that tree, etc.--and most such commands can accept any of these names.</p><p>In command synopses, the word &quot;tree-ish&quot; is sometimes used to designate such an argument.</p><h2 id="the-index-file" tabindex="-1">THE INDEX FILE <a class="header-anchor" href="#the-index-file" aria-label="Permalink to &quot;THE INDEX FILE&quot;">​</a></h2><p>The primary tool we&#39;ve been using to create commits is <strong>git-commit -a</strong>, which creates a commit including every change you&#39;ve made to your working tree. But what if you want to commit changes only to certain files? Or only certain changes to certain files?</p><p>If we look at the way commits are created under the cover, we&#39;ll see that there are more flexible ways creating commits.</p><p>Continuing with our test-project, let&#39;s modify file.txt again:</p><blockquote><pre><code>$ echo &quot;hello world, again&quot; &gt;&gt;file.txt
</code></pre></blockquote><p>but this time instead of immediately making the commit, let&#39;s take an intermediate step, and ask for diffs along the way to keep track of what&#39;s happening:</p><blockquote><pre><code>$ git diff
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 hello world!
+hello world, again
$ git add file.txt
$ git diff
</code></pre></blockquote><p>The last diff is empty, but no new commits have been made, and the head still doesn&#39;t contain the new line:</p><blockquote><pre><code>$ git diff HEAD
diff --git a/file.txt b/file.txt
index a042389..513feba 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 hello world!
+hello world, again
</code></pre></blockquote><p>So <em>git diff</em> is comparing against something other than the head. The thing that it&#39;s comparing against is actually the index file, which is stored in .git/index in a binary format, but whose contents we can examine with ls-files:</p><blockquote><pre><code>$ git ls-files --stage
100644 513feba2e53ebbd2532419ded848ba19de88ba00 0       file.txt
$ git cat-file -t 513feba2
blob
$ git cat-file blob 513feba2
hello world!
hello world, again
</code></pre></blockquote><p>So what our <em>git add</em> did was store a new blob and then put a reference to it in the index file. If we modify the file again, we&#39;ll see that the new modifications are reflected in the <em>git diff</em> output:</p><blockquote><pre><code>$ echo &#39;again?&#39; &gt;&gt;file.txt
$ git diff
index 513feba..ba3da7b 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1,3 @@
 hello world!
 hello world, again
+again?
</code></pre></blockquote><p>With the right arguments, <em>git diff</em> can also show us the difference between the working directory and the last commit, or between the index and the last commit:</p><blockquote><pre><code>$ git diff HEAD
diff --git a/file.txt b/file.txt
index a042389..ba3da7b 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1,3 @@
 hello world!
+hello world, again
+again?
$ git diff --cached
diff --git a/file.txt b/file.txt
index a042389..513feba 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 hello world!
+hello world, again
</code></pre></blockquote><p>At any time, we can create a new commit using <em>git commit</em> (without the &quot;-a&quot; option), and verify that the state committed only includes the changes stored in the index file, not the additional change that is still only in our working tree:</p><blockquote><pre><code>$ git commit -m &quot;repeat&quot;
$ git diff HEAD
diff --git a/file.txt b/file.txt
index 513feba..ba3da7b 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1,3 @@
 hello world!
 hello world, again
+again?
</code></pre></blockquote><p>So by default <em>git commit</em> uses the index to create the commit, not the working tree; the &quot;-a&quot; option to commit tells it to first update the index with all changes in the working tree.</p><p>Finally, it&#39;s worth looking at the effect of <em>git add</em> on the index file:</p><blockquote><pre><code>$ echo &quot;goodbye, world&quot; &gt;closing.txt
$ git add closing.txt
</code></pre></blockquote><p>The effect of the <em>git add</em> was to add one entry to the index file:</p><blockquote><pre><code>$ git ls-files --stage
100644 8b9743b20d4b15be3955fc8d5cd2b09cd2336138 0       closing.txt
100644 513feba2e53ebbd2532419ded848ba19de88ba00 0       file.txt
</code></pre></blockquote><p>And, as you can see with cat-file, this new entry refers to the current contents of the file:</p><blockquote><pre><code>$ git cat-file blob 8b9743b2
goodbye, world
</code></pre></blockquote><p>The &quot;status&quot; command is a useful way to get a quick summary of the situation:</p><blockquote><pre><code>$ git status
On branch master
Changes to be committed:
  (use &quot;git restore --staged &lt;file&gt;...&quot; to unstage)

        new file:   closing.txt

Changes not staged for commit:
  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git restore &lt;file&gt;...&quot; to discard changes in working directory)

        modified:   file.txt
</code></pre></blockquote><p>Since the current state of closing.txt is cached in the index file, it is listed as &quot;Changes to be committed&quot;. Since file.txt has changes in the working directory that aren&#39;t reflected in the index, it is marked &quot;changed but not updated&quot;. At this point, running &quot;git commit&quot; would create a commit that added closing.txt (with its new contents), but that didn&#39;t modify file.txt.</p><p>Also, note that a bare <strong>git diff</strong> shows the changes to file.txt, but not the addition of closing.txt, because the version of closing.txt in the index file is identical to the one in the working directory.</p><p>In addition to being the staging area for new commits, the index file is also populated from the object database when checking out a branch, and is used to hold the trees involved in a merge operation. See <strong>gitcore-tutorial</strong>(7) and the relevant man pages for details.</p><h2 id="what-next" tabindex="-1">WHAT NEXT? <a class="header-anchor" href="#what-next" aria-label="Permalink to &quot;WHAT NEXT?&quot;">​</a></h2><p>At this point you should know everything necessary to read the man pages for any of the git commands; one good place to start would be with the commands mentioned in <strong>giteveryday</strong>(7). You should be able to find any unknown jargon in <strong>gitglossary</strong>(7).</p><p>The <strong>Git User&#39;s Manual</strong>[1] provides a more comprehensive introduction to Git.</p><p><strong>gitcvs-migration</strong>(7) explains how to import a CVS repository into Git, and shows how to use Git in a CVS-like way.</p><p>For some interesting examples of Git use, see the <strong>howtos</strong>[2].</p><p>For Git developers, <strong>gitcore-tutorial</strong>(7) goes into detail on the lower-level Git mechanisms involved in, for example, creating a new commit.</p><h2 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h2><p><strong>gittutorial</strong>(7), <strong>gitcvs-migration</strong>(7), <strong>gitcore-tutorial</strong>(7), <strong>gitglossary</strong>(7), <strong>git-help</strong>(1), <strong>giteveryday</strong>(7), <strong>The Git User&#39;s Manual</strong>[1]</p><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p><h2 id="notes" tabindex="-1">NOTES <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;NOTES&quot;">​</a></h2><ol><li></li></ol><p>: Git User&#39;s Manual</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file:///usr/share/doc/git/user-manual.html</span></span></code></pre></div><ol start="2"><li></li></ol><p>: howtos</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file:///usr/share/doc/git/howto-index.html</span></span></code></pre></div>`,90))])}const f=o(c,[["render",d]]);export{b as __pageData,f as default};
