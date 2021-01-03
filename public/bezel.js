class Bezel {
  static get inputProperties () {
    return ['--backgroundV', '--bezel-width']
  }

  static get inputArguments () {
    return ['*']
  }

  static get contextOptions () {

  }

  paint (ctx, geom, properties, args) {
    console.log(args[0])
    console.log(properties.get('--backgroundV'))
    console.log(geom)

    ctx.lineWidth = properties.get('--bezel-width')
    ctx.strokeStyle = properties.get('--backgroundV')
    const inset = ctx.lineWidth / 2
    const radius = [16, 0, 16, 0]
    const topLeftRadius = radius[0]
    const topRightRadius = radius[1]
    const bottomRightadius = radius[2]
    const bottomLeftRadius = radius[3]

    const width = geom.width
    const height = geom.height

    ctx.stroke()
    ctx.lineTo(topLeftRadius, inset)
    ctx.lineTo(width - topRightRadius, inset)
    ctx.lineTo(width - inset, topRightRadius)
    ctx.lineTo(width - inset, height - bottomRightadius)
    ctx.lineTo(width - bottomRightadius, height - inset)
    ctx.lineTo(bottomLeftRadius, height - inset)
    ctx.lineTo(inset, height - bottomLeftRadius)
    ctx.lineTo(inset, topLeftRadius)
    ctx.closePath()
    ctx.stroke()
  }
}
/*eslint-disable */
registerPaint('bezel', Bezel)
