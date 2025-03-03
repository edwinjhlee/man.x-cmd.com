import{_ as o,c as n,o as i,j as r,Y as a,t as s}from"./chunks/framework.BNTND4LZ.js";const k=JSON.parse('{"title":"gitformat-index | x-cmd man (git man5) | Git index format","titleTemplate":false,"description":"x-cmd man (git man5 Manual Page) | gitformat-index - Git index format","frontmatter":{"pageClass":"x-man","head":[["meta",{"name":"og:title","content":"gitformat-index | x-cmd man (git man5) | Git index format"}],["meta",{"name":"og:description","content":"x-cmd man (git man5 Manual Page) | gitformat-index - Git index format"}]]},"headers":[],"params":{"isMan":true,"man":"gitformat-index","category":"git man5","desc":"Git index format"},"relativePath":"git/man5/gitformat-index.md","filePath":"git/man5/[man].md"}'),c={name:"git/man5/gitformat-index.md"},d={class:"visually-hidden"};function l(t,e,h,p,u,b){return i(),n("div",null,[r("h1",d,s(t.$params.man),1),e[0]||(e[0]=a(`<h2 id="name" tabindex="-1">NAME <a class="header-anchor" href="#name" aria-label="Permalink to &quot;NAME&quot;">​</a></h2><p>gitformat-index - Git index format</p><h2 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$GIT_DIR/index</span></span></code></pre></div><h2 id="description" tabindex="-1">DESCRIPTION <a class="header-anchor" href="#description" aria-label="Permalink to &quot;DESCRIPTION&quot;">​</a></h2><p>Git index format</p><h2 id="the-git-index-file-has-the-following-format" tabindex="-1">THE GIT INDEX FILE HAS THE FOLLOWING FORMAT <a class="header-anchor" href="#the-git-index-file-has-the-following-format" aria-label="Permalink to &quot;THE GIT INDEX FILE HAS THE FOLLOWING FORMAT&quot;">​</a></h2><blockquote><pre><code>All binary numbers are in network byte order.
In a repository using the traditional SHA-1, checksums and object IDs
(object names) mentioned below are all computed using SHA-1.  Similarly,
in SHA-256 repositories, these values are computed using SHA-256.
Version 2 is described here unless stated otherwise.
</code></pre></blockquote><blockquote><p>·</p><p>A 12-byte header consisting of</p><blockquote><pre><code>4-byte signature:
  The signature is { &#39;D&#39;, &#39;I&#39;, &#39;R&#39;, &#39;C&#39; } (stands for &quot;dircache&quot;)
</code></pre></blockquote><blockquote><pre><code>4-byte version number:
  The current supported versions are 2, 3 and 4.
</code></pre></blockquote><blockquote><pre><code>32-bit number of index entries.
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>A number of sorted index entries (see below).</p></blockquote><blockquote><p>·</p><p>Extensions</p><blockquote><pre><code>Extensions are identified by signature. Optional extensions can
be ignored if Git does not understand them.
</code></pre></blockquote><blockquote><pre><code>4-byte extension signature. If the first byte is &#39;A&#39;..&#39;Z&#39; the
extension is optional and can be ignored.
</code></pre></blockquote><blockquote><pre><code>32-bit size of the extension
</code></pre></blockquote><blockquote><pre><code>Extension data
</code></pre></blockquote></blockquote><blockquote><p>·</p><p>Hash checksum over the content of the index file before this checksum.</p></blockquote><h2 id="index-entry" tabindex="-1">INDEX ENTRY <a class="header-anchor" href="#index-entry" aria-label="Permalink to &quot;INDEX ENTRY&quot;">​</a></h2><blockquote><pre><code>Index entries are sorted in ascending order on the name field,
interpreted as a string of unsigned bytes (i.e. memcmp() order, no
localization, no special casing of directory separator &#39;/&#39;). Entries
with the same name are sorted by their stage field.
</code></pre></blockquote><blockquote><pre><code>An index entry typically represents a file. However, if sparse-checkout
is enabled in cone mode (\`core.sparseCheckoutCone\` is enabled) and the
\`extensions.sparseIndex\` extension is enabled, then the index may
contain entries for directories outside of the sparse-checkout definition.
These entries have mode \`040000\`, include the \`SKIP_WORKTREE\` bit, and
the path ends in a directory separator.
</code></pre></blockquote><blockquote><pre><code>32-bit ctime seconds, the last time a file&#39;s metadata changed
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit ctime nanosecond fractions
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit mtime seconds, the last time a file&#39;s data changed
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit mtime nanosecond fractions
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit dev
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit ino
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit mode, split into (high to low bits)
</code></pre></blockquote><blockquote><pre><code>16-bit unused, must be zero
</code></pre></blockquote><blockquote><pre><code>4-bit object type
  valid values in binary are 1000 (regular file), 1010 (symbolic link)
  and 1110 (gitlink)
</code></pre></blockquote><blockquote><pre><code>3-bit unused, must be zero
</code></pre></blockquote><blockquote><pre><code>9-bit unix permission. Only 0755 and 0644 are valid for regular files.
Symbolic links and gitlinks have value 0 in this field.
</code></pre></blockquote><blockquote><pre><code>32-bit uid
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit gid
  this is stat(2) data
</code></pre></blockquote><blockquote><pre><code>32-bit file size
  This is the on-disk size from stat(2), truncated to 32-bit.
</code></pre></blockquote><blockquote><pre><code>Object name for the represented object
</code></pre></blockquote><blockquote><pre><code>A 16-bit &#39;flags&#39; field split into (high to low bits)
</code></pre></blockquote><blockquote><pre><code>1-bit assume-valid flag
</code></pre></blockquote><blockquote><pre><code>1-bit extended flag (must be zero in version 2)
</code></pre></blockquote><blockquote><pre><code>2-bit stage (during merge)
</code></pre></blockquote><blockquote><pre><code>12-bit name length if the length is less than 0xFFF; otherwise 0xFFF
is stored in this field.
</code></pre></blockquote><blockquote><pre><code>(Version 3 or later) A 16-bit field, only applicable if the
&quot;extended flag&quot; above is 1, split into (high to low bits).
</code></pre></blockquote><blockquote><pre><code>1-bit reserved for future
</code></pre></blockquote><blockquote><pre><code>1-bit skip-worktree flag (used by sparse checkout)
</code></pre></blockquote><blockquote><pre><code>1-bit intent-to-add flag (used by &quot;git add -N&quot;)
</code></pre></blockquote><blockquote><pre><code>13-bit unused, must be zero
</code></pre></blockquote><blockquote><pre><code>Entry path name (variable length) relative to top level directory
  (without leading slash). &#39;/&#39; is used as path separator. The special
  path components &quot;.&quot;, &quot;..&quot; and &quot;.git&quot; (without quotes) are disallowed.
  Trailing slash is also disallowed.
</code></pre></blockquote><blockquote><pre><code>The exact encoding is undefined, but the &#39;.&#39; and &#39;/&#39; characters
are encoded in 7-bit ASCII and the encoding cannot contain a NUL
byte (iow, this is a UNIX pathname).
</code></pre></blockquote><blockquote><pre><code>(Version 4) In version 4, the entry path name is prefix-compressed
  relative to the path name for the previous entry (the very first
  entry is encoded as if the path name for the previous entry is an
  empty string).  At the beginning of an entry, an integer N in the
  variable width encoding (the same encoding as the offset is encoded
  for OFS_DELTA pack entries; see linkgit:gitformat-pack[5]) is stored, followed
  by a NUL-terminated string S.  Removing N bytes from the end of the
  path name for the previous entry, and replacing it with the string S
  yields the path name for this entry.
</code></pre></blockquote><blockquote><pre><code>1-8 nul bytes as necessary to pad the entry to a multiple of eight bytes
while keeping the name NUL-terminated.
</code></pre></blockquote><blockquote><pre><code>(Version 4) In version 4, the padding after the pathname does not
exist.
</code></pre></blockquote><blockquote><pre><code>Interpretation of index entries in split index mode is completely
different. See below for details.
</code></pre></blockquote><h2 id="extensions" tabindex="-1">EXTENSIONS <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;EXTENSIONS&quot;">​</a></h2><h3 id="cache-tree" tabindex="-1">Cache tree <a class="header-anchor" href="#cache-tree" aria-label="Permalink to &quot;Cache tree&quot;">​</a></h3><blockquote><pre><code>Since the index does not record entries for directories, the cache
entries cannot describe tree objects that already exist in the object
database for regions of the index that are unchanged from an existing
commit. The cache tree extension stores a recursive tree structure that
describes the trees that already exist and completely match sections of
the cache entries. This speeds up tree object generation from the index
for a new commit by only computing the trees that are &quot;new&quot; to that
commit. It also assists when comparing the index to another tree, such
as \`HEAD^{tree}\`, since sections of the index can be skipped when a tree
comparison demonstrates equality.
</code></pre></blockquote><blockquote><pre><code>The recursive tree structure uses nodes that store a number of cache
entries, a list of subnodes, and an object ID (OID). The OID references
the existing tree for that node, if it is known to exist. The subnodes
correspond to subdirectories that themselves have cache tree nodes. The
number of cache entries corresponds to the number of cache entries in
the index that describe paths within that tree&#39;s directory.
</code></pre></blockquote><blockquote><pre><code>The extension tracks the full directory structure in the cache tree
extension, but this is generally smaller than the full cache entry list.
</code></pre></blockquote><blockquote><pre><code>When a path is updated in index, Git invalidates all nodes of the
recursive cache tree corresponding to the parent directories of that
path. We store these tree nodes as being &quot;invalid&quot; by using &quot;-1&quot; as the
number of cache entries. Invalid nodes still store a span of index
entries, allowing Git to focus its efforts when reconstructing a full
cache tree.
</code></pre></blockquote><blockquote><pre><code>The signature for this extension is { &#39;T&#39;, &#39;R&#39;, &#39;E&#39;, &#39;E&#39; }.
</code></pre></blockquote><blockquote><pre><code>A series of entries fill the entire extension; each of which
consists of:
</code></pre></blockquote><blockquote><p>·</p><p>NUL-terminated path component (relative to its parent directory);</p></blockquote><blockquote><p>·</p><p>ASCII decimal number of entries in the index that is covered by the tree this entry represents (entry_count);</p></blockquote><blockquote><p>·</p><p>A space (ASCII 32);</p></blockquote><blockquote><p>·</p><p>ASCII decimal number that represents the number of subtrees this tree has;</p></blockquote><blockquote><p>·</p><p>A newline (ASCII 10); and</p></blockquote><blockquote><p>·</p><p>Object name for the object that would result from writing this span of index as a tree.</p><blockquote><pre><code>An entry can be in an invalidated state and is represented by having
a negative number in the entry_count field. In this case, there is no
object name and the next entry starts immediately after the newline.
When writing an invalid entry, -1 should always be used as entry_count.
</code></pre></blockquote><blockquote><pre><code>The entries are written out in the top-down, depth-first order.  The
first entry represents the root level of the repository, followed by the
first subtree--let&#39;s call this A--of the root level (with its name
relative to the root level), followed by the first subtree of A (with
its name relative to A), and so on. The specified number of subtrees
indicates when the current level of the recursive stack is complete.
</code></pre></blockquote></blockquote><h3 id="resolve-undo" tabindex="-1">Resolve undo <a class="header-anchor" href="#resolve-undo" aria-label="Permalink to &quot;Resolve undo&quot;">​</a></h3><blockquote><pre><code>A conflict is represented in the index as a set of higher stage entries.
When a conflict is resolved (e.g. with &quot;git add path&quot;), these higher
stage entries will be removed and a stage-0 entry with proper resolution
is added.
</code></pre></blockquote><blockquote><pre><code>When these higher stage entries are removed, they are saved in the
resolve undo extension, so that conflicts can be recreated (e.g. with
&quot;git checkout -m&quot;), in case users want to redo a conflict resolution
from scratch.
</code></pre></blockquote><blockquote><pre><code>The signature for this extension is { &#39;R&#39;, &#39;E&#39;, &#39;U&#39;, &#39;C&#39; }.
</code></pre></blockquote><blockquote><pre><code>A series of entries fill the entire extension; each of which
consists of:
</code></pre></blockquote><blockquote><p>·</p><p>NUL-terminated pathname the entry describes (relative to the root of the repository, i.e. full pathname);</p></blockquote><blockquote><p>·</p><p>Three NUL-terminated ASCII octal numbers, entry mode of entries in stage 1 to 3 (a missing stage is represented by &quot;0&quot; in this field); and</p></blockquote><blockquote><p>·</p><p>At most three object names of the entry in stages from 1 to 3 (nothing is written for a missing stage).</p></blockquote><h3 id="split-index" tabindex="-1">Split index <a class="header-anchor" href="#split-index" aria-label="Permalink to &quot;Split index&quot;">​</a></h3><blockquote><pre><code>In split index mode, the majority of index entries could be stored
in a separate file. This extension records the changes to be made on
top of that to produce the final index.
</code></pre></blockquote><blockquote><pre><code>The signature for this extension is { &#39;l&#39;, &#39;i&#39;, &#39;n&#39;, &#39;k&#39; }.
</code></pre></blockquote><blockquote><pre><code>The extension consists of:
</code></pre></blockquote><blockquote><p>·</p><p>Hash of the shared index file. The shared index file path is $GIT_DIR/sharedindex.&lt;hash&gt;. If all bits are zero, the index does not require a shared index file.</p></blockquote><blockquote><p>·</p><p>An ewah-encoded delete bitmap, each bit represents an entry in the shared index. If a bit is set, its corresponding entry in the shared index will be removed from the final index. Note, because a delete operation changes index entry positions, but we do need original positions in replace phase, it&#39;s best to just mark entries for removal, then do a mass deletion after replacement.</p></blockquote><blockquote><p>·</p><p>An ewah-encoded replace bitmap, each bit represents an entry in the shared index. If a bit is set, its corresponding entry in the shared index will be replaced with an entry in this index file. All replaced entries are stored in sorted order in this index. The first &quot;1&quot; bit in the replace bitmap corresponds to the first index entry, the second &quot;1&quot; bit to the second entry and so on. Replaced entries may have empty path names to save space.</p><blockquote><pre><code>The remaining index entries after replaced ones will be added to the
final index. These added entries are also sorted by entry name then
stage.
</code></pre></blockquote></blockquote><h2 id="untracked-cache" tabindex="-1">UNTRACKED CACHE <a class="header-anchor" href="#untracked-cache" aria-label="Permalink to &quot;UNTRACKED CACHE&quot;">​</a></h2><blockquote><pre><code>Untracked cache saves the untracked file list and necessary data to
verify the cache. The signature for this extension is { &#39;U&#39;, &#39;N&#39;,
&#39;T&#39;, &#39;R&#39; }.
</code></pre></blockquote><blockquote><pre><code>The extension starts with
</code></pre></blockquote><blockquote><p>·</p><p>A sequence of NUL-terminated strings, preceded by the size of the sequence in variable width encoding. Each string describes the environment where the cache can be used.</p></blockquote><blockquote><p>·</p><p>Stat data of $GIT_DIR/info/exclude. See &quot;Index entry&quot; section from ctime field until &quot;file size&quot;.</p></blockquote><blockquote><p>·</p><p>Stat data of core.excludesFile</p></blockquote><blockquote><p>·</p><p>32-bit dir_flags (see struct dir_struct)</p></blockquote><blockquote><p>·</p><p>Hash of $GIT_DIR/info/exclude. A null hash means the file does not exist.</p></blockquote><blockquote><p>·</p><p>Hash of core.excludesFile. A null hash means the file does not exist.</p></blockquote><blockquote><p>·</p><p>NUL-terminated string of per-dir exclude file name. This usually is &quot;.gitignore&quot;.</p></blockquote><blockquote><p>·</p><p>The number of following directory blocks, variable width encoding. If this number is zero, the extension ends here with a following NUL.</p></blockquote><blockquote><p>·</p><p>A number of directory blocks in depth-first-search order, each consists of</p></blockquote><blockquote><p>·</p><p>The number of untracked entries, variable width encoding.</p></blockquote><blockquote><p>·</p><p>The number of sub-directory blocks, variable width encoding.</p></blockquote><blockquote><p>·</p><p>The directory name terminated by NUL.</p></blockquote><blockquote><p>·</p><p>A number of untracked file/dir names terminated by NUL.</p></blockquote><p>The remaining data of each directory block is grouped by type:</p><blockquote><p>·</p><p>An ewah bitmap, the n-th bit marks whether the n-th directory has valid untracked cache entries.</p></blockquote><blockquote><p>·</p><p>An ewah bitmap, the n-th bit records &quot;check-only&quot; bit of read_directory_recursive() for the n-th directory.</p></blockquote><blockquote><p>·</p><p>An ewah bitmap, the n-th bit indicates whether hash and stat data is valid for the n-th directory and exists in the next data.</p></blockquote><blockquote><p>·</p><p>An array of stat data. The n-th data corresponds with the n-th &quot;one&quot; bit in the previous ewah bitmap.</p></blockquote><blockquote><p>·</p><p>An array of hashes. The n-th hash corresponds with the n-th &quot;one&quot; bit in the previous ewah bitmap.</p></blockquote><blockquote><p>·</p><p>One NUL.</p></blockquote><h2 id="file-system-monitor-cache" tabindex="-1">FILE SYSTEM MONITOR CACHE <a class="header-anchor" href="#file-system-monitor-cache" aria-label="Permalink to &quot;FILE SYSTEM MONITOR CACHE&quot;">​</a></h2><blockquote><pre><code>The file system monitor cache tracks files for which the core.fsmonitor
hook has told us about changes.  The signature for this extension is
{ &#39;F&#39;, &#39;S&#39;, &#39;M&#39;, &#39;N&#39; }.
</code></pre></blockquote><blockquote><pre><code>The extension starts with
</code></pre></blockquote><blockquote><p>·</p><p>32-bit version number: the current supported versions are 1 and 2.</p></blockquote><blockquote><p>·</p><p>(Version 1) 64-bit time: the extension data reflects all changes through the given time which is stored as the nanoseconds elapsed since midnight, January 1, 1970.</p></blockquote><blockquote><p>·</p><p>(Version 2) A null terminated string: an opaque token defined by the file system monitor application. The extension data reflects all changes relative to that token.</p></blockquote><blockquote><p>·</p><p>32-bit bitmap size: the size of the CE_FSMONITOR_VALID bitmap.</p></blockquote><blockquote><p>·</p><p>An ewah bitmap, the n-th bit indicates whether the n-th index entry is not CE_FSMONITOR_VALID.</p></blockquote><h2 id="end-of-index-entry" tabindex="-1">END OF INDEX ENTRY <a class="header-anchor" href="#end-of-index-entry" aria-label="Permalink to &quot;END OF INDEX ENTRY&quot;">​</a></h2><blockquote><pre><code>The End of Index Entry (EOIE) is used to locate the end of the variable
length index entries and the beginning of the extensions. Code can take
advantage of this to quickly locate the index extensions without having
to parse through all of the index entries.
</code></pre></blockquote><blockquote><pre><code>Because it must be able to be loaded before the variable length cache
entries and other index extensions, this extension must be written last.
The signature for this extension is { &#39;E&#39;, &#39;O&#39;, &#39;I&#39;, &#39;E&#39; }.
</code></pre></blockquote><blockquote><pre><code>The extension consists of:
</code></pre></blockquote><blockquote><p>·</p><p>32-bit offset to the end of the index entries</p></blockquote><blockquote><p>·</p><p>Hash over the extension types and their sizes (but not their contents). E.g. if we have &quot;TREE&quot; extension that is N-bytes long, &quot;REUC&quot; extension that is M-bytes long, followed by &quot;EOIE&quot;, then the hash would be:</p><blockquote><pre><code>Hash(&quot;TREE&quot; + &lt;binary representation of N&gt; +
	&quot;REUC&quot; + &lt;binary representation of M&gt;)
</code></pre></blockquote></blockquote><h2 id="index-entry-offset-table" tabindex="-1">INDEX ENTRY OFFSET TABLE <a class="header-anchor" href="#index-entry-offset-table" aria-label="Permalink to &quot;INDEX ENTRY OFFSET TABLE&quot;">​</a></h2><blockquote><pre><code>The Index Entry Offset Table (IEOT) is used to help address the CPU
cost of loading the index by enabling multi-threading the process of
converting cache entries from the on-disk format to the in-memory format.
The signature for this extension is { &#39;I&#39;, &#39;E&#39;, &#39;O&#39;, &#39;T&#39; }.
</code></pre></blockquote><blockquote><pre><code>The extension consists of:
</code></pre></blockquote><blockquote><p>·</p><p>32-bit version (currently 1)</p></blockquote><blockquote><p>·</p><p>A number of index offset entries each consisting of:</p></blockquote><blockquote><p>·</p><p>32-bit offset from the beginning of the file to the first cache entry in this block of entries.</p></blockquote><blockquote><p>·</p><p>32-bit count of cache entries in this block</p></blockquote><h2 id="sparse-directory-entries" tabindex="-1">SPARSE DIRECTORY ENTRIES <a class="header-anchor" href="#sparse-directory-entries" aria-label="Permalink to &quot;SPARSE DIRECTORY ENTRIES&quot;">​</a></h2><blockquote><pre><code>When using sparse-checkout in cone mode, some entire directories within
the index can be summarized by pointing to a tree object instead of the
entire expanded list of paths within that tree. An index containing such
entries is a &quot;sparse index&quot;. Index format versions 4 and less were not
implemented with such entries in mind. Thus, for these versions, an
index containing sparse directory entries will include this extension
with signature { &#39;s&#39;, &#39;d&#39;, &#39;i&#39;, &#39;r&#39; }. Like the split-index extension,
tools should avoid interacting with a sparse index unless they understand
this extension.
</code></pre></blockquote><h2 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h2><p>Part of the <strong>git</strong>(1) suite</p>`,123))])}const f=o(c,[["render",l]]);export{k as __pageData,f as default};
