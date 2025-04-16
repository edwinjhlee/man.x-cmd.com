import{_ as o,c as i,o as a,j as n,Y as r,t as s}from"./chunks/framework.D-NV0Bun.js";const m=JSON.parse('{"title":"git-http-backend | x-cmd man (git man1) | Server side implementation of Git over HTTP","titleTemplate":false,"description":"x-cmd man (git man1 Manual Page) | git-http-backend - Server side implementation of Git over HTTP","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"git-http-backend | x-cmd man (git man1) | Server side implementation of Git over HTTP"}],["meta",{"name":"og:description","content":"x-cmd man (git man1 Manual Page) | git-http-backend - Server side implementation of Git over HTTP"}]]},"headers":[],"params":{"isMan":true,"man":"git-http-backend","category":"git man1","desc":"Server side implementation of Git over HTTP"},"relativePath":"git/man1/git-http-backend.md","filePath":"git/man1/[man].md"}'),c={name:"git/man1/git-http-backend.md"},l={class:"visually-hidden"};function p(e,t,h,u,g,d){return a(),i("div",null,[n("h1",l,s(e.$params.man),1),t[0]||(t[0]=r(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>git-http-backend - Server side implementation of Git over HTTP</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-backend</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>A simple CGI program to serve the contents of a Git repository to Git clients accessing the repository over http:// and https:// protocols. The program supports clients fetching using both the smart HTTP protocol and the backwards-compatible dumb HTTP protocol, as well as clients pushing using the smart HTTP protocol. It also supports Git&#39;s more-efficient &quot;v2&quot; protocol if properly configured; see the discussion of <strong>GIT_PROTOCOL</strong> in the ENVIRONMENT section below.</p><p>It verifies that the directory has the magic file &quot;git-daemon-export-ok&quot;, and it will refuse to export any Git directory that hasn&#39;t explicitly been marked for export this way (unless the <strong>GIT_HTTP_EXPORT_ALL</strong> environmental variable is set).</p><p>By default, only the <strong>upload-pack</strong> service is enabled, which serves <em>git fetch-pack</em> and <em>git ls-remote</em> clients, which are invoked from <em>git fetch</em>, <em>git pull</em>, and <em>git clone</em>. If the client is authenticated, the <strong>receive-pack</strong> service is enabled, which serves <em>git send-pack</em> clients, which is invoked from <em>git push</em>.</p><h2 id="services" tabindex="-1">SERVICES <a class="header-anchor" href="#services" aria-label="Permalink to &quot;SERVICES&quot;">​</a></h2><p>These services can be enabled/disabled using the per-repository configuration file:</p><p>http.getanyfile</p><blockquote><p>This serves Git clients older than version 1.6.6 that are unable to use the upload pack service. When enabled, clients are able to read any file within the repository, including objects that are no longer reachable from a branch but are still present. It is enabled by default, but a repository can disable it by setting this configuration item to <strong>false</strong>.</p></blockquote><p>http.uploadpack</p><blockquote><p>This serves <em>git fetch-pack</em> and <em>git ls-remote</em> clients. It is enabled by default, but a repository can disable it by setting this configuration item to <strong>false</strong>.</p></blockquote><p>http.receivepack</p><blockquote><p>This serves <em>git send-pack</em> clients, allowing push. It is disabled by default for anonymous users, and enabled by default for users authenticated by the web server. It can be disabled by setting this item to <strong>false</strong>, or enabled for all users, including anonymous users, by setting it to <strong>true</strong>.</p></blockquote><h2 id="url-translation" tabindex="-1">URL TRANSLATION <a class="header-anchor" href="#url-translation" aria-label="Permalink to &quot;URL TRANSLATION&quot;">​</a></h2><p>To determine the location of the repository on disk, <em>git http-backend</em> concatenates the environment variables PATH_INFO, which is set automatically by the web server, and GIT_PROJECT_ROOT, which must be set manually in the web server configuration. If GIT_PROJECT_ROOT is not set, <em>git http-backend</em> reads PATH_TRANSLATED, which is also set automatically by the web server.</p><h2 id="examples" tabindex="-1">EXAMPLES <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;EXAMPLES&quot;">​</a></h2><p>All of the following examples map <strong>http://$hostname/git/foo/bar.git</strong> to <strong>/var/www/git/foo/bar.git</strong>.</p><p>Apache 2.x</p><blockquote><p>Ensure mod_cgi, mod_alias, and mod_env are enabled, set GIT_PROJECT_ROOT (or DocumentRoot) appropriately, and create a ScriptAlias to the CGI:</p><blockquote><pre><code>SetEnv GIT_PROJECT_ROOT /var/www/git
SetEnv GIT_HTTP_EXPORT_ALL
ScriptAlias /git/ /usr/libexec/git-core/git-http-backend/

# This is not strictly necessary using Apache and a modern version of
# git-http-backend, as the webserver will pass along the header in the
# environment as HTTP_GIT_PROTOCOL, and http-backend will copy that into
# GIT_PROTOCOL. But you may need this line (or something similar if you
# are using a different webserver), or if you want to support older Git
# versions that did not do that copying.
#
# Having the webserver set up GIT_PROTOCOL is perfectly fine even with
# modern versions (and will take precedence over HTTP_GIT_PROTOCOL,
# which means it can be used to override the client&#39;s request).
SetEnvIf Git-Protocol &quot;.*&quot; GIT_PROTOCOL=$0
</code></pre></blockquote><p>To enable anonymous read access but authenticated write access, require authorization for both the initial ref advertisement (which we detect as a push via the service parameter in the query string), and the receive-pack invocation itself:</p><blockquote><pre><code>RewriteCond %{QUERY_STRING} service=git-receive-pack [OR]
RewriteCond %{REQUEST_URI} /git-receive-pack$
RewriteRule ^/git/ - [E=AUTHREQUIRED:yes]

&lt;LocationMatch &quot;^/git/&quot;&gt;
        Order Deny,Allow
        Deny from env=AUTHREQUIRED

        AuthType Basic
        AuthName &quot;Git Access&quot;
        Require group committers
        Satisfy Any
        ...
&lt;/LocationMatch&gt;
</code></pre></blockquote><p>If you do not have <strong>mod_rewrite</strong> available to match against the query string, it is sufficient to just protect <strong>git-receive-pack</strong> itself, like:</p><blockquote><pre><code>&lt;LocationMatch &quot;^/git/.*/git-receive-pack$&quot;&gt;
        AuthType Basic
        AuthName &quot;Git Access&quot;
        Require group committers
        ...
&lt;/LocationMatch&gt;
</code></pre></blockquote><p>In this mode, the server will not request authentication until the client actually starts the object negotiation phase of the push, rather than during the initial contact. For this reason, you must also enable the <strong>http.receivepack</strong> config option in any repositories that should accept a push. The default behavior, if <strong>http.receivepack</strong> is not set, is to reject any pushes by unauthenticated users; the initial request will therefore report <strong>403 Forbidden</strong> to the client, without even giving an opportunity for authentication.</p><p>To require authentication for both reads and writes, use a Location directive around the repository, or one of its parent directories:</p><blockquote><pre><code>&lt;Location /git/private&gt;
        AuthType Basic
        AuthName &quot;Private Git Access&quot;
        Require group committers
        ...
&lt;/Location&gt;
</code></pre></blockquote><p>To serve gitweb at the same url, use a ScriptAliasMatch to only those URLs that <em>git http-backend</em> can handle, and forward the rest to gitweb:</p><blockquote><pre><code>ScriptAliasMatch  &lt;br&gt; &gt; &gt;             &quot;(?x)^/git/(.*/(HEAD |  &lt;br&gt; &gt; &gt;                             info/refs |  &lt;br&gt; &gt; &gt;                             objects/(info/[^/]+ |  &lt;br&gt; &gt; &gt;                                      [0-9a-f]{2}/[0-9a-f]{38} |  &lt;br&gt; &gt; &gt;                                      pack/pack-[0-9a-f]{40}\\.(pack|idx)) |  &lt;br&gt; &gt; &gt;                             git-(upload|receive)-pack))$&quot;  &lt;br&gt; &gt; &gt;             /usr/libexec/git-core/git-http-backend/$1

ScriptAlias /git/ /var/www/cgi-bin/gitweb.cgi/
</code></pre></blockquote><p>To serve multiple repositories from different <strong>gitnamespaces</strong>(7) in a single repository:</p><blockquote><pre><code>SetEnvIf Request_URI &quot;^/git/([^/]*)&quot; GIT_NAMESPACE=$1
ScriptAliasMatch ^/git/[^/]*(.*) /usr/libexec/git-core/git-http-backend/storage.git$1
</code></pre></blockquote></blockquote><p>Accelerated static Apache 2.x</p><blockquote><p>Similar to the above, but Apache can be used to return static files that are stored on disk. On many systems this may be more efficient as Apache can ask the kernel to copy the file contents from the file system directly to the network:</p><blockquote><pre><code>SetEnv GIT_PROJECT_ROOT /var/www/git

AliasMatch ^/git/(.*/objects/[0-9a-f]{2}/[0-9a-f]{38})$          /var/www/git/$1
AliasMatch ^/git/(.*/objects/pack/pack-[0-9a-f]{40}.(pack|idx))$ /var/www/git/$1
ScriptAlias /git/ /usr/libexec/git-core/git-http-backend/
</code></pre></blockquote><p>This can be combined with the gitweb configuration:</p><blockquote><pre><code>SetEnv GIT_PROJECT_ROOT /var/www/git

AliasMatch ^/git/(.*/objects/[0-9a-f]{2}/[0-9a-f]{38})$          /var/www/git/$1
AliasMatch ^/git/(.*/objects/pack/pack-[0-9a-f]{40}.(pack|idx))$ /var/www/git/$1
ScriptAliasMatch  &lt;br&gt; &gt; &gt;             &quot;(?x)^/git/(.*/(HEAD |  &lt;br&gt; &gt; &gt;                             info/refs |  &lt;br&gt; &gt; &gt;                             objects/info/[^/]+ |  &lt;br&gt; &gt; &gt;                             git-(upload|receive)-pack))$&quot;  &lt;br&gt; &gt; &gt;             /usr/libexec/git-core/git-http-backend/$1
ScriptAlias /git/ /var/www/cgi-bin/gitweb.cgi/
</code></pre></blockquote></blockquote><p>Lighttpd</p><blockquote><p>Ensure that <strong>mod_cgi</strong>, <strong>mod_alias</strong>, <strong>mod_auth</strong>, <strong>mod_setenv</strong> are loaded, then set <strong>GIT_PROJECT_ROOT</strong> appropriately and redirect all requests to the CGI:</p><blockquote><pre><code>alias.url += ( &quot;/git&quot; =&gt; &quot;/usr/lib/git-core/git-http-backend&quot; )
$HTTP[&quot;url&quot;] =~ &quot;^/git&quot; {
        cgi.assign = (&quot;&quot; =&gt; &quot;&quot;)
        setenv.add-environment = (
                &quot;GIT_PROJECT_ROOT&quot; =&gt; &quot;/var/www/git&quot;,
                &quot;GIT_HTTP_EXPORT_ALL&quot; =&gt; &quot;&quot;
        )
}
</code></pre></blockquote><p>To enable anonymous read access but authenticated write access:</p><blockquote><pre><code>$HTTP[&quot;querystring&quot;] =~ &quot;service=git-receive-pack&quot; {
        include &quot;git-auth.conf&quot;
}
$HTTP[&quot;url&quot;] =~ &quot;^/git/.*/git-receive-pack$&quot; {
        include &quot;git-auth.conf&quot;
}
</code></pre></blockquote><p>where <strong>git-auth.conf</strong> looks something like:</p><blockquote><pre><code>auth.require = (
        &quot;/&quot; =&gt; (
                &quot;method&quot; =&gt; &quot;basic&quot;,
                &quot;realm&quot; =&gt; &quot;Git Access&quot;,
                &quot;require&quot; =&gt; &quot;valid-user&quot;
               )
)
# ...and set up auth.backend here
</code></pre></blockquote><p>To require authentication for both reads and writes:</p><blockquote><pre><code>$HTTP[&quot;url&quot;] =~ &quot;^/git/private&quot; {
        include &quot;git-auth.conf&quot;
}
</code></pre></blockquote></blockquote><h2 id="environment" tabindex="-1">ENVIRONMENT <a class="header-anchor" href="#environment" aria-label="Permalink to &quot;ENVIRONMENT&quot;">​</a></h2><p><em>git http-backend</em> relies upon the <strong>CGI</strong> environment variables set by the invoking web server, including:</p><blockquote><p>·</p><p>PATH_INFO (if GIT_PROJECT_ROOT is set, otherwise PATH_TRANSLATED)</p></blockquote><blockquote><p>·</p><p>REMOTE_USER</p></blockquote><blockquote><p>·</p><p>REMOTE_ADDR</p></blockquote><blockquote><p>·</p><p>CONTENT_TYPE</p></blockquote><blockquote><p>·</p><p>QUERY_STRING</p></blockquote><blockquote><p>·</p><p>REQUEST_METHOD</p></blockquote><p>The <strong>GIT_HTTP_EXPORT_ALL</strong> environmental variable may be passed to <em>git-http-backend</em> to bypass the check for the &quot;git-daemon-export-ok&quot; file in each repository before allowing export of that repository.</p><p>The <strong>GIT_HTTP_MAX_REQUEST_BUFFER</strong> environment variable (or the <strong>http.maxRequestBuffer</strong> config variable) may be set to change the largest ref negotiation request that git will handle during a fetch; any fetch requiring a larger buffer will not succeed. This value should not normally need to be changed, but may be helpful if you are fetching from a repository with an extremely large number of refs. The value can be specified with a unit (e.g., <strong>100M</strong> for 100 megabytes). The default is 10 megabytes.</p><p>Clients may probe for optional protocol capabilities (like the v2 protocol) using the <strong>Git-Protocol</strong> HTTP header. In order to support these, the contents of that header must appear in the <strong>GIT_PROTOCOL</strong> environment variable. Most webservers will pass this header to the CGI via the <strong>HTTP_GIT_PROTOCOL</strong> variable, and <strong>git-http-backend</strong> will automatically copy that to <strong>GIT_PROTOCOL</strong>. However, some webservers may be more selective about which headers they&#39;ll pass, in which case they need to be configured explicitly (see the mention of <strong>Git-Protocol</strong> in the Apache config from the earlier EXAMPLES section).</p><p>The backend process sets GIT_COMMITTER_NAME to <em>$REMOTE_USER</em> and GIT_COMMITTER_EMAIL to <em>\${REMOTE_USER}@http.\${REMOTE_ADDR}</em>, ensuring that any reflogs created by <em>git-receive-pack</em> contain some identifying information of the remote user who performed the push.</p><p>All <strong>CGI</strong> environment variables are available to each of the hooks invoked by the <em>git-receive-pack</em>.</p><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,41))])}const T=o(c,[["render",p]]);export{m as __pageData,T as default};
