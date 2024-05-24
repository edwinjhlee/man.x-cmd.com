import{_ as t,o as i,c as a,l as o,t as r,N as n}from"./chunks/framework.Gjrf2Eoj.js";const b=JSON.parse('{"title":"git-interpret-trailers | x-cmd man (git man1) | Add or parse structured information in commit\\nmessages","titleTemplate":false,"description":"x-cmd man (git man1 Manual Page) | git-interpret-trailers - Add or parse structured information in commit\\nmessages","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"git-interpret-trailers | x-cmd man (git man1) | Add or parse structured information in commit\\nmessages"}],["meta",{"name":"og:description","content":"x-cmd man (git man1 Manual Page) | git-interpret-trailers - Add or parse structured information in commit\\nmessages"}]]},"headers":[],"params":{"isMan":true,"man":"git-interpret-trailers","category":"git man1","desc":"Add or parse structured information in commit\\nmessages"},"relativePath":"git/man1/git-interpret-trailers.md","filePath":"git/man1/git-interpret-trailers.md"}'),s={name:"git/man1/git-interpret-trailers.md"},l={class:"visually-hidden"},p=n(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>git-interpret-trailers - Add or parse structured information in commit messages</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interpret-trailers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--in-place] [--trim-empty]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">trailer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=|:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])...]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[--parse] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...]</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Help parsing or adding <em>trailers</em> lines, that look similar to RFC 822 e-mail headers, at the end of the otherwise free-form part of a commit message.</p><p>This command reads some patches or commit messages from either the &lt;file&gt; arguments or the standard input if no &lt;file&gt; is specified. If <strong>--parse</strong> is specified, the output consists of the parsed trailers.</p><p>Otherwise, this command applies the arguments passed using the <strong>--trailer</strong> option, if any, to the commit message part of each input file. The result is emitted on the standard output.</p><p>Some configuration variables control the way the <strong>--trailer</strong> arguments are applied to each commit message and the way any existing trailer in the commit message is changed. They also make it possible to automatically add some trailers.</p><p>By default, a <em>&lt;token&gt;=&lt;value&gt;</em> or <em>&lt;token&gt;:&lt;value&gt;</em> argument given using <strong>--trailer</strong> will be appended after the existing trailers only if the last trailer has a different (&lt;token&gt;, &lt;value&gt;) pair (or if there is no existing trailer). The &lt;token&gt; and &lt;value&gt; parts will be trimmed to remove starting and trailing whitespace, and the resulting trimmed &lt;token&gt; and &lt;value&gt; will appear in the message like this:</p><blockquote><pre><code>token: value
</code></pre></blockquote><p>This means that the trimmed &lt;token&gt; and &lt;value&gt; will be separated by <strong>&#39;: &#39;</strong> (one colon followed by one space).</p><p>By default the new trailer will appear at the end of all the existing trailers. If there is no existing trailer, the new trailer will appear after the commit message part of the output, and, if there is no line with only spaces at the end of the commit message part, one blank line will be added before the new trailer.</p><p>Existing trailers are extracted from the input message by looking for a group of one or more lines that (i) is all trailers, or (ii) contains at least one Git-generated or user-configured trailer and consists of at least 25% trailers. The group must be preceded by one or more empty (or whitespace-only) lines. The group must either be at the end of the message or be the last non-whitespace lines before a line that starts with <em>---</em> (followed by a space or the end of the line). Such three minus signs start the patch part of the message. See also <strong>--no-divider</strong> below.</p><p>When reading trailers, there can be no whitespace before or inside the token, but any number of regular space and tab characters are allowed between the token and the separator. There can be whitespaces before, inside or after the value. The value may be split over multiple lines with each subsequent line starting with at least one whitespace, like the &quot;folding&quot; in RFC 822.</p><p>Note that <em>trailers</em> do not follow and are not intended to follow many rules for RFC 822 headers. For example they do not follow the encoding rules and probably many other rules.</p><h2 id="options" tabindex="-1">OPTIONS <a class="header-anchor" href="#options" aria-label="Permalink to &quot;OPTIONS&quot;">​</a></h2><p>--in-place</p><blockquote><p>Edit the files in place.</p></blockquote><p>--trim-empty</p><blockquote><p>If the &lt;value&gt; part of any trailer contains only whitespace, the whole trailer will be removed from the resulting message. This applies to existing trailers as well as new trailers.</p></blockquote><p>--trailer &lt;token&gt;[(=|😃&lt;value&gt;]</p><blockquote><p>Specify a (&lt;token&gt;, &lt;value&gt;) pair that should be applied as a trailer to the input messages. See the description of this command.</p></blockquote><p>--where &lt;placement&gt;, --no-where</p><blockquote><p>Specify where all new trailers will be added. A setting provided with <em>--where</em> overrides all configuration variables and applies to all <em>--trailer</em> options until the next occurrence of <em>--where</em> or <em>--no-where</em>. Possible values are <strong>after</strong>, <strong>before</strong>, <strong>end</strong> or <strong>start</strong>.</p></blockquote><p>--if-exists &lt;action&gt;, --no-if-exists</p><blockquote><p>Specify what action will be performed when there is already at least one trailer with the same &lt;token&gt; in the message. A setting provided with <em>--if-exists</em> overrides all configuration variables and applies to all <em>--trailer</em> options until the next occurrence of <em>--if-exists</em> or <em>--no-if-exists</em>. Possible actions are <strong>addIfDifferent</strong>, <strong>addIfDifferentNeighbor</strong>, <strong>add</strong>, <strong>replace</strong> and <strong>doNothing</strong>.</p></blockquote><p>--if-missing &lt;action&gt;, --no-if-missing</p><blockquote><p>Specify what action will be performed when there is no other trailer with the same &lt;token&gt; in the message. A setting provided with <em>--if-missing</em> overrides all configuration variables and applies to all <em>--trailer</em> options until the next occurrence of <em>--if-missing</em> or <em>--no-if-missing</em>. Possible actions are <strong>doNothing</strong> or <strong>add</strong>.</p></blockquote><p>--only-trailers</p><blockquote><p>Output only the trailers, not any other parts of the input.</p></blockquote><p>--only-input</p><blockquote><p>Output only trailers that exist in the input; do not add any from the command-line or by following configured *<em>trailer.*</em> * rules.</p></blockquote><p>--unfold</p><blockquote><p>Remove any whitespace-continuation in trailers, so that each trailer appears on a line by itself with its full content.</p></blockquote><p>--parse</p><blockquote><p>A convenience alias for <strong>--only-trailers --only-input --unfold</strong>.</p></blockquote><p>--no-divider</p><blockquote><p>Do not treat <strong>---</strong> as the end of the commit message. Use this when you know your input contains just the commit message itself (and not an email or the output of <strong>git format-patch</strong>).</p></blockquote><h2 id="configuration-variables" tabindex="-1">CONFIGURATION VARIABLES <a class="header-anchor" href="#configuration-variables" aria-label="Permalink to &quot;CONFIGURATION VARIABLES&quot;">​</a></h2><p>trailer.separators</p><blockquote><p>This option tells which characters are recognized as trailer separators. By default only <em>:</em> is recognized as a trailer separator, except that <em>=</em> is always accepted on the command line for compatibility with other git commands.</p><p>The first character given by this option will be the default character used when another separator is not specified in the config for this trailer.</p><p>For example, if the value for this option is &quot;%=$&quot;, then only lines using the format <em>&lt;token&gt;&lt;sep&gt;&lt;value&gt;</em> with &lt;sep&gt; containing <em>%</em>, <em>=</em> or <em>$</em> and then spaces will be considered trailers. And <em>%</em> will be the default separator used, so by default trailers will appear like: <em>&lt;token&gt;% &lt;value&gt;</em> (one percent sign and one space will appear between the token and the value).</p></blockquote><p>trailer.where</p><blockquote><p>This option tells where a new trailer will be added.</p><p>This can be <strong>end</strong>, which is the default, <strong>start</strong>, <strong>after</strong> or <strong>before</strong>.</p><p>If it is <strong>end</strong>, then each new trailer will appear at the end of the existing trailers.</p><p>If it is <strong>start</strong>, then each new trailer will appear at the start, instead of the end, of the existing trailers.</p><p>If it is <strong>after</strong>, then each new trailer will appear just after the last trailer with the same &lt;token&gt;.</p><p>If it is <strong>before</strong>, then each new trailer will appear just before the first trailer with the same &lt;token&gt;.</p></blockquote><p>trailer.ifexists</p><blockquote><p>This option makes it possible to choose what action will be performed when there is already at least one trailer with the same &lt;token&gt; in the message.</p><p>The valid values for this option are: <strong>addIfDifferentNeighbor</strong> (this is the default), <strong>addIfDifferent</strong>, <strong>add</strong>, <strong>replace</strong> or <strong>doNothing</strong>.</p><p>With <strong>addIfDifferentNeighbor</strong>, a new trailer will be added only if no trailer with the same (&lt;token&gt;, &lt;value&gt;) pair is above or below the line where the new trailer will be added.</p><p>With <strong>addIfDifferent</strong>, a new trailer will be added only if no trailer with the same (&lt;token&gt;, &lt;value&gt;) pair is already in the message.</p><p>With <strong>add</strong>, a new trailer will be added, even if some trailers with the same (&lt;token&gt;, &lt;value&gt;) pair are already in the message.</p><p>With <strong>replace</strong>, an existing trailer with the same &lt;token&gt; will be deleted and the new trailer will be added. The deleted trailer will be the closest one (with the same &lt;token&gt;) to the place where the new one will be added.</p><p>With <strong>doNothing</strong>, nothing will be done; that is no new trailer will be added if there is already one with the same &lt;token&gt; in the message.</p></blockquote><p>trailer.ifmissing</p><blockquote><p>This option makes it possible to choose what action will be performed when there is not yet any trailer with the same &lt;token&gt; in the message.</p><p>The valid values for this option are: <strong>add</strong> (this is the default) and <strong>doNothing</strong>.</p><p>With <strong>add</strong>, a new trailer will be added.</p><p>With <strong>doNothing</strong>, nothing will be done.</p></blockquote><p>trailer.&lt;token&gt;.key</p><blockquote><p>This <strong>key</strong> will be used instead of &lt;token&gt; in the trailer. At the end of this key, a separator can appear and then some space characters. By default the only valid separator is <em>:</em>, but this can be changed using the <strong>trailer.separators</strong> config variable.</p><p>If there is a separator, then the key will be used instead of both the &lt;token&gt; and the default separator when adding the trailer.</p></blockquote><p>trailer.&lt;token&gt;.where</p><blockquote><p>This option takes the same values as the <em>trailer.where</em> configuration variable and it overrides what is specified by that option for trailers with the specified &lt;token&gt;.</p></blockquote><p>trailer.&lt;token&gt;.ifexists</p><blockquote><p>This option takes the same values as the <em>trailer.ifexists</em> configuration variable and it overrides what is specified by that option for trailers with the specified &lt;token&gt;.</p></blockquote><p>trailer.&lt;token&gt;.ifmissing</p><blockquote><p>This option takes the same values as the <em>trailer.ifmissing</em> configuration variable and it overrides what is specified by that option for trailers with the specified &lt;token&gt;.</p></blockquote><p>trailer.&lt;token&gt;.command</p><blockquote><p>This option behaves in the same way as <em>trailer.&lt;token&gt;.cmd</em>, except that it doesn&#39;t pass anything as argument to the specified command. Instead the first occurrence of substring $ARG is replaced by the value that would be passed as argument.</p><p>The <em>trailer.&lt;token&gt;.command</em> option has been deprecated in favor of <em>trailer.&lt;token&gt;.cmd</em> due to the fact that $ARG in the user&#39;s command is only replaced once and that the original way of replacing $ARG is not safe.</p><p>When both <em>trailer.&lt;token&gt;.cmd</em> and <em>trailer.&lt;token&gt;.command</em> are given for the same &lt;token&gt;, <em>trailer.&lt;token&gt;.cmd</em> is used and <em>trailer.&lt;token&gt;.command</em> is ignored.</p></blockquote><p>trailer.&lt;token&gt;.cmd</p><blockquote><p>This option can be used to specify a shell command that will be called: once to automatically add a trailer with the specified &lt;token&gt;, and then each time a <em>--trailer &lt;token&gt;=&lt;value&gt;</em> argument to modify the &lt;value&gt; of the trailer that this option would produce.</p><p>When the specified command is first called to add a trailer with the specified &lt;token&gt;, the behavior is as if a special <em>--trailer &lt;token&gt;=&lt;value&gt;</em> argument was added at the beginning of the &quot;git interpret-trailers&quot; command, where &lt;value&gt; is taken to be the standard output of the command with any leading and trailing whitespace trimmed off.</p><p>If some <em>--trailer &lt;token&gt;=&lt;value&gt;</em> arguments are also passed on the command line, the command is called again once for each of these arguments with the same &lt;token&gt;. And the &lt;value&gt; part of these arguments, if any, will be passed to the command as its first argument. This way the command can produce a &lt;value&gt; computed from the &lt;value&gt; passed in the <em>--trailer &lt;token&gt;=&lt;value&gt;</em> argument.</p></blockquote><h2 id="examples" tabindex="-1">EXAMPLES <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;EXAMPLES&quot;">​</a></h2><blockquote><p>·</p><p>Configure a <em>sign</em> trailer with a <em>Signed-off-by</em> key, and then add two of these trailers to a message:</p><blockquote><pre><code>$ git config trailer.sign.key &quot;Signed-off-by&quot;
$ cat msg.txt
subject

