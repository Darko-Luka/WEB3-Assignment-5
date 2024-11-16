import { die_values } from "../../../models/src/model/dice";
import { lower_section_keys } from "../../../models/src/model/yahtzee.score";

function ScoreCard() {
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-500">
        <tbody>
          <tr>
            <td className="border border-slate-600 p-1">Upper Section</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-1">Type</td>
            <td className="border border-slate-600 p-1">Target</td>
          </tr>
          {die_values.map((val) => {
            return (
              <tr key={val}>
                <td className="border border-slate-600 p-1">{val}s</td>
                <td className="border border-slate-600 p-1">{3 * val}</td>
              </tr>
            );
          })}
          <tr>
            <td className="border border-slate-600 p-1">Sum</td>
            <td className="border border-slate-600 p-1">63</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-1">Bonus</td>
            <td className="border border-slate-600 p-1">50</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-1">Total</td>
            <td className="border border-slate-600 p-1"></td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-1" colSpan={2}>
              Lower Section
            </td>
          </tr>
          {lower_section_keys.map((key) => {
            return (
              <tr key={key}>
                <td className="border border-slate-600 p-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </td>
                <td className="border border-slate-600 p-1"></td>
              </tr>
            );
          })}
          <tr>
            <td className="border border-slate-600 p-1">Total</td>
            <td className="border border-slate-600 p-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreCard;
