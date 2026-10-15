export type DemoDestination = '/cp-tracker' | '/fleet-risk' | '/demos';
const key = 'bh-private-demo-destination';
export function demoDestination(value: unknown): DemoDestination | undefined {
  return value === '/cp-tracker' || value === '/fleet-risk' || value === '/demos' ? value : undefined;
}
export function rememberDemoDestination(destination: DemoDestination) {
  try { window.localStorage.setItem(key, destination); } catch { /* Storage can be unavailable. */ }
}
export function rememberedDemoDestination(): DemoDestination | undefined {
  try { return demoDestination(window.localStorage.getItem(key)); } catch { return undefined; }
}
export function clearDemoDestination() {
  try { window.localStorage.removeItem(key); } catch { /* Storage can be unavailable. */ }
}