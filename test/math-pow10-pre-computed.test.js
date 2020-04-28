import mathPow10PreComputed from '../src/math-pow10-pre-computed'

describe('mathPow10PreComputed', () => {
	test('works', () => {
		expect(mathPow10PreComputed).toStrictEqual([
			1,
			10,
			100,
			1000,
			10000,
			100000,
			1000000,
			10000000,
			100000000,
			1000000000,
		])
	})
})
