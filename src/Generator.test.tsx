import { WeaveType } from "./enum/WeaveType";
import { generatePattern, transposePattern } from "./Generator";

describe("Generator", () => {
    test("generates plain weave", async () => {
        const pattern = generatePattern(WeaveType.Plain, 1, 1, 1, 0)

        expect(pattern).toHaveLength(16)
        expect(pattern[0]).toHaveLength(16)
        expect(pattern[0]).toStrictEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[1]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[2]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[3]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[4]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[5]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[6]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[7]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[8]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[9]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[10]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[11]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[12]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[13]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
        expect(pattern[14]).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
        expect(pattern[15]).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    });

    test("generates panama weave", async () => {
        const pattern = generatePattern(WeaveType.Plain, 2, 2, 2, 0)

        expect(pattern).toHaveLength(16)
        expect(pattern[0]).toHaveLength(16)
        expect(pattern[0]).toStrictEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[1]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[2]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[3]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[4]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[5]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[6]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[7]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[8]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[9]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[10]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[11]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[12]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[13]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[14]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[15]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
    });

    test("transposes generated pattern", async () => {
        const pattern = [[1, 1, 1, 1], [0, 1, 1, 0], [1, 0, 0, 1]]
        const transposedPattern = transposePattern(pattern)

        expect(transposedPattern).toHaveLength(4)
        expect(transposedPattern[0]).toEqual([1, 0, 1])
        expect(transposedPattern[1]).toEqual([1, 1, 0])
        expect(transposedPattern[2]).toEqual([1, 1, 0])
        expect(transposedPattern[3]).toEqual([1, 0, 1])
    })

});