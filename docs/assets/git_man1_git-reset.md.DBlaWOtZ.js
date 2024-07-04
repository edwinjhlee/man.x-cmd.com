import{_ as t,o,c as i,l as n,t as s,N as r}from"./chunks/framework.CMqbtke2.js";const f=JSON.parse('{"title":"git-reset | x-cmd man (git man1) | Reset current HEAD to the specified state","titleTemplate":false,"description":"x-cmd man (git man1 Manual Page) | git-reset - Reset current HEAD to the specified state","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"git-reset | x-cmd man (git man1) | Reset current HEAD to the specified state"}],["meta",{"name":"og:description","content":"x-cmd man (git man1 Manual Page) | git-reset - Reset current HEAD to the specified state"}]]},"headers":[],"params":{"isMan":true,"man":"git-reset","category":"git man1","desc":"Reset current HEAD to the specified state"},"relativePath":"git/man1/git-reset.md","filePath":"git/man1/git-reset.md"}'),a={name:"git/man1/git-reset.md"},h={class:"visually-hidden"},l=r(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>git-reset - Reset current HEAD to the specified state</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-q] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tree-ish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathspec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-q] [--pathspec-from-file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--pathspec-file-nul]] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tree-ish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (--patch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tree-ish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathspec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--soft </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --mixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-N] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --hard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --merge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --keep]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-q] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>In the first three forms, copy entries from <strong>&lt;tree-ish&gt;</strong> to the index. In the last form, set the current branch head (<strong>HEAD</strong>) to <strong>&lt;commit&gt;</strong>, optionally modifying index and working tree to match. The <strong>&lt;tree-ish&gt;</strong>/<strong>&lt;commit&gt;</strong> defaults to <strong>HEAD</strong> in all forms.</p><p><em>git reset</em> [-q] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;..., <em>git reset</em> [-q] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]] [&lt;tree-ish&gt;]</p><blockquote><p>These forms reset the index entries for all paths that match the <strong>&lt;pathspec&gt;</strong> to their state at <strong>&lt;tree-ish&gt;</strong>. (It does not affect the working tree or the current branch.)</p><p>This means that <strong>git reset &lt;pathspec&gt;</strong> is the opposite of <strong>git add &lt;pathspec&gt;</strong>. This command is equivalent to <strong>git restore [--source=&lt;tree-ish&gt;] --staged &lt;pathspec&gt;...</strong>.</p><p>After running <strong>git reset &lt;pathspec&gt;</strong> to update the index entry, you can use <strong>git-restore</strong>(1) to check the contents out of the index to the working tree. Alternatively, using <strong>git-restore</strong>(1) and specifying a commit with <strong>--source</strong>, you can copy the contents of a path out of a commit to the index and to the working tree in one go.</p></blockquote><p><em>git reset</em> (--patch | -p) [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;...]</p><blockquote><p>Interactively select hunks in the difference between the index and <strong>&lt;tree-ish&gt;</strong> (defaults to <strong>HEAD</strong>). The chosen hunks are applied in reverse to the index.</p><p>This means that <strong>git reset -p</strong> is the opposite of <strong>git add -p</strong>, i.e. you can use it to selectively reset hunks. See the &quot;Interactive Mode&quot; section of <strong>git-add</strong>(1) to learn how to operate the <strong>--patch</strong> mode.</p></blockquote><p><em>git reset</em> [&lt;mode&gt;] [&lt;commit&gt;]</p><blockquote><p>This form resets the current branch head to <strong>&lt;commit&gt;</strong> and possibly updates the index (resetting it to the tree of <strong>&lt;commit&gt;</strong>) and the working tree depending on <strong>&lt;mode&gt;</strong>. Before the operation, <strong>ORIG_HEAD</strong> is set to the tip of the current branch. If <strong>&lt;mode&gt;</strong> is omitted, defaults to <strong>--mixed</strong>. The <strong>&lt;mode&gt;</strong> must be one of the following:</p><p>--soft</p><blockquote><p>Does not touch the index file or the working tree at all (but resets the head to <strong>&lt;commit&gt;</strong>, just like all modes do). This leaves all your changed files &quot;Changes to be committed&quot;, as <strong>git status</strong> would put it.</p></blockquote><p>--mixed</p><blockquote><p>Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action.</p><p>If <strong>-N</strong> is specified, removed paths are marked as intent-to-add (see <strong>git-add</strong>(1)).</p></blockquote><p>--hard</p><blockquote><p>Resets the index and working tree. Any changes to tracked files in the working tree since <strong>&lt;commit&gt;</strong> are discarded. Any untracked files or directories in the way of writing any tracked files are simply deleted.</p></blockquote><p>--merge</p><blockquote><p>Resets the index and updates the files in the working tree that are different between <strong>&lt;commit&gt;</strong> and <strong>HEAD</strong>, but keeps those which are different between the index and working tree (i.e. which have changes which have not been added). If a file that is different between <strong>&lt;commit&gt;</strong> and the index has unstaged changes, reset is aborted.</p><p>In other words, <strong>--merge</strong> does something like a <strong>git read-tree -u -m &lt;commit&gt;</strong>, but carries forward unmerged index entries.</p></blockquote><p>--keep</p><blockquote><p>Resets index entries and updates files in the working tree that are different between <strong>&lt;commit&gt;</strong> and <strong>HEAD</strong>. If a file that is different between <strong>&lt;commit&gt;</strong> and <strong>HEAD</strong> has local changes, reset is aborted.</p></blockquote><p>--[no-]recurse-submodules</p><blockquote><p>When the working tree is updated, using --recurse-submodules will also recursively reset the working tree of all active submodules according to the commit recorded in the superproject, also setting the submodules&#39; HEAD to be detached at that commit.</p></blockquote></blockquote><p>See &quot;Reset, restore and revert&quot; in <strong>git</strong>(1) for the differences between the three commands.</p><h2 id="options" tabindex="-1">OPTIONS <a class="header-anchor" href="#options" aria-label="Permalink to &quot;OPTIONS&quot;">​</a></h2><p>-q, --quiet</p><blockquote><p>Be quiet, only report errors.</p></blockquote><p>--refresh, --no-refresh</p><blockquote><p>Refresh the index after a mixed reset. Enabled by default.</p></blockquote><p>--pathspec-from-file=&lt;file&gt;</p><blockquote><p>Pathspec is passed in <strong>&lt;file&gt;</strong> instead of commandline args. If <strong>&lt;file&gt;</strong> is exactly <strong>-</strong> then standard input is used. Pathspec elements are separated by LF or CR/LF. Pathspec elements can be quoted as explained for the configuration variable <strong>core.quotePath</strong> (see <strong>git-config</strong>(1)). See also <strong>--pathspec-file-nul</strong> and global <strong>--literal-pathspecs</strong>.</p></blockquote><p>--pathspec-file-nul</p><blockquote><p>Only meaningful with <strong>--pathspec-from-file</strong>. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes).</p></blockquote><p>--</p><blockquote><p>Do not interpret any more arguments as options.</p></blockquote><p>&lt;pathspec&gt;...</p><blockquote><p>Limits the paths affected by the operation.</p><p>For more details, see the <em>pathspec</em> entry in <strong>gitglossary</strong>(7).</p></blockquote><h2 id="examples" tabindex="-1">EXAMPLES <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;EXAMPLES&quot;">​</a></h2><p>Undo add</p><blockquote><blockquote><pre><code>$ edit                                     (1)
$ git add frotz.c filfre.c
$ mailx                                    (2)
$ git reset                                (3)
$ git pull git://info.example.com/ nitfol  (4)
</code></pre></blockquote><hr><pre><code>**1.** You are happily working on something, and find the changes in these files are in good order. You do not want to see them when you run **git diff**, because you plan to work on other files and changes with these files are distracting.
**2.** Somebody asks you to pull, and the changes sound worthy of merging.
**3.** However, you already dirtied the index (i.e. your index does not match the **HEAD** commit). But you know the pull you are going to make does not affect **frotz.c** or **filfre.c**, so you revert the index changes for these two files. Your changes in working tree remain there.
**4.** Then you can pull and merge, leaving **frotz.c** and **filfre.c** changes still in the working tree.
</code></pre><hr></blockquote><p>Undo a commit and redo</p><blockquote><blockquote><pre><code>$ git commit ...
$ git reset --soft HEAD^      (1)
$ edit                        (2)
$ git commit -a -c ORIG_HEAD  (3)
</code></pre></blockquote><hr><pre><code>**1.** This is most often done when you remembered what you just committed is incomplete, or you misspelled your commit message, or both. Leaves working tree as it was before \\&quot;reset\\&quot;.
**2.** Make corrections to working tree files.
**3.** \\&quot;reset\\&quot; copies the old head to **.git/ORIG_HEAD**; redo the commit by starting with its log message. If you do not need to edit the message further, you can give **-C** option instead.
</code></pre><hr><p>See also the <strong>--amend</strong> option to <strong>git-commit</strong>(1).</p></blockquote><p>Undo a commit, making it a topic branch</p><blockquote><blockquote><pre><code>$ git branch topic/wip          (1)
$ git reset --hard HEAD~3       (2)
$ git switch topic/wip          (3)
</code></pre></blockquote><hr><pre><code>**1.** You have made some commits, but realize they were premature to be in the **master** branch. You want to continue polishing them in a topic branch, so create **topic/wip** branch off of the current **HEAD**.
**2.** Rewind the master branch to get rid of those three commits.
**3.** Switch to **topic/wip** branch and keep working.
</code></pre><hr></blockquote><p>Undo commits permanently</p><blockquote><blockquote><pre><code>$ git commit ...
$ git reset --hard HEAD~3   (1)
</code></pre></blockquote><hr><pre><code>**1.** The last three commits (**HEAD**, **HEAD\\^**, and **HEAD\\~2**) were bad and you do not want to ever see them again. Do **not** do this if you have already given these commits to somebody else. (See the \\&quot;RECOVERING FROM UPSTREAM REBASE\\&quot; section in **git-rebase**(1) for the implications of doing so.)
</code></pre><hr></blockquote><p>Undo a merge or pull</p><blockquote><blockquote><pre><code>$ git pull                         (1)
Auto-merging nitfol
CONFLICT (content): Merge conflict in nitfol
Automatic merge failed; fix conflicts and then commit the result.
$ git reset --hard                 (2)
$ git pull . topic/branch          (3)
Updating from 41223... to 13134...
Fast-forward
$ git reset --hard ORIG_HEAD       (4)
</code></pre></blockquote><hr><pre><code>**1.** Try to update from the upstream resulted in a lot of conflicts; you were not ready to spend a lot of time merging right now, so you decide to do that later.
**2.** \\&quot;pull\\&quot; has not made merge commit, so **git reset \\--hard** which is a synonym for **git reset \\--hard HEAD** clears the mess from the index file and the working tree.
**3.** Merge a topic branch into the current branch, which resulted in a fast-forward.
**4.** But you decided that the topic branch is not ready for public consumption yet. \\&quot;pull\\&quot; or \\&quot;merge\\&quot; always leaves the original tip of the current branch in **ORIG_HEAD**, so resetting hard to it brings your index file and the working tree back to that state, and resets the tip of the branch to that commit.
</code></pre><hr></blockquote><p>Undo a merge or pull inside a dirty working tree</p><blockquote><blockquote><pre><code>$ git pull                         (1)
Auto-merging nitfol
Merge made by recursive.
 nitfol                |   20 +++++----
 ...
