import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.52cc2d6a.js";const p={},t=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><hr><h2 id="\u4E00\u3001\u4F7F\u7528rem\u6A21\u62DFvw\u7279\u6027\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4F7F\u7528rem\u6A21\u62DFvw\u7279\u6027\u9002\u914D" aria-hidden="true">#</a> \u4E00\u3001\u4F7F\u7528rem\u6A21\u62DFvw\u7279\u6027\u9002\u914D</h2><ul><li><p>rem</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//code...</span>
rem\u4EE5\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6
html \u7684 font<span class="token operator">-</span>size<span class="token operator">:</span><span class="token number">16</span> px\uFF1B\u5219 <span class="token number">1</span> rem <span class="token operator">=</span> <span class="token number">16</span> px\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>flexible</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//code...</span>
flexible\u5C06\u9875\u9762\u7684\u5BBD\u5EA6\u5207\u6210 <span class="token number">10</span> \u4EFD\uFF0C\u7136\u540E\u8BA1\u7B97\u51FA\u7684\u9875\u9762\u5BBD\u5EA6\u7684 <span class="token number">1</span><span class="token operator">/</span><span class="token number">10</span> \u8BBE\u7F6E\u4E3A html \u7684 fontSize

<span class="token keyword">const</span> docEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">setRemUnit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> rem <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
  docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h2 id="\u4E8C\u3001\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u9879\u76EE\u4E2D\u4F7F\u7528</h2><ul><li><p>\u5B89\u88C5\u63D2\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//code...</span>
<span class="token comment">// yarn add -D postcss-pxtorem</span>
<span class="token comment">// -D \u662F --save-dev \u7684\u7B80\u5199</span>
npm install postcss<span class="token operator">-</span>pxtorem <span class="token operator">-</span><span class="token constant">D</span>

<span class="token comment">// yarn add amfe-flexible</span>
npm i amfe<span class="token operator">-</span>flexible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>postcss.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// PostCSS \u914D\u7F6E\u6587\u4EF6</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u914D\u7F6E\u8981\u4F7F\u7528\u7684 PostCSS \u63D2\u4EF6</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u914D\u7F6E\u4F7F\u7528 autoprefixer \u63D2\u4EF6</span>
    <span class="token comment">// \u4F5C\u7528\uFF1A\u751F\u6210\u6D4F\u89C8\u5668 CSS \u6837\u5F0F\u89C4\u5219\u524D\u7F00</span>
    <span class="token comment">// VueCLI \u5185\u90E8\u5DF2\u7ECF\u914D\u7F6E\u4E86 autoprefixer \u63D2\u4EF6</span>
    <span class="token comment">// \u6240\u4EE5\u53C8\u914D\u7F6E\u4E86\u4E00\u6B21\uFF0C\u6240\u4EE5\u4EA7\u751F\u51B2\u7A81\u4E86</span>
    <span class="token comment">// &#39;autoprefixer&#39;: { // autoprefixer \u63D2\u4EF6\u7684\u914D\u7F6E</span>
    <span class="token comment">//   // \u914D\u7F6E\u8981\u517C\u5BB9\u5230\u7684\u73AF\u5883\u4FE1\u606F</span>
    <span class="token comment">//   browsers: [&#39;Android &gt;= 4.0&#39;, &#39;iOS &gt;= 8&#39;]</span>
    <span class="token comment">// },</span>

    <span class="token comment">// \u914D\u7F6E\u4F7F\u7528 postcss-pxtorem \u63D2\u4EF6</span>
    <span class="token comment">// \u4F5C\u7528\uFF1A\u628A px \u8F6C\u4E3A rem</span>

    <span class="token comment">/*\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u57FA\u4E8E lib-flexable \u7684 REM \u9002\u914D\u65B9\u6848\uFF0C\u5219\u5E94\u8BE5\u8BBE\u7F6E\u4E3A\u4F60\u7684\u8BBE\u8BA1\u7A3F\u7684\u5341\u5206\u4E4B\u4E00\u3002
    \u4F8B\u5982\u8BBE\u8BA1\u7A3F\u662F 750 \u5BBD\uFF0C\u5219\u5E94\u8BE5\u8BBE\u7F6E\u4E3A 75\u3002
    \u4F46\u662F Vant \u662F\u57FA\u4E8E 375 \u5199\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u8BBE\u7F6E\u4E3A 75 \u7684\u8BDD\uFF0CVant \u7684\u6837\u5F0F\u5C31\u5C0F\u4E86\u4E00\u534A\u3002*/</span>

    <span class="token comment">// \u5982\u679C\u662Fvant\u7684\u6837\u5F0F\uFF0C\u5219\u6309\u716737.5\u6765\u8F6C\u6362</span>
    <span class="token comment">// \u5982\u679C\u662F\u81EA\u5DF1\u7684\u6837\u5F0F\uFF0C\u6309\u716775\u6765\u8F6C\u6362</span>
    <span class="token string-property property">&#39;postcss-pxtorem&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">rootValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;vant&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">37.5</span> <span class="token operator">:</span> <span class="token number">75</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u5B8C\u6BD5\uFF0C\u91CD\u65B0\u542F\u52A8\u670D\u52A1</p></li></ul><hr><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2>`,9),i=[t];function l(c,o){return s(),a("div",null,i)}const u=n(p,[["render",l],["__file","rem\u9002\u914D\u65B9\u6848.html.vue"]]);export{u as default};
