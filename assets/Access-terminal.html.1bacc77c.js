import{_ as n,o as a,c as s,e}from"./app.d7937426.js";const t={},p=e(`<h1 id="访问数组末尾段元素" tabindex="-1"><a class="header-anchor" href="#访问数组末尾段元素" aria-hidden="true">#</a> 访问数组末尾段元素</h1><h2 id="array-xxx-获取元素-不推荐" tabindex="-1"><a class="header-anchor" href="#array-xxx-获取元素-不推荐" aria-hidden="true">#</a> array[xxx] 获取元素（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; 1</span>

array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; 2</span>

array<span class="token punctuation">[</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; 5</span>

array<span class="token punctuation">[</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>array[xxx]方法获取数组元素是可行的</p><h2 id="array-at-获取元素-推荐" tabindex="-1"><a class="header-anchor" href="#array-at-获取元素-推荐" aria-hidden="true">#</a> array.at 获取元素（推荐）</h2><p>at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

array<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;1</span>

array<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;2</span>

array<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;5</span>

array<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如果想同时获取数组中多个元素如何实现？</p>`,9),c=[p];function o(l,i){return a(),s("div",null,c)}const u=n(t,[["render",o],["__file","Access-terminal.html.vue"]]);export{u as default};
