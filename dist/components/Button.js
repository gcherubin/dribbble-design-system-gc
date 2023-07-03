"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    type,
    text
  } = _ref;
  const buttonStyle = "text-base font-medium font-sans rounded-full min-w-[374px] h-16 border m-12";
  const primaryStyle = "hover:bg-zinc-500 hover:border-zinc-500 bg-black text-white border-black";
  const secondaryStyle = "hover:bg-white hover:border-black bg-white text-black border-slate-300";
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(buttonStyle, " ").concat(type === "primary" ? primaryStyle : secondaryStyle)
  }, text);
};
var _default = Button;
exports.default = _default;