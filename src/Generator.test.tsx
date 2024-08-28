import { WeaveType } from "./enum/WeaveType";
import { generatePattern, transposePattern } from "./Generator";

describe("Generator", () => {
    test("generates plain weave", async () => {
        const pattern = generatePattern(WeaveType.Plain, 1, 1, 1, 1)

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
        const pattern = generatePattern(WeaveType.Plain, 2, 2, 2, 2)

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

    test("generates zigzack weave", async () => {
        const pattern = generatePattern(WeaveType.Twill, 2, 2, 1, 1)

        expect(pattern).toHaveLength(16)
        expect(pattern[0]).toHaveLength(16)
        expect(pattern[0]).toStrictEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[1]).toEqual([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0])
        expect(pattern[2]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[3]).toEqual([1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1])
        expect(pattern[4]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[5]).toEqual([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0])
        expect(pattern[6]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[7]).toEqual([1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1])
        expect(pattern[8]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[9]).toEqual([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0])
        expect(pattern[10]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[11]).toEqual([1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1])
        expect(pattern[12]).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])
        expect(pattern[13]).toEqual([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0])
        expect(pattern[14]).toEqual([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
        expect(pattern[15]).toEqual([1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1])
    });

    test("generates satin weave", async () => {
        const pattern = generatePattern(WeaveType.SatinLowered, 4, 1, 1, 3)

        expect(pattern).toHaveLength(16)
        expect(pattern[0]).toHaveLength(16)
        expect(pattern[0]).toEqual([0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0])
        expect(pattern[1]).toEqual([1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1])
        expect(pattern[2]).toEqual([1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1])
        expect(pattern[3]).toEqual([1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1])
        expect(pattern[4]).toEqual([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1])
        expect(pattern[5]).toEqual([0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0])
    })

    test("generates weft satin weave", async () => {
        const pattern = generatePattern(WeaveType.Satin, 1, 4, 1, 3)

        expect(pattern).toHaveLength(16)
        expect(pattern[0]).toHaveLength(16)
        expect(pattern[0]).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        expect(pattern[1]).toEqual([0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0])
        expect(pattern[2]).toEqual([0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0])
    })

    test("transposes generated pattern", async () => {
        const pattern = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
        const transposedPattern = transposePattern(pattern)

        expect(transposedPattern).toHaveLength(4)
        expect(transposedPattern[0]).toEqual([4, 8, 12])
        expect(transposedPattern[1]).toEqual([3, 7, 11])
        expect(transposedPattern[2]).toEqual([2, 6, 10])
        expect(transposedPattern[3]).toEqual([1, 5, 9])
    })


});