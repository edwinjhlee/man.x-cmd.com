import{_ as i,o as a,c as n,l as p,t as l,N as e}from"./chunks/framework.Bbd9fWQx.js";const B=JSON.parse('{"title":"proc_pid_status | x-cmd man (man5) | memory usage and status information","titleTemplate":false,"description":"x-cmd man (man5 Manual Page) | proc_pid_status - memory usage and status information","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"proc_pid_status | x-cmd man (man5) | memory usage and status information"}],["meta",{"name":"og:description","content":"x-cmd man (man5 Manual Page) | proc_pid_status - memory usage and status information"}]]},"headers":[],"params":{"isMan":true,"man":"proc_pid_status","category":"man5","desc":"memory usage and status information"},"relativePath":"man5/proc_pid_status.md","filePath":"man5/proc_pid_status.md"}'),h={name:"man5/proc_pid_status.md"},t={class:"visually-hidden"},k=e(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>/proc/pid/status - memory usage and status information</p><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><dl><dt><em>/proc/<em>pid</em>/status</em></dt><dd>Provides much of the information in <em>/proc/<em>pid</em>/stat</em> and <em>/proc/<em>pid</em>/statm</em> in a format that&#39;s easier for humans to parse. Here&#39;s an example:</dd></dl><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Umask:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0022</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">State:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  S</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (sleeping)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Tgid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   17248</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ngid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pid:17248</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PPid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   17200</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TracerPid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Uid:1000100010001000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gid:100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FDSize:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 256</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Groups:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 33</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NStgid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17248</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NSpid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  17248</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NSpgid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17248</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NSsid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  17200</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmPeak:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	  131168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmSize:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	  131168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmLck:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmPin:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmHWM:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   13484</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmRSS:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   13484</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RssAnon:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   10264</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RssFile:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	3220</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RssShmem:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmData:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   10332</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmStk:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	 136</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmExe:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	 992</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmLib:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	2104</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmPTE:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	  76</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmPMD:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	  12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VmSwap:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	   0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HugetlbPages:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kB</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 4.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CoreDumping:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 4.15</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Threads:1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigQ:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0/3067</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigPnd:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ShdPnd:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigBlk:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000010000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigIgn:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000384004</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigCgt:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 000000004b813efb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CapInh:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CapPrm:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CapEff:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CapBnd:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffffffffffffffff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CapAmb:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NoNewPrivs:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Seccomp:0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Seccomp_filters:0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Speculation_Store_Bypass:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   vulnerable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cpus_allowed:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   00000001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cpus_allowed_list:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Mems_allowed:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Mems_allowed_list:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">voluntary_ctxt_switches:150</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nonvoluntary_ctxt_switches:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 545</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fields</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> follows:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Strings</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> longer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> than</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TASK_COMM_LEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) characters (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">including</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminating</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">null</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) are silently truncated.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Umask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> umask,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> expressed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> octal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> leading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">umask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">). (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Since</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Linux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4.7.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">State</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> One</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">R</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (running)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">S</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleeping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">D (disk sleep)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T (stopped)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t (tracing</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Z (zombie)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">, or </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">X (dead)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Tgid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Thread group ID (i.e., Process ID).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Ngid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   NUMA group ID (0 if none; since Linux 3.13).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Pid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Thread ID (see **gettid**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*PPid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   PID of parent process.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*TracerPid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   PID of process tracing this process (0 if not being traced).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Uid* &lt;br&gt; *Gid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Real, effective, saved set, and filesystem UIDs (GIDs).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*FDSize*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Number of file descriptor slots currently allocated.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Groups*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Supplementary group list.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*NStgid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Thread group ID (i.e., PID) in each of the PID namespaces of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">which *pid* is a member. The leftmost entry shows the value with</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">respect to the PID namespace of the process that mounted this</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">procfs (or the root namespace if mounted by the kernel),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">followed by the value in successively nested inner namespaces.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(Since Linux 4.1.)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*NSpid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Thread ID in each of the PID namespaces of which *pid* is a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">member. The fields are ordered as for *NStgid*. (Since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.1.)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*NSpgid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Process group ID in each of the PID namespaces of which *pid* is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a member. The fields are ordered as for *NStgid*. (Since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.1.)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*NSsid*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   descendant namespace session ID hierarchy Session ID in each of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">the PID namespaces of which *pid* is a member. The fields are</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ordered as for *NStgid*. (Since Linux 4.1.)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmPeak*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Peak virtual memory size.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmSize*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Virtual memory size.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmLck*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Locked memory size (see **mlock**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmPin*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Pinned memory size (since Linux 3.2). These are pages that</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">can\\&#39;t be moved because something needs to directly access</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">physical memory.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmHWM*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Peak resident set size (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">high water mark</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">). This value is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inaccurate; see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmRSS*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Resident set size. Note that the value here is the sum of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*RssAnon*, *RssFile*, and *RssShmem*. This value is inaccurate;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*RssAnon*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of resident anonymous memory. (since Linux 4.5). This value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is inaccurate; see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*RssFile*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of resident file mappings. (since Linux 4.5). This value is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inaccurate; see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*RssShmem*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of resident shared memory (includes System V shared memory,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mappings from **tmpfs**(5), and shared anonymous mappings).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(since Linux 4.5).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmData* &lt;br&gt; *VmStk* &lt;br&gt; *VmExe*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of data, stack, and text segments. This value is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inaccurate; see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmLib*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Shared library code size.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmPTE*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Page table entries size (since Linux 2.6.10).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmPMD*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of second-level page tables (added in Linux 4.0; removed in</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Linux 4.15).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*VmSwap*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Swapped-out virtual memory size by anonymous private pages;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shmem swap usage is not included (since Linux 2.6.34). This</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value is inaccurate; see */proc/*pid*/statm* above.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*HugetlbPages*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Size of hugetlb memory portions (since Linux 4.4).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*CoreDumping*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Contains the value 1 if the process is currently dumping core,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and 0 if it is not (since Linux 4.15). This information can be</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">used by a monitoring process to avoid killing a process that is</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currently dumping core, which could result in a corrupted core</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dump file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Threads*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Number of threads in process containing this thread.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*SigQ*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   This field contains two slash-separated numbers that relate to</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queued signals for the real user ID of this process. The first</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of these is the number of currently queued signals for this real</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user ID, and the second is the resource limit on the number of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queued signals for this process (see the description of</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**RLIMIT_SIGPENDING** in **getrlimit**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*SigPnd* &lt;br&gt; *ShdPnd*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Mask (expressed in hexadecimal) of signals pending for thread</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and for process as a whole (see **pthreads**(7) and</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**signal**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*SigBlk* &lt;br&gt; *SigIgn* &lt;br&gt; *SigCgt*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Masks (expressed in hexadecimal) indicating signals being</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blocked, ignored, and caught (see **signal**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*CapInh* &lt;br&gt; *CapPrm* &lt;br&gt; *CapEff*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Masks (expressed in hexadecimal) of capabilities enabled in</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inheritable, permitted, and effective sets (see</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**capabilities**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*CapBnd*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Capability bounding set, expressed in hexadecimal (since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.6.26, see **capabilities**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*CapAmb*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Ambient capability set, expressed in hexadecimal (since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.3, see **capabilities**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*NoNewPrivs*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Value of the *no_new_privs* bit (since Linux 4.10, see</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**prctl**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Seccomp*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Seccomp mode of the process (since Linux 3.8, see</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**seccomp**(2)). 0 means **SECCOMP_MODE_DISABLED**; 1 means</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**SECCOMP_MODE_STRICT**; 2 means **SECCOMP_MODE_FILTER**. This</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">field is provided only if the kernel was built with the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**CONFIG_SECCOMP** kernel configuration option enabled.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Seccomp_filters*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Number of seccomp filters attached to the process (since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5.9, see **seccomp**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Speculation_Store_Bypass*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Speculation flaw mitigation state (since Linux 4.17, see</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">**prctl**(2)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Cpus_allowed*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Hexadecimal mask of CPUs on which this process may run (since</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Linux 2.6.24, see **cpuset**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Cpus_allowed_list*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Same as previous, but in </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list format</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> (since Linux 2.6.26,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see **cpuset**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Mems_allowed*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Mask of memory nodes allowed to this process (since Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.6.24, see **cpuset**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*Mems_allowed_list*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Same as previous, but in </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list format</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> (since Linux 2.6.26,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see **cpuset**(7)).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*voluntary_ctxt_switches* &lt;br&gt; *nonvoluntary_ctxt_switches*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:   Number of voluntary and involuntary context switches (since</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Linux 2.6.23).</span></span></code></pre></div><h2 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h2><p><strong>proc</strong>(5)</p>`,7);function F(s,r,d,c,g,C){return a(),n("div",null,[p("h1",t,l(s.$params.man),1),k])}const o=i(h,[["render",F]]);export{B as __pageData,o as default};
