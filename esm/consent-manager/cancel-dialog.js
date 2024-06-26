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
import React, { PureComponent } from 'react'
import Dialog from './dialog'
import { DefaultButton, RedButton } from './buttons'
var CancelDialog = /** @class */ (function(_super) {
  __extends(CancelDialog, _super)
  function CancelDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleSubmit = function(e) {
      var onConfirm = _this.props.onConfirm
      e.preventDefault()
      onConfirm()
    }
    _this.handleEsc = function(e) {
      var onConfirm = _this.props.onConfirm
      // Esc key
      if (e.keyCode === 27) {
        onConfirm()
      }
    }
    return _this
  }
  CancelDialog.prototype.render = function() {
    var _a = this.props,
      innerRef = _a.innerRef,
      onBack = _a.onBack,
      title = _a.title,
      content = _a.content,
      preferencesDialogTemplate = _a.preferencesDialogTemplate
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(
        DefaultButton,
        { id: 'segmentio_backDialogBtn', type: 'button', onClick: onBack },
        preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
          ? void 0
          : preferencesDialogTemplate.cancelDialogButtons.backValue
      ),
      React.createElement(
        RedButton,
        { id: 'segmentio_cancelDialogBtn', type: 'submit' },
        preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
          ? void 0
          : preferencesDialogTemplate.cancelDialogButtons.cancelValue
      )
    )
    return React.createElement(
      Dialog,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onSubmit: this.handleSubmit,
        width: '500px'
      },
      content
    )
  }
  CancelDialog.prototype.componentDidMount = function() {
    document.body.addEventListener('keydown', this.handleEsc, false)
  }
  CancelDialog.prototype.componentWillUnmount = function() {
    document.body.removeEventListener('keydown', this.handleEsc, false)
  }
  CancelDialog.displayName = 'CancelDialog'
  return CancelDialog
})(PureComponent)
export default CancelDialog
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLWRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvY2FuY2VsLWRpYWxvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQVlwRDtJQUEwQyxnQ0FBb0I7SUFBOUQ7UUFBQSxxRUFxREM7UUFmQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsU0FBUyxHQUFLLEtBQUksQ0FBQyxLQUFLLFVBQWYsQ0FBZTtZQUVoQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDbEIsU0FBUyxFQUFFLENBQUE7UUFDYixDQUFDLENBQUE7UUFFRCxlQUFTLEdBQUcsVUFBQyxDQUFnQjtZQUNuQixJQUFBLFNBQVMsR0FBSyxLQUFJLENBQUMsS0FBSyxVQUFmLENBQWU7WUFFaEMsVUFBVTtZQUNWLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQ3BCLFNBQVMsRUFBRSxDQUFBO2FBQ1o7UUFDSCxDQUFDLENBQUE7O0lBQ0gsQ0FBQztJQWxEQyw2QkFBTSxHQUFOO1FBQ1EsSUFBQSxLQUFrRSxJQUFJLENBQUMsS0FBSyxFQUExRSxRQUFRLGNBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSx5QkFBeUIsK0JBQWUsQ0FBQTtRQUVsRixJQUFNLE9BQU8sR0FBRyxDQUNkO1lBQ0Usb0JBQUMsYUFBYSxJQUFDLEVBQUUsRUFBQyx5QkFBeUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxNQUFNLElBQ3RFLHlCQUF5QixhQUF6Qix5QkFBeUIsdUJBQXpCLHlCQUF5QixDQUFFLG1CQUFtQixDQUFFLFNBQVMsQ0FDNUM7WUFDaEIsb0JBQUMsU0FBUyxJQUFDLEVBQUUsRUFBQywyQkFBMkIsRUFBQyxJQUFJLEVBQUMsUUFBUSxJQUNwRCx5QkFBeUIsYUFBekIseUJBQXlCLHVCQUF6Qix5QkFBeUIsQ0FBRSxtQkFBbUIsQ0FBRSxXQUFXLENBQ2xELENBQ1IsQ0FDUCxDQUFBO1FBRUQsT0FBTyxDQUNMLG9CQUFDLE1BQU0sSUFDTCxRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUMzQixLQUFLLEVBQUMsT0FBTyxJQUVaLE9BQU8sQ0FDRCxDQUNWLENBQUE7SUFDSCxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNyRSxDQUFDO0lBbkNNLHdCQUFXLEdBQUcsY0FBYyxDQUFBO0lBb0RyQyxtQkFBQztDQUFBLEFBckRELENBQTBDLGFBQWEsR0FxRHREO2VBckRvQixZQUFZIn0=
