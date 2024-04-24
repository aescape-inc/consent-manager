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
var react_1 = __importStar(require('react'))
var consent_manager_builder_1 = __importDefault(require('../consent-manager-builder'))
var container_1 = __importDefault(require('./container'))
var categories_1 = require('./categories')
var zeroValuePreferences = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null
}
var defaultPreferencesDialogTemplate = {
  headings: {
    allowValue: 'Allow',
    categoryValue: 'Category',
    purposeValue: 'Purpose',
    toolsValue: 'Tools'
  },
  checkboxes: {
    noValue: 'No',
    yesValue: 'Yes'
  },
  actionButtons: {
    cancelValue: 'Cancel',
    saveValue: 'Save'
  },
  cancelDialogButtons: {
    cancelValue: 'Yes, Cancel',
    backValue: 'Go Back'
  },
  categories: [
    {
      key: 'functional',
      name: 'Functional',
      description:
        'To monitor the performance of our site and to enhance your browsing experience.',
      example: 'For example, these tools enable you to communicate with us via live chat.'
    },
    {
      key: 'marketing',
      name: 'Marketing and Analytics',
      description:
        'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.',
      example:
        'For example, we collect information about which pages you visit to help us present more relevant information.'
    },
    {
      key: 'advertising',
      name: 'Advertising',
      description:
        'To personalize and measure the effectiveness of advertising on our site and other websites.',
      example:
        'For example, we may serve you a personalized ad based on the pages you visit on our site.'
    },
    {
      key: 'essential',
      name: 'Essential',
      description: 'We use browser cookies that are necessary for the site to work as intended.',
      example:
        'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
    }
  ]
}
var ConsentManager = /** @class */ (function(_super) {
  __extends(ConsentManager, _super)
  function ConsentManager() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.mergeTemplates = function(newProps, defaultPreferencesDialogTemplate) {
      var headingsMerge = __assign(
        __assign({}, defaultPreferencesDialogTemplate.headings),
        newProps.headings
      )
      var checkboxesMerge = __assign(
        __assign({}, defaultPreferencesDialogTemplate.checkboxes),
        newProps.checkboxes
      )
      var actionButtonsMerge = __assign(
        __assign({}, defaultPreferencesDialogTemplate.actionButtons),
        newProps.actionButtons
      )
      var cancelDialogButtonsMerge = __assign(
        __assign({}, defaultPreferencesDialogTemplate.cancelDialogButtons),
        newProps.cancelDialogButtons
      )
      var categoriesMerge =
        defaultPreferencesDialogTemplate === null || defaultPreferencesDialogTemplate === void 0
          ? void 0
          : defaultPreferencesDialogTemplate.categories.map(function(category) {
              var _a
              return __assign(
                __assign({}, category),
                (_a = newProps === null || newProps === void 0 ? void 0 : newProps.categories) ===
                  null || _a === void 0
                  ? void 0
                  : _a.find(function(c) {
                      return c.key === category.key
                    })
              )
            })
      return {
        headings: headingsMerge,
        checkboxes: checkboxesMerge,
        actionButtons: actionButtonsMerge,
        cancelDialogButtons: cancelDialogButtonsMerge,
        categories: categoriesMerge
      }
    }
    _this.getInitialPreferences = function() {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        customCategories = _a.customCategories
      if (initialPreferences) {
        return initialPreferences
      }
      if (!customCategories) {
        return zeroValuePreferences
      }
      var initialCustomPreferences = {}
      Object.keys(customCategories).forEach(function(category) {
        initialCustomPreferences[category] = null
      })
      return initialCustomPreferences
    }
    _this.handleMapCustomPreferences = function(destinations, preferences) {
      var customCategories = _this.props.customCategories
      var destinationPreferences = {}
      var customPreferences = {}
      if (customCategories) {
        for (var _i = 0, _a = Object.keys(customCategories); _i < _a.length; _i++) {
          var preferenceName = _a[_i]
          var value = preferences[preferenceName]
          if (typeof value === 'boolean' || typeof value === 'string') {
            customPreferences[preferenceName] = value
          } else {
            customPreferences[preferenceName] = true
          }
        }
        destinations.forEach(function(destination) {
          // Mark custom categories
          Object.entries(customCategories).forEach(function(_a) {
            var categoryName = _a[0],
              integrations = _a[1].integrations
            var consentAlreadySetToFalse = destinationPreferences[destination.id] === false
            var shouldSetConsent = integrations.includes(destination.id)
            if (shouldSetConsent && !consentAlreadySetToFalse) {
              destinationPreferences[destination.id] = customPreferences[categoryName]
            }
          })
        })
        return {
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences
        }
      }
      // Default unset preferences to true (for implicit consent)
      for (var _b = 0, _c = Object.keys(preferences); _b < _c.length; _b++) {
        var preferenceName = _c[_b]
        var value = preferences[preferenceName]
        if (typeof value === 'boolean') {
          customPreferences[preferenceName] = value
        } else {
          customPreferences[preferenceName] = true
        }
      }
      var customPrefs = customPreferences
      var _loop_1 = function(destination) {
        // Mark advertising destinations
        if (
          categories_1.ADVERTISING_CATEGORIES.find(function(c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.advertising
        }
        // Mark function destinations
        if (
          categories_1.FUNCTIONAL_CATEGORIES.find(function(c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.functional
        }
        // Fallback to marketing
        if (!(destination.id in destinationPreferences)) {
          destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics
        }
      }
      for (var _d = 0, destinations_1 = destinations; _d < destinations_1.length; _d++) {
        var destination = destinations_1[_d]
        _loop_1(destination)
      }
      return {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences
      }
    }
    return _this
  }
  ConsentManager.prototype.render = function() {
    var _this = this
    var _a = this.props,
      writeKey = _a.writeKey,
      otherWriteKeys = _a.otherWriteKeys,
      shouldRequireConsent = _a.shouldRequireConsent,
      implyConsentOnInteraction = _a.implyConsentOnInteraction,
      cookieDomain = _a.cookieDomain,
      cookieName = _a.cookieName,
      cookieExpires = _a.cookieExpires,
      cookieAttributes = _a.cookieAttributes,
      bannerContent = _a.bannerContent,
      bannerActionsBlock = _a.bannerActionsBlock,
      bannerSubContent = _a.bannerSubContent,
      bannerTextColor = _a.bannerTextColor,
      bannerBackgroundColor = _a.bannerBackgroundColor,
      bannerHideCloseButton = _a.bannerHideCloseButton,
      bannerAsModal = _a.bannerAsModal,
      preferencesDialogTitle = _a.preferencesDialogTitle,
      preferencesDialogContent = _a.preferencesDialogContent,
      cancelDialogTitle = _a.cancelDialogTitle,
      cancelDialogContent = _a.cancelDialogContent,
      customCategories = _a.customCategories,
      defaultDestinationBehavior = _a.defaultDestinationBehavior,
      cdnHost = _a.cdnHost,
      preferencesDialogTemplate = _a.preferencesDialogTemplate,
      onError = _a.onError
    return react_1.default.createElement(
      consent_manager_builder_1.default,
      {
        onError: onError,
        writeKey: writeKey,
        otherWriteKeys: otherWriteKeys,
        shouldRequireConsent: shouldRequireConsent,
        cookieDomain: cookieDomain,
        cookieName: cookieName,
        cookieExpires: cookieExpires,
        cookieAttributes: cookieAttributes,
        initialPreferences: this.getInitialPreferences(),
        mapCustomPreferences: this.handleMapCustomPreferences,
        customCategories: customCategories,
        defaultDestinationBehavior: defaultDestinationBehavior,
        cdnHost: cdnHost
      },
      function(_a) {
        var destinations = _a.destinations,
          customCategories = _a.customCategories,
          newDestinations = _a.newDestinations,
          preferences = _a.preferences,
          isConsentRequired = _a.isConsentRequired,
          setPreferences = _a.setPreferences,
          resetPreferences = _a.resetPreferences,
          saveConsent = _a.saveConsent,
          havePreferencesChanged = _a.havePreferencesChanged,
          workspaceAddedNewDestinations = _a.workspaceAddedNewDestinations
        return react_1.default.createElement(container_1.default, {
          customCategories: customCategories,
          destinations: destinations,
          newDestinations: newDestinations,
          preferences: preferences,
          isConsentRequired: isConsentRequired,
          setPreferences: setPreferences,
          resetPreferences: resetPreferences,
          saveConsent: saveConsent,
          closeBehavior: _this.props.closeBehavior,
          implyConsentOnInteraction:
            implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0
              ? implyConsentOnInteraction
              : ConsentManager.defaultProps.implyConsentOnInteraction,
          bannerContent: bannerContent,
          bannerSubContent: bannerSubContent,
          bannerActionsBlock: bannerActionsBlock,
          bannerHideCloseButton: bannerHideCloseButton,
          bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor,
          bannerBackgroundColor:
            bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor,
          bannerAsModal: bannerAsModal,
          preferencesDialogTitle: preferencesDialogTitle,
          preferencesDialogContent: preferencesDialogContent,
          cancelDialogTitle: cancelDialogTitle,
          cancelDialogContent: cancelDialogContent,
          havePreferencesChanged: havePreferencesChanged,
          defaultDestinationBehavior: defaultDestinationBehavior,
          workspaceAddedNewDestinations: workspaceAddedNewDestinations,
          preferencesDialogTemplate: preferencesDialogTemplate
            ? _this.mergeTemplates(preferencesDialogTemplate, defaultPreferencesDialogTemplate)
            : ConsentManager.defaultProps.preferencesDialogTemplate
        })
      }
    )
  }
  ConsentManager.displayName = 'ConsentManager'
  ConsentManager.defaultProps = {
    otherWriteKeys: [],
    shouldRequireConsent: function() {
      return true
    },
    implyConsentOnInteraction: false,
    onError: undefined,
    cookieDomain: undefined,
    cookieName: undefined,
    cookieExpires: undefined,
    cookieAttributes: {},
    customCategories: undefined,
    bannerActionsBlock: undefined,
    bannerHideCloseButton: false,
    bannerTextColor: '#fff',
    bannerSubContent: 'You can change your preferences at any time.',
    bannerBackgroundColor: '#1f4160',
    preferencesDialogTitle: 'Website Data Collection Preferences',
    cancelDialogTitle: 'Are you sure you want to cancel?',
    defaultDestinationBehavior: 'disable',
    preferencesDialogTemplate: defaultPreferencesDialogTemplate
  }
  return ConsentManager
})(react_1.PureComponent)
exports.default = ConsentManager
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsdUZBQThEO0FBQzlELDBEQUFtQztBQUNuQywyQ0FBNEU7QUFRNUUsSUFBTSxvQkFBb0IsR0FBd0I7SUFDaEQscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFBO0FBRUQsSUFBTSxnQ0FBZ0MsR0FBNkI7SUFDakUsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFLE9BQU87UUFDbkIsYUFBYSxFQUFFLFVBQVU7UUFDekIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsV0FBVyxFQUFFLFFBQVE7UUFDckIsU0FBUyxFQUFFLE1BQU07S0FDbEI7SUFDRCxtQkFBbUIsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsR0FBRyxFQUFFLFlBQVk7WUFDakIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsV0FBVyxFQUNULGlGQUFpRjtZQUNuRixPQUFPLEVBQUUsMkVBQTJFO1NBQ3JGO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFdBQVcsRUFDVCxzSUFBc0k7WUFDeEksT0FBTyxFQUNMLCtHQUErRztTQUNsSDtRQUNEO1lBQ0UsR0FBRyxFQUFFLGFBQWE7WUFDbEIsSUFBSSxFQUFFLGFBQWE7WUFDbkIs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
