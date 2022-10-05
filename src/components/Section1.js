import "bootstrap/dist/css/bootstrap.css";

export default function Section1() {
  return (
    <div className="section1">
      <div className="container d-md-flex justify-content-between">
        <div className="content" style={{ backgroundColor: "#FFFFFF" }}>
          <img
            src="/img/Rectangle 324.png"
            alt="background"
            className="background-img"
          ></img>
          <p className="title">AIエフェクトを体験せよ！</p>
          <p className="text-content">
            クリエイティブな
            <br />
            バスケ動画アプリが登場！
          </p>
          <img src="/img/1 1.png" alt="icon" className="icon-image"></img>
          <div className="wrapper">
            <p className="wrapper-text">
              今すぐ簡単！
              <br />
              無料ダウンロード！
            </p>
            <img
              src="/img/App_Store_Badge 1.png"
              alt="app-store"
              className="wrapper-icon"
            ></img>
          </div>
        </div>
        <img src="/img/Group 25.png" alt="anh111" className="phone-image"></img>
      </div>
    </div>
  );
}