message
$ cat msg.txt | git interpret-trailers --trailer &#39;sign: Alice &lt;alice@example.com&gt;&#39; --trailer &#39;sign: Bob &lt;bob@example.com&gt;&#39;
subject

message

Signed-off-by: Alice &lt;alice@example.com&gt;
Signed-off-by: Bob &lt;bob@example.com&gt;
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Use the <strong>--in-place</strong> option to edit a message file in place:</p><blockquote><pre><code>$ cat msg.txt
subject

message

Signed-off-by: Bob &lt;bob@example.com&gt;
$ git interpret-trailers --trailer &#39;Acked-by: Alice &lt;alice@example.com&gt;&#39; --in-place msg.txt
$ cat msg.txt
subject

message

Signed-off-by: Bob &lt;bob@example.com&gt;
Acked-by: Alice &lt;alice@example.com&gt;
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Extract the last commit as a patch, and add a <em>Cc</em> and a <em>Reviewed-by</em> trailer to it:</p><blockquote><pre><code>$ git format-patch -1
0001-foo.patch
$ git interpret-trailers --trailer &#39;Cc: Alice &lt;alice@example.com&gt;&#39; --trailer &#39;Reviewed-by: Bob &lt;bob@example.com&gt;&#39; 0001-foo.patch &gt;0001-bar.patch
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a <em>sign</em> trailer with a command to automatically add a &#39;Signed-off-by: &#39; with the author information only if there is no &#39;Signed-off-by: &#39; already, and show how it works:</p><blockquote><pre><code>$ git config trailer.sign.key &quot;Signed-off-by: &quot;
$ git config trailer.sign.ifmissing add
$ git config trailer.sign.ifexists doNothing
$ git config trailer.sign.command &#39;echo &quot;$(git config user.name) &lt;$(git config user.email)&gt;&quot;&#39;
$ git interpret-trailers &lt;&lt;EOF
&gt; EOF

