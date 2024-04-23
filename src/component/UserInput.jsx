export default function UserInput({ stateWithData, hendleGhange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={stateWithData.initialInvestment}
            onChange={(event) =>
              hendleGhange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={stateWithData.annualInvestment}
            onChange={(event) =>
              hendleGhange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input
            type="number"
            required
            value={stateWithData.expectedReturn}
            onChange={(event) =>
              hendleGhange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Durations</label>
          <input
            type="number"
            required
            value={stateWithData.duration}
            onChange={(event) => hendleGhange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
