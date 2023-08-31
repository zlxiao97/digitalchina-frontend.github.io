import{_ as p,r as o,o as l,c,a as n,b as a,d as t,e}from"./app.d7937426.js";const i={},u=e('<h1 id="基于-vue-grid-layout-的拖拽布局方案" tabindex="-1"><a class="header-anchor" href="#基于-vue-grid-layout-的拖拽布局方案" aria-hidden="true">#</a> 基于 Vue-Grid-Layout 的拖拽布局方案</h1><h2 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景" aria-hidden="true">#</a> 业务场景</h2><p>用户可以对页面上的内容进行<strong>拖拽</strong>、<strong>调整大小</strong>等操作，从而对页面进行自定义布局。</p><p><strong>如下所示：</strong></p><iframe src="https://codesandbox.io/embed/vue-grid-layout-vue2-x38xpy?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="vue-grid-layout-vue2" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><h2 id="vue-grid-layout-是什么" tabindex="-1"><a class="header-anchor" href="#vue-grid-layout-是什么" aria-hidden="true">#</a> Vue-Grid-Layout 是什么？</h2>',6),r={href:"https://jbaysolutions.github.io/vue-grid-layout/",target:"_blank",rel:"noopener noreferrer"},d={href:"http://dsmorse.github.io/gridster.js/",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-grid-layout <span class="token parameter variable">--save</span>
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-grid-layout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>非常简单，一个容器组件，一个元素组件,容器组件主要负责布局，元素组件负责展示你想填充的内容。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-item</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
import { GridLayout, GridItem } from &quot;vue-grid-layout&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：上述只是核心伪代码，<a href="#section">完整的基本代码</a></p><p>注：你现在已经会用了，如果你想了解更多，请继续往下看。</p><hr><h2 id="了解更多" tabindex="-1"><a class="header-anchor" href="#了解更多" aria-hidden="true">#</a> 了解更多</h2><h3 id="两个概念" tabindex="-1"><a class="header-anchor" href="#两个概念" aria-hidden="true">#</a> 两个概念</h3><p><strong>容器组件</strong>: GridLayout 有一个重要的属性 layout</p><ul><li>layout 是个数组</li><li>数组每一项决定着元素组件在容器中的布局</li><li>数组和元素组件一一对应</li></ul><p><strong>元素组件</strong>: 填充想要显示的内容到元素组件中即可。</p><p>注：数组项的字段的含义：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  i<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// id</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// x-axis,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// y-axis,</span>
  w<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// width,</span>
  h<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// height</span>
  <span class="token keyword">static</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//  won&#39;t be draggable, resizable or moved by other items</span>
  <span class="token comment">// 其他自定义属性</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：元素组件的属性配置：</p>`,17),v={href:"https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#gridlayout",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#griditem",target:"_blank",rel:"noopener noreferrer"},g=e(`<img src="https://i.imgur.com/epLzkhl.png" alt="请打开代理访问" style="zoom:40%;"><h3 id="扩展配置" tabindex="-1"><a class="header-anchor" href="#扩展配置" aria-hidden="true">#</a> 扩展配置</h3><p><code>可调整大小</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-layout</span> <span class="token attr-name">:isResizable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:layout.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:col-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">&lt;grid-item</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-item</span><span class="token punctuation">&gt;</span></span>   
&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>支持可拖拽</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-layout</span> <span class="token attr-name">:is-draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:layout.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:col-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">&lt;grid-item</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-item</span><span class="token punctuation">&gt;</span></span>   
&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>支持响应式</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-layout</span>
  <span class="token attr-name">:responsive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:responsiveLayouts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lg: [...layout] }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:breakpoints</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breakpoints<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cols<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:layout.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:col-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">&lt;grid-item</span>
<span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-item</span><span class="token punctuation">&gt;</span></span>   
&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a id="section"></a></p><h2 id="完整的基本代码" tabindex="-1"><a class="header-anchor" href="#完整的基本代码" aria-hidden="true">#</a> 完整的基本代码</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-layout</span> <span class="token attr-name">:layout.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-item</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in layout<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.i<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.x<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.y<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:w</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.w<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:h</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.h<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:i</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.i<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      12321
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid-layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> GridLayout<span class="token punctuation">,</span> GridItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-grid-layout&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> GridLayout<span class="token punctuation">,</span> GridItem <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(h,y){const s=o("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[n("a",r,[a("Vue-Grid-Layout"),t(s)]),a("就是一款可以实现上述需求的拖拽布局组件，它基于 "),n("a",d,[a("Gridster"),t(s)]),a(" 做了二次开发，支持拖拽、缩放、响应式布局等。")]),k,n("p",null,[n("a",v,[a("参考官网 GridLayout"),t(s)])]),n("p",null,[n("a",m,[a("参考官网 GridLayout-Item"),t(s)])]),g])}const f=p(i,[["render",b],["__file","index.html.vue"]]);export{f as default};
