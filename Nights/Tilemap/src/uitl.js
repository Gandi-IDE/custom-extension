export function getDrawable(util, renderer) {
    const drawableId = util.target.drawableID
    return renderer._allDrawables[drawableId];
}
export function range(x, min, max) {
    return Math.max(Math.min(x, max), min)
}