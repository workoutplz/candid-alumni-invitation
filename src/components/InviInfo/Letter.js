import Card from '../Card/Card';

function Letter() {
  return (
    <Card title="INVITATION">
        <p>
          안녕하세요 Candid Alumni 여러분,<br/><br/>
          Candid의 현재를 함께 만들어 주신 여러분을 위해
          Private Networking Party를 준비했습니다.<br/><br/>
          Candid로 연결된 최고의 Alumni를 만나고,
          더욱 돈독한 사이로 발전되기를 기대합니다.<br/><br/>
          많은 기념품과 경품도 준비되어 있으니,
          귀한 시간 내어 참석해 주시면 감사하겠습니다.<br/><br/>
          <div style={{ textAlign: 'right' }}>Candid 드림</div>
          <br/>
          <small style={{ color: '#aaa', fontSize: '0.8em' }}>
            * 해당 메시지는 초대받은 분께만 전달됩니다.<br/>외부 공유는 삼가해 주시기를 부탁드립니다.
          </small>
        </p>
    </Card>
  );
}

export default Letter;
