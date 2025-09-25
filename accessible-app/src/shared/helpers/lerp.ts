/**
 * Performs linear interpolation between two numbers.
 *
 * @param start - The starting value.
 * @param end - The ending value.
 * @param t - The interpolation factor (typically between 0 and 1).
 * @returns The interpolated value between start and end.
 */
export function lerpValue(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Animates a value from start to end over a specified duration, invoking a callback with each interpolated value.
 *
 * @param start - The initial value.
 * @param end - The final value.
 * @param duration - The duration of the animation in milliseconds.
 * @param callback - A function called with each interpolated value during the animation.
 * @returns A Promise that resolves when the animation is complete.
 */
export function lerp(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
): Promise<void> {
  return new Promise((resolve) => {
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const value = lerpValue(start, end, t);
      callback(value);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}
