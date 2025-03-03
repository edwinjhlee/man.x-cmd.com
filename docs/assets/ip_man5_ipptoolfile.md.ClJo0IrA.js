import{_ as a,c as n,o as t,j as l,Y as h,t as p}from"./chunks/framework.BNTND4LZ.js";const o=JSON.parse('{"title":"ipptoolfile | x-cmd man (ip man5) | ipptool file format","titleTemplate":false,"description":"x-cmd man (ip man5 Manual Page) | ipptoolfile - ipptool file format","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"ipptoolfile | x-cmd man (ip man5) | ipptool file format"}],["meta",{"name":"og:description","content":"x-cmd man (ip man5 Manual Page) | ipptoolfile - ipptool file format"}]]},"headers":[],"params":{"isMan":true,"man":"ipptoolfile","category":"ip man5","desc":"ipptool file format"},"relativePath":"ip/man5/ipptoolfile.md","filePath":"ip/man5/[man].md"}'),e={name:"ip/man5/ipptoolfile.md"},k={class:"visually-hidden"};function F(i,s,r,d,g,y){return t(),n("div",null,[l("h1",k,p(i.$params.man),1),s[0]||(s[0]=h(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>ipptoolfile - ipptool file format</p><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>The <strong>ipptool</strong>(1) program accepts free-form plain text files that describe one or more IPP requests. Comments start with the &quot;#&quot; character and continue to the end of the line. Each request is enclosed by curly braces, for example:</p><pre><code>    # This is a comment
    {
      # The name of the test
      NAME &quot;Print PDF File&quot;
</code></pre><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The request to send</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  OPERATION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Print-Job</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  GROUP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation-attributes-tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> charset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes-charset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> language</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes-natural-language</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> en</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> printer-uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requesting-user-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $user</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mimeMediaType</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> document-format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/pdf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  GROUP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-attributes-tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> collection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-col</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># US Letter plain paper from the &quot;main&quot; tray</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> collection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x-dimension</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21590</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y-dimension</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 27940</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-top-margin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 423</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-bottom-margin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 423</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-left-margin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 423</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-right-margin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 423</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyword</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;main&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyword</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> media-type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stationery&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> testfile.pdf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The response to expect</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successful-ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH-VALUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uri</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The name of the test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Wait for Job to Complete&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The request to send</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  OPERATION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Get-Job-Attributes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  GROUP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation-attributes-tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> charset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes-charset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> language</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes-natural-language</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> en</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> printer-uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $job</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ATTR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requesting-user-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $user</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The response to expect</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successful-ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH-VALUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $job</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uri</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH-VALUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REPEAT-NO-MATCH</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-originating-user-name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OF-TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH-VALUE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Show the job state until completed...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  DISPLAY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-state</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  DISPLAY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job-state-reasons</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="top-level-directives" tabindex="-1">TOP-LEVEL DIRECTIVES <a class="header-anchor" href="#top-level-directives" aria-label="Permalink to &quot;TOP-LEVEL DIRECTIVES&quot;">​</a></h3><p>The following directives can be used outside of a <em>test</em>:</p><dl><dt><strong>{</strong> <em>test</em> <strong>}</strong></dt><dd>Defines a test.</dd><dt><strong>DEFINE</strong> <em>variable-name value</em></dt><dd>Defines the named variable to the given value. This is equivalent to specifying <em>-d variable-name=value</em> on the <strong>ipptool</strong>(8) command-line.</dd><dt><strong>DEFINE-DEFAULT</strong> <em>variable-name value</em></dt><dd>Defines the named variable to the given value if it does not already have a value.</dd><dt><strong>FILE-ID &quot;</strong> <em>identifier</em>* <em>&quot;</em>*</dt><dd>Specifies an identifier string for the current file.</dd></dl><p><strong>IGNORE-ERRORS yes</strong></p><p>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IGNORE-ERRORS no</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whether,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ipptool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> errors</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> continue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subsequent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> another</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> first</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">relative</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> while</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> second</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ipptool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE-IF-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE-IF-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> another</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> named</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defined.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> first</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> while</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> second</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ipptool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE-IF-NOT-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INCLUDE-IF-NOT-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> another</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> named</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defined.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> first</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> while</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> second</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ipptool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">include</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directory.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SKIP-IF-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">variable-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SKIP-IF-NOT-DEFINED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">variable-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remainder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">should</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skipped</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defined.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">STOP-AFTER-INCLUDE-ERROR no</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">STOP-AFTER-INCLUDE-ERROR yes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whether</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stopped</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> included</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TRANSFER auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Transfer-Encoding: chunked</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with attached files and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">for requests without attached files.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TRANSFER chunked**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that tests will, by default, use</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the HTTP/1.1 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Transfer-Encoding: chunked</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">header. This is the default and is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equivalent to specifying *-c* on the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**ipptool**(8) command-line. Support for</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chunked requests is required for conformance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with all versions of IPP.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TRANSFER length**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that tests will, by default, use</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the HTTP/1.0 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> header.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This is equivalent to specifying *-l* on the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**ipptool**(8) command-line. Support for</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">content length requests is required for</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conformance with all versions of IPP.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 1.0**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 1.1**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.0**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.1**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.2**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies the default IPP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version number to use for</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the tests that follow.</span></span></code></pre></div><h3 id="test-directives" tabindex="-1">TEST DIRECTIVES <a class="header-anchor" href="#test-directives" aria-label="Permalink to &quot;TEST DIRECTIVES&quot;">​</a></h3><p>The following directives are understood within a <em>test</em>:</p><p><strong>ATTR</strong> <em>out-of-band-tag attribute-name</em></p><p>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ATTR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tag attribute-name value(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Adds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> request.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Out-of-band</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tags</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">admin-define,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete-attribute,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-value,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not-settable,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unknown,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unsupported</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">have</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> other</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tags</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delimited</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> comma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) character - escape commas using</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;\\\\\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> character.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IANA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IPP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> see</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> references</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> below.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ATTR collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MEMBER**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> member-name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Adds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> collection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> request.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Member</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attributes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> follow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> syntax</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> regular</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">themselves</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> collections.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Multiple</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> collection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> supplied</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> separated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commas.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">COMPRESSION deflate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">COMPRESSION gzip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">COMPRESSION none</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Uses</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specified</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compression</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> document</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Print-Job</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Send-Document</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DELAY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">seconds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,repeat-seconds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delay</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> before</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> two</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specified,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> second</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">used</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delay</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> between</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repeated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DISPLAY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> named</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> part</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXPECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">predicate(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXPECT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name predicate(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXPECT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> must/may/must</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> named</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Additional</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requirements</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> added</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> predicates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> see</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EXPECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PREDICATES</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> section</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">information</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> predicates.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> names</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> member</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attributes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> separating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> member</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> names</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forward</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slash,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;media-col/media-size/x-dimension</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT-ALL** *attribute-name* \\[ *predicate(s)* \\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT-ALL ?** *attribute-name predicate(s)*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that the response must/may include</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the named attribute and that all occurrences</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of that attribute must match the given</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">predicates.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**FILE filename**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies a file to include at the end of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the request. This is typically used when</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sending a test print file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**GROUP tag**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies the group tag for subsequent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attributes in the request.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**IGNORE-ERRORS yes**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**IGNORE-ERRORS no**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies whether **ipptool**(8) will</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignore errors and continue with</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">subsequent tests.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**MONITOR-PRINTER-STATE** \\[ *printer-uri* \\] **{ EXPECT** *attribute-name* \\[ *predicate(s)* \\] **}**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies printer state monitoring tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to run in parallel with the test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation. The monitoring tests will run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">until all of the **EXPECT** conditions</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">are satisfied or the primary test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation has completed, whichever</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">occurs first.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**NAME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *literal string** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies the human-readable name of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**OPERATION** *operation-code*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies the operation to be performed.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**PASS-IF-DEFINED** *variable-name*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**PASS-IF-NOT-DEFINED** *variable-name*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that the current test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">should be passed automatically when</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the variable is or is not defined.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**PAUSE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *message** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Displays the provided message and</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">waits for the user to press a key to</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">continue.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**REQUEST-ID** *number*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**REQUEST-ID random**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies the request-id value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to use in the request, either an</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer or the word </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to use a randomly generated</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value (the default).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**RESOURCE** *path*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies an alternate resource</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">path that is used for the HTTP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">POST request. The default is the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource from the URI provided</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to the **ipptool**(8) program.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**SKIP-IF-DEFINED** *variable-name*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**SKIP-IF-NOT-DEFINED** *variable-name*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that the current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test should be skipped when</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the variable is or is not</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defined.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**SKIP-PREVIOUS-ERROR yes**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**SKIP-PREVIOUS-ERROR no**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies whether</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**ipptool**(8) will skip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the current test if the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">previous test resulted</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">in an error/failure.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**STATUS** *status-code* \\[ *predicate* \\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies an expected</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response status-code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value. Additional</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requirements can be</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">added as predicates -</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see the </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">STATUS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PREDICATES</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> section for</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">more information on</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">predicates.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TEST-ID </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *identifier*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies an identifier</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string for the current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TRANSFER auto**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that this test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">will use</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Transfer-Encoding:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chunked</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> if it has an</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attached file or</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">otherwise.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TRANSFER chunked**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that this test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">will use the HTTP/1.1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Transfer-Encoding:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chunked</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> header.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**TRANSFER length**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies that this test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">will use the HTTP/1.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">header.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 1.0**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 1.1**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.0**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.1**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**VERSION 2.2**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Specifies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the IPP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">number</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to use</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">for this</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test.</span></span></code></pre></div><h3 id="expect-predicates" tabindex="-1">EXPECT PREDICATES <a class="header-anchor" href="#expect-predicates" aria-label="Permalink to &quot;EXPECT PREDICATES&quot;">​</a></h3><p>The following predicates are understood following the <strong>EXPECT</strong> test directive:</p><dl><dt><strong>COUNT</strong> <em>number</em></dt><dd>Requires the <strong>EXPECT</strong> attribute to have the specified number of values.</dd><dt><strong>DEFINE-MATCH</strong> <em>variable-name</em></dt><dd>Defines the variable to &quot;1&quot; when the <strong>EXPECT</strong> condition matches. A side-effect of this predicate is that this <strong>EXPECT</strong> will never fail a test.</dd><dt><strong>DEFINE-NO-MATCH</strong> <em>variable-name</em></dt><dd>Defines the variable to &quot;1&quot; when the <strong>EXPECT</strong> condition does not match. A side-effect of this predicate is that this <strong>EXPECT</strong> will never fail a test.</dd><dt><strong>DEFINE-VALUE</strong> <em>variable-name</em></dt><dd>Defines the variable to the value of the attribute when the <strong>EXPECT</strong> condition matches. A side-effect of this predicate is that this <strong>EXPECT</strong> will never fail a test.</dd><dt><strong>DISPLAY-MATCH</strong> <em>&quot;message&quot;</em></dt><dd>Displays the specified message when the <strong>EXPECT</strong> condition matches.</dd><dt><strong>IF-DEFINED</strong> <em>variable-name</em></dt><dd>Makes the <strong>EXPECT</strong> conditions apply only if the specified variable is defined.</dd><dt><strong>IF-NOT-DEFINED</strong> <em>variable-name</em></dt><dd>Makes the <strong>EXPECT</strong> conditions apply only if the specified variable is not defined.</dd><dt><strong>IN-GROUP</strong> <em>tag</em></dt><dd>Requires the <strong>EXPECT</strong> attribute to be in the specified group tag.</dd><dt><strong>OF-TYPE</strong> <em>tag[(limits)|tag|...]</em></dt><dd>Requires the <strong>EXPECT</strong> attribute to use one of the specified value tag(s). Most value tags also support the specification of limits in parenthesis, for example &quot;name(42)&quot; would allow nameWith/WithoutLanguage strings up to 42 octets in length, &quot;name(4:MAX)&quot; would allow nameWith/WithoutLanguage strings between 4 and 255 octets in length, and &quot;integer(-273:MAX)&quot; would allow integers between -273 and 2147483647.</dd><dt><strong>REPEAT-LIMIT</strong> <em>number</em></dt><dd><br> Specifies the maximum number of times to repeat if the <strong>REPEAT-MATCH</strong> or <strong>REPEAT-NO-MATCH</strong> predicate is specified. The default value is 1000.</dd></dl><p><strong>REPEAT-MATCH</strong></p><p>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REPEAT-NO-MATCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repeated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXPECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition matches or does not match.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SAME-COUNT-AS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attribute-name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EXPECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> have</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> number</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specified</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parallel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-HOSTNAMES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">literal string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-HOSTNAMES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">regular expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hostname.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-RESOURCES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">literal string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-RESOURCES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">regular expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> resource</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">including</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> leading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-SCHEMES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">literal string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-SCHEMES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">regular expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matching</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scheme.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">literal string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EXPECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> literal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Comparisons</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">case-sensitive.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-VALUES =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WITH-ALL-VALUES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..,number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Requires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXPECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> attribute match the number(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numeric</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> comparison.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> When</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> comparing</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rangeOfInteger</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;\\&lt;\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;\\&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> operators only check the upper</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bound of the range.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">false</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">true</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that all values of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT** attribute match the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">boolean value given.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-ALL-VALUES </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/** *regular expression** */</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that all values of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT** attribute match the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">regular expression, which must</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conform to the POSIX regular</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expression syntax. Comparisons are</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">case-sensitive.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-DISTINCT-VALUES**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that all values of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT** attribute are unique.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Comparisons are case-sensitive. Only</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charset, collection, enum, integer,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keyword, mimeMediaType,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">naturalLanguage, rangeOfInteger,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolution, uriScheme attributes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">support this predicate.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-HOSTNAME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *literal string** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-HOSTNAME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/** *regular expression** */</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that at least one URI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value contains a matching</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostname.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-RESOURCE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *literal string** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-RESOURCE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/** *regular expression** */</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that at least one</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">URI value contains a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matching resource (including</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leading /).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-SCHEME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *literal string** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-SCHEME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/** *regular expression** */</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that at least</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">one URI value contains a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matching scheme.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">** *literal string** *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires that at least</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">one value of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT** attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches the literal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string. Comparisons are</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">case-sensitive.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE \\&lt;** *number*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE =** *number*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE \\&gt;** *number*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE** *number*\\[*,\\...,number*\\]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">that at</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">least one</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT**</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">number(s) or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">numeric</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">comparison.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">When</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">comparing</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rangeOfInteger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">values, the</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> and</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operators</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">only check</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the upper</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bound of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">range.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">false</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">true</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">that at</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">least</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">one</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT**</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">boolean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">given.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/** *regular expression** */</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">that at</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">least</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">one</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT**</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">regular</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expression,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">which</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">must</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conform</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">POSIX</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">regular</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expression</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">syntax.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Comparisons</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">are</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">case-sensitive.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**WITH-VALUE-FROM** *attribute-name*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Requires</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">that the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value(s)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**EXPECT**</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value(s)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">in the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specified</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">example,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EXPECT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">job-sheets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WITH-VALUE-FROM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">job-sheets-supported</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requires</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">that the</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">job-sheets</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">as a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">job-sheets-supported</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attribute.</span></span></code></pre></div><h3 id="status-predicates" tabindex="-1">STATUS PREDICATES <a class="header-anchor" href="#status-predicates" aria-label="Permalink to &quot;STATUS PREDICATES&quot;">​</a></h3><p>The following predicates are understood following the <strong>STATUS</strong> test directive:</p><dl><dt><strong>DEFINE-MATCH</strong> <em>variable-name</em></dt><dd>Defines the variable to &quot;1&quot; when the <strong>STATUS</strong> matches. A side-effect of this predicate is that this <strong>STATUS</strong> will never fail a test.</dd><dt><strong>DEFINE-NO-MATCH</strong> <em>variable-name</em></dt><dd>Defines the variable to &quot;1&quot; when the <strong>STATUS</strong> does not match. A side-effect of this predicate is that this <strong>STATUS</strong> will never fail a test.</dd><dt><strong>IF-DEFINED</strong> <em>variable-name</em></dt><dd>Makes the <strong>STATUS</strong> apply only if the specified variable is defined.</dd><dt><strong>IF-NOT-DEFINED</strong> <em>variable-name</em></dt><dd>Makes the <strong>STATUS</strong> apply only if the specified variable is not defined.</dd><dt><strong>REPEAT-LIMIT</strong> <em>number</em></dt><dd><br> Specifies the maximum number of times to repeat. The default value is 1000.</dd></dl><p><strong>REPEAT-MATCH</strong></p><p>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REPEAT-NO-MATCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Specifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repeated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status-code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matches</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> does</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> match</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specified</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directive.</span></span></code></pre></div><h3 id="operation-codes" tabindex="-1">OPERATION CODES <a class="header-anchor" href="#operation-codes" aria-label="Permalink to &quot;OPERATION CODES&quot;">​</a></h3><p>Operation codes correspond to the hexadecimal numbers (0xHHHH) and names from RFC 8011 and other IPP extension specifications. Here is a complete list of names supported by <strong>ipptool</strong>(8):</p><pre><code>    Acknowledge-Document
    Acknowledge-Identify-Printer
    Acknowledge-Job
    Activate-Printer
    Add-Document-Images
    Allocate-Printer-Resources
    Cancel-Current-Job
    Cancel-Job
    Cancel-Jobs
    Cancel-My-Jobs
    Cancel-Resource
    Cancel-Subscription
    Close-Job
    Create-Job
    Create-Job-Subscriptions
    Create-Printer
    Create-Printer-Subscriptions
    Create-Resource
    Create-Resource-Subscriptions
    Create-System-Subscriptions
    CUPS-Accept-Jobs
    CUPS-Accept-Jobs
    CUPS-Add-Modify-Class
    CUPS-Add-Modify-Printer
    CUPS-Authenticate-Job
    CUPS-Create-Local-Printer
    CUPS-Delete-Class
    CUPS-Delete-Printer
    CUPS-Get-Classes
    CUPS-Get-Default
    CUPS-Get-Devices
    CUPS-Get-Document
    CUPS-Get-PPD
    CUPS-Get-PPDs
    CUPS-Get-Printers
    CUPS-Move-Job
    CUPS-Reject-Jobs
    CUPS-Set-Default
    Deactivate-Printer
    Deallocate-Printer-Resources
    Delete-Printer
    Deregister-Output-Device
    Disable-All-Printers
    Disable-Printer
    Enable-All-Printers
    Enable-Printer
    Fetch-Document
    Fetch-Job
    Get-Job-Attributes
    Get-Jobs
    Get-Next-Document-Data
    Get-Notifications
    Get-Output-Device-Attributes
    Get-Printer-Attributes
    Get-Printer-Support-Files
    Get-Printer-Supported-Values
    Get-Printers
    Get-Subscription-Attributes
    Get-Subscriptions
    Get-System-Attributes
    Get-System-Supported-Values
    Hold-Job
    Hold-New-Jobs
    Identify-Printer
    Install-Resource
    Pause-All-Printers
    Pause-All-Printers-After-Current-Job
    Pause-Printer
    Pause-Printer-After-Current-Job
    Print-Job
    Print-URI
    Promote-Job
    Purge-Jobs
    Register-Output-Device
    Release-Held-New-Jobs
    Release-Job
    Renew-Subscription
    Reprocess-Job
    Restart-Job
    Restart-Printer
    Restart-System
    Resubmit-Job
    Resume-All-Printers
    Resume-Job
    Resume-Printer
    Schedule-Job-After
    Send-Document
    Send-Hardcopy-Document
    Send-Notifications
    Send-Resource-Data
    Send-URI
    Set-Job-Attributes
    Set-Printer-Attributes
    Set-Resource-Attributes
    Set-System-Attributes
    Shutdown-All-Printers
    Shutdown-One-Printer
    Shutdown-Printer
    Startup-All-Printers
    Startup-One-Printer
    Startup-Printer
    Suspend-Current-Job
    Update-Active-Jobs
    Update-Document-Status
    Update-Job-Status
    Update-Output-Device-Attributes
    Validate-Document
    Validate-Job
</code></pre><h3 id="status-codes" tabindex="-1">STATUS CODES <a class="header-anchor" href="#status-codes" aria-label="Permalink to &quot;STATUS CODES&quot;">​</a></h3><p>Status codes correspond to the hexadecimal numbers (0xHHHH) and names from RFC 8011 and other IPP extension specifications. Here is a complete list of the names supported by <strong>ipptool</strong>(8):</p><pre><code>    client-error-account-authorization-failed
    client-error-account-closed
    client-error-account-info-needed
    client-error-account-limit-reached
    client-error-attributes-not-settable
    client-error-attributes-or-values-not-supported
    client-error-bad-request
    client-error-charset-not-supported
    client-error-compression-error
    client-error-compression-not-supported
    client-error-conflicting-attributes
    client-error-document-access-error
    client-error-document-format-error
    client-error-document-format-not-supported
    client-error-document-password-error
    client-error-document-permission-error
    client-error-document-security-error
    client-error-document-unprintable-error
    client-error-forbidden
    client-error-gone
    client-error-ignored-all-notifications
    client-error-ignored-all-subscriptions
    client-error-not-authenticated
    client-error-not-authorized
    client-error-not-fetchable
    client-error-not-found
    client-error-not-possible
    client-error-print-support-file-not-found
    client-error-request-entity-too-large
    client-error-request-value-too-long
    client-error-timeout
    client-error-too-many-subscriptions
    client-error-uri-scheme-not-supported
    cups-error-account-authorization-failed
    cups-error-account-closed
    cups-error-account-info-needed
    cups-error-account-limit-reached
    cups-see-other
    redirection-other-site
    server-error-busy
    server-error-device-error
    server-error-internal-error
    server-error-job-canceled
    server-error-multiple-document-jobs-not-supported
    server-error-not-accepting-jobs
    server-error-operation-not-supported
    server-error-printer-is-deactivated
    server-error-service-unavailable
    server-error-temporary-error
    server-error-version-not-supported
    successful-ok
    successful-ok-but-cancel-subscription
    successful-ok-conflicting-attributes
    successful-ok-events-complete
    successful-ok-ignored-notifications
    successful-ok-ignored-or-substituted-attributes
    successful-ok-ignored-subscriptions
    successful-ok-too-many-events
</code></pre><h3 id="tags" tabindex="-1">TAGS <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;TAGS&quot;">​</a></h3><p>Value and group tags correspond to the names from RFC 8011 and other IPP extension specifications. Here are the group tags:</p><pre><code>    document-attributes-tag
    event-notification-attributes-tag
    job | job-attributes-tag
    operation | operation-attributes-tag
    printer | printer-attributes-tag
    resource-attributes-tag
    subscription-attributes-tag
    system-attributes-tag
    unsupported-attributes-tag
</code></pre><p>Here are the value tags:</p><pre><code>    admin-define
    boolean
    charset
    collection | begCollection
    dateTime
    default
    delete-attribute
    enum
    integer
    keyword
    language | naturalLanguage
    mimetype | mimeMediaType
    name | nameWithLanguage | nameWithoutLanguage
    no-value
    not-settable
    octetString
    rangeOfInteger
    resolution
    text | textWithLanguage | textWithoutLanguage
    unknown
    unsupported
    uri
    uriScheme
</code></pre><h3 id="variables" tabindex="-1">VARIABLES <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;VARIABLES&quot;">​</a></h3><p>The <strong>ipptool</strong>(8) program maintains a list of variables that can be used in any literal string or attribute value by specifying &quot;<em>$variable-name</em>&quot;. Aside from variables defined using the <em>-d</em> option or <strong>DEFINE</strong> directive, the following pre-defined variables are available:</p><dl><dt><strong>$$</strong></dt><dd>Inserts a single &quot;$&quot; character.</dd><dt><strong>$ENV[</strong> <em>name</em>* <em>]</em>*</dt><dd>Inserts the value of the named environment variable, or an empty string if the environment variable is not defined.</dd><dt><strong>$date-current</strong></dt><dd>Inserts the current date and time using the ISO-8601 format (&quot;yyyy-mm-ddThh:mm:ssZ&quot;).</dd><dt><strong>$date-start</strong></dt><dd>Inserts the starting date and time using the ISO-8601 format (&quot;yyyy-mm-ddThh:mm:ssZ&quot;).</dd><dt><strong>$filename</strong></dt><dd>Inserts the filename provided to <strong>ipptool</strong>(8) with the <em>-f</em> option.</dd><dt><strong>$filetype</strong></dt><dd>Inserts the MIME media type for the filename provided to <strong>ipptool</strong>(8) with the <em>-f</em> option.</dd><dt><strong>$hostname</strong></dt><dd>Inserts the hostname from the URI provided to <strong>ipptool</strong>(8).</dd><dt><strong>$job-id</strong></dt><dd>Inserts the last &quot;job-id&quot; attribute value returned in a test response or 0 if no &quot;job-id&quot; attribute has been seen.</dd><dt><strong>$job-uri</strong></dt><dd>Inserts the last &quot;job-uri&quot; attribute value returned in a test response or an empty string if no &quot;job-uri&quot; attribute has been seen.</dd><dt><strong>$notify-subscription-id</strong></dt><dd>Inserts the last &quot;notify-subscription-id&quot; attribute value returned in a test response or 0 if no &quot;notify-subscription-id&quot; attribute has been seen.</dd><dt><strong>$port</strong></dt><dd>Inserts the port number from the URI provided to <strong>ipptool</strong>(8).</dd><dt><strong>$resource</strong></dt><dd>Inserts the resource path from the URI provided to <strong>ipptool</strong>(8).</dd><dt><strong>$scheme</strong></dt><dd>Inserts the scheme from the URI provided to <strong>ipptool</strong>(8).</dd><dt><strong>$uri</strong></dt><dd>Inserts the URI provided to <strong>ipptool</strong>(8).</dd><dt><strong>$uriuser</strong></dt><dd>Inserts the username from the URI provided to <strong>ipptool</strong>(8), if any.</dd><dt><strong>$user</strong></dt><dd>Inserts the current user&#39;s login name.</dd></dl><h2 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h2><p><strong>ipptool</strong>(1), IANA IPP Registry (<a href="https://www.iana.org/assignments/ipp-registrations" target="_blank" rel="noreferrer">https://www.iana.org/assignments/ipp-registrations</a>), PWG Internet Printing Protocol Workgroup (<a href="https://www.pwg.org/ipp" target="_blank" rel="noreferrer">https://www.pwg.org/ipp</a>), RFC 8011 (<a href="https://datatracker.ietf.org/doc/html/rfc8011" target="_blank" rel="noreferrer">https://datatracker.ietf.org/doc/html/rfc8011</a>)</p><h2 id="copyright" tabindex="-1">COPYRIGHT <a class="header-anchor" href="#copyright" aria-label="Permalink to &quot;COPYRIGHT&quot;">​</a></h2><p>Copyright © 2021-2022 by OpenPrinting.</p>`,47))])}const E=a(e,[["render",F]]);export{o as __pageData,E as default};
