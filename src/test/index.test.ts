/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-17 21:30:04
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-17 21:50:22
 */
import { expect, test } from "vitest";
export function genNumber(min: number, max: number): number[] {
    const result = []
    for (let i = min; i <= max; i++) {
      result.push(i)
    }
    return result
  }
test("hello vitest", ()=>{
    expect(genNumber(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})