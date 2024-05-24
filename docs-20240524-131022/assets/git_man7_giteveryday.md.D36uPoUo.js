import{_ as t,o,c as a,l as r,t as n,N as i}from"./chunks/framework.Gjrf2Eoj.js";const f=JSON.parse('{"title":"giteveryday | x-cmd man (git man7) | A useful minimum set of commands for Everyday Git","titleTemplate":false,"description":"x-cmd man (git man7 Manual Page) | giteveryday - A useful minimum set of commands for Everyday Git","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"giteveryday | x-cmd man (git man7) | A useful minimum set of commands for Everyday Git"}],["meta",{"name":"og:description","content":"x-cmd man (git man7 Manual Page) | giteveryday - A useful minimum set of commands for Everyday Git"}]]},"headers":[],"params":{"isMan":true,"man":"giteveryday","category":"git man7","desc":"A useful minimum set of commands for Everyday Git"},"relativePath":"git/man7/giteveryday.md","filePath":"git/man7/giteveryday.md"}'),s={name:"git/man7/giteveryday.md"},l={class:"visually-hidden"},c=i(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>giteveryday - A useful minimum set of commands for Everyday Git</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><p>Everyday Git With 20 Commands Or So</p><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Git users can broadly be grouped into four categories for the purposes of describing here a small set of useful command for everyday Git.</p><blockquote><p>·</p><p>Individual Developer (Standalone) commands are essential for anybody who makes a commit, even for somebody who works alone.</p></blockquote><blockquote><p>·</p><p>If you work with other people, you will need commands listed in the Individual Developer (Participant) section as well.</p></blockquote><blockquote><p>·</p><p>People who play the Integrator role need to learn some more commands in addition to the above.</p></blockquote><blockquote><p>·</p><p>Repository Administration commands are for system administrators who are responsible for the care and feeding of Git repositories.</p></blockquote><h2 id="individual-developer-standalone" tabindex="-1">INDIVIDUAL DEVELOPER (STANDALONE) <a class="header-anchor" href="#individual-developer-standalone" aria-label="Permalink to &quot;INDIVIDUAL DEVELOPER (STANDALONE)&quot;">​</a></h2><p>A standalone individual developer does not exchange patches with other people, and works alone in a single repository, using the following commands.</p><blockquote><p>·</p><p><strong>git-init</strong>(1) to create a new repository.</p></blockquote><blockquote><p>·</p><p><strong>git-log</strong>(1) to see what happened.</p></blockquote><blockquote><p>·</p><p><strong>git-switch</strong>(1) and <strong>git-branch</strong>(1) to switch branches.</p></blockquote><blockquote><p>·</p><p><strong>git-add</strong>(1) to manage the index file.</p></blockquote><blockquote><p>·</p><p><strong>git-diff</strong>(1) and <strong>git-status</strong>(1) to see what you are in the middle of doing.</p></blockquote><blockquote><p>·</p><p><strong>git-commit</strong>(1) to advance the current branch.</p></blockquote><blockquote><p>·</p><p><strong>git-restore</strong>(1) to undo changes.</p></blockquote><blockquote><p>·</p><p><strong>git-merge</strong>(1) to merge between local branches.</p></blockquote><blockquote><p>·</p><p><strong>git-rebase</strong>(1) to maintain topic branches.</p></blockquote><blockquote><p>·</p><p><strong>git-tag</strong>(1) to mark a known point.</p></blockquote><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Use a tarball as a starting point for a new repository.</p><blockquote><blockquote><pre><code>$ tar zxf frotz.tar.gz
$ cd frotz
$ git init
$ git add . (1)
$ git commit -m &quot;import of frotz source tree.&quot;
$ git tag v2.43 (2)
</code></pre></blockquote><hr><pre><code>**1.** add everything under the current directory.
**2.** make a lightweight, unannotated tag.
</code></pre><hr></blockquote><p>Create a topic branch and develop.</p><blockquote><blockquote><pre><code>$ git switch -c alsa-audio (1)
$ edit/compile/test
$ git restore curses/ux_audio_oss.c (2)
$ git add curses/ux_audio_alsa.c (3)
$ edit/compile/test
$ git diff HEAD (4)
$ git commit -a -s (5)
$ edit/compile/test
$ git diff HEAD^ (6)
$ git commit -a --amend (7)
$ git switch master (8)
$ git merge alsa-audio (9)
$ git log --since=&#39;3 days ago&#39; (10)
$ git log v2.43.. curses/ (11)
</code></pre></blockquote><hr><pre><code> **1.** create a new topic branch.
 **2.** revert your botched changes in **curses/ux_audio_oss.c**.
 **3.** you need to tell Git if you added a new file; removal and modification will be caught if you do **git commit -a** later.
 **4.** to see what changes you are committing.
 **5.** commit everything, as you have tested, with your sign-off.
 **6.** look at all your changes including the previous commit.
 **7.** amend the previous commit, adding all your new changes, using your original message.
 **8.** switch to the master branch.
 **9.** merge a topic branch into your master branch.
**10.** review commit logs; other forms to limit output can be combined and include **-10** (to show up to 10 commits), **\\--until=2005-12-10**, etc.
**11.** view only the changes that touch what&#39;s in **curses/** directory, since **v2.43** tag.
</code></pre><hr></blockquote><h2 id="individual-developer-participant" tabindex="-1">INDIVIDUAL DEVELOPER (PARTICIPANT) <a class="header-anchor" href="#individual-developer-participant" aria-label="Permalink to &quot;INDIVIDUAL DEVELOPER (PARTICIPANT)&quot;">​</a></h2><p>A developer working as a participant in a group project needs to learn how to communicate with others, and uses these commands in addition to the ones needed by a standalone developer.</p><blockquote><p>·</p><p><strong>git-clone</strong>(1) from the upstream to prime your local repository.</p></blockquote><blockquote><p>·</p><p><strong>git-pull</strong>(1) and <strong>git-fetch</strong>(1) from &quot;origin&quot; to keep up-to-date with the upstream.</p></blockquote><blockquote><p>·</p><p><strong>git-push</strong>(1) to shared repository, if you adopt CVS style shared repository workflow.</p></blockquote><blockquote><p>·</p><p><strong>git-format-patch</strong>(1) to prepare e-mail submission, if you adopt Linux kernel-style public forum workflow.</p></blockquote><blockquote><p>·</p><p><strong>git-send-email</strong>(1) to send your e-mail submission without corruption by your MUA.</p></blockquote><blockquote><p>·</p><p><strong>git-request-pull</strong>(1) to create a summary of changes for your upstream to pull.</p></blockquote><h3 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Clone the upstream and work on it. Feed changes to upstream.</p><blockquote><blockquote><pre><code>$ git clone git://git.kernel.org/pub/scm/.../torvalds/linux-2.6 my2.6
$ cd my2.6
$ git switch -c mine master (1)
$ edit/compile/test; git commit -a -s (2)
$ git format-patch master (3)
$ git send-email --to=&quot;person &lt;email@example.com&gt;&quot; 00*.patch (4)
$ git switch master (5)
$ git pull (6)
$ git log -p ORIG_HEAD.. arch/i386 include/asm-i386 (7)
$ git ls-remote --heads http://git.kernel.org/.../jgarzik/libata-dev.git (8)
$ git pull git://git.kernel.org/pub/.../jgarzik/libata-dev.git ALL (9)
$ git reset --hard ORIG_HEAD (10)
$ git gc (11)
</code></pre></blockquote><hr><pre><code> **1.** checkout a new branch **mine** from master.
 **2.** repeat as needed.
 **3.** extract patches from your branch, relative to master,
 **4.** and email them.
 **5.** return to **master**, ready to see what&#39;s new
 **6.** **git pull** fetches from **origin** by default and merges into the current branch.
 **7.** immediately after pulling, look at the changes done upstream since last time we checked, only in the area we are interested in.
 **8.** check the branch names in an external repository (if not known).
 **9.** fetch from a specific branch **ALL** from a specific repository and merge it.
**10.** revert the pull.
**11.** garbage collect leftover objects from reverted pull.
</code></pre><hr></blockquote><p>Push into another repository.</p><blockquote><blockquote><pre><code>satellite$ git clone mothership:frotz frotz (1)
satellite$ cd frotz
satellite$ git config --get-regexp &#39;^(remote|branch)\\.&#39; (2)
remote.origin.url mothership:frotz
remote.origin.fetch refs/heads/*:refs/remotes/origin/*
branch.master.remote origin
branch.master.merge refs/heads/master
satellite$ git config remote.origin.push  &lt;br&gt; &gt; &gt;                +refs/heads/*:refs/remotes/satellite/* (3)
satellite$ edit/compile/test/commit
satellite$ git push origin (4)

mothership$ cd frotz
mothership$ git switch master
mothership$ git merge satellite/master (5)
</code></pre></blockquote><hr><pre><code>**1.** mothership machine has a frotz repository under your home directory; clone from it to start a repository on the satellite machine.
**2.** clone sets these configuration variables by default. It arranges **git pull** to fetch and store the branches of mothership machine to local **remotes/origin/\\** * remote-tracking branches.
**3.** arrange **git push** to push all local branches to their corresponding branch of the mothership machine.
**4.** push will stash all our work away on **remotes/satellite/\\** * remote-tracking branches on the mothership machine. You could use this as a back-up method. Likewise, you can pretend that mothership \\&quot;fetched\\&quot; from you (useful when access is one sided).
**5.** on mothership machine, merge the work done on the satellite machine into the master branch.
</code></pre><hr></blockquote><p>Branch off of a specific tag.</p><blockquote><blockquote><pre><code>$ git switch -c private2.6.14 v2.6.14 (1)
$ edit/compile/test; git commit -a
$ git checkout master
$ git cherry-pick v2.6.14..private2.6.14 (2)
</code></pre></blockquote><p>+----------------------------------:+:----------------------------------+ | <strong>1.</strong> | create a private branch based on | | | a well known (but somewhat | | | behind) tag. | +-----------------------------------+-----------------------------------+ | <strong>2.</strong> | forward port all changes in | | | <strong>private2.6.14</strong> branch to | | | <strong>master</strong> branch without a | | | formal &quot;merging&quot;. Or longhand | | | | | | <strong>git format-patch -k -m | | | --stdout v2.6.14..private2.6.14 | | | | git am -3 -k</strong> | +-----------------------------------+-----------------------------------+</p></blockquote><p>An alternate participant submission mechanism is using the <strong>git request-pull</strong> or pull-request mechanisms (e.g as used on GitHub (www.github.com) to notify your upstream of your contribution.</p><h2 id="integrator" tabindex="-1">INTEGRATOR <a class="header-anchor" href="#integrator" aria-label="Permalink to &quot;INTEGRATOR&quot;">​</a></h2><p>A fairly central person acting as the integrator in a group project receives changes made by others, reviews and integrates them and publishes the result for others to use, using these commands in addition to the ones needed by participants.</p><p>This section can also be used by those who respond to <strong>git request-pull</strong> or pull-request on GitHub (www.github.com) to integrate the work of others into their history. A sub-area lieutenant for a repository will act both as a participant and as an integrator.</p><blockquote><p>·</p><p><strong>git-am</strong>(1) to apply patches e-mailed in from your contributors.</p></blockquote><blockquote><p>·</p><p><strong>git-pull</strong>(1) to merge from your trusted lieutenants.</p></blockquote><blockquote><p>·</p><p><strong>git-format-patch</strong>(1) to prepare and send suggested alternative to contributors.</p></blockquote><blockquote><p>·</p><p><strong>git-revert</strong>(1) to undo botched commits.</p></blockquote><blockquote><p>·</p><p><strong>git-push</strong>(1) to publish the bleeding edge.</p></blockquote><h3 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>A typical integrator&#39;s Git day.</p><blockquote><blockquote><pre><code>$ git status (1)
$ git branch --no-merged master (2)
$ mailx (3)
&amp; s 2 3 4 5 ./+to-apply
&amp; s 7 8 ./+hold-linus
&amp; q
$ git switch -c topic/one master
$ git am -3 -i -s ./+to-apply (4)
$ compile/test
$ git switch -c hold/linus &amp;&amp; git am -3 -i -s ./+hold-linus (5)
$ git switch topic/one &amp;&amp; git rebase master (6)
$ git switch -C seen next (7)
$ git merge topic/one topic/two &amp;&amp; git merge hold/linus (8)
$ git switch maint
$ git cherry-pick master~4 (9)
$ compile/test
$ git tag -s -m &quot;GIT 0.99.9x&quot; v0.99.9x (10)
$ git fetch ko &amp;&amp; for branch in master maint next seen (11)
    do
        git show-branch ko/$branch $branch (12)
    done
$ git push --follow-tags ko (13)
</code></pre></blockquote><hr><pre><code> **1.** see what you were in the middle of doing, if anything.
 **2.** see which branches haven&#39;t been merged into **master** yet. Likewise for any other integration branches e.g. **maint**, **next** and **seen**.
 **3.** read mails, save ones that are applicable, and save others that are not quite ready (other mail readers are available).
 **4.** apply them, interactively, with your sign-offs.
 **5.** create topic branch as needed and apply, again with sign-offs.
 **6.** rebase internal topic branch that has not been merged to the master or exposed as a part of a stable branch.
 **7.** restart **seen** every time from the next.
 **8.** and bundle topic branches still cooking.
 **9.** backport a critical fix.
**10.** create a signed tag.
**11.** make sure master was not accidentally rewound beyond that already pushed out.
**12.** In the output from **git show-branch**, **master** should have everything **ko/master** has, and **next** should have everything **ko/next** has, etc.
**13.** push out the bleeding edge, together with new tags that point into the pushed history.
</code></pre><hr></blockquote><p>In this example, the <strong>ko</strong> shorthand points at the Git maintainer&#39;s repository at kernel.org, and looks like this:</p><blockquote><pre><code>(in .git/config)
[remote &quot;ko&quot;]
        url = kernel.org:/pub/scm/git/git.git
        fetch = refs/heads/*:refs/remotes/ko/*
        push = refs/heads/master
        push = refs/heads/next
        push = +refs/heads/seen
        push = refs/heads/maint
</code></pre></blockquote><h2 id="repository-administration" tabindex="-1">REPOSITORY ADMINISTRATION <a class="header-anchor" href="#repository-administration" aria-label="Permalink to &quot;REPOSITORY ADMINISTRATION&quot;">​</a></h2><p>A repository administrator uses the following tools to set up and maintain access to the repository by developers.</p><blockquote><p>·</p><p><strong>git-daemon</strong>(1) to allow anonymous download from repository.</p></blockquote><blockquote><p>·</p><p><strong>git-shell</strong>(1) can be used as a <em>restricted login shell</em> for shared central repository users.</p></blockquote><blockquote><p>·</p><p><strong>git-http-backend</strong>(1) provides a server side implementation of Git-over-HTTP (&quot;Smart http&quot;) allowing both fetch and push services.</p></blockquote><blockquote><p>·</p><p><strong>gitweb</strong>(1) provides a web front-end to Git repositories, which can be set-up using the <strong>git-instaweb</strong>(1) script.</p></blockquote><p><strong>update hook howto</strong>[1] has a good example of managing a shared central repository.</p><p>In addition there are a number of other widely deployed hosting, browsing and reviewing solutions such as:</p><blockquote><p>·</p><p>gitolite, gerrit code review, cgit and others.</p></blockquote><h3 id="examples-3" tabindex="-1">Examples <a class="header-anchor" href="#examples-3" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>We assume the following in /etc/services</p><blockquote><blockquote><pre><code>$ grep 9418 /etc/services
git             9418/tcp                # Git Version Control System
</code></pre></blockquote></blockquote><p>Run git-daemon to serve /pub/scm from inetd.</p><blockquote><blockquote><pre><code>$ grep git /etc/inetd.conf
git     stream  tcp     nowait  nobody  &lt;br&gt; &gt; &gt;       /usr/bin/git-daemon git-daemon --inetd --export-all /pub/scm
</code></pre></blockquote><p>The actual configuration line should be on one line.</p></blockquote><p>Run git-daemon to serve /pub/scm from xinetd.</p><blockquote><blockquote><pre><code>$ cat /etc/xinetd.d/git-daemon
# default: off
# description: The Git server offers access to Git repositories
service git
{
        disable = no
        type            = UNLISTED
        port            = 9418
        socket_type     = stream
        wait            = no
        user            = nobody
        server          = /usr/bin/git-daemon
        server_args     = --inetd --export-all --base-path=/pub/scm
        log_on_failure  += USERID
}
</code></pre></blockquote><p>Check your xinetd(8) documentation and setup, this is from a Fedora system. Others might be different.</p></blockquote><p>Give push/pull only access to developers using git-over-ssh.</p><blockquote><p>e.g. those using: <strong>$ git push/pull ssh://host.xz/pub/scm/project</strong></p><blockquote><pre><code>$ grep git /etc/passwd (1)
alice:x:1000:1000::/home/alice:/usr/bin/git-shell
bob:x:1001:1001::/home/bob:/usr/bin/git-shell
cindy:x:1002:1002::/home/cindy:/usr/bin/git-shell
david:x:1003:1003::/home/david:/usr/bin/git-shell
$ grep git /etc/shells (2)
/usr/bin/git-shell
</code></pre></blockquote><hr><pre><code>**1.** log-in shell is set to /usr/bin/git-shell, which does not allow anything but **git push** and **git pull**. The users require ssh access to the machine.
**2.** in many distributions /etc/shells needs to list what is used as the login shell.
</code></pre><hr></blockquote><p>CVS-style shared repository.</p><blockquote><blockquote><pre><code>$ grep git /etc/group (1)
git:x:9418:alice,bob,cindy,david
$ cd /home/devo.git
$ ls -l (2)
  lrwxrwxrwx   1 david git    17 Dec  4 22:40 HEAD -&gt; refs/heads/master
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 branches
  -rw-rw-r--   1 david git    84 Dec  4 22:40 config
  -rw-rw-r--   1 david git    58 Dec  4 22:40 description
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 hooks
  -rw-rw-r--   1 david git 37504 Dec  4 22:40 index
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 info
  drwxrwsr-x   4 david git  4096 Dec  4 22:40 objects
  drwxrwsr-x   4 david git  4096 Nov  7 14:58 refs
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 remotes
$ ls -l hooks/update (3)
  -r-xr-xr-x   1 david git  3536 Dec  4 22:40 update
$ cat info/allowed-users (4)
refs/heads/master       alice\\|cindy
refs/heads/doc-update   bob
refs/tags/v[0-9]*       david
</code></pre></blockquote><hr><pre><code>**1.** place the developers into the same git group.
**2.** and make the shared repository writable by the group.
**3.** use update-hook example by Carl from Documentation/howto/ for branch policy control.
**4.** alice and cindy can push into master, only bob can push into doc-update. david is the release manager and is the only person who can create and push version tags.
</code></pre><hr></blockquote><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p><h2 id="notes" tabindex="-1">NOTES <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;NOTES&quot;">​</a></h2><ol><li></li></ol><p>: update hook howto</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file:///usr/share/doc/git/howto/update-hook-example.html</span></span></code></pre></div>`,82);function p(e,d,h,u,g,m){return o(),a("div",null,[r("h1",l,n(e.$params.man),1),c])}const k=t(s,[["render",p]]);export{f as __pageData,k as default};