Signed-off-by: Bob &lt;bob@example.com&gt;
$ git interpret-trailers &lt;&lt;EOF
&gt; Signed-off-by: Alice &lt;alice@example.com&gt;
&gt; EOF

Signed-off-by: Alice &lt;alice@example.com&gt;
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a <em>fix</em> trailer with a key that contains a <em>#</em> and no space after this character, and show how it works:</p><blockquote><pre><code>$ git config trailer.separators &quot;:#&quot;
$ git config trailer.fix.key &quot;Fix #&quot;
$ echo &quot;subject&quot; | git interpret-trailers --trailer fix=42
subject

Fix #42
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a <em>help</em> trailer with a cmd use a script <strong>glog-find-author</strong> which search specified author identity from git log in git repository and show how it works:</p><blockquote><pre><code>$ cat ~/bin/glog-find-author
#!/bin/sh
test -n &quot;$1&quot; &amp;&amp; git log --author=&quot;$1&quot; --pretty=&quot;%an &lt;%ae&gt;&quot; -1 || true
$ git config trailer.help.key &quot;Helped-by: &quot;
$ git config trailer.help.ifExists &quot;addIfDifferentNeighbor&quot;
$ git config trailer.help.cmd &quot;~/bin/glog-find-author&quot;
$ git interpret-trailers --trailer=&quot;help:Junio&quot; --trailer=&quot;help:Couder&quot; &lt;&lt;EOF
&gt; subject
&gt;
&gt; message
&gt;
&gt; EOF
subject

