import { calculateInvestmentResults } from "..//util/investment";
import { formatter } from "../util/investment";
export default function Results({ stateWithData }) {
  const resultData = calculateInvestmentResults(stateWithData);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interests (Year)</th>
          <th>Total Interests</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map(
          ({ annualInvestment, interest, valueEndOfYear, year }) => {
            const totalInterests =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterests;
            return (
              <tr key={formatter.format(year)}>
                <td>{formatter.format(year)}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterests)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
