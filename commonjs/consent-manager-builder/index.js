'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var analytics_1 = __importDefault(require('./analytics'))
var fetch_destinations_1 = __importDefault(require('./fetch-destinations'))
var preferences_1 = require('./preferences')
function getNewDestinations(destinations, preferences) {
  var newDestinations = []
  // If there are no preferences then all destinations are new
  if (!preferences) {
    return destinations
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    if (preferences[destination.id] === undefined) {
      newDestinations.push(destination)
    }
  }
  return newDestinations
}
var DEFAULT_CATEGORIES = {
  functional: false,
  marketingAndAnalytics: false,
  advertising: false,
  essential: false
}
var ConsentManagerBuilder = /** @class */ (function(_super) {
  __extends(ConsentManagerBuilder, _super)
  function ConsentManagerBuilder() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      isLoading: true,
      destinations: [],
      newDestinations: [],
      preferences: {},
      destinationPreferences: {},
      isConsentRequired: true,
      havePreferencesChanged: false,
      workspaceAddedNewDestinations: false,
      useDefaultCategories: false
    }
    _this.initialise = function() {
      return __awaiter(_this, void 0, void 0, function() {
        var _a,
          writeKey,
          _b,
          otherWriteKeys,
          _c,
          shouldRequireConsent,
          initialPreferences,
          mapCustomPreferences,
          defaultDestinationBehavior,
          cookieName,
          _d,
          cdnHost,
          _e,
          shouldReload,
          _f,
          devMode,
          _g,
          useDefaultCategories,
          _h,
          destinationPreferences,
          customPreferences,
          _j,
          isConsentRequired,
          destinations,
          newDestinations,
          workspaceAddedNewDestinations,
          preferences,
          initialPrefencesHaveValue,
          emptyCustomPreferecences,
          mapped
        return __generator(this, function(_k) {
          switch (_k.label) {
            case 0:
              ;(_a = this.props),
                (writeKey = _a.writeKey),
                (_b = _a.otherWriteKeys),
                (otherWriteKeys =
                  _b === void 0 ? ConsentManagerBuilder.defaultProps.otherWriteKeys : _b),
                (_c = _a.shouldRequireConsent),
                (shouldRequireConsent =
                  _c === void 0 ? ConsentManagerBuilder.defaultProps.shouldRequireConsent : _c),
                (initialPreferences = _a.initialPreferences),
                (mapCustomPreferences = _a.mapCustomPreferences),
                (defaultDestinationBehavior = _a.defaultDestinationBehavior),
                (cookieName = _a.cookieName),
                (_d = _a.cdnHost),
                (cdnHost = _d === void 0 ? ConsentManagerBuilder.defaultProps.cdnHost : _d),
                (_e = _a.shouldReload),
                (shouldReload =
                  _e === void 0 ? ConsentManagerBuilder.defaultProps.shouldReload : _e),
                (_f = _a.devMode),
                (devMode = _f === void 0 ? ConsentManagerBuilder.defaultProps.devMode : _f),
                (_g = _a.useDefaultCategories),
                (useDefaultCategories =
                  _g === void 0 ? ConsentManagerBuilder.defaultProps.useDefaultCategories : _g)
              ;(_h = preferences_1.loadPreferences(cookieName)),
                (destinationPreferences = _h.destinationPreferences),
                (customPreferences = _h.customPreferences)
              return [
                4 /*yield*/,
                Promise.all([
                  shouldRequireConsent(),
                  fetch_destinations_1.default(cdnHost, __spreadArrays([writeKey], otherWriteKeys))
                ])
              ]
            case 1:
              ;(_j = _k.sent()), (isConsentRequired = _j[0]), (destinations = _j[1])
              newDestinations = getNewDestinations(destinations, destinationPreferences || {})
              workspaceAddedNewDestinations =
                destinationPreferences &&
                Object.keys(destinationPreferences).length > 0 &&
                newDestinations.length > 0
              initialPrefencesHaveValue = Object.values(initialPreferences || {}).some(function(v) {
                return v === true || v === false || v === 'N/A'
              })
              emptyCustomPreferecences = Object.values(customPreferences || {}).every(function(v) {
                return v === null || v === undefined || v === 'N/A'
              })
              if (mapCustomPreferences) {
                preferences = useDefaultCategories
                  ? DEFAULT_CATEGORIES
                  : customPreferences || initialPreferences || {}
                if (
                  (initialPrefencesHaveValue && emptyCustomPreferecences) ||
                  (defaultDestinationBehavior === 'imply' && workspaceAddedNewDestinations)
                ) {
                  mapped = mapCustomPreferences(destinations, preferences)
                  destinationPreferences = mapped.destinationPreferences
                  customPreferences = mapped.customPreferences
                  preferences = customPreferences
                }
              } else {
                preferences = useDefaultCategories
                  ? DEFAULT_CATEGORIES
                  : destinationPreferences || initialPreferences
              }
              analytics_1.default({
                writeKey: writeKey,
                destinations: destinations,
                destinationPreferences: destinationPreferences,
                isConsentRequired: isConsentRequired,
                shouldReload: shouldReload,
                devMode: devMode,
                defaultDestinationBehavior: defaultDestinationBehavior,
                categoryPreferences: preferences
              })
              this.setState({
                isLoading: false,
                destinations: destinations,
                newDestinations: newDestinations,
                preferences: preferences,
                isConsentRequired: isConsentRequired,
                destinationPreferences: destinationPreferences,
                workspaceAddedNewDestinations: Boolean(workspaceAddedNewDestinations)
              })
              return [2 /*return*/]
          }
        })
      })
    }
    _this.handleSetPreferences = function(newPreferences) {
      _this.setState(function(prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        })
        return __assign(__assign({}, prevState), {
          preferences: preferences,
          havePreferencesChanged: true
        })
      })
    }
    _this.handleResetPreferences = function() {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        mapCustomPreferences = _a.mapCustomPreferences,
        cookieName = _a.cookieName
      var _b = preferences_1.loadPreferences(cookieName),
        destinationPreferences = _b.destinationPreferences,
        customPreferences = _b.customPreferences
      var preferences
      if (mapCustomPreferences) {
        preferences = customPreferences || initialPreferences
      } else {
        preferences = destinationPreferences || initialPreferences
      }
      _this.setState({ preferences: preferences })
    }
    _this.handleSaveConsent = function(newPreferences, shouldReload, devMode) {
      var _a = _this.props,
        writeKey = _a.writeKey,
        cookieDomain = _a.cookieDomain,
        cookieName = _a.cookieName,
        cookieExpires = _a.cookieExpires,
        cookieAttributes = _a.cookieAttributes,
        mapCustomPreferences = _a.mapCustomPreferences,
        defaultDestinationBehavior = _a.defaultDestinationBehavior
      _this.setState(function(prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences,
          isConsentRequired = prevState.isConsentRequired
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        })
        var destinationPreferences
        var customPreferences
        if (mapCustomPreferences) {
          var custom = mapCustomPreferences(destinations, preferences)
          destinationPreferences = custom.destinationPreferences
          customPreferences = custom.customPreferences
          if (customPreferences) {
            // Allow the customPreferences to be updated from mapCustomPreferences
            preferences = customPreferences
          } else {
            // Make returning the customPreferences from mapCustomPreferences optional
            customPreferences = preferences
          }
        } else {
          destinationPreferences = preferences
        }
        var newDestinations = getNewDestinations(destinations, destinationPreferences)
        if (
          prevState.havePreferencesChanged ||
          newDestinations.length > 0 ||
          typeof newPreferences === 'boolean'
        ) {
          shouldReload = true
        }
        preferences_1.savePreferences({
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences,
          cookieDomain: cookieDomain,
          cookieName: cookieName,
          cookieExpires: cookieExpires,
          cookieAttributes: cookieAttributes
        })
        analytics_1.default({
          writeKey: writeKey,
          destinations: destinations,
          destinationPreferences: destinationPreferences,
          isConsentRequired: isConsentRequired,
          shouldReload: shouldReload,
          devMode: devMode,
          defaultDestinationBehavior: defaultDestinationBehavior,
          categoryPreferences: customPreferences
        })
        return __assign(__assign({}, prevState), {
          destinationPreferences: destinationPreferences,
          preferences: preferences,
          newDestinations: newDestinations
        })
      })
    }
    _this.mergePreferences = function(args) {
      var destinations = args.destinations,
        existingPreferences = args.existingPreferences,
        newPreferences = args.newPreferences
      var preferences
      if (typeof newPreferences === 'boolean') {
        var destinationPreferences = {}
        for (var _i = 0, destinations_2 = destinations; _i < destinations_2.length; _i++) {
          var destination = destinations_2[_i]
          destinationPreferences[destination.id] = newPreferences
        }
        preferences = destinationPreferences
      } else if (newPreferences) {
        preferences = __assign(__assign({}, existingPreferences), newPreferences)
      } else {
        preferences = existingPreferences
      }
      return preferences
    }
    return _this
  }
  ConsentManagerBuilder.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      customCategories = _a.customCategories
    var _b = this.state,
      isLoading = _b.isLoading,
      destinations = _b.destinations,
      preferences = _b.preferences,
      newDestinations = _b.newDestinations,
      isConsentRequired = _b.isConsentRequired,
      havePreferencesChanged = _b.havePreferencesChanged,
      workspaceAddedNewDestinations = _b.workspaceAddedNewDestinations,
      destinationPreferences = _b.destinationPreferences
    if (isLoading) {
      return null
    }
    return children({
      destinations: destinations,
      customCategories: customCategories,
      newDestinations: newDestinations,
      preferences: preferences,
      isConsentRequired: isConsentRequired,
      havePreferencesChanged: havePreferencesChanged,
      workspaceAddedNewDestinations: workspaceAddedNewDestinations,
      destinationPreferences: destinationPreferences,
      setPreferences: this.handleSetPreferences,
      resetPreferences: this.handleResetPreferences,
      saveConsent: this.handleSaveConsent
    })
  }
  ConsentManagerBuilder.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      var onError, e_1
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            onError = this.props.onError
            if (!(onError && typeof onError === 'function')) return [3 /*break*/, 6]
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, , 5])
            return [4 /*yield*/, this.initialise()]
          case 2:
            _a.sent()
            return [3 /*break*/, 5]
          case 3:
            e_1 = _a.sent()
            return [4 /*yield*/, onError(e_1)]
          case 4:
            _a.sent()
            return [3 /*break*/, 5]
          case 5:
            return [3 /*break*/, 8]
          case 6:
            return [4 /*yield*/, this.initialise()]
          case 7:
            _a.sent()
            _a.label = 8
          case 8:
            return [2 /*return*/]
        }
      })
    })
  }
  ConsentManagerBuilder.displayName = 'ConsentManagerBuilder'
  ConsentManagerBuilder.defaultProps = {
    otherWriteKeys: [],
    onError: undefined,
    shouldRequireConsent: function() {
      return true
    },
    initialPreferences: {},
    cdnHost: 'analytics.aescape.com',
    shouldReload: true,
    devMode: false,
    useDefaultCategories: false
  }
  return ConsentManagerBuilder
})(react_1.Component)
exports.default = ConsentManagerBuilder
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUFpQztBQU9qQywwREFBb0Q7QUFDcEQsNEVBQW9EO0FBQ3BELDZDQUFnRTtBQUVoRSxTQUFTLGtCQUFrQixDQUFDLFlBQTJCLEVBQUUsV0FBZ0M7SUFDdkYsSUFBTSxlQUFlLEdBQWtCLEVBQUUsQ0FBQTtJQUV6Qyw0REFBNEQ7SUFDNUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLFlBQVksQ0FBQTtLQUNwQjtJQUVELEtBQTBCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO1FBQW5DLElBQU0sV0FBVyxxQkFBQTtRQUNwQixJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzdDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDbEM7S0FDRjtJQUVELE9BQU8sZUFBZSxDQUFBO0FBQ3hCLENBQUM7QUE4R0QsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixVQUFVLEVBQUUsS0FBSztJQUNqQixxQkFBcUIsRUFBRSxLQUFLO0lBQzVCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUE7QUFFRDtJQUFtRCx5Q0FBdUI7SUFBMUU7UUFBQSxxRUFzUkM7UUF4UUMsV0FBSyxHQUFHO1lBQ04sU0FBUyxFQUFFLElBQUk7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixlQUFlLEVBQUUsRUFBRTtZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUUsSUFB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
