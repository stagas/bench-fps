<h1>
bench-fps <a href="https://npmjs.org/package/bench-fps"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-65-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/bench-fps@1.0.0/dist/bench-fps.min.js"><img src="https://img.shields.io/badge/brotli-845b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

FPS (frames per second) benchmark utility for perf testing.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i bench-fps </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add bench-fps </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add bench-fps</code>
</td></tr></table>
</h4>

## Examples

<details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { benchFPS } from 'bench-fps'

describe('perf', () => {
  it('wheeling', async () => {
    const { aggregateStats: aggr } = await benchFPS(3, 4000, x => {
      window.dispatchEvent(
        new WheelEvent('wheel', {
          deltaY: Math.sin(x * 0.3) * 120 ** 1.2,
        })
      )
    })

    console.table(aggr)

    expect(aggr.min).toBeGreaterThan(15)
    expect(aggr.mean).toBeGreaterThan(58)
    expect(aggr.meanStd).toBeLessThan(1.2)
  })
})
```

</p>
</details></ul></details>

## API

<p>  <details id="AggregateStats$13" title="Interface" ><summary><span><a href="#AggregateStats$13">#</a></span>  <code><strong>AggregateStats</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="max$16" title="Property" ><summary><span><a href="#max$16">#</a></span>  <code><strong>max</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="maxStd$17" title="Property" ><summary><span><a href="#maxStd$17">#</a></span>  <code><strong>maxStd</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="mean$20" title="Property" ><summary><span><a href="#mean$20">#</a></span>  <code><strong>mean</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="meanStd$21" title="Property" ><summary><span><a href="#meanStd$21">#</a></span>  <code><strong>meanStd</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="median$18" title="Property" ><summary><span><a href="#median$18">#</a></span>  <code><strong>median</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="medianStd$19" title="Property" ><summary><span><a href="#medianStd$19">#</a></span>  <code><strong>medianStd</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="min$14" title="Property" ><summary><span><a href="#min$14">#</a></span>  <code><strong>min</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="minStd$15" title="Property" ><summary><span><a href="#minStd$15">#</a></span>  <code><strong>minStd</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details></p></ul></details><details id="FPSCounter$28" title="Interface" ><summary><span><a href="#FPSCounter$28">#</a></span>  <code><strong>FPSCounter</strong></code>    </summary>  <a href="src/bench-fps.ts#L6">src/bench-fps.ts#L6</a>  <ul>        <p>  <details id="animFrame$31" title="Property" ><summary><span><a href="#animFrame$31">#</a></span>  <code><strong>animFrame</strong></code>    </summary>  <a href="src/bench-fps.ts#L9">src/bench-fps.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="fps$29" title="Property" ><summary><span><a href="#fps$29">#</a></span>  <code><strong>fps</strong></code>    </summary>  <a href="src/bench-fps.ts#L7">src/bench-fps.ts#L7</a>  <ul><p>number  []</p>        </ul></details><details id="lastFrameTime$30" title="Property" ><summary><span><a href="#lastFrameTime$30">#</a></span>  <code><strong>lastFrameTime</strong></code>    </summary>  <a href="src/bench-fps.ts#L8">src/bench-fps.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="start$32" title="Property" ><summary><span><a href="#start$32">#</a></span>  <code><strong>start</strong></code>    </summary>  <a href="src/bench-fps.ts#L10">src/bench-fps.ts#L10</a>  <ul><p><details id="__type$33" title="Function" ><summary><span><a href="#__type$33">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>        </ul></details><details id="stop$35" title="Property" ><summary><span><a href="#stop$35">#</a></span>  <code><strong>stop</strong></code>    </summary>  <a href="src/bench-fps.ts#L11">src/bench-fps.ts#L11</a>  <ul><p><details id="__type$36" title="Function" ><summary><span><a href="#__type$36">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>number  []</ul></p></p>    </ul></details></p>        </ul></details></p></ul></details><details id="Stats$22" title="Interface" ><summary><span><a href="#Stats$22">#</a></span>  <code><strong>Stats</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="max$24" title="Property" ><summary><span><a href="#max$24">#</a></span>  <code><strong>max</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="mean$25" title="Property" ><summary><span><a href="#mean$25">#</a></span>  <code><strong>mean</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="median$26" title="Property" ><summary><span><a href="#median$26">#</a></span>  <code><strong>median</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="min$23" title="Property" ><summary><span><a href="#min$23">#</a></span>  <code><strong>min</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="std$27" title="Property" ><summary><span><a href="#std$27">#</a></span>  <code><strong>std</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details></p></ul></details><details id="benchFPS$1" title="Function" ><summary><span><a href="#benchFPS$1">#</a></span>  <code><strong>benchFPS</strong></code><em>(times, iterationDuration, fn)</em>    </summary>  <a href="src/bench-fps.ts#L51">src/bench-fps.ts#L51</a>  <ul>    <p>    <details id="times$3" title="Parameter" ><summary><span><a href="#times$3">#</a></span>  <code><strong>times</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="iterationDuration$4" title="Parameter" ><summary><span><a href="#iterationDuration$4">#</a></span>  <code><strong>iterationDuration</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="fn$5" title="Function" ><summary><span><a href="#fn$5">#</a></span>  <code><strong>fn</strong></code><em>(frame, time)</em>    </summary>    <ul>    <p>    <details id="frame$8" title="Parameter" ><summary><span><a href="#frame$8">#</a></span>  <code><strong>frame</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="time$9" title="Parameter" ><summary><span><a href="#time$9">#</a></span>  <code><strong>time</strong></code>    </summary>    <ul><p>number</p>        </ul></details>  <p><strong>fn</strong><em>(frame, time)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details>  <p><strong>benchFPS</strong><em>(times, iterationDuration, fn)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;{<p>  <details id="aggregateStats$12" title="Property" ><summary><span><a href="#aggregateStats$12">#</a></span>  <code><strong>aggregateStats</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/bench-fps.ts#L84">src/bench-fps.ts#L84</a>  <ul><p><a href="#AggregateStats$13">AggregateStats</a></p>        </ul></details><details id="stats$11" title="Property" ><summary><span><a href="#stats$11">#</a></span>  <code><strong>stats</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>allStats</code></span>  </summary>  <a href="src/bench-fps.ts#L83">src/bench-fps.ts#L83</a>  <ul><p><a href="#Stats$22">Stats</a>  []</p>        </ul></details></p>}&gt;</ul></p></p>    </ul></details><details id="fpsCounter$38" title="Function" ><summary><span><a href="#fpsCounter$38">#</a></span>  <code><strong>fpsCounter</strong></code><em>()</em>    </summary>  <a href="src/bench-fps.ts#L17">src/bench-fps.ts#L17</a>  <ul>    <p>      <p><strong>fpsCounter</strong><em>()</em>  &nbsp;=&gt;  <ul><a href="#FPSCounter$28">FPSCounter</a></ul></p></p>    </ul></details></p>

## Credits

- [everyday-math](https://npmjs.org/package/everyday-math) by [stagas](https://github.com/stagas) &ndash; Everyday math utilities.
- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities

## Contributing

[Fork](https://github.com/stagas/bench-fps/fork) or [edit](https://github.dev/stagas/bench-fps) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