message

Helped-by: Junio C Hamano &lt;gitster@pobox.com&gt;
Helped-by: Christian Couder &lt;christian.couder@gmail.com&gt;
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a <em>ref</em> trailer with a cmd use a script <strong>glog-grep</strong> to grep last relevant commit from git log in the git repository and show how it works:</p><blockquote><pre><code>$ cat ~/bin/glog-grep
#!/bin/sh
test -n &quot;$1&quot; &amp;&amp; git log --grep &quot;$1&quot; --pretty=reference -1 || true
$ git config trailer.ref.key &quot;Reference-to: &quot;
$ git config trailer.ref.ifExists &quot;replace&quot;
$ git config trailer.ref.cmd &quot;~/bin/glog-grep&quot;
$ git interpret-trailers --trailer=&quot;ref:Add copyright notices.&quot; &lt;&lt;EOF
&gt; subject
&gt;
&gt; message
&gt;
&gt; EOF
subject

message

Reference-to: 8bc9a0c769 (Add copyright notices., 2005-04-07)
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a <em>see</em> trailer with a command to show the subject of a commit that is related, and show how it works:</p><blockquote><pre><code>$ git config trailer.see.key &quot;See-also: &quot;
$ git config trailer.see.ifExists &quot;replace&quot;
$ git config trailer.see.ifMissing &quot;doNothing&quot;
$ git config trailer.see.command &quot;git log -1 --oneline --format=\\&quot;%h (%s)\\&quot; --abbrev-commit --abbrev=14 \\$ARG&quot;
$ git interpret-trailers &lt;&lt;EOF
&gt; subject
&gt;
&gt; message
&gt;
&gt; see: HEAD~2
&gt; EOF
subject

