import Card from '../Card/Card';
import './InviInfo.css';
function Schedule() {
  return (
    <Card title="TIME TABLE">
      <p>2024년 11월 22일(금)<br/>19:00 ~ 21:00</p>
      <br/>
      <table>
        <thead>
          <tr>
            <th>시간</th>
            <th>활동</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="time">19:00 - 19:20</td>
            <td class="activity">Opening,<br/>Candid's Story</td>
          </tr>
          <tr>
            <td class="time">19:20 - 19:40</td>
            <td class="activity">Candidate's Story</td>
          </tr>
          <tr>
            <td class="time">19:40 - 20:40</td>
            <td class="acitivity">Candid Networking Party</td>
          </tr>
          <tr>
            <td class="time">20:40 - 21:00</td>
            <td class="activity">Closing,<br/>Lucky draw</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <small style={{ color: '#aaa', fontSize: '0.9em' }}>
        * 핑거푸드와 음료, 주류(맥주, 와인)가 준비 될 예정입니다.
      </small>
    </Card>
  );
}

export default Schedule;
