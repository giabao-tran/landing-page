export default function Section4() {
  return (
    <section style={{ paddingBottom: "120px" }}>
      <div className="container">
        <div>
          <h1 className="section--title">Feature</h1>
          <p className="section--text">Ballerの特徴</p>
        </div>
      </div>
      <div className="container">
        <div className="section4--block section4--block-red">
          <div className="d-flex  align-items-center">
            <img
              src="/img/fearture_1.png"
              alt="anh"
              className="feature--img"
            ></img>
            <p className="fearture--text">
              物理演算エンジンによる自然なエフェクトでリアルを追求！
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section4--block section4--block-yellow">
          <div className="d-flex  align-items-center">
            <img
              src="/img/fearture_2.png"
              alt="anh"
              className="feature--img"
            ></img>
            <p className="fearture--text">
              独自開発のバスケットボール自動認識AI搭載！
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section4--block section4--block-green">
          <div className="d-flex  align-items-center">
            <img
              src="/img/fearture_3.png"
              alt="anh"
              className="feature--img"
            ></img>
            <p className="fearture--text">新作エフェクトが続々アップデート！</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section4--block section4--block-blue">
          <div className="d-flex  align-items-center">
            <img src="/img/pig.png" alt="anh" className="feature--img"></img>
            <p className="fearture--text">基本利用無料！ </p>
          </div>
        </div>
      </div>
    </section>
  );
}
