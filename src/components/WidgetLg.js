import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Waiting list members and status</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date of application</th>
          <th className="widgetLgTh">Application fee</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/thumb/men/13.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Banadzem Berinyny Valery</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$60.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/thumb/women/12.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Morgan Roberts</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$60.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/thumb/women/10.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nancy Banin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$75.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/thumb/women/1.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lopez Lolita</span>
          </td>
          <td className="widgetLgDate">9 Jun 2021</td>
          <td className="widgetLgAmount">$80.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
