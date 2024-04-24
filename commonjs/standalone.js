'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k]
          }
        })
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function(o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.preferences = exports.inEU = exports.doNotTrack = exports.openConsentManager = exports.version = void 0
var react_1 = __importDefault(require('react'))
var react_dom_1 = __importDefault(require('react-dom'))
var in_eu_1 = __importDefault(require('@segment/in-eu'))
exports.inEU = in_eu_1.default
var in_regions_1 = __importDefault(require('@segment/in-regions'))
var _1 = require('.')
Object.defineProperty(exports, 'openConsentManager', {
  enumerable: true,
  get: function() {
    return _1.openConsentManager
  }
})
Object.defineProperty(exports, 'doNotTrack', {
  enumerable: true,
  get: function() {
    return _1.doNotTrack
  }
})
var preferences = __importStar(require('./consent-manager-builder/preferences'))
exports.preferences = preferences
exports.version = process.env.VERSION
var props = {}
var containerRef
var localWindow = window
if (localWindow.consentManagerConfig && typeof localWindow.consentManagerConfig === 'function') {
  props = localWindow.consentManagerConfig({
    React: react_1.default,
    version: exports.version,
    openConsentManager: _1.openConsentManager,
    doNotTrack: _1.doNotTrack,
    inEU: in_eu_1.default,
    preferences: preferences,
    inRegions: in_regions_1.default
  })
  containerRef = props.container
} else {
  throw new Error('window.consentManagerConfig should be a function')
}
if (!containerRef) {
  throw new Error('ConsentManager: container is required')
}
if (!props.writeKey) {
  throw new Error('ConsentManager: writeKey is required')
}
if (!props.bannerContent) {
  throw new Error('ConsentManager: bannerContent is required')
}
if (!props.preferencesDialogContent) {
  throw new Error('ConsentManager: preferencesDialogContent is required')
}
if (!props.cancelDialogContent) {
  throw new Error('ConsentManager: cancelDialogContent is required')
}
if (typeof props.implyConsentOnInteraction === 'string') {
  props.implyConsentOnInteraction = props.implyConsentOnInteraction === 'true'
}
if (props.closeBehavior !== undefined && typeof props.closeBehavior === 'string') {
  var options = ['accept', 'deny', 'dismiss']
  if (!options.includes(props.closeBehavior)) {
    throw new Error('ConsentManager: closeBehavior should be one of ' + options)
  }
}
var container = document.querySelector(containerRef)
if (!container) {
  throw new Error('ConsentManager: container not found')
}
react_dom_1.default.render(
  react_1.default.createElement(_1.ConsentManager, __assign({}, props)),
  container
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFuZGFsb25lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBeUI7QUFDekIsd0RBQWdDO0FBQ2hDLHlEQUFpQztBQU9RLGVBUGxDLGVBQUksQ0FPa0M7QUFON0MsbUVBQTJDO0FBQzNDLHNCQUFrRTtBQUt6RCxtR0FMZ0IscUJBQWtCLE9BS2hCO0FBQUUsMkZBTGdCLGFBQVUsT0FLaEI7QUFIdkMsaUZBQW9FO0FBR3JCLGtDQUFXO0FBRDdDLFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBO0FBRzFDLElBQUksS0FBSyxHQUFpQyxFQUFFLENBQUE7QUFDNUMsSUFBSSxZQUFnQyxDQUFBO0FBRXBDLElBQU0sV0FBVyxHQUFHLE1BQXdDLENBQUE7QUFFNUQsSUFBSSxXQUFXLENBQUMsb0JBQW9CLElBQUksT0FBTyxXQUFXLENBQUMsb0JBQW9CLEtBQUssVUFBVSxFQUFFO0lBQzlGLEtBQUssR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsS0FBSyxpQkFBQTtRQUNMLE9BQU8saUJBQUE7UUFDUCxrQkFBa0IsdUJBQUE7UUFDbEIsVUFBVSxlQUFBO1FBQ1YsSUFBSSxpQkFBQTtRQUNKLFdBQVcsYUFBQTtRQUNYLFNBQVMsc0JBQUE7S0FDVixDQUFDLENBQUE7SUFDRixZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtDQUMvQjtLQUFNO0lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFBO0NBQ3BFO0FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Q0FDekQ7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtJQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7Q0FDeEQ7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7Q0FDN0Q7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO0lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQTtDQUN4RTtBQUVELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUU7SUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO0NBQ25FO0FBRUQsSUFBSSxPQUFPLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxRQUFRLEVBQUU7SUFDdkQsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxNQUFNLENBQUE7Q0FDN0U7QUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUU7SUFDaEYsSUFBTSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRTdDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFrRCxPQUFTLENBQUMsQ0FBQTtLQUM3RTtDQUNGO0FBRUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN0RCxJQUFJLENBQUMsU0FBUyxFQUFFO0lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0NBQ3ZEO0FBRUQsbUJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsaUJBQWMsZUFBTSxLQUE2QixFQUFJLEVBQUUsU0FBUyxDQUFDLENBQUEifQ==
