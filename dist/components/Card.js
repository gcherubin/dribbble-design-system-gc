"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '600px',
      height: '710px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 12,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    style: {
      alignSelf: 'stretch',
      flex: '1 1 0'
    },
    src: props.imgUrl
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Helvetica',
      fontWeight: '500',
      wordWrap: 'break-word'
    }
  }, props.productTitle), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#6D6D6D',
      fontSize: 16,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      wordWrap: 'break-word'
    }
  }, props.productDesc)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Helvetica',
      fontWeight: '500',
      wordWrap: 'break-word'
    }
  }, props.fullPrice), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#6D6D6D',
      fontSize: 16,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      textDecoration: 'line-through',
      wordWrap: 'break-word'
    }
  }, props.discountPrice)));
};
var _default = Card;
exports.default = _default;