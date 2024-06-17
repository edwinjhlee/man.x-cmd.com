import{_ as t,o as a,c as o,l as n,t as i,N as s}from"./chunks/framework.Bbd9fWQx.js";const k=JSON.parse('{"title":"gitprotocol-pack | x-cmd man (git man5) | How packs are transferred over-the-wire","titleTemplate":false,"description":"x-cmd man (git man5 Manual Page) | gitprotocol-pack - How packs are transferred over-the-wire","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"gitprotocol-pack | x-cmd man (git man5) | How packs are transferred over-the-wire"}],["meta",{"name":"og:description","content":"x-cmd man (git man5 Manual Page) | gitprotocol-pack - How packs are transferred over-the-wire"}]]},"headers":[],"params":{"isMan":true,"man":"gitprotocol-pack","category":"git man5","desc":"How packs are transferred over-the-wire"},"relativePath":"git/man5/gitprotocol-pack.md","filePath":"git/man5/gitprotocol-pack.md"}'),r={name:"git/man5/gitprotocol-pack.md"},c={class:"visually-hidden"},l=s(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>gitprotocol-pack - How packs are transferred over-the-wire</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">over-the-wire-protocol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Git supports transferring data in packfiles over the ssh://, git://, http:// and file:// transports. There exist two sets of protocols, one for pushing data from a client to a server and another for fetching data from a server to a client. The three transports (ssh, git, file) use the same protocol to transfer data. http is documented in <strong>gitprotocol-http</strong>(5).</p><p>The processes invoked in the canonical Git implementation are <em>upload-pack</em> on the server side and <em>fetch-pack</em> on the client side for fetching data; then <em>receive-pack</em> on the server and <em>send-pack</em> on the client for pushing data. The protocol functions to have a server tell a client what is currently on the server, then for the two to negotiate the smallest amount of data to send in order to fully update one or the other.</p><h2 id="pkt-line-format" tabindex="-1">PKT-LINE FORMAT <a class="header-anchor" href="#pkt-line-format" aria-label="Permalink to &quot;PKT-LINE FORMAT&quot;">​</a></h2><p>The descriptions below build on the pkt-line format described in <strong>gitprotocol-common</strong>(5). When the grammar indicate <strong>PKT-LINE(...)</strong>, unless otherwise noted the usual pkt-line LF rules apply: the sender SHOULD include a LF, but the receiver MUST NOT complain if it is not present.</p><p>An error packet is a special pkt-line that contains an error string.</p><blockquote><pre><code>  error-line     =  PKT-LINE(&quot;ERR&quot; SP explanation-text)
</code></pre></blockquote><p>Throughout the protocol, where <strong>PKT-LINE(...)</strong> is expected, an error packet MAY be sent. Once this packet is sent by a client or a server, the data transfer process defined in this protocol is terminated.</p><h2 id="transports" tabindex="-1">TRANSPORTS <a class="header-anchor" href="#transports" aria-label="Permalink to &quot;TRANSPORTS&quot;">​</a></h2><p>There are three transports over which the packfile protocol is initiated. The Git transport is a simple, unauthenticated server that takes the command (almost always <em>upload-pack</em>, though Git servers can be configured to be globally writable, in which <em>receive- pack</em> initiation is also allowed) with which the client wishes to communicate and executes it and connects it to the requesting process.</p><p>In the SSH transport, the client just runs the <em>upload-pack</em> or <em>receive-pack</em> process on the server over the SSH protocol and then communicates with that invoked process over the SSH connection.</p><p>The file:// transport runs the <em>upload-pack</em> or <em>receive-pack</em> process locally and communicates with it over a pipe.</p><h2 id="extra-parameters" tabindex="-1">EXTRA PARAMETERS <a class="header-anchor" href="#extra-parameters" aria-label="Permalink to &quot;EXTRA PARAMETERS&quot;">​</a></h2><p>The protocol provides a mechanism in which clients can send additional information in its first message to the server. These are called &quot;Extra Parameters&quot;, and are supported by the Git, SSH, and HTTP protocols.</p><p>Each Extra Parameter takes the form of <strong>&lt;key&gt;=&lt;value&gt;</strong> or <strong>&lt;key&gt;</strong>.</p><p>Servers that receive any such Extra Parameters MUST ignore all unrecognized keys. Currently, the only Extra Parameter recognized is &quot;version&quot; with a value of <em>1</em> or <em>2</em>. See <strong>gitprotocol-v2</strong>(5) for more information on protocol version 2.</p><h2 id="git-transport" tabindex="-1">GIT TRANSPORT <a class="header-anchor" href="#git-transport" aria-label="Permalink to &quot;GIT TRANSPORT&quot;">​</a></h2><p>The Git transport starts off by sending the command and repository on the wire using the pkt-line format, followed by a NUL byte and a hostname parameter, terminated by a NUL byte.</p><blockquote><pre><code>0033git-upload-pack /project.git\\0host=myserver.com\\0
</code></pre></blockquote><p>The transport may send Extra Parameters by adding an additional NUL byte, and then adding one or more NUL-terminated strings:</p><blockquote><pre><code>003egit-upload-pack /project.git\\0host=myserver.com\\0\\0version=1\\0
</code></pre></blockquote><blockquote><pre><code>git-proto-request = request-command SP pathname NUL
      [ host-parameter NUL ] [ NUL extra-parameters ]
request-command   = &quot;git-upload-pack&quot; / &quot;git-receive-pack&quot; /
      &quot;git-upload-archive&quot;   ; case sensitive
pathname          = *( %x01-ff ) ; exclude NUL
host-parameter    = &quot;host=&quot; hostname [ &quot;:&quot; port ]
extra-parameters  = 1*extra-parameter
extra-parameter   = 1*( %x01-ff ) NUL
</code></pre></blockquote><p>host-parameter is used for the git-daemon name based virtual hosting. See --interpolated-path option to git daemon, with the %H/%CH format characters.</p><p>Basically what the Git client is doing to connect to an <em>upload-pack</em> process on the server side over the Git protocol is this:</p><blockquote><pre><code>$ echo -e -n  &lt;br&gt; &gt;       &quot;003agit-upload-pack /schacon/gitbook.git\\0host=example.com\\0&quot; |
  nc -v example.com 9418
</code></pre></blockquote><h2 id="ssh-transport" tabindex="-1">SSH TRANSPORT <a class="header-anchor" href="#ssh-transport" aria-label="Permalink to &quot;SSH TRANSPORT&quot;">​</a></h2><p>Initiating the upload-pack or receive-pack processes over SSH is executing the binary on the server via SSH remote execution. It is basically equivalent to running this:</p><blockquote><pre><code>$ ssh git.example.com &quot;git-upload-pack &#39;/project.git&#39;&quot;
</code></pre></blockquote><p>For a server to support Git pushing and pulling for a given user over SSH, that user needs to be able to execute one or both of those commands via the SSH shell that they are provided on login. On some systems, that shell access is limited to only being able to run those two commands, or even just one of them.</p><p>In an ssh:// format URI, it&#39;s absolute in the URI, so the <em>/</em> after the host name (or port number) is sent as an argument, which is then read by the remote git-upload-pack exactly as is, so it&#39;s effectively an absolute path in the remote filesystem.</p><blockquote><pre><code>   git clone ssh://user@example.com/project.git
  |
  v
ssh user@example.com &quot;git-upload-pack &#39;/project.git&#39;&quot;
</code></pre></blockquote><p>In a &quot;user@host:path&quot; format URI, its relative to the user&#39;s home directory, because the Git client will run:</p><blockquote><pre><code>   git clone user@example.com:project.git
    |
    v
ssh user@example.com &quot;git-upload-pack &#39;project.git&#39;&quot;
</code></pre></blockquote><p>The exception is if a <em>~</em> is used, in which case we execute it without the leading <em>/</em>.</p><blockquote><pre><code>   ssh://user@example.com/~alice/project.git,
    |
    v
ssh user@example.com &quot;git-upload-pack &#39;~alice/project.git&#39;&quot;
</code></pre></blockquote><p>Depending on the value of the <strong>protocol.version</strong> configuration variable, Git may attempt to send Extra Parameters as a colon-separated string in the GIT_PROTOCOL environment variable. This is done only if the <strong>ssh.variant</strong> configuration variable indicates that the ssh command supports passing environment variables as an argument.</p><p>A few things to remember here:</p><blockquote><p>·</p><p>The &quot;command name&quot; is spelled with dash (e.g. git-upload-pack), but this can be overridden by the client;</p></blockquote><blockquote><p>·</p><p>The repository path is always quoted with single quotes.</p></blockquote><h2 id="fetching-data-from-a-server" tabindex="-1">FETCHING DATA FROM A SERVER <a class="header-anchor" href="#fetching-data-from-a-server" aria-label="Permalink to &quot;FETCHING DATA FROM A SERVER&quot;">​</a></h2><p>When one Git repository wants to get data that a second repository has, the first can <em>fetch</em> from the second. This operation determines what data the server has that the client does not then streams that data down to the client in packfile format.</p><h2 id="reference-discovery" tabindex="-1">REFERENCE DISCOVERY <a class="header-anchor" href="#reference-discovery" aria-label="Permalink to &quot;REFERENCE DISCOVERY&quot;">​</a></h2><p>When the client initially connects the server will immediately respond with a version number (if &quot;version=1&quot; is sent as an Extra Parameter), and a listing of each reference it has (all branches and tags) along with the object name that each reference currently points to.</p><blockquote><pre><code> $ echo -e -n &quot;0045git-upload-pack /schacon/gitbook.git\\0host=example.com\\0\\0version=1\\0&quot; |
    nc -v example.com 9418
 000eversion 1
 00887217a7c7e582c46cec22a130adf4b9d7d950fba0 HEAD\\0multi_ack thin-pack
side-band side-band-64k ofs-delta shallow no-progress include-tag
 00441d3fcd5ced445d1abc402225c0b8a1299641f497 refs/heads/integration
 003f7217a7c7e582c46cec22a130adf4b9d7d950fba0 refs/heads/master
 003cb88d2441cac0977faf98efc80305012112238d9d refs/tags/v0.9
 003c525128480b96c89e6418b1e40909bf6c5b2d580f refs/tags/v1.0
 003fe92df48743b7bc7d26bcaabfddde0a1e20cae47c refs/tags/v1.0^{}
 0000
</code></pre></blockquote><p>The returned response is a pkt-line stream describing each ref and its current value. The stream MUST be sorted by name according to the C locale ordering.</p><p>If HEAD is a valid ref, HEAD MUST appear as the first advertised ref. If HEAD is not a valid ref, HEAD MUST NOT appear in the advertisement list at all, but other refs may still appear.</p><p>The stream MUST include capability declarations behind a NUL on the first ref. The peeled value of a ref (that is &quot;ref^{}&quot;) MUST be immediately after the ref itself, if presented. A conforming server MUST peel the ref if it&#39;s an annotated tag.</p><blockquote><pre><code>  advertised-refs  =  *1(&quot;version 1&quot;)
                      (no-refs / list-of-refs)
                      *shallow
                      flush-pkt

  no-refs          =  PKT-LINE(zero-id SP &quot;capabilities^{}&quot;
                      NUL capability-list)

  list-of-refs     =  first-ref *other-ref
  first-ref        =  PKT-LINE(obj-id SP refname
                      NUL capability-list)

  other-ref        =  PKT-LINE(other-tip / other-peeled)
  other-tip        =  obj-id SP refname
  other-peeled     =  obj-id SP refname &quot;^{}&quot;

  shallow          =  PKT-LINE(&quot;shallow&quot; SP obj-id)

  capability-list  =  capability *(SP capability)
  capability       =  1*(LC_ALPHA / DIGIT / &quot;-&quot; / &quot;_&quot;)
  LC_ALPHA         =  %x61-7A
</code></pre></blockquote><p>Server and client MUST use lowercase for obj-id, both MUST treat obj-id as case-insensitive.</p><p>See protocol-capabilities.txt for a list of allowed server capabilities and descriptions.</p><h2 id="packfile-negotiation" tabindex="-1">PACKFILE NEGOTIATION <a class="header-anchor" href="#packfile-negotiation" aria-label="Permalink to &quot;PACKFILE NEGOTIATION&quot;">​</a></h2><p>After reference and capabilities discovery, the client can decide to terminate the connection by sending a flush-pkt, telling the server it can now gracefully terminate, and disconnect, when it does not need any pack data. This can happen with the ls-remote command, and also can happen when the client already is up to date.</p><p>Otherwise, it enters the negotiation phase, where the client and server determine what the minimal packfile necessary for transport is, by telling the server what objects it wants, its shallow objects (if any), and the maximum commit depth it wants (if any). The client will also send a list of the capabilities it wants to be in effect, out of what the server said it could do with the first <em>want</em> line.</p><blockquote><pre><code>  upload-request    =  want-list
                       *shallow-line
                       *1depth-request
                       [filter-request]
                       flush-pkt

  want-list         =  first-want
                       *additional-want

  shallow-line      =  PKT-LINE(&quot;shallow&quot; SP obj-id)

  depth-request     =  PKT-LINE(&quot;deepen&quot; SP depth) /
                       PKT-LINE(&quot;deepen-since&quot; SP timestamp) /
                       PKT-LINE(&quot;deepen-not&quot; SP ref)

  first-want        =  PKT-LINE(&quot;want&quot; SP obj-id SP capability-list)
  additional-want   =  PKT-LINE(&quot;want&quot; SP obj-id)

  depth             =  1*DIGIT

  filter-request    =  PKT-LINE(&quot;filter&quot; SP filter-spec)
</code></pre></blockquote><p>Clients MUST send all the obj-ids it wants from the reference discovery phase as <em>want</em> lines. Clients MUST send at least one <em>want</em> command in the request body. Clients MUST NOT mention an obj-id in a <em>want</em> command which did not appear in the response obtained through ref discovery.</p><p>The client MUST write all obj-ids which it only has shallow copies of (meaning that it does not have the parents of a commit) as <em>shallow</em> lines so that the server is aware of the limitations of the client&#39;s history.</p><p>The client now sends the maximum commit history depth it wants for this transaction, which is the number of commits it wants from the tip of the history, if any, as a <em>deepen</em> line. A depth of 0 is the same as not making a depth request. The client does not want to receive any commits beyond this depth, nor does it want objects needed only to complete those commits. Commits whose parents are not received as a result are defined as shallow and marked as such in the server. This information is sent back to the client in the next step.</p><p>The client can optionally request that pack-objects omit various objects from the packfile using one of several filtering techniques. These are intended for use with partial clone and partial fetch operations. An object that does not meet a filter-spec value is omitted unless explicitly requested in a <em>want</em> line. See <strong>rev-list</strong> for possible filter-spec values.</p><p>Once all the <em>want&#39;s and &#39;shallow&#39;s (and optional &#39;deepen</em>) are transferred, clients MUST send a flush-pkt, to tell the server side that it is done sending the list.</p><p>Otherwise, if the client sent a positive depth request, the server will determine which commits will and will not be shallow and send this information to the client. If the client did not request a positive depth, this step is skipped.</p><blockquote><pre><code>  shallow-update   =  *shallow-line
                      *unshallow-line
                      flush-pkt

  shallow-line     =  PKT-LINE(&quot;shallow&quot; SP obj-id)

  unshallow-line   =  PKT-LINE(&quot;unshallow&quot; SP obj-id)
</code></pre></blockquote><p>If the client has requested a positive depth, the server will compute the set of commits which are no deeper than the desired depth. The set of commits start at the client&#39;s wants.</p><p>The server writes <em>shallow</em> lines for each commit whose parents will not be sent as a result. The server writes an <em>unshallow</em> line for each commit which the client has indicated is shallow, but is no longer shallow at the currently requested depth (that is, its parents will now be sent). The server MUST NOT mark as unshallow anything which the client has not indicated was shallow.</p><p>Now the client will send a list of the obj-ids it has using <em>have</em> lines, so the server can make a packfile that only contains the objects that the client needs. In multi_ack mode, the canonical implementation will send up to 32 of these at a time, then will send a flush-pkt. The canonical implementation will skip ahead and send the next 32 immediately, so that there is always a block of 32 &quot;in-flight on the wire&quot; at a time.</p><blockquote><pre><code>  upload-haves      =  have-list
                       compute-end

  have-list         =  *have-line
  have-line         =  PKT-LINE(&quot;have&quot; SP obj-id)
  compute-end       =  flush-pkt / PKT-LINE(&quot;done&quot;)
</code></pre></blockquote><p>If the server reads <em>have</em> lines, it then will respond by ACKing any of the obj-ids the client said it had that the server also has. The server will ACK obj-ids differently depending on which ack mode is chosen by the client.</p><p>In multi_ack mode:</p><blockquote><p>·</p><p>the server will respond with <em>ACK obj-id continue</em> for any common commits.</p></blockquote><blockquote><p>·</p><p>once the server has found an acceptable common base commit and is ready to make a packfile, it will blindly ACK all <em>have</em> obj-ids back to the client.</p></blockquote><blockquote><p>·</p><p>the server will then send a <em>NAK</em> and then wait for another response from the client - either a <em>done</em> or another list of <em>have</em> lines.</p></blockquote><p>In multi_ack_detailed mode:</p><blockquote><p>·</p><p>the server will differentiate the ACKs where it is signaling that it is ready to send data with <em>ACK obj-id ready</em> lines, and signals the identified common commits with <em>ACK obj-id common</em> lines.</p></blockquote><p>Without either multi_ack or multi_ack_detailed:</p><blockquote><p>·</p><p>upload-pack sends &quot;ACK obj-id&quot; on the first common object it finds. After that it says nothing until the client gives it a &quot;done&quot;.</p></blockquote><blockquote><p>·</p><p>upload-pack sends &quot;NAK&quot; on a flush-pkt if no common object has been found yet. If one has been found, and thus an ACK was already sent, it&#39;s silent on the flush-pkt.</p></blockquote><p>After the client has gotten enough ACK responses that it can determine that the server has enough information to send an efficient packfile (in the canonical implementation, this is determined when it has received enough ACKs that it can color everything left in the --date-order queue as common with the server, or the --date-order queue is empty), or the client determines that it wants to give up (in the canonical implementation, this is determined when the client sends 256 <em>have</em> lines without getting any of them ACKed by the server - meaning there is nothing in common and the server should just send all of its objects), then the client will send a <em>done</em> command. The <em>done</em> command signals to the server that the client is ready to receive its packfile data.</p><p>However, the 256 limit <strong>only</strong> turns on in the canonical client implementation if we have received at least one &quot;ACK %s continue&quot; during a prior round. This helps to ensure that at least one common ancestor is found before we give up entirely.</p><p>Once the <em>done</em> line is read from the client, the server will either send a final <em>ACK obj-id</em> or it will send a <em>NAK</em>. <em>obj-id</em> is the object name of the last commit determined to be common. The server only sends ACK after <em>done</em> if there is at least one common base and multi_ack or multi_ack_detailed is enabled. The server always sends NAK after <em>done</em> if there is no common base found.</p><p>Instead of <em>ACK</em> or <em>NAK</em>, the server may send an error message (for example, if it does not recognize an object in a <em>want</em> line received from the client).</p><p>Then the server will start sending its packfile data.</p><blockquote><pre><code>  server-response = *ack_multi ack / nak
  ack_multi       = PKT-LINE(&quot;ACK&quot; SP obj-id ack_status)
  ack_status      = &quot;continue&quot; / &quot;common&quot; / &quot;ready&quot;
  ack             = PKT-LINE(&quot;ACK&quot; SP obj-id)
  nak             = PKT-LINE(&quot;NAK&quot;)
</code></pre></blockquote><p>A simple clone may look like this (with no <em>have</em> lines):</p><blockquote><pre><code>   C: 0054want 74730d410fcb6603ace96f1dc55ea6196122532d multi_ack  &lt;br&gt; &gt;          side-band-64k ofs-delta\\n
   C: 0032want 7d1665144a3a975c05f1f43902ddaf084e784dbe\\n
   C: 0032want 5a3f6be755bbb7deae50065988cbfa1ffa9ab68a\\n
   C: 0032want 7e47fe2bd8d01d481f44d7af0531bd93d3b21c01\\n
   C: 0032want 74730d410fcb6603ace96f1dc55ea6196122532d\\n
   C: 0000
   C: 0009done\\n

   S: 0008NAK\\n
   S: [PACKFILE]
</code></pre></blockquote><p>An incremental update (fetch) response might look like this:</p><blockquote><pre><code>   C: 0054want 74730d410fcb6603ace96f1dc55ea6196122532d multi_ack  &lt;br&gt; &gt;          side-band-64k ofs-delta\\n
   C: 0032want 7d1665144a3a975c05f1f43902ddaf084e784dbe\\n
   C: 0032want 5a3f6be755bbb7deae50065988cbfa1ffa9ab68a\\n
   C: 0000
   C: 0032have 7e47fe2bd8d01d481f44d7af0531bd93d3b21c01\\n
   C: [30 more have lines]
   C: 0032have 74730d410fcb6603ace96f1dc55ea6196122532d\\n
   C: 0000

   S: 003aACK 7e47fe2bd8d01d481f44d7af0531bd93d3b21c01 continue\\n
   S: 003aACK 74730d410fcb6603ace96f1dc55ea6196122532d continue\\n
   S: 0008NAK\\n

   C: 0009done\\n

   S: 0031ACK 74730d410fcb6603ace96f1dc55ea6196122532d\\n
   S: [PACKFILE]
</code></pre></blockquote><h2 id="packfile-data" tabindex="-1">PACKFILE DATA <a class="header-anchor" href="#packfile-data" aria-label="Permalink to &quot;PACKFILE DATA&quot;">​</a></h2><p>Now that the client and server have finished negotiation about what the minimal amount of data that needs to be sent to the client is, the server will construct and send the required data in packfile format.</p><p>See <strong>gitformat-pack</strong>(5) for what the packfile itself actually looks like.</p><p>If <em>side-band</em> or <em>side-band-64k</em> capabilities have been specified by the client, the server will send the packfile data multiplexed.</p><p>Each packet starting with the packet-line length of the amount of data that follows, followed by a single byte specifying the sideband the following data is coming in on.</p><p>In <em>side-band</em> mode, it will send up to 999 data bytes plus 1 control code, for a total of up to 1000 bytes in a pkt-line. In <em>side-band-64k</em> mode it will send up to 65519 data bytes plus 1 control code, for a total of up to 65520 bytes in a pkt-line.</p><p>The sideband byte will be a <em>1</em>, <em>2</em> or a <em>3</em>. Sideband <em>1</em> will contain packfile data, sideband <em>2</em> will be used for progress information that the client will generally print to stderr and sideband <em>3</em> is used for error information.</p><p>If no <em>side-band</em> capability was specified, the server will stream the entire packfile without multiplexing.</p><h2 id="pushing-data-to-a-server" tabindex="-1">PUSHING DATA TO A SERVER <a class="header-anchor" href="#pushing-data-to-a-server" aria-label="Permalink to &quot;PUSHING DATA TO A SERVER&quot;">​</a></h2><p>Pushing data to a server will invoke the <em>receive-pack</em> process on the server, which will allow the client to tell it which references it should update and then send all the data the server will need for those new references to be complete. Once all the data is received and validated, the server will then update its references to what the client specified.</p><h2 id="authentication" tabindex="-1">AUTHENTICATION <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;AUTHENTICATION&quot;">​</a></h2><p>The protocol itself contains no authentication mechanisms. That is to be handled by the transport, such as SSH, before the <em>receive-pack</em> process is invoked. If <em>receive-pack</em> is configured over the Git transport, those repositories will be writable by anyone who can access that port (9418) as that transport is unauthenticated.</p><h2 id="reference-discovery-1" tabindex="-1">REFERENCE DISCOVERY <a class="header-anchor" href="#reference-discovery-1" aria-label="Permalink to &quot;REFERENCE DISCOVERY&quot;">​</a></h2><p>The reference discovery phase is done nearly the same way as it is in the fetching protocol. Each reference obj-id and name on the server is sent in packet-line format to the client, followed by a flush-pkt. The only real difference is that the capability listing is different - the only possible values are <em>report-status</em>, <em>report-status-v2</em>, <em>delete-refs</em>, <em>ofs-delta</em>, <em>atomic</em> and <em>push-options</em>.</p><h2 id="reference-update-request-and-packfile-transfer" tabindex="-1">REFERENCE UPDATE REQUEST AND PACKFILE TRANSFER <a class="header-anchor" href="#reference-update-request-and-packfile-transfer" aria-label="Permalink to &quot;REFERENCE UPDATE REQUEST AND PACKFILE TRANSFER&quot;">​</a></h2><p>Once the client knows what references the server is at, it can send a list of reference update requests. For each reference on the server that it wants to update, it sends a line listing the obj-id currently on the server, the obj-id the client would like to update it to and the name of the reference.</p><p>This list is followed by a flush-pkt.</p><blockquote><pre><code>  update-requests   =  *shallow ( command-list | push-cert )

  shallow           =  PKT-LINE(&quot;shallow&quot; SP obj-id)

  command-list      =  PKT-LINE(command NUL capability-list)
                       *PKT-LINE(command)
                       flush-pkt

  command           =  create / delete / update
  create            =  zero-id SP new-id  SP name
  delete            =  old-id  SP zero-id SP name
  update            =  old-id  SP new-id  SP name

  old-id            =  obj-id
  new-id            =  obj-id

  push-cert         = PKT-LINE(&quot;push-cert&quot; NUL capability-list LF)
                      PKT-LINE(&quot;certificate version 0.1&quot; LF)
                      PKT-LINE(&quot;pusher&quot; SP ident LF)
                      PKT-LINE(&quot;pushee&quot; SP url LF)
                      PKT-LINE(&quot;nonce&quot; SP nonce LF)
                      *PKT-LINE(&quot;push-option&quot; SP push-option LF)
                      PKT-LINE(LF)
                      *PKT-LINE(command LF)
                      *PKT-LINE(gpg-signature-lines LF)
                      PKT-LINE(&quot;push-cert-end&quot; LF)

  push-option       =  1*( VCHAR | SP )
</code></pre></blockquote><p>If the server has advertised the <em>push-options</em> capability and the client has specified <em>push-options</em> as part of the capability list above, the client then sends its push options followed by a flush-pkt.</p><blockquote><pre><code>  push-options      =  *PKT-LINE(push-option) flush-pkt
</code></pre></blockquote><p>For backwards compatibility with older Git servers, if the client sends a push cert and push options, it MUST send its push options both embedded within the push cert and after the push cert. (Note that the push options within the cert are prefixed, but the push options after the cert are not.) Both these lists MUST be the same, modulo the prefix.</p><p>After that the packfile that should contain all the objects that the server will need to complete the new references will be sent.</p><blockquote><pre><code>  packfile          =  &quot;PACK&quot; 28*(OCTET)
</code></pre></blockquote><p>If the receiving end does not support delete-refs, the sending end MUST NOT ask for delete command.</p><p>If the receiving end does not support push-cert, the sending end MUST NOT send a push-cert command. When a push-cert command is sent, command-list MUST NOT be sent; the commands recorded in the push certificate is used instead.</p><p>The packfile MUST NOT be sent if the only command used is <em>delete</em>.</p><p>A packfile MUST be sent if either create or update command is used, even if the server already has all the necessary objects. In this case the client MUST send an empty packfile. The only time this is likely to happen is if the client is creating a new branch or a tag that points to an existing obj-id.</p><p>The server will receive the packfile, unpack it, then validate each reference that is being updated that it hasn&#39;t changed while the request was being processed (the obj-id is still the same as the old-id), and it will run any update hooks to make sure that the update is acceptable. If all of that is fine, the server will then update the references.</p><h2 id="push-certificate" tabindex="-1">PUSH CERTIFICATE <a class="header-anchor" href="#push-certificate" aria-label="Permalink to &quot;PUSH CERTIFICATE&quot;">​</a></h2><p>A push certificate begins with a set of header lines. After the header and an empty line, the protocol commands follow, one per line. Note that the trailing LF in push-cert PKT-LINEs is <em>not</em> optional; it must be present.</p><p>Currently, the following header fields are defined:</p><p><strong>pusher</strong> ident</p><blockquote><p>Identify the GPG key in &quot;Human Readable Name &lt;email@address&gt;&quot; format.</p></blockquote><p><strong>pushee</strong> url</p><blockquote><p>The repository URL (anonymized, if the URL contains authentication material) the user who ran <strong>git push</strong> intended to push into.</p></blockquote><p><strong>nonce</strong> nonce</p><blockquote><p>The <em>nonce</em> string the receiving repository asked the pushing user to include in the certificate, to prevent replay attacks.</p></blockquote><p>The GPG signature lines are a detached signature for the contents recorded in the push certificate before the signature block begins. The detached signature is used to certify that the commands were given by the pusher, who must be the signer.</p><h2 id="report-status" tabindex="-1">REPORT STATUS <a class="header-anchor" href="#report-status" aria-label="Permalink to &quot;REPORT STATUS&quot;">​</a></h2><p>After receiving the pack data from the sender, the receiver sends a report if <em>report-status</em> or <em>report-status-v2</em> capability is in effect. It is a short listing of what happened in that update. It will first list the status of the packfile unpacking as either <em>unpack ok</em> or <em>unpack [error]</em>. Then it will list the status for each of the references that it tried to update. Each line is either <em>ok [refname]</em> if the update was successful, or <em>ng [refname] [error]</em> if the update was not.</p><blockquote><pre><code>  report-status     = unpack-status
                      1*(command-status)
                      flush-pkt

  unpack-status     = PKT-LINE(&quot;unpack&quot; SP unpack-result)
  unpack-result     = &quot;ok&quot; / error-msg

  command-status    = command-ok / command-fail
  command-ok        = PKT-LINE(&quot;ok&quot; SP refname)
  command-fail      = PKT-LINE(&quot;ng&quot; SP refname SP error-msg)

  error-msg         = 1*(OCTET) ; where not &quot;ok&quot;
</code></pre></blockquote><p>The <em>report-status-v2</em> capability extends the protocol by adding new option lines in order to support reporting of reference rewritten by the <em>proc-receive</em> hook. The <em>proc-receive</em> hook may handle a command for a pseudo-reference which may create or update one or more references, and each reference may have different name, different new-oid, and different old-oid.</p><blockquote><pre><code>  report-status-v2  = unpack-status
                      1*(command-status-v2)
                      flush-pkt

  unpack-status     = PKT-LINE(&quot;unpack&quot; SP unpack-result)
  unpack-result     = &quot;ok&quot; / error-msg

  command-status-v2 = command-ok-v2 / command-fail
  command-ok-v2     = command-ok
                      *option-line

  command-ok        = PKT-LINE(&quot;ok&quot; SP refname)
  command-fail      = PKT-LINE(&quot;ng&quot; SP refname SP error-msg)

  error-msg         = 1*(OCTET) ; where not &quot;ok&quot;

  option-line       = *1(option-refname)
                      *1(option-old-oid)
                      *1(option-new-oid)
                      *1(option-forced-update)

  option-refname    = PKT-LINE(&quot;option&quot; SP &quot;refname&quot; SP refname)
  option-old-oid    = PKT-LINE(&quot;option&quot; SP &quot;old-oid&quot; SP obj-id)
  option-new-oid    = PKT-LINE(&quot;option&quot; SP &quot;new-oid&quot; SP obj-id)
  option-force      = PKT-LINE(&quot;option&quot; SP &quot;forced-update&quot;)
</code></pre></blockquote><p>Updates can be unsuccessful for a number of reasons. The reference can have changed since the reference discovery phase was originally sent, meaning someone pushed in the meantime. The reference being pushed could be a non-fast-forward reference and the update hooks or configuration could be set to not allow that, etc. Also, some references can be updated while others can be rejected.</p><p>An example client/server communication might look like this:</p><blockquote><pre><code>   S: 006274730d410fcb6603ace96f1dc55ea6196122532d refs/heads/local\\0report-status delete-refs ofs-delta\\n
   S: 003e7d1665144a3a975c05f1f43902ddaf084e784dbe refs/heads/debug\\n
   S: 003f74730d410fcb6603ace96f1dc55ea6196122532d refs/heads/master\\n
   S: 003d74730d410fcb6603ace96f1dc55ea6196122532d refs/heads/team\\n
   S: 0000

   C: 00677d1665144a3a975c05f1f43902ddaf084e784dbe 74730d410fcb6603ace96f1dc55ea6196122532d refs/heads/debug\\n
   C: 006874730d410fcb6603ace96f1dc55ea6196122532d 5a3f6be755bbb7deae50065988cbfa1ffa9ab68a refs/heads/master\\n
   C: 0000
   C: [PACKDATA]

   S: 000eunpack ok\\n
   S: 0018ok refs/heads/debug\\n
   S: 002ang refs/heads/master non-fast-forward\\n
</code></pre></blockquote><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,137);function h(e,d,p,m,u,f){return a(),o("div",null,[n("h1",c,i(e.$params.man),1),l])}const g=t(r,[["render",h]]);export{k as __pageData,g as default};
