import logo from "../assets/investment-calculator-logo.png";
export const Header = function () {
  return (
    <header id="header">
      <img src={logo} alt="Investment-calculator" />
      <h1> Investment calculator</h1>
    </header>
  );
};
