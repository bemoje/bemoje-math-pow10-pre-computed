import fs from 'fs-extra'
import hirestime from 'hirestime'
import path from 'path'
import mathPow10PreComputed from '../src/math-pow10-pre-computed'

async function main() {
	const md = ['## Benchmark']

	// start timer
	const getElapsed = hirestime()

	// benchmark
	mathPow10PreComputed(undefined)

	// push results
	md.push(getElapsed.nanoseconds() + ' nanoseconds')

	// write results to file
	fs.writeFileSync(
		path.join(process.cwd(), 'benchmark', 'results.md'),
		md.join('\n'),
	)
}

//main()
