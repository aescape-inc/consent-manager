'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function getConsentMiddleware(
  destinationPreferences,
  categoryPreferences,
  defaultDestinationBehavior
) {
  return function(_a) {
    var payload = _a.payload,
      next = _a.next
    payload.obj.context.consent = {
      defaultDestinationBehavior: defaultDestinationBehavior,
      categoryPreferences: categoryPreferences,
      destinationPreferences: destinationPreferences
    }
    next(payload)
  }
}
function conditionallyLoadAnalytics(_a) {
  var writeKey = _a.writeKey,
    destinations = _a.destinations,
    destinationPreferences = _a.destinationPreferences,
    isConsentRequired = _a.isConsentRequired,
    _b = _a.shouldReload,
    shouldReload = _b === void 0 ? true : _b,
    _c = _a.devMode,
    devMode = _c === void 0 ? false : _c,
    defaultDestinationBehavior = _a.defaultDestinationBehavior,
    categoryPreferences = _a.categoryPreferences
  var wd = window
  var integrations = { All: false, 'Segment.io': { apiHost: 'tracking.aescape.com/v1' } }
  var isAnythingEnabled = false
  if (!destinationPreferences) {
    if (isConsentRequired) {
      return
    }
    // Load a.js normally when consent isn't required and there's no preferences
    if (!wd.analytics.initialized) {
      wd.analytics.load(writeKey, {
        integrations: { 'Segment.io': { apiHost: 'tracking.aescape.com/v1' } }
      })
    }
    return
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    // Was a preference explicitly set on this destination?
    var explicitPreference = destination.id in destinationPreferences
    if (!explicitPreference && defaultDestinationBehavior === 'enable') {
      integrations[destination.id] = true
      continue
    }
    var isEnabled = Boolean(destinationPreferences[destination.id])
    if (isEnabled) {
      isAnythingEnabled = true
    }
    integrations[destination.id] = isEnabled
  }
  // Reload the page if the trackers have already been initialised so that
  // the user's new preferences can take affect
  if (wd.analytics && wd.analytics.initialized) {
    if (shouldReload) {
      window.location.reload()
    }
    return
  }
  if (devMode) {
    return
  }
  // Don't load a.js at all if nothing has been enabled
  if (isAnythingEnabled) {
    var middleware = getConsentMiddleware(
      destinationPreferences,
      categoryPreferences,
      defaultDestinationBehavior
    )
    // @ts-ignore: Analytics.JS type should be updated with addSourceMiddleware
    wd.analytics.addSourceMiddleware(middleware)
    wd.analytics.load(writeKey, { integrations: integrations })
  }
}
exports.default = conditionallyLoadAnalytics
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyL2FuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW1CQSxTQUFTLG9CQUFvQixDQUMzQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLDBCQUEwQjtJQUUxQixPQUFPLFVBQUMsRUFBaUI7WUFBZixPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHO1lBQzVCLDBCQUEwQiw0QkFBQTtZQUMxQixtQkFBbUIscUJBQUE7WUFDbkIsc0JBQXNCLHdCQUFBO1NBQ3ZCLENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDZixDQUFDLENBQUE7QUFDSCxDQUFDO0FBRUQsU0FBd0IsMEJBQTBCLENBQUMsRUFTakM7UUFSaEIsUUFBUSxjQUFBLEVBQ1IsWUFBWSxrQkFBQSxFQUNaLHNCQUFzQiw0QkFBQSxFQUN0QixpQkFBaUIsdUJBQUEsRUFDakIsb0JBQW1CLEVBQW5CLFlBQVksbUJBQUcsSUFBSSxLQUFBLEVBQ25CLGVBQWUsRUFBZixPQUFPLG1CQUFHLEtBQUssS0FBQSxFQUNmLDBCQUEwQixnQ0FBQSxFQUMxQixtQkFBbUIseUJBQUE7SUFFbkIsSUFBTSxFQUFFLEdBQUcsTUFBdUIsQ0FBQTtJQUNsQyxJQUFNLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLEVBQUUsQ0FBQTtJQUN6RixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQTtJQUU3QixJQUFJLENBQUMsc0JBQXNCLEVBQUU7UUFDM0IsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixPQUFNO1NBQ1A7UUFFRCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFBO1NBQ3RHO1FBQ0QsT0FBTTtLQUNQO0lBRUQsS0FBMEIsVUFBWSxFQUFaLDZCQUFZLEVBQVosMEJBQVksRUFBWixJQUFZLEVBQUU7UUFBbkMsSUFBTSxXQUFXLHFCQUFBO1FBQ3BCLHVEQUF1RDtRQUN2RCxJQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxFQUFFLElBQUksc0JBQXNCLENBQUE7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLDBCQUEwQixLQUFLLFFBQVEsRUFBRTtZQUNsRSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQTtZQUNuQyxTQUFRO1NBQ1Q7UUFFRCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakUsSUFBSSxTQUFTLEVBQUU7WUFDYixpQkFBaUIsR0FBRyxJQUFJLENBQUE7U0FDekI7UUFDRCxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtLQUN6QztJQUVELHdFQUF3RTtJQUN4RSw2Q0FBNkM7SUFDN0MsSUFBSSxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1FBQzVDLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDekI7UUFDRCxPQUFNO0tBQ1A7SUFFRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU07S0FDUDtJQUVELHFEQUFxRDtJQUNyRCxJQUFJLGlCQUFpQixFQUFFO1FBQ3JCLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUNyQyxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLDBCQUEwQixDQUMzQixDQUFBO1FBQ0QsMkVBQTJFO1FBQzNFLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFNUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFBO0tBQzlDO0FBQ0gsQ0FBQztBQWxFRCw2Q0FrRUMifQ==
