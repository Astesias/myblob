function C () {
  if (document.body) {
    var a = document.body,
      b = document.documentElement,
      d = window.innerHeight,
      e = a.scrollHeight
    n = 0 <= document.compatMode.indexOf('CSS') ? b : a
    u = a
    f.keyboardSupport && window.addEventListener('keydown', K, !1)
    D = !0
    if (top != self) E = !0
    else if (e > d && (a.offsetHeight <= d || b.offsetHeight <= d)) {
      var c = !1
      setTimeout(function () {
        c ||
          b.scrollHeight == document.height ||
          ((c = !0),
          setTimeout(function () {
            b.style.height = document.height + 'px'
            c = !1
          }, 500))
      }, 10)
      n.offsetHeight <= d &&
        ((d = document.createElement('div')),
        (d.style.clear = 'both'),
        a.appendChild(d))
    }
    f.fixedBackground ||
      ((a.style.backgroundAttachment = 'scroll'),
      (b.style.backgroundAttachment = 'scroll'))
  }
}
function F (a, b, d, e) {
  e || (e = 1e3)
  L(b, d)
  if (1 != f.accelerationMax) {
    var c = +new Date() - x
    c < f.accelerationDelta &&
      ((c = (1 + 30 / c) / 2),
      1 < c && ((c = Math.min(c, f.accelerationMax)), (b *= c), (d *= c)))
    x = +new Date()
  }
  p.push({
    x: b,
    y: d,
    lastX: 0 > b ? 0.99 : -0.99,
    lastY: 0 > d ? 0.99 : -0.99,
    start: +new Date()
  })
  if (!y) {
    var g = a === document.body,
      h = function (c) {
        c = +new Date()
        for (var q = 0, r = 0, t = 0; t < p.length; t++) {
          var k = p[t],
            l = c - k.start,
            n = l >= f.animationTime,
            m = n ? 1 : l / f.animationTime
          f.pulseAlgorithm &&
            ((l = m),
            1 <= l
              ? (m = 1)
              : 0 >= l
              ? (m = 0)
              : (1 == f.pulseNormalize && (f.pulseNormalize /= G(1)),
                (m = G(l))))
          l = (k.x * m - k.lastX) >> 0
          m = (k.y * m - k.lastY) >> 0
          q += l
          r += m
          k.lastX += l
          k.lastY += m
          n && (p.splice(t, 1), t--)
        }
        g
          ? window.scrollBy(q, r)
          : (q && (a.scrollLeft += q), r && (a.scrollTop += r))
        b || d || (p = [])
        p.length ? H(h, a, e / f.frameRate + 1) : (y = !1)
      }
    H(h, a, 0)
    y = !0
  }
}
function M (a) {
  D || C()
  var b = a.target,
    d = I(b)
  if (
    !d ||
    a.defaultPrevented ||
    'embed' === (u.nodeName || '').toLowerCase() ||
    ('embed' === (b.nodeName || '').toLowerCase() && /\.pdf/i.test(b.src))
  )
    return !0
  var b = a.wheelDeltaX || 0,
    e = a.wheelDeltaY || 0
  b || e || (e = a.wheelDelta || 0)
  var c
  if ((c = !f.touchpadSupport))
    if ((c = e)) {
      c = Math.abs(c)
      h.push(c)
      h.shift()
      clearTimeout(N)
      c = h[0] == h[1] && h[1] == h[2]
      var g = z(h[0], 120) && z(h[1], 120) && z(h[2], 120)
      c = !(c || g)
    } else c = void 0
  if (c) return !0
  1.2 < Math.abs(b) && (b *= f.stepSize / 120)
  1.2 < Math.abs(e) && (e *= f.stepSize / 120)
  F(d, -b, -e)
  a.preventDefault()
}
function K (a) {
  var b = a.target,
    d =
      a.ctrlKey ||
      a.altKey ||
      a.metaKey ||
      (a.shiftKey && a.keyCode !== g.spacebar)
  if (
    /input|textarea|select|embed/i.test(b.nodeName) ||
    b.isContentEditable ||
    a.defaultPrevented ||
    d ||
    ('button' === (b.nodeName || '').toLowerCase() && a.keyCode === g.spacebar)
  )
    return !0
  var e
  e = b = 0
  var d = I(u),
    c = d.clientHeight
  d == document.body && (c = window.innerHeight)
  switch (a.keyCode) {
    case g.up:
      e = -f.arrowScroll
      break
    case g.down:
      e = f.arrowScroll
      break
    case g.spacebar:
      e = a.shiftKey ? 1 : -1
      e = -e * c * 0.9
      break
    case g.pageup:
      e = 0.9 * -c
      break
    case g.pagedown:
      e = 0.9 * c
      break
    case g.home:
      e = -d.scrollTop
      break
    case g.end:
      c = d.scrollHeight - d.scrollTop - c
      e = 0 < c ? c + 10 : 0
      break
    case g.left:
      b = -f.arrowScroll
      break
    case g.right:
      b = f.arrowScroll
      break
    default:
      return !0
  }
  F(d, b, e)
  a.preventDefault()
}
function O (a) {
  u = a.target
}
function A (a, b) {
  for (var d = a.length; d--; ) B[J(a[d])] = b
  return b
}
function I (a) {
  var b = [],
    d = n.scrollHeight
  do {
    var e = B[J(a)]
    if (e) return A(b, e)
    b.push(a)
    if (d === a.scrollHeight) {
      if (!E || n.clientHeight + 10 < d) return A(b, document.body)
    } else if (
      a.clientHeight + 10 < a.scrollHeight &&
      ((overflow = getComputedStyle(a, '').getPropertyValue('overflow-y')),
      'scroll' === overflow || 'auto' === overflow)
    )
      return A(b, a)
  } while ((a = a.parentNode))
}
function L (a, b) {
  a = 0 < a ? 1 : -1
  b = 0 < b ? 1 : -1
  if (v.x !== a || v.y !== b) (v.x = a), (v.y = b), (p = []), (x = 0)
}
function z (a, b) {
  return Math.floor(a / b) == a / b
}
function G (a) {
  var b
  a *= f.pulseScale
  1 > a
    ? (b = a - (1 - Math.exp(-a)))
    : ((b = Math.exp(-1)), --a, (a = 1 - Math.exp(-a)), (b += a * (1 - b)))
  return b * f.pulseNormalize
}
var w = {
    frameRate: 150,
    animationTime: 600,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 6,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 120,
    touchpadSupport: !0,
    fixedBackground: !0,
    excluded: ''
  },
  f = w,
  E = !1,
  v = { x: 0, y: 0 },
  D = !1,
  n = document.documentElement,
  u,
  h = [120, 120, 120],
  g = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  },
  f = w,
  p = [],
  y = !1,
  x = +new Date(),
  B = {}
setInterval(function () {
  B = {}
}, 1e4)
var J = (function () {
    var a = 0
    return function (b) {
      return b.uniqueID || (b.uniqueID = a++)
    }
  })(),
  N,
  H = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (a, b, d) {
        window.setTimeout(a, d || 1e3 / 60)
      }
    )
  })(),
  w = /chrome/i.test(window.navigator.userAgent)
'onmousewheel' in document &&
  w &&
  (window.addEventListener('mousedown', O, !1),
  window.addEventListener('mousewheel', M, { passive: false }),
  window.addEventListener('load', C, !1))
C()
