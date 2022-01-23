/**
 *
 * @param selection
 * @param pattern
 * @returns {*}
 */
export default function renderToSvg(selection, pattern) {
    let s = selection
      .select('defs');
    if (s.empty()) {
        s = selection.append('defs')
    }

    return s.append('pattern')
      .attr('id', pattern.id)
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', pattern.size)
      .attr('height', pattern.size);

}