$ git reset --merge ORIG_HEAD      (2)
</code></pre></blockquote><hr><pre><code>**1.** Even if you may have local modifications in your working tree, you can safely say **git pull** when you know that the change in the other branch does not overlap with them.
**2.** After inspecting the result of the merge, you may find that the change in the other branch is unsatisfactory. Running **git reset \\--hard ORIG_HEAD** will let you go back to where you were, but it will discard your local changes, which you do not want. **git reset \\--merge** keeps your local changes.
</code></pre><hr></blockquote><p>Interrupted workflow</p><blockquote><p>Suppose you are interrupted by an urgent fix request while you are in the middle of a large change. The files in your working tree are not in any shape to be committed yet, but you need to get to the other branch for a quick bugfix.</p><blockquote><pre><code>$ git switch feature  ;# you were working in &quot;feature&quot; branch and
$ work work work      ;# got interrupted
$ git commit -a -m &quot;snapshot WIP&quot;                 (1)
$ git switch master
$ fix fix fix
$ git commit ;# commit with real log
$ git switch feature
$ git reset --soft HEAD^ ;# go back to WIP state  (2)
$ git reset                                       (3)
</code></pre></blockquote><hr><pre><code>**1.** This commit will get blown away so a throw-away log message is OK.
**2.** This removes the *WIP* commit from the commit history, and sets your working tree to the state just before you made that snapshot.
**3.** At this point the index file still has all the WIP changes you committed as *snapshot WIP*. This updates the index to show your WIP files as uncommitted.
</code></pre><hr><p>See also <strong>git-stash</strong>(1).</p></blockquote><p>Reset a single file in the index</p><blockquote><p>Suppose you have added a file to your index, but later decide you do not want to add it to your commit. You can remove the file from the index while keeping your changes with git reset.</p><blockquote><pre><code>$ git reset -- frotz.c                      (1)
$ git commit -m &quot;Commit files in index&quot;     (2)
$ git add frotz.c                           (3)
</code></pre></blockquote><hr><pre><code>**1.** This removes the file from the index while keeping it in the working directory.
**2.** This commits all other changes in the index.
**3.** Adds the file to the index again.
</code></pre><hr></blockquote><p>Keep changes in working tree while discarding some previous commits</p><blockquote><p>Suppose you are working on something and you commit it, and then you continue working a bit more, but now you think that what you have in your working tree should be in another branch that has nothing to do with what you committed previously. You can start a new branch and reset it while keeping the changes in your working tree.</p><blockquote><pre><code>$ git tag start
$ git switch -c branch1
$ edit
$ git commit ...                            (1)
$ edit
$ git switch -c branch2                     (2)
$ git reset --keep start                    (3)
</code></pre></blockquote><hr><pre><code>**1.** This commits your first edits in **branch1**.
**2.** In the ideal world, you could have realized that the earlier commit did not belong to the new topic when you created and switched to **branch2** (i.e. **git switch -c branch2 start**), but nobody is perfect.
**3.** But you can use **reset \\--keep** to remove the unwanted commit after you switched to **branch2**.
</code></pre><hr></blockquote><p>Split a commit apart into a sequence of commits</p><blockquote><p>Suppose that you have created lots of logically separate changes and committed them together. Then, later you decide that it might be better to have each logical chunk associated with its own commit. You can use git reset to rewind history without changing the contents of your local files, and then successively use <strong>git add -p</strong> to interactively select which hunks to include into each commit, using <strong>git commit -c</strong> to pre-populate the commit message.</p><blockquote><pre><code>$ git reset -N HEAD^                        (1)
$ git add -p                                (2)
$ git diff --cached                         (3)
$ git commit -c HEAD@{1}                    (4)
...                                         (5)
$ git add ...                               (6)
$ git diff --cached                         (7)
$ git commit ...                            (8)
</code></pre></blockquote><hr><pre><code>**1.** First, reset the history back one commit so that we remove the original commit, but leave the working tree with all the changes. The -N ensures that any new files added with **HEAD** are still marked so that **git add -p** will find them.
**2.** Next, we interactively select diff hunks to add using the **git add -p** facility. This will ask you about each diff hunk in sequence and you can use simple commands such as \\&quot;yes, include this\\&quot;, \\&quot;No don&#39;t include this\\&quot; or even the very powerful \\&quot;edit\\&quot; facility.
**3.** Once satisfied with the hunks you want to include, you should verify what has been prepared for the first commit by using **git diff \\--cached**. This shows all the changes that have been moved into the index and are about to be committed.
**4.** Next, commit the changes stored in the index. The **-c** option specifies to pre-populate the commit message from the original message that you started with in the first commit. This is helpful to avoid retyping it. The **HEAD@{1}** is a special notation for the commit that **HEAD** used to be at prior to the original reset commit (1 change ago). See **git-reflog**(1) for more details. You may also use any other valid commit reference.
**5.** You can repeat steps 2-4 multiple times to break the original code into any number of commits.
**6.** Now you&#39;ve split out many of the changes into their own commits, and might no longer use the patch mode of **git add**, in order to select all remaining uncommitted changes.
**7.** Once again, check to verify that you&#39;ve included what you want to. You may also wish to verify that git diff doesn&#39;t show any remaining changes to be committed later.
**8.** And finally create the final commit.
</code></pre><hr></blockquote><h2 id="discussion" tabindex="-1">DISCUSSION <a class="header-anchor" href="#discussion" aria-label="Permalink to &quot;DISCUSSION&quot;">​</a></h2><p>The tables below show what happens when running:</p><blockquote><pre><code>git reset --option target
</code></pre></blockquote><p>to reset the <strong>HEAD</strong> to another commit (<strong>target</strong>) with the different reset options depending on the state of the files.</p><p>In these tables, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> are some different states of a file. For example, the first line of the first table means that if a file is in state <strong>A</strong> in the working tree, in state <strong>B</strong> in the index, in state <strong>C</strong> in <strong>HEAD</strong> and in state <strong>D</strong> in the target, then <strong>git reset --soft target</strong> will leave the file in the working tree in state <strong>A</strong> and in the index in state <strong>B</strong>. It resets (i.e. moves) the <strong>HEAD</strong> (i.e. the tip of the current branch, if you are on one) to <strong>target</strong> (which has the file in state <strong>D</strong>).</p><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 A       B     C    D     --soft   A       B     D
                          --mixed  A       D     D
                          --hard   D       D     D
                          --merge (disallowed)
                          --keep  (disallowed)
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 A       B     C    C     --soft   A       B     C
                          --mixed  A       C     C
                          --hard   C       C     C
                          --merge (disallowed)
                          --keep   A       C     C
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 B       B     C    D     --soft   B       B     D
                          --mixed  B       D     D
                          --hard   D       D     D
                          --merge  D       D     D
                          --keep  (disallowed)
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 B       B     C    C     --soft   B       B     C
                          --mixed  B       C     C
                          --hard   C       C     C
                          --merge  C       C     C
                          --keep   B       C     C
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 B       C     C    D     --soft   B       C     D
                          --mixed  B       D     D
                          --hard   D       D     D
                          --merge (disallowed)
                          --keep  (disallowed)
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 B       C     C    C     --soft   B       C     C
                          --mixed  B       C     C
                          --hard   C       C     C
                          --merge  B       C     C
                          --keep   B       C     C
