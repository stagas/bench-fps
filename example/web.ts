import { benchFPS } from '../src'

describe('perf', () => {
  it('wheeling', async () => {
    const { aggregateStats: aggr } = await benchFPS(3, 4000, x => {
      window.dispatchEvent(
        new WheelEvent('wheel', {
          deltaY: (Math.random() - 0.5) * Math.sin(x * Math.cos(x * 0.5) * 0.05) * 250,
        })
      )
    })

    console.table(aggr)

    expect(aggr.min).toBeGreaterThan(15)
    expect(aggr.mean).toBeGreaterThan(58)
    expect(aggr.meanStd).toBeLessThan(1.2)
  })
})
