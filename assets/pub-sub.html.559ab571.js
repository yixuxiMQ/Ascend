import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.52cc2d6a.js";const p={},o=t(`<ol><li><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><ol><li>\u8FD9\u79CD\u6A21\u5F0F\u5C31\u662F\u4E00\u5BF9\u591A\uFF0C\u591A\u4F9D\u8D56\u4E8E\u4E00\u3002</li><li><code>\u8BA2\u9605\u8005</code>\uFF08subscriber\uFF09\u5728<code>\u8C03\u5EA6\u4E2D\u5FC3</code>\uFF08event channel\uFF09\u8BA2\u9605\u76F8\u5173\u6D88\u606F\uFF0C\u5F53<code>\u53D1\u5E03\u8005</code>\uFF08publisher\uFF09\u5C06\u6D88\u606F\u53D1\u5E03\u5230\u8BA2\u9605\u4E2D\u5FC3\uFF0C\u7531\u8C03\u5EA6\u4E2D\u5FC3\u7EDF\u4E00\u8C03\u5EA6\u8BA2\u9605\u8005\u6CE8\u518C\u7684\u6D88\u606F\u3002</li><li>\u4EE3\u7801\u5B9E\u73B0\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u6237\u5217\u8868</span>
  <span class="token keyword">const</span> clientList <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8BA2\u9605\u6D88\u606F</span>
  <span class="token keyword">const</span> <span class="token function-variable function">listen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eventType<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u53D6\u6D88\u8BA2\u9605</span>
  <span class="token keyword">const</span> <span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eventType<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token operator">!</span>callback<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">===</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u53D1\u5E03\u6D88\u606F</span>
  <span class="token keyword">const</span> <span class="token function-variable function">publish</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eventType<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    clientList<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span>
    remove<span class="token punctuation">,</span>
    publish<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4EE5\u4E0B\u662F\u6D4B\u8BD5\u4EE3\u7801</span>
<span class="token comment">// \u8BA2\u9605\u6D4B\u8BD5</span>
<span class="token keyword">function</span> <span class="token function">xiaoMing</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoMing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
dispatch<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;facialMask&quot;</span><span class="token punctuation">,</span> xiaoMing<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">xiaoHong</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoHong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
dispatch<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;facialMask&quot;</span><span class="token punctuation">,</span> xiaoHong<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">xiaoLan</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoLan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
dispatch<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;facialMask&quot;</span><span class="token punctuation">,</span> xiaoLan<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D6\u6D88\u8BA2\u9605\u6D4B\u8BD5</span>
<span class="token comment">// dispatch.remove(&quot;facialMask&quot;, xiaoMing);</span>
<span class="token comment">// dispatch.remove(&quot;facialMask&quot;, xiaoHong);</span>
<span class="token comment">// dispatch.remove(&quot;facialMask&quot;, xiaoLan);</span>


<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;N95&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">&quot;5\uFFE5&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stock</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
dispatch<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;facialMask&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),c=[o];function e(i,l){return s(),a("div",null,c)}const r=n(p,[["render",e],["__file","pub-sub.html.vue"]]);export{r as default};