export default function Section5() {
  return (
    <section style={{ backgroundColor: "#FFF7F3" }}>
      <div className="container">
        <div>
          <h1 className="section--title">Step</h1>
          <p className="section--text">４ステップで簡単に挑戦</p>
        </div>
      </div>

      <div className="container">
        <div className="row gx-">
          <div className="col-md-3 section5--column">
            <div className="section5--step">
              <span>Step 1</span>
            </div>
            <img src="/img/Step1.png" alt="phone"></img>
            <p className="section5--text">
              まずはApp Storeから無料でダウンロード！
            </p>
          </div>
          <div className="col-md-3 section5--column">
            <div className="section5--step">
              <span>Step 2</span>
            </div>
            <img src="/img/step2.png" alt="phone"></img>
            <p className="section5--text">
              バスケットボールを使って動画を撮影しよう！保存した動画にも対応しています。
            </p>
          </div>
          <div className="col-md-3 section5--column">
            <div className="section5--step">
              <span>Step 3</span>
            </div>
            <img src="/img/Step3.png" alt="phone"></img>
            <p className="section5--text">
              好きなエフェクトを選択しよう！BGMも追加できます。
            </p>
          </div>
          <div className="col-md-3 section5--column">
            <div className="section5--step">
              <span>Step 4</span>
            </div>
            <img src="/img/Step4.png" alt="phone"></img>
            <p className="section5--text">
              バスケットボールを使って動画を撮影しよう！保存した動画にも対応しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
