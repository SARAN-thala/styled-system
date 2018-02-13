import * as util from './util'
import {
  style,
  pseudoStyle,
  responsiveStyle
} from './util'

// core
const getWidth = n => !util.num(n) || n > 1 ? util.px(n) : (n * 100) + '%'
export const width = responsiveStyle({
  prop: 'width',
  alias: 'w',
  getter: getWidth
})

export const fontSize = responsiveStyle({
  prop: 'fontSize',
  alias: 'f',
  key: 'fontSizes',
  numberToPx: true
})

export const textColor = responsiveStyle({
  prop: 'color',
  key: 'colors',
})

export const bgColor = responsiveStyle({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

export const color = props => ({
  ...textColor(props),
  ...bgColor(props)
})

// typography
export const fontFamily = style({
  prop: 'fontFamily',
  alias: 'font',
  key: 'fonts'
})

export const textAlign = responsiveStyle({
  prop: 'textAlign',
  // for backwards compatibility - will cause bugs when used with alignItems
  alias: 'align'
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
})

export const fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights'
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  numberToPx: true
})

// layout
export const display = responsiveStyle({
  prop: 'display'
})

export const maxWidth = responsiveStyle({
  prop: 'maxWidth',
  key: 'maxWidths',
  numberToPx: true
})

export const minWidth = responsiveStyle({
  prop: 'minWidth',
  key: 'minWidths',
  numberToPx: true
})

export const height = responsiveStyle({
  prop: 'height',
  key: 'heights',
  numberToPx: true
})

export const maxHeight = responsiveStyle({
  prop: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true
})

export const minHeight = responsiveStyle({
  prop: 'minHeight',
  key: 'minHeights',
  numberToPx: true
})

export const sizeWidth = responsiveStyle({
  prop: 'size',
  cssProperty: 'width',
  numberToPx: true
})

export const sizeHeight = responsiveStyle({
  prop: 'size',
  cssProperty: 'height',
  numberToPx: true
})

export const size = props => ({
  ...sizeWidth(props),
  ...sizeHeight(props)
})

export const ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  getter: n => (n * 100) + '%'
})

export const ratio = props => ({
  height: 0,
  ...ratioPadding(props)
})

// flexbox
export const alignItems = responsiveStyle({
  prop: 'alignItems',
  // for backwards compatibility - will cause bugs when used with textAlign
  alias: 'align'
})

export const alignContent = responsiveStyle({
  prop: 'alignContent'
})

export const justifyContent = responsiveStyle({
  prop: 'justifyContent',
  // for backwards compatibility
  alias: 'justify'
})

// for backwards compatibility
const flexWrapShim = n => n === true ? 'wrap' : n
export const flexWrap = responsiveStyle({
  prop: 'flexWrap',
  alias: 'wrap',
  getter: flexWrapShim
})

export const flexDirection = responsiveStyle({
  prop: 'flexDirection'
})

export const flex = responsiveStyle({
  prop: 'flex'
})

export const alignSelf = responsiveStyle({
  prop: 'alignSelf'
})

// borders
export const getBorder = n => util.num(n) && n > 0 ? n + 'px solid' : n

export const border = responsiveStyle({
  prop: 'border',
  key: 'borders',
  getter: getBorder
})

export const borderTop = responsiveStyle({
  prop: 'borderTop',
  key: 'borders',
  getter: getBorder
})

export const borderRight = responsiveStyle({
  prop: 'borderRight',
  key: 'borders',
  getter: getBorder
})

export const borderBottom = responsiveStyle({
  prop: 'borderBottom',
  key: 'borders',
  getter: getBorder
})

export const borderLeft = responsiveStyle({
  prop: 'borderLeft',
  key: 'borders',
  getter: getBorder
})

export const borders = props => ({
  ...border(props),
  ...borderTop(props),
  ...borderRight(props),
  ...borderBottom(props),
  ...borderLeft(props)
})

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors'
})

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  numberToPx: true
})

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
})

// backgrounds
export const background = style({
  prop: 'background'
})

export const backgroundImage = style({
  prop: 'backgroundImage',
  alias: 'bgImage',
  getter: n => `url(${n})`
})

export const backgroundSize = style({
  prop: 'backgroundSize',
  alias: 'bgSize',
})

export const backgroundPosition = style({
  prop: 'backgroundPosition',
  alias: 'bgPosition',
})

// position
export const position = responsiveStyle({
  prop: 'position'
})

export const zIndex = style({
  prop: 'zIndex'
})

export const top = responsiveStyle({
  prop: 'top',
  numberToPx: true
})

export const right = responsiveStyle({
  prop: 'right',
  numberToPx: true
})

export const bottom = responsiveStyle({
  prop: 'bottom',
  numberToPx: true
})

export const left = responsiveStyle({
  prop: 'left',
  numberToPx: true
})

// pseudos
export const hover = pseudoStyle('hover')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const focus = pseudoStyle('focus')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const active = pseudoStyle('active')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const disabled = pseudoStyle('disabled', 'disabledStyle')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

// for backwards-compatibility
// these will be removed in v3
const __DEV__ = (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined')

export { themeGet as theme } from './util'

export const borderWidth = props => {
  if (__DEV__) {
    console.warn('borderWidth is deprecated. Please use the `borders` utility instead')
  }
  return style({
    prop: 'borderWidth',
    cssProperty: 'border',
    key: 'borderWidths',
    getter: getBorder
  })(props)
}
