const calcuteNumber = (type, a, b) => {
    a = Math.round(a);
    b = Math.round(b);
    switch (type) {
      case "SUM":
        return a + b;
        break;
      case "SUBTRACT":
        return b - a;
        break;
      case "DIVIDE":
        if (b === 0) return "Error";
        return a / b;
        break;
      default:
        break;
    }
  };
  module.exports = calcuteNumber;
  