import{_ as a,r as s,o as h,c as d,a as e,b as t,d as l,w as i,e as n}from"./app.d7937426.js";const c={},p=n('<h1 id="web-网站性能优化" tabindex="-1"><a class="header-anchor" href="#web-网站性能优化" aria-hidden="true">#</a> Web 网站性能优化</h1><p>消费者们越来越依赖移动设备来访问数字内容和服务，如果你查看你的网站分析，你可能会在自己的数据中看到这个故事。</p><p>消费者的要求也比以往任何时候都高，当他们在你的网站上衡量体验时，他们不仅仅是在将你与竞争对手进行比较，他们还在根据他们每天使用的一流服务对你进行评分。</p><p>提升性能的作用是什么呢？可以说：</p><p>⭐ 性能在于留住用户</p><p>⭐ 性能在于提高转化率</p><p>⭐ 性能关乎用户体验</p><p>⭐ 性能以人为本</p><p>这篇文章总结了一些关于 <strong>如何提升一个 Web 网站的性能</strong>相关的大量提示和技巧。</p><p>现在，让我们开始！👏👏👏</p><h2 id="_1-网页性能优化指标" tabindex="-1"><a class="header-anchor" href="#_1-网页性能优化指标" aria-hidden="true">#</a> 1 网页性能优化指标</h2><h3 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具" aria-hidden="true">#</a> 测试工具</h3>',12),u=e("p",null,[t("对"),e("strong",null,"公网"),t("上的网页进行 FCP 测试的工具有：")],-1),g=e("strong",null,"PSI",-1),_={href:"https://pagespeed.web.dev/",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"webpagetest",-1),f={href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"DevTools",-1),T=e("code",null,"lighthouse",-1),P={href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"},k=n('<h3 id="核心-web-指标" tabindex="-1"><a class="header-anchor" href="#核心-web-指标" aria-hidden="true">#</a> 核心 Web 指标</h3><p>适用于所有网页的 Web 指标子集，每位网站所有者都应该测量这些指标，并且这些指标还将显示在所有 Google 工具中，包括：</p><ul><li><p>⭐<strong>LCP</strong> ➡️ <strong>Largest Contentful Paint</strong></p><ul><li>最大内容渲染时间</li><li>从页面开始加载到视窗内 <strong>最大内容</strong> 绘制的所需时间，测量 <strong>加载性能</strong></li></ul></li><li><p>⭐<strong>CLS</strong> ➡️ <strong>Cumulative Layout Shift</strong></p><ul><li>累计布局位移</li><li>比较单个元素在帧与帧之间的位置偏移，测量 <strong>视觉稳定性</strong></li></ul></li><li><p>⭐<strong>FID</strong> ➡️ <strong>First Input Delay</strong></p><ul><li>首次输入延迟</li><li>测量 <strong>交互性</strong></li></ul></li><li><p><strong>FCP</strong> ➡️ <strong>First Contentful Paint</strong></p><blockquote><p>⚠️<strong>不包含</strong> 在 <strong>核心 Web 指标</strong> 中，但是以下 PSI 指标和 lighthouse 指标都包含。因为只会捕获加载体验最开始的部分，如果某个页面显示的是一段启动画面或加载指示，那么这些时刻与用户的关联性并不大。</p></blockquote><ul><li>首次内容绘制</li><li>是浏览器在您的页面上呈现 <strong>第一个 DOM 元素</strong> 的时间。这包括图像、画布元素（非白色）或文本。通俗地说，FCP 是指用户可以看到页面的某些部分发生变化。</li></ul></li></ul><h3 id="psi-工具指标" tabindex="-1"><a class="header-anchor" href="#psi-工具指标" aria-hidden="true">#</a> PSI 工具指标</h3><p>除以上核心指标之外还包括：</p>',5),S=e("p",null,[e("strong",null,"INP"),t(" ➡️ "),e("strong",null,"Interaction to Next Paint")],-1),C=e("blockquote",null,[e("p",null,[t("INP 与首次输入延迟 (FID) 的不同：INP 考虑 "),e("strong",null,"所有页面交互"),t("，而 FID 仅考虑第 "),e("strong",null,"一次"),t(" 交互。它还仅测量第一次交互的 "),e("strong",null,"输入延迟"),t("，而不是运行事件处理程序所需的时间或呈现下一帧的延迟。")])],-1),x=e("li",null,"下次绘制交互",-1),I={href:"https://web.dev/inp-cwv/",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[e("p",null,[e("strong",null,"TTFB(experimental)"),t(" ➡️ "),e("strong",null,"Time to First Byte")]),e("ul",null,[e("li",null,"首字节时间")])],-1),q=n('<h3 id="谷歌控制台-lighthouse-指标" tabindex="-1"><a class="header-anchor" href="#谷歌控制台-lighthouse-指标" aria-hidden="true">#</a> 谷歌控制台 lighthouse 指标</h3><p>除以上核心指标之外还包括：</p><ul><li><strong>SI</strong> ➡️ <strong>Speed Index</strong><ul><li>速度指数</li><li>反映网页内容填充的速度</li></ul></li><li><strong>TBT</strong> ➡️ <strong>Total Blocking Time</strong><ul><li>阻塞总时间</li><li>反映用户的交互是否能及时响应</li></ul></li></ul><h2 id="_2-具体介绍与优化方案" tabindex="-1"><a class="header-anchor" href="#_2-具体介绍与优化方案" aria-hidden="true">#</a> 2 具体介绍与优化方案</h2><h3 id="lcp" tabindex="-1"><a class="header-anchor" href="#lcp" aria-hidden="true">#</a> LCP</h3><h4 id="❓️-什么是-lcp" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-lcp" aria-hidden="true">#</a> ❓️ 什么是 LCP</h4><p><strong>LCP 最大内容绘制</strong> 会根据页面 <strong>首次开始加载</strong> 的时间点来报告 <strong>可视区域内</strong> 可见的 <strong>最大图像或文本块</strong> 完成渲染的相对时间。</p><h4 id="最大内容绘制考量的元素" tabindex="-1"><a class="header-anchor" href="#最大内容绘制考量的元素" aria-hidden="true">#</a> 最大内容绘制考量的元素</h4><ul><li><code>&lt;img&gt;</code>元素</li><li>内嵌在<code>&lt;svg&gt;</code>元素内的<code>&lt;image&gt;</code>元素</li><li><code>&lt;video&gt;</code>元素（使用封面图像）</li><li>通过<code>url()</code>函数（而非使用 CSS 渐变）加载的带有背景图像的元素</li><li>包含文本节点或其他行内级文本元素子元素的块级元素。</li></ul><h4 id="元素大小的计算方式" tabindex="-1"><a class="header-anchor" href="#元素大小的计算方式" aria-hidden="true">#</a> 元素大小的计算方式</h4><blockquote><p>用户在 <strong>视口</strong> 中可见的元素的大小。如果元素延伸到视口之外，或者任何元素被剪裁或具有不可见的溢出，则这些部分不会计入元素的大小。</p></blockquote><ul><li>如果图片缩放，尺寸以较小者为准</li><li>文本元素，仅考虑其文本节点的大小</li><li>所有元素，不考虑通过 CSS 应用的任何边距、填充或边框</li><li><code>&lt;svg&gt;</code>元素目前不被视为 LCP 候选者</li><li>使用<code>background-image</code>插入的背景图不会被视为最大内容绘制元素</li></ul><p>💡 如果当前最大内容元素的元素从视口中删除（甚至从 DOM 中删除），它将仍然是最大内容元素，除非渲染更大的元素。</p><p>💡 对元素大小或位置的更改不会生成新的 LCP 候选对象，只有元素在可视区域内的初始大小和位置会被纳入考量范围。</p><h4 id="lcp-分发和报告最大内容的过程" tabindex="-1"><a class="header-anchor" href="#lcp-分发和报告最大内容的过程" aria-hidden="true">#</a> LCP 分发和报告最大内容的过程</h4><p>网页通常是分阶段加载的，因此，在加载开始到加载完成的这几帧中，页面上的最大元素也可能会发生变化。</p><p>例如，在一个带有文本和首图的网页上，在界面上的较大图片元素尚未 “ 渲染完成 ” 的时候，较小的先渲染完成的文本元素将会被视为 <strong>第一个</strong> 最大内容绘制元素，浏览器此期间会分发一个<code>largest-contentful-paint</code>条目给这个文本元素，用于识别最大内容元素。随后，一旦首图完成加载，浏览器就会分发第二个<code>largest-contentful-paint</code>条目。如果这个界面还有其他元素，有任意一个新元素大于先前的最大内容元素，则浏览器还将报告一个新的<code>PerformanceEntry</code>条目。</p><h4 id="最大内容绘制元素频繁变化的影响" tabindex="-1"><a class="header-anchor" href="#最大内容绘制元素频繁变化的影响" aria-hidden="true">#</a> 最大内容绘制元素频繁变化的影响</h4><p>计算和分发新性能条目的性能开销较高时：</p><ul><li><p>会导致用户等待时间增加，出现例如图片加载不完整或动画无法流畅播放的情况</p></li><li><p>会导致交互延迟，用户点击按钮或执行其他操作时的响应时间会增加</p></li><li><p>页面加载期间用户无法操作，对搜索引擎优化(SEO)有一定影响</p></li></ul><h4 id="lcp-示例" tabindex="-1"><a class="header-anchor" href="#lcp-示例" aria-hidden="true">#</a> LCP 示例</h4><p><img src="https://i.imgur.com/2eK7NFf.png" alt="LCP1"></p><blockquote><p>最大内容元素从顶部的文本元素，变更为渲染完成之后的图片元素，LCP 发生变化</p></blockquote><p><img src="https://i.imgur.com/4p9tk1x.png" alt="LCP2"></p><blockquote><p>最大内容元素是一串文本元素，随着布局的改变被从可视区域中被移除，但是依旧是最大内容元素，直到被更大的图片元素取代，LCP 发生变化</p></blockquote><p><strong>延迟加载方案</strong></p><p><img src="https://i.imgur.com/FRn4AXW.png" alt="LCP3"></p><blockquote><p>第一张图为 svg 元素不会被算作最大内容元素，第二张图的图片在渲染中状态，不能计算。</p><p>随着图片渲染完成，图片元素成为第一次的最大内容元素，之后的元素都在图片之后渲染完成，但都没有图片元素大，所以图片是依旧是界面内的最大内容元素</p></blockquote><p><img src="https://i.imgur.com/sf0CGCt.png" alt="LCP4"></p><blockquote><p>当用户与页面进行交互（通过轻触、滚动或按键）时，浏览器将立刻停止报告新条目，因为用户交互通常会改变用户可见的内容（滚动操作时尤其如此）。</p><p>所以在进行搜索交互之后，最大内容元素为图二这段文本，文本在所有图像或标志完成加载之前就显示了出来。由于所有单个图像都小于这段文字，因此这段文字在整个加载过程中始终是最大元素。</p></blockquote><h4 id="🌟🌟-如何优化" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化" aria-hidden="true">#</a> 🌟🌟 如何优化</h4>',31),L={href:"https://web.dev/apply-instant-loading-with-prpl/",target:"_blank",rel:"noopener noreferrer"},v=n("<ul><li><strong>推送 (Push)</strong>（或<strong>预加载</strong>）最重要的资源。</li><li>尽快<strong>渲染 (Render)</strong>  初始路线。</li><li><strong>预缓存 (Pre-cache)</strong>  剩余资产。</li><li><strong>延迟加载 (Lazy load)</strong>  其他路线和非关键资产。</li></ul>",1),w={href:"https://web.dev/critical-rendering-path/",target:"_blank",rel:"noopener noreferrer"},B=n("<li>优化阻塞渲染的 JS 和 CSS</li><li>改进服务器处理内容的方式和位置 <ul><li>使用 CDN 加速</li><li>优先使用缓存提供 HTML 页面</li><li>尽早建立第三方连接</li></ul></li><li>优化最大内容绘制考量的元素 <ul><li>优化和压缩图像</li><li>预加载重要资源</li><li>压缩文本文件</li><li>基于网络连接交付不同资产（自适应服务）</li><li>使用 Service Worker 缓存资产</li></ul></li><li>优化渲染方式 <ul><li>使用服务端渲染(会影响 TTFB 和 TTI)</li><li>使用预渲染</li><li>最小化关键 JS(压缩 JS 代码，延迟加载未使用的 JS)</li></ul></li>",4),N=n('<h3 id="cls" tabindex="-1"><a class="header-anchor" href="#cls" aria-hidden="true">#</a> CLS</h3><h4 id="❓️-什么是-cls" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-cls" aria-hidden="true">#</a> ❓️ 什么是 CLS</h4><p><strong>CLS 累积布局偏移</strong> 是指一个可见元素的位置从一个已渲染帧变更到下一个已渲染帧，就发生了 <strong>布局偏移</strong>，页面内容的意外移动通常是由于异步加载资源，或者动态添加 DOM 元素到页面现有内容的上方造成的。</p><p>💡 只有当现有元素的 <strong>起始位置</strong> 发生变更时才算作布局偏移。如果将新元素添加到 DOM 或是现有元素更改大小，则不算作布局偏移，<strong>前提是元素的变更不会导致其他可见元素的起始位置发生改变。</strong></p><h4 id="🌟🌟-如何优化-1" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-1" aria-hidden="true">#</a> 🌟🌟 如何优化</h4>',5),D=e("li",null,[t("使用"),e("strong",null,"动画和过渡")],-1),J={href:"https://css-tricks.com/aspect-ratio-boxes/",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,"除非是对用户交互做出响应，否则切勿在现有内容的上方插入内容",-1),y=n('<h3 id="fid" tabindex="-1"><a class="header-anchor" href="#fid" aria-hidden="true">#</a> FID</h3><h4 id="❓️-什么是-fid" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-fid" aria-hidden="true">#</a> ❓️ 什么是 FID</h4><p><strong>FID 首次输入延迟</strong> 将用户尝试与无响应页面进行 <strong>交互</strong> 时的体验进行了量化，测量从用户 <strong>第一次</strong> 与页面交互直到浏览器对交互作出响应，并实际能够开始处理事件处理程序 <strong>所经过的时间</strong>。低 FID 有助于让用户确信页面是有效的。</p><table><thead><tr><th>是否正在发生？</th><th>导航是否成功启动？服务器有响应吗？</th></tr></thead><tbody><tr><td>是否有用？</td><td>是否渲染了足够的内容让用户可以深入其中？</td></tr><tr><td>是否可用？</td><td>页面是否繁忙，用户是否可以与页面进行交互？</td></tr><tr><td>是否令人愉快？</td><td>交互是否流畅自然，没有延迟和卡顿？</td></tr></tbody></table>',4),O={href:"https://web.dev/inp-cwv/",target:"_blank",rel:"noopener noreferrer"},M=n('<p>⚠️ 和 INP 一样会存在不展示 FID 的情况</p><h4 id="哪些算是首次输入" tabindex="-1"><a class="header-anchor" href="#哪些算是首次输入" aria-hidden="true">#</a> 哪些算是首次输入</h4><p>FID 只关注不连续操作对应的输入事件，如<strong>点击</strong>、<strong>轻触</strong>和<strong>按键</strong>。其他诸如滚动和缩放之类的交互属于连续操作，具有完全不同的性能约束（而且，浏览器通常能够通过在单独的线程上执行这些操作来隐藏延迟）。</p><h4 id="🌟🌟-如何优化-2" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-2" aria-hidden="true">#</a> 🌟🌟 如何优化</h4>',4),j=e("li",null,"分割长任务",-1),R=e("li",null,"代码分割（按需加载）",-1),H={href:"https://javascript.info/script-async-defer",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"最大限度减少未使用的 polyfill",-1),z=e("li",null,"将更多逻辑转移到服务器端，或在构建期间静态生成更多内容",-1),E=e("li",null,[t("减少数据获取依赖： "),e("ol",null,[e("li",null,"尽量最大限度地减少对级联数据获取的依赖"),e("li",null,"尽量最大限度地减少需要在客户端进行后处理的数据量")])],-1),G=e("li",null,[t("优化第三方脚本执行 "),e("ol",null,[e("li",null,"按需加载第三方代码"),e("li",null,"延迟加载")])],-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Worker",target:"_blank",rel:"noopener noreferrer"},K=n('<h3 id="fcp" tabindex="-1"><a class="header-anchor" href="#fcp" aria-hidden="true">#</a> FCP</h3><blockquote><p>⚠️ 只会捕获加载体验中最开始的部分</p></blockquote><h4 id="❓️-什么是-fcp" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-fcp" aria-hidden="true">#</a> ❓️ 什么是 FCP</h4><p><strong>FCP 首次内容绘制</strong> 是衡量用户感知的重要的加载性能指标，关注的是 <strong>第一个</strong> 内容元素（文本、图像、背景图像、<code>&lt;svg&gt;</code>元素或非白色的<code>&lt;canvas&gt;</code>元素）的 <strong>渲染时间</strong> 反映了页面加载速度对用户可见内容的影响。</p><p><img src="https://i.imgur.com/CRfjkGR.png" alt="FCP1"></p><blockquote><p>FCP 发生在第二帧，因为那是首批文本和图像元素在屏幕上完成渲染的时间点</p></blockquote><h4 id="🌟🌟-如何优化-3" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-3" aria-hidden="true">#</a> 🌟🌟 如何优化</h4><blockquote><p>⚠️ 大部分和 LCP 的优化方式相同</p></blockquote>',8),U=e("li",null,"减少服务器响应时间 (TTFB)",-1),X=e("li",null,"避免多个页面重定向",-1),Y=e("li",null,"避免巨大的网络负载",-1),Q=e("li",null,"使用高效的缓存策略服务静态资产",-1),Z=e("li",null,"确保文本在网页字体加载期间保持可见",-1),$=e("li",null,"保持较低的请求数和较小的传输大小",-1),ee=n('<h3 id="inp" tabindex="-1"><a class="header-anchor" href="#inp" aria-hidden="true">#</a> INP</h3><h4 id="❓️-什么是-inp" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-inp" aria-hidden="true">#</a> ❓️ 什么是 INP</h4><p><strong>INP 下次绘制交互</strong> 观察用户与页面进行的 <strong>所有交互</strong> 的 <strong>延迟</strong>，并报告所有（或几乎所有）交互都低于的单个值。低 INP 意味着页面始终能够快速响应所有（或绝大多数）用户交互。INP 的目标是确保对于用户进行的所有或大多数交互，从用户发起交互到绘制下一帧的时间尽可能短。</p><h4 id="不报告-inp-的情况" tabindex="-1"><a class="header-anchor" href="#不报告-inp-的情况" aria-hidden="true">#</a> 不报告 INP 的情况</h4><ol><li>页面已加载，但用户从未单击、点击或按下键盘上的按键</li><li>页面已加载，但用户使用不涉及单击、点击或使用键盘的手势与页面进行交互，例如滚动或悬停</li><li>该页面正在由机器人（例如搜索爬虫或无头浏览器）访问，但尚未编写脚本来与该页面交互</li></ol><h4 id="🌟🌟-如何优化-js" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-js" aria-hidden="true">#</a> 🌟🌟 如何优化(JS)</h4>',6),te=e("p",null,[e("strong",null,"优化输入延迟：")],-1),le=e("li",null,"避免重复计时器启动过多的主线程工作",-1),oe=e("li",null,"避免长时间的任务",-1),ne={href:"https://web.dev/debounce-your-input-handlers/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://developer.chrome.com/en/docs/lighthouse/performance/non-composited-animations/",target:"_blank",rel:"noopener noreferrer"},se=n('<li><p><strong>优化事件回调：</strong></p><ul><li>分解长任务，不要阻塞主线程</li></ul><p><img src="https://i.imgur.com/M3KLvkO.png" alt="INP1"></p><blockquote><p>当任务被分解时，浏览器有更多机会响应更高优先级的工作，其中包括用户交互</p></blockquote><ul><li>分解 JS 代码为更小的功能，合理使用<code>setTimeout()</code>等可以将代码执行推迟到后续任务的 API</li><li>使用 <strong><code>async</code>/<code>await</code></strong> 来创建让出点</li><li>在必要的时候使用<code>isInputPending()</code>来让出主线程</li></ul></li><li><p><strong>最大限度地减少演示延迟</strong></p><ul><li>保持初始 DOM 较小</li><li>尽量少的使用 JavaScript 渲染 HTML</li></ul></li>',2),ae=n('<h3 id="ttfb" tabindex="-1"><a class="header-anchor" href="#ttfb" aria-hidden="true">#</a> TTFB</h3><h4 id="❓️-什么是-ttfb" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-ttfb" aria-hidden="true">#</a> ❓️ 什么是 TTFB</h4><p><strong>TTFB 第一字节时间</strong> 是一个衡量对资源的请求和响应的第一个字节开始和到达之间时间的指标。TTFB 的衡量要快于 FCP 和 LCP，也就是从打开页面开始，到加载出页面的那一段等待时间。</p><p><img src="https://i.imgur.com/qFjJ97q.png" alt="TTFB1"></p><blockquote><p><em>网络请求阶段及其相关时间损耗的图示. TTFB 测量<code>startTime</code>和<code>responseStart</code>之间的时间损耗</em></p></blockquote><p>TTFB 是下列请求节点的时间损耗汇总：</p><ul><li>Redirect time 重定向时延</li><li>Service worker 启动时延（如果适用）</li><li>DNS 查询时延</li><li>建立连接和 TLS 所消耗时延</li><li>请求，直到响应的第一个字节到达为止的时延</li></ul><p>减少 <strong>连接建立</strong> 和 <strong>后端服务的时延</strong> 将有助于降低 TTFB。</p><p>⚠️ 注意：TTFB 并不是核心 Web 指标，如果并不太影响 Web 核心指标，优化需求并不是很高</p><h4 id="🌟🌟-如何优化-ttfb" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-ttfb" aria-hidden="true">#</a> 🌟🌟 如何优化 TTFB</h4><p>TTFB 的值会过高，在很大程度上取决于 <strong>托管供应商</strong> 和 <strong>后端服务</strong>，通常通过选择一个合适的托管供应商是优化 TTFB 的高效方案 ，其基础设施可确保高正常运行时间和响应能力，与高级 CDN 服务相结合，效果会更好。同时后端服务的数据库垃圾过多，或者查询次数过多等，也会影响 TTFB 的数值。</p>',11),he=e("li",null,"避免多次重定向.",-1),de=e("li",null,[t("使用  "),e("code",null,'<link rel="preconnect">'),t("  标签，提前向跨域资源源建立预连接。")],-1),ce=e("li",null,"使用 HSTS 预加载列表，以消除 HTTP 转 HTTPS 的重定向延迟。",-1),pe=e("li",null,"使用 HTTP/2 or HTTP/3，以提供更高的网络性能和效率。",-1),ue=e("code",null,'<link rel="prefetch">',-1),ge=e("code",null,'<link rel="dns-prefetch">',-1),_e={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data",target:"_blank",rel:"noopener noreferrer"},be=e("li",null,"在可能和适当的情况下，使用服务器端生成（SSG）来代替服务端渲染（SSR）的标记。",-1),fe=n('<h3 id="si" tabindex="-1"><a class="header-anchor" href="#si" aria-hidden="true">#</a> SI</h3><h4 id="❓️-什么是-si" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-si" aria-hidden="true">#</a> ❓️ 什么是 SI</h4><p><strong>SI 速度指数</strong> 是衡量页面加载期间内容视觉显示的速度指标，以秒为单位。SI 指标的计算是通过模拟用户在页面加载过程中不断更新视图的情况来实现的。</p><p>它考虑了整个页面的 <strong>可见区域</strong> 以及 <strong>内容加载的顺序和时间</strong>，以及 <strong>渲染完成的时间</strong>。SI 分数越低，说明页面越快呈现出有意义的内容。</p><h4 id="🌟🌟-如何优化-4" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-4" aria-hidden="true">#</a> 🌟🌟 如何优化</h4><ol><li>分解长任务</li><li>优化 JS 代码（压缩、分割、删除，使用<strong>PRPL</strong>模式）</li><li>确保文本在网络字体加载期间保持可见</li></ol><h3 id="tbt" tabindex="-1"><a class="header-anchor" href="#tbt" aria-hidden="true">#</a> TBT</h3><h4 id="❓️-什么是-tbt" tabindex="-1"><a class="header-anchor" href="#❓️-什么是-tbt" aria-hidden="true">#</a> ❓️ 什么是 TBT</h4>',8),me=e("strong",null,"TBT 总阻塞时间",-1),Te=e("strong",null,"首次内容渲染",-1),Pe={href:"https://web.dev/interactive/",target:"_blank",rel:"noopener noreferrer"},ke=e("strong",null,"页面资源加载成功并能响应用户交互的时间点",-1),Se=e("u",null,"已退役指标",-1),Ce=e("strong",null,"阻塞部分",-1),xe=n('<p>任何执行时间超过 <strong>50</strong> 毫秒的任务都是长任务。<strong>50</strong> 毫秒之后的时间量是阻塞部分。例如，如果 Lighthouse 检测到一个 70 毫秒长的任务，则阻塞部分将为 20 毫秒。</p><h4 id="🌟🌟-如何优化-5" tabindex="-1"><a class="header-anchor" href="#🌟🌟-如何优化-5" aria-hidden="true">#</a> 🌟🌟 如何优化</h4><ol><li>分解长任务</li><li>JS 代码优化（压缩、分割、重构、删除，合理加载第三方 JS 代码）</li></ol><h2 id="_3-案例" tabindex="-1"><a class="header-anchor" href="#_3-案例" aria-hidden="true">#</a> 3 案例</h2><ol><li>使用浏览器的控制台打开 lighthouse，查看本地 3000 端口网站的性能情况</li></ol><p><img src="https://i.imgur.com/D33j3kO.png" alt="case1"></p><blockquote><p>lighthouse 报告总共五个重要性能指标，此网站 TBT 性能中等</p></blockquote><ol start="2"><li>查看 TBT 详细解析</li></ol><p><img src="https://i.imgur.com/fNl48j3.png" alt="case2"></p><blockquote><p>指出以下两个长任务导致 TBT 时间延长</p></blockquote><p>⁉️ <strong>指出问题：</strong></p><p>        js 文件太大</p><p>🌟 <strong>建议优化：</strong></p><p>        对 JS 代码进行<strong>压缩、分割、重构、删除，合理加载第三方 JS 代码</strong>等方式来优化</p><ol start="3"><li>FCP 指标为快速，但是有可优化的地方</li></ol><p><img src="https://i.imgur.com/IJm2Ty9.png" alt="case3"></p><blockquote><p>报告指出发现一个链式请求，是一个 css 文件，这个文件是以高优先级加载的，回导致加载时间过长</p></blockquote><p>⁉️ <strong>指出问题：</strong></p><p>        css 文件太大</p><p>🌟 <strong>建议优化：</strong></p><p>        对 css 代码进行分解或删除部分重复代码</p><ol start="4"><li>LCP 指标为快速，但是有可以优化的地方</li></ol><p><img src="https://i.imgur.com/l7O9PGq.png" alt="case4"></p><blockquote><p>此处指出该 img 是视口内的最大绘制元素，但是却被延迟加载了，会导致 LCP 的延迟</p></blockquote><p>⁉️ <strong>指出问题：</strong></p><p>        视口最大绘制元素延迟加载了</p><p>🌟 <strong>建议优化：</strong></p><p>        优化关键渲染路径，LCP 元素不用延迟加载</p><p><img src="https://i.imgur.com/YyC191h.png" alt="case5"></p><blockquote><p>此处指出页面使用了大量的网络负载，总大小为 3,510 KiB，它提醒大型网络负载会导致用户产生实际的费用，并且与长加载时间高度相关</p></blockquote><p>⁉️ <strong>指出问题：</strong></p><p>        图片和文件太大</p><p>🌟 <strong>建议优化：</strong></p><p>        进行<strong>资源压缩、代码分割、资源缓存、延迟加载、使用现代图像格式</strong>等方式来优化</p>',34);function Ie(Fe,qe){const o=s("ExternalLinkIcon"),r=s("font");return h(),d("div",null,[p,e("ul",null,[e("li",null,[u,e("ul",null,[e("li",null,[g,t(" (PageSpeed Insights)：会针对网页在移动设备和桌面设备上的用户体验生成报告，并就如何改进网页提出建议 "),e("a",_,[t("PageSpeed Insights"),l(o)])]),e("li",null,[b,t("：可提供有关页面在各种条件下的性能的深入诊断信息 "),e("a",f,[t("webpagetest"),l(o)])])])]),e("li",null,[e("p",null,[t("在本地调试的时候可以使用 "),m,t(" 的 "),T,t("来查看"),e("a",P,[t("WebPageTest"),l(o)])])])]),k,e("ul",null,[e("li",null,[S,C,e("ul",null,[x,e("li",null,[t("通过观察用户访问页面的整个生命周期中发生的所有单击、敲击和键盘交互的延迟来评估页面对用户交互的整体响应能力。低 INP 意味着页面始终能够快速响应所有（或绝大多数）用户交互，"),e("a",I,[t("将于 2024 年 3 月取代首次输入延迟 (FID)。"),l(o)]),t(" 。")])])]),F]),q,e("ol",null,[e("li",null,[e("a",L,[t("使用 PRPL 模式实现即时加载"),l(o)]),v]),e("li",null,[e("a",w,[t("优化关键渲染路径"),l(o)])]),B]),N,e("ol",null,[D,e("li",null,[t("始终在图像和视频元素上包含尺寸属性，或者通过使用"),e("a",J,[t("CSS 长宽比容器"),l(o)]),t("之类的方式预留所需的空间")]),W]),y,e("p",null,[t("⚠️ "),e("a",O,[t("INP 将于 2024 年 3 月取代首次输入延迟 (FID)"),l(o)])]),M,e("ol",null,[j,e("li",null,[t("JS 代码优化，压缩代码体积 "),e("ol",null,[R,e("li",null,[t("对关键路径或首屏内容不需要的脚本使用  "),e("a",H,[t("async 或 defer"),l(o)])]),A])]),z,E,G,e("li",null,[e("a",V,[t("使用 Web Worker"),l(o)])])]),K,e("ol",null,[e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("消除阻塞渲染的资源")]),_:1})]),e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("css 优化")]),_:1}),e("ul",null,[e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("缩小 CSS")]),_:1})]),e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("移除未使用的 CSS")]),_:1})])])]),e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("预连接到所需的来源")]),_:1})]),U,X,e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("预加载关键请求")]),_:1})]),Y,Q,e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("避免 DOM 过大")]),_:1})]),e("li",null,[l(r,{color:"#999999"},{default:i(()=>[t("最小化关键请求深度")]),_:1})]),Z,$]),ee,e("ol",null,[e("li",null,[te,e("ul",null,[le,oe,e("li",null,[t("注意用户交互的重叠，可对输入"),e("a",ne,[t("进行去抖动"),l(o)]),t("，注意 JavaScript 中的动画可能会引发许多"),e("a",re,[t("requestAnimationFrame"),l(o)]),t("调用，这可能会妨碍用户交互，尽可能使用 CSS 动画，避免"),e("a",ie,[t("非合成动画"),l(o)])])])]),se]),ae,e("ul",null,[he,de,ce,pe,e("li",null,[t("考虑预测性预取：使用  "),ue,t("  或  "),ge,t("  标签，为没有指定"),e("a",_e,[t("减少数据使用偏好"),l(o)]),t("的用户提供快速页面导航。")]),be]),fe,e("p",null,[me,t(" 测量页面被阻止响应用户输入（例如鼠标单击、屏幕点击或键盘按下）的总时间。总和是通过添加 FCP "),Te,t(" 和 "),e("a",Pe,[t("Time to Interactive"),l(o)]),t(),ke,t("（"),Se,t("）之间所有长任务的"),Ce,t("来计算的。")]),xe])}const ve=a(c,[["render",Ie],["__file","index.html.vue"]]);export{ve as default};
