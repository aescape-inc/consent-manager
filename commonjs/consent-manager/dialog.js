'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
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
var react_dom_1 = __importDefault(require('react-dom'))
var styled_1 = __importDefault(require('@emotion/styled'))
var react_2 = require('@emotion/react')
var nanoid_1 = __importDefault(require('nanoid'))
var font_styles_1 = __importDefault(require('./font-styles'))
var ANIMATION_DURATION = '200ms'
var ANIMATION_EASING = 'cubic-bezier(0.0, 0.0, 0.2, 1)'
var Overlay = styled_1.default('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n'
      ],
      [
        '\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n'
      ]
    ))
)
var openAnimation = react_2.keyframes(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n'
      ],
      [
        '\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n'
      ]
    ))
)
var Root = styled_1.default('section')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ',
        ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ',
        ' ',
        ' ',
        ' both;\n'
      ],
      [
        '\n  ',
        ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ',
        ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ',
        ' ',
        ' ',
        ' both;\n'
      ]
    )),
  font_styles_1.default,
  function(props) {
    return props.width
  },
  openAnimation,
  ANIMATION_DURATION,
  ANIMATION_EASING
)
var Form = styled_1.default('form')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n'],
      ['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n']
    ))
)
var Header = styled_1.default('div')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n'
      ],
      [
        '\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n'
      ]
    ))
)
var Title = styled_1.default('h2')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n'
      ],
      [
        '\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n'
      ]
    ))
)
var HeaderCancelButton = styled_1.default('button')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ],
      [
        '\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ]
    ))
)
var Content = styled_1.default('div')(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n'
      ],
      [
        '\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n'
      ]
    ))
)
var Buttons = styled_1.default('div')(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      ['\n  padding: 16px;\n  text-align: right;\n'],
      ['\n  padding: 16px;\n  text-align: right;\n']
    ))
)
var Dialog = /** @class */ (function(_super) {
  __extends(Dialog, _super)
  function Dialog(props) {
    var _this = _super.call(this, props) || this
    _this.handleRootRef = function(node) {
      _this.root = node
    }
    _this.handleFormRef = function(node) {
      _this.form = node
    }
    _this.handleOverlayClick = function(e) {
      var onCancel = _this.props.onCancel
      // Ignore propogated clicks from inside the dialog
      if (onCancel && _this.root && !_this.root.contains(e.target)) {
        onCancel()
      }
    }
    _this.handleEsc = function(e) {
      var onCancel = _this.props.onCancel
      // Esc key
      if (onCancel && e.keyCode === 27) {
        onCancel()
      }
    }
    _this.titleId = nanoid_1.default()
    _this.container = document.createElement('div')
    _this.container.setAttribute('data-consent-manager-dialog', '')
    return _this
  }
  Dialog.prototype.render = function() {
    var _a = this.props,
      onCancel = _a.onCancel,
      onSubmit = _a.onSubmit,
      title = _a.title,
      children = _a.children,
      buttons = _a.buttons,
      width = _a.width
    var dialog = react_1.default.createElement(
      Overlay,
      { id: 'segmentio_overlayDialog', onClick: this.handleOverlayClick },
      react_1.default.createElement(
        Root,
        {
          id: 'segmentio_rootDialog',
          ref: this.handleRootRef,
          role: 'dialog',
          'aria-modal': true,
          'aria-labelledby': this.titleId,
          width: width
        },
        react_1.default.createElement(
          Header,
          { id: 'segmentio_headerDialog' },
          react_1.default.createElement(Title, { id: this.titleId }, title),
          onCancel &&
            react_1.default.createElement(
              HeaderCancelButton,
              {
                id: 'segmentio_headerCancelBtn',
                onClick: onCancel,
                title: 'Cancel',
                'aria-label': 'Cancel'
              },
              '\u2715'
            )
        ),
        react_1.default.createElement(
          Form,
          {
            id: 'preferenceDialogForm_' + this.titleId,
            ref: this.handleFormRef,
            onSubmit: onSubmit
          },
          react_1.default.createElement(Content, { id: 'segmentio_contentDialog' }, children),
          react_1.default.createElement(Buttons, { id: 'segmentio_buttonsDialog' }, buttons)
        )
      )
    )
    return react_dom_1.default.createPortal(dialog, this.container)
  }
  Dialog.prototype.componentDidMount = function() {
    var innerRef = this.props.innerRef
    if (this.form) {
      var input = this.form.querySelector('input,button')
      if (input) {
        input.focus()
      }
    }
    document.body.appendChild(this.container)
    document.body.addEventListener('keydown', this.handleEsc, false)
    document.body.style.overflow = 'hidden'
    innerRef(this.container)
  }
  Dialog.prototype.componentWillUnmount = function() {
    var innerRef = this.props.innerRef
    document.body.removeEventListener('keydown', this.handleEsc, false)
    document.body.style.overflow = ''
    document.body.removeChild(this.container)
    innerRef(null)
  }
  Dialog.displayName = 'Dialog'
  Dialog.defaultProps = {
    onCancel: undefined,
    width: '750px'
  }
  return Dialog
})(react_1.PureComponent)
exports.default = Dialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9kaWFsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHdEQUFnQztBQUNoQywyREFBb0M7QUFDcEMsd0NBQTBDO0FBRTFDLGtEQUEyQjtBQUMzQiw4REFBc0M7QUFFdEMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUE7QUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxnQ0FBZ0MsQ0FBQTtBQUV6RCxJQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLEtBQUssQ0FBQyw4UUFBQSwyTUFXNUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUcsaUJBQVMsMkxBQUEsd0hBUzlCLElBQUEsQ0FBQTtBQU1ELElBQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLGdUQUFXLE1BQ3JDLEVBQVUsK0hBS0gsRUFBb0IsOEVBSWhCLEVBQWEsR0FBSSxFQUFrQixHQUFJLEVBQWdCLFVBQ3JFLEtBVkcscUJBQVUsRUFLSCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxFQUloQixhQUFhLEVBQUksa0JBQWtCLEVBQUksZ0JBQWdCLENBQ3JFLENBQUE7QUFFRCxJQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxzSUFBQSxtRUFJMUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsb1BBQUEsaUxBTzNCLElBQUEsQ0FBQTtBQUVELElBQU0sS0FBSyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLHNLQUFBLG1HQU16QixJQUFBLENBQUE7QUFFRCxJQUFNLGtCQUFrQixHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLDhOQUFBLDJKQVMxQyxJQUFBLENBQUE7QUFF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
