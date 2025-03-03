import{_ as n,c as a,o,j as i,Y as r,t as s}from"./chunks/framework.BNTND4LZ.js";const b=JSON.parse('{"title":"gitformat-signature | x-cmd man (git man5) | Git cryptographic signature formats","titleTemplate":false,"description":"x-cmd man (git man5 Manual Page) | gitformat-signature - Git cryptographic signature formats","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"gitformat-signature | x-cmd man (git man5) | Git cryptographic signature formats"}],["meta",{"name":"og:description","content":"x-cmd man (git man5 Manual Page) | gitformat-signature - Git cryptographic signature formats"}]]},"headers":[],"params":{"isMan":true,"man":"gitformat-signature","category":"git man5","desc":"Git cryptographic signature formats"},"relativePath":"git/man5/gitformat-signature.md","filePath":"git/man5/[man].md"}'),g={name:"git/man5/gitformat-signature.md"},d={class:"visually-hidden"};function p(t,e,c,h,l,m){return o(),a("div",null,[i("h1",d,s(t.$params.man),1),e[0]||(e[0]=r(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>gitformat-signature - Git cryptographic signature formats</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit] object header(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">over-the-wire protocol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Git uses cryptographic signatures in various places, currently objects (tags, commits, mergetags) and transactions (pushes). In every case, the command which is about to create an object or transaction determines a payload from that, calls an external program to obtain a detached signature for the payload (<strong>gpg -bsa</strong> in the case of PGP signatures), and embeds the signature into the object or transaction.</p><p>Signatures begin with an &quot;ASCII Armor&quot; header line and end with a tail line, which differ depending on signature type (as selected by <strong>gpg.format</strong>, see <strong>git-config</strong>(1)). These are, for <strong>gpg.format</strong> values:</p><p><strong>gpg</strong> (PGP)</p><blockquote><p><strong>-----BEGIN PGP SIGNATURE-----</strong> and <strong>-----END PGP SIGNATURE-----</strong>. Or, if gpg is told to produce RFC1991 signatures, <strong>-----BEGIN PGP MESSAGE-----</strong> and <strong>-----END PGP MESSAGE-----</strong></p></blockquote><p><strong>ssh</strong> (SSH)</p><blockquote><p><strong>-----BEGIN SSH SIGNATURE-----</strong> and <strong>-----END SSH SIGNATURE-----</strong></p></blockquote><p><strong>x509</strong> (X.509)</p><blockquote><p><strong>-----BEGIN SIGNED MESSAGE-----</strong> and <strong>-----END SIGNED MESSAGE-----</strong></p></blockquote><p>Signatures sometimes appear as a part of the normal payload (e.g. a signed tag has the signature block appended after the payload that the signature applies to), and sometimes appear in the value of an object header (e.g. a merge commit that merged a signed tag would have the entire tag contents on its &quot;mergetag&quot; header). In the case of the latter, the usual multi-line formatting rule for object headers applies. I.e. the second and subsequent lines are prefixed with a SP to signal that the line is continued from the previous line.</p><p>This is even true for an originally empty line. In the following examples, the end of line that ends with a whitespace letter is highlighted with a <strong>$</strong> sign; if you are trying to recreate these example by hand, do not cut and paste them---they are there primarily to highlight extra whitespace at the end of some lines.</p><p>The signed payload and the way the signature is embedded depends on the type of the object resp. transaction.</p><h2 id="tag-signatures" tabindex="-1">TAG SIGNATURES <a class="header-anchor" href="#tag-signatures" aria-label="Permalink to &quot;TAG SIGNATURES&quot;">​</a></h2><blockquote><p>·</p><p>created by: <strong>git tag -s</strong></p></blockquote><blockquote><p>·</p><p>payload: annotated tag object</p></blockquote><blockquote><p>·</p><p>embedding: append the signature to the unsigned tag object</p></blockquote><blockquote><p>·</p><p>example: tag <strong>signedtag</strong> with subject <strong>signed tag</strong></p></blockquote><blockquote><pre><code>object 04b871796dc0420f8e7561a895b52484b701d51a
type commit
tag signedtag
tagger C O Mitter &lt;committer@example.com&gt; 1465981006 +0000

signed tag

signed tag message body
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1

iQEcBAABAgAGBQJXYRhOAAoJEGEJLoW3InGJklkIAIcnhL7RwEb/+QeX9enkXhxn
rxfdqrvWd1K80sl2TOt8Bg/NYwrUBw/RWJ+sg/hhHp4WtvE1HDGHlkEz3y11Lkuh
8tSxS3qKTxXUGozyPGuE90sJfExhZlW4knIQ1wt/yWqM+33E9pN4hzPqLwyrdods
q8FWEqPPUbSJXoMbRPw04S5jrLtZSsUWbRYjmJCHzlhSfFWW4eFd37uquIaLUBS0
rkC3Jrx7420jkIpgFcTI2s60uhSQLzgcCwdA2ukSYIRnjg/zDkj8+3h/GaROJ72x
lZyI6HWixKJkWw8lE9aAOD9TmTW9sFJwcVAzmAuFX2kUreDUKMZduGcoRYGpD7E=
=jpXa
-----END PGP SIGNATURE-----
</code></pre></blockquote><blockquote><p>·</p><p>verify with: <strong>git verify-tag [-v]</strong> or <strong>git tag -v</strong></p></blockquote><blockquote><pre><code>gpg: Signature made Wed Jun 15 10:56:46 2016 CEST using RSA key ID B7227189
gpg: Good signature from &quot;Eris Discordia &lt;discord@example.net&gt;&quot;
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: D4BE 2231 1AD3 131E 5EDA  29A4 6109 2E85 B722 7189
object 04b871796dc0420f8e7561a895b52484b701d51a
type commit
tag signedtag
tagger C O Mitter &lt;committer@example.com&gt; 1465981006 +0000

signed tag

signed tag message body
</code></pre></blockquote><h2 id="commit-signatures" tabindex="-1">COMMIT SIGNATURES <a class="header-anchor" href="#commit-signatures" aria-label="Permalink to &quot;COMMIT SIGNATURES&quot;">​</a></h2><blockquote><p>·</p><p>created by: <strong>git commit -S</strong></p></blockquote><blockquote><p>·</p><p>payload: commit object</p></blockquote><blockquote><p>·</p><p>embedding: header entry <strong>gpgsig</strong> (content is preceded by a space)</p></blockquote><blockquote><p>·</p><p>example: commit with subject <strong>signed commit</strong></p></blockquote><blockquote><pre><code>tree eebfed94e75e7760540d1485c740902590a00332
parent 04b871796dc0420f8e7561a895b52484b701d51a
author A U Thor &lt;author@example.com&gt; 1465981137 +0000
committer C O Mitter &lt;committer@example.com&gt; 1465981137 +0000
gpgsig -----BEGIN PGP SIGNATURE-----
 Version: GnuPG v1
 $
 iQEcBAABAgAGBQJXYRjRAAoJEGEJLoW3InGJ3IwIAIY4SA6GxY3BjL60YyvsJPh/
 HRCJwH+w7wt3Yc/9/bW2F+gF72kdHOOs2jfv+OZhq0q4OAN6fvVSczISY/82LpS7
 DVdMQj2/YcHDT4xrDNBnXnviDO9G7am/9OE77kEbXrp7QPxvhjkicHNwy2rEflAA
 zn075rtEERDHr8nRYiDh8eVrefSO7D+bdQ7gv+7GsYMsd2auJWi1dHOSfTr9HIF4
 HJhWXT9d2f8W+diRYXGh4X0wYiGg6na/soXc+vdtDYBzIxanRqjg8jCAeo1eOTk1
 EdTwhcTZlI0x5pvJ3H0+4hA2jtldVtmPM4OTB0cTrEWBad7XV6YgiyuII73Ve3I=
 =jKHM
 -----END PGP SIGNATURE-----

signed commit

signed commit message body
</code></pre></blockquote><blockquote><p>·</p><p>verify with: <strong>git verify-commit [-v]</strong> (or <strong>git show --show-signature</strong>)</p></blockquote><blockquote><pre><code>gpg: Signature made Wed Jun 15 10:58:57 2016 CEST using RSA key ID B7227189
gpg: Good signature from &quot;Eris Discordia &lt;discord@example.net&gt;&quot;
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: D4BE 2231 1AD3 131E 5EDA  29A4 6109 2E85 B722 7189
tree eebfed94e75e7760540d1485c740902590a00332
parent 04b871796dc0420f8e7561a895b52484b701d51a
author A U Thor &lt;author@example.com&gt; 1465981137 +0000
committer C O Mitter &lt;committer@example.com&gt; 1465981137 +0000

signed commit

signed commit message body
</code></pre></blockquote><h2 id="mergetag-signatures" tabindex="-1">MERGETAG SIGNATURES <a class="header-anchor" href="#mergetag-signatures" aria-label="Permalink to &quot;MERGETAG SIGNATURES&quot;">​</a></h2><blockquote><p>·</p><p>created by: <strong>git merge</strong> on signed tag</p></blockquote><blockquote><p>·</p><p>payload/embedding: the whole signed tag object is embedded into the (merge) commit object as header entry <strong>mergetag</strong></p></blockquote><blockquote><p>·</p><p>example: merge of the signed tag <strong>signedtag</strong> as above</p></blockquote><blockquote><pre><code>tree c7b1cff039a93f3600a1d18b82d26688668c7dea
parent c33429be94b5f2d3ee9b0adad223f877f174b05d
parent 04b871796dc0420f8e7561a895b52484b701d51a
author A U Thor &lt;author@example.com&gt; 1465982009 +0000
committer C O Mitter &lt;committer@example.com&gt; 1465982009 +0000
mergetag object 04b871796dc0420f8e7561a895b52484b701d51a
 type commit
 tag signedtag
 tagger C O Mitter &lt;committer@example.com&gt; 1465981006 +0000
 $
 signed tag
 $
 signed tag message body
 -----BEGIN PGP SIGNATURE-----
 Version: GnuPG v1
 $
 iQEcBAABAgAGBQJXYRhOAAoJEGEJLoW3InGJklkIAIcnhL7RwEb/+QeX9enkXhxn
 rxfdqrvWd1K80sl2TOt8Bg/NYwrUBw/RWJ+sg/hhHp4WtvE1HDGHlkEz3y11Lkuh
 8tSxS3qKTxXUGozyPGuE90sJfExhZlW4knIQ1wt/yWqM+33E9pN4hzPqLwyrdods
 q8FWEqPPUbSJXoMbRPw04S5jrLtZSsUWbRYjmJCHzlhSfFWW4eFd37uquIaLUBS0
 rkC3Jrx7420jkIpgFcTI2s60uhSQLzgcCwdA2ukSYIRnjg/zDkj8+3h/GaROJ72x
 lZyI6HWixKJkWw8lE9aAOD9TmTW9sFJwcVAzmAuFX2kUreDUKMZduGcoRYGpD7E=
 =jpXa
 -----END PGP SIGNATURE-----

Merge tag &#39;signedtag&#39; into downstream

signed tag

signed tag message body

# gpg: Signature made Wed Jun 15 08:56:46 2016 UTC using RSA key ID B7227189
# gpg: Good signature from &quot;Eris Discordia &lt;discord@example.net&gt;&quot;
# gpg: WARNING: This key is not certified with a trusted signature!
# gpg:          There is no indication that the signature belongs to the owner.
# Primary key fingerprint: D4BE 2231 1AD3 131E 5EDA  29A4 6109 2E85 B722 7189
</code></pre></blockquote><blockquote><p>·</p><p>verify with: verification is embedded in merge commit message by default, alternatively with <strong>git show --show-signature</strong>:</p></blockquote><blockquote><pre><code>commit 9863f0c76ff78712b6800e199a46aa56afbcbd49
merged tag &#39;signedtag&#39;
gpg: Signature made Wed Jun 15 10:56:46 2016 CEST using RSA key ID B7227189
gpg: Good signature from &quot;Eris Discordia &lt;discord@example.net&gt;&quot;
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: D4BE 2231 1AD3 131E 5EDA  29A4 6109 2E85 B722 7189
Merge: c33429b 04b8717
Author: A U Thor &lt;author@example.com&gt;
Date:   Wed Jun 15 09:13:29 2016 +0000

    Merge tag &#39;signedtag&#39; into downstream

    signed tag

    signed tag message body

    # gpg: Signature made Wed Jun 15 08:56:46 2016 UTC using RSA key ID B7227189
    # gpg: Good signature from &quot;Eris Discordia &lt;discord@example.net&gt;&quot;
    # gpg: WARNING: This key is not certified with a trusted signature!
    # gpg:          There is no indication that the signature belongs to the owner.
    # Primary key fingerprint: D4BE 2231 1AD3 131E 5EDA  29A4 6109 2E85 B722 7189
</code></pre></blockquote><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,41))])}const k=n(g,[["render",p]]);export{b as __pageData,k as default};
