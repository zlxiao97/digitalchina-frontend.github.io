import{_ as a,o as n,c as s,e}from"./app.d7937426.js";const t={},p=e(`<h1 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h1><h2 id="字符串拼接-不推荐" tabindex="-1"><a class="header-anchor" href="#字符串拼接-不推荐" aria-hidden="true">#</a> 字符串拼接（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;moss&#39;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My name is &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39; and I am &#39;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&#39; years old&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串拼接-推荐" tabindex="-1"><a class="header-anchor" href="#模板字符串拼接-推荐" aria-hidden="true">#</a> 模板字符串拼接（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;moss&#39;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">&#39;18&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>模板字符串除了拼接是否能做一些算法操作</p>`,7),o=[p];function i(c,r){return n(),s("div",null,o)}const d=a(t,[["render",i],["__file","Template-string.html.vue"]]);export{d as default};
