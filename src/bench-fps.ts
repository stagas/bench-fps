import { AggregateStats, aggregateStats, Stats, stats } from 'everyday-math'
import { wait } from 'everyday-utils'

export type { AggregateStats, Stats }

export interface FPSCounter {
  fps: number[]
  lastFrameTime: number
  animFrame: number
  start: () => void
  stop: () => FPSCounter['fps']
}

// based on https://github.com/Janpot/mui-plus/blob/master/scripts/benchmark.ts
// the function is self contained, so it can easily be transferred to
// the client using puppeteer evaluate or other means
export const fpsCounter = () => {
  const countFPS: FPSCounter = {
    fps: [] as number[],
    lastFrameTime: 0,
    animFrame: 0,
    start: () => {
      countFPS.fps = []
      countFPS.lastFrameTime = 0

      const loop = (frameTime: number) => {
        countFPS.animFrame = requestAnimationFrame(loop)
        if (countFPS.lastFrameTime && frameTime !== countFPS.lastFrameTime) {
          const fps = 1 / ((frameTime - countFPS.lastFrameTime) / 1000)
          countFPS.fps.push(fps)
        }
        countFPS.lastFrameTime = frameTime
      }
      countFPS.animFrame = requestAnimationFrame(loop)
    },
    stop: () => {
      cancelAnimationFrame(countFPS.animFrame)
      return countFPS.fps
    },
  }
  return countFPS
}

/**
 * Benchmark `fn` FPS by running it in an animation loop,
 * producing stats for each iteration and aggregating them.
 *
 * It is called with `fn(frame, time)` as convenience values
 * for passing them to your animations.
 */
export async function benchFPS(times: number, iterationDuration: number, fn: (frame: number, time: number) => void) {
  const countFPS = fpsCounter()

  const allStats: Stats[] = []

  let x = 0

  const run = () =>
    new Promise<void>(resolve => {
      const startTime = performance.now()
      let now = 0

      const run = () => {
        now = performance.now()
        if (now - startTime > iterationDuration) {
          return resolve()
        }
        fn(x++, now)
        requestAnimationFrame(run)
      }

      countFPS.start()
      requestAnimationFrame(run)
    })

  for (let i = 0; i < times; i++) {
    await run()
    allStats.push(stats(countFPS.stop()))
    if (i < times - 1) await wait(100)
  }

  return {
    stats: allStats,
    aggregateStats: aggregateStats(allStats),
  }
}