</code></pre></blockquote><p><strong>reset --merge</strong> is meant to be used when resetting out of a conflicted merge. Any mergy operation guarantees that the working tree file that is involved in the merge does not have a local change with respect to the index before it starts, and that it writes the result out to the working tree. So if we see some difference between the index and the target and also between the index and the working tree, then it means that we are not resetting out from a state that a mergy operation left after failing with a conflict. That is why we disallow <strong>--merge</strong> option in this case.</p><p><strong>reset --keep</strong> is meant to be used when removing some of the last commits in the current branch while keeping changes in the working tree. If there could be conflicts between the changes in the commit we want to remove and the changes in the working tree we want to keep, the reset is disallowed. That&#39;s why it is disallowed if there are both changes between the working tree and <strong>HEAD</strong>, and between <strong>HEAD</strong> and the target. To be safe, it is also disallowed when there are unmerged entries.</p><p>The following tables show what happens when there are unmerged entries:</p><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 X       U     A    B     --soft  (disallowed)
                          --mixed  X       B     B
                          --hard   B       B     B
                          --merge  B       B     B
                          --keep  (disallowed)
</code></pre></blockquote><blockquote><pre><code>working index HEAD target         working index HEAD
----------------------------------------------------
 X       U     A    A     --soft  (disallowed)
                          --mixed  X       A     A
                          --hard   A       A     A
                          --merge  A       A     A
                          --keep  (disallowed)
</code></pre></blockquote><p><strong>X</strong> means any state and <strong>U</strong> means an unmerged index.</p><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,66);function d(e,g,c,p,u,m){return o(),i("div",null,[n("h1",h,s(e.$params.man),1),l])}const b=t(a,[["render",d]]);export{f as __pageData,b as default};