message

See-also: fe3187489d69c4 (subject of related commit)
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Configure a commit template with some trailers with empty values (using sed to show and keep the trailing spaces at the end of the trailers), then configure a commit-msg hook that uses <em>git interpret-trailers</em> to remove trailers with empty values and to add a <em>git-version</em> trailer:</p><blockquote><pre><code>$ sed -e &#39;s/ Z$/ /&#39; &gt;commit_template.txt &lt;&lt;EOF
&gt;** *subject** *
&gt;
&gt;** *message** *
&gt;
&gt; Fixes: Z
&gt; Cc: Z
&gt; Reviewed-by: Z
&gt; Signed-off-by: Z
&gt; EOF
$ git config commit.template commit_template.txt
$ cat &gt;.git/hooks/commit-msg &lt;&lt;EOF
&gt; #!/bin/sh
&gt; git interpret-trailers --trim-empty --trailer &quot;git-version: \\$(git describe)&quot; &quot;\\$1&quot; &gt; &quot;\\$1.new&quot;
&gt; mv &quot;\\$1.new&quot; &quot;\\$1&quot;
&gt; EOF
$ chmod +x .git/hooks/commit-msg
</code></pre></blockquote></blockquote><h2 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h2><p><strong>git-commit</strong>(1), <strong>git-format-patch</strong>(1), <strong>git-config</strong>(1)</p><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,74);function g(e,h,c,d,m,u){return i(),a("div",null,[o("h1",l,r(e.$params.man),1),p])}const k=t(s,[["render",g]]);export{b as __pageData,k as default};
