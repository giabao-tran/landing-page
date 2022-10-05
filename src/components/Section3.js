export default function Section3() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="section3--title">Play</h1>
          <p className="section3--text">Ballerの楽しみ方</p>
        </div>
      </div>
      <div className="container">
        {/* <div className="row">
          <div className="col">
            <img
              className="section3--img1"
              src="/img/AdobeStock_228561600 1.png"
              alt="ball"
            ></img>
            <div className="section3--02">02</div>
            <h1 className="section3--02-title">豊富なBGMを選択</h1>
            <hr class="divider-1"></hr>
            <p className="section3--02-text">
              撮影した動画にBGMを追加することで、あなただけのオリジナル動画に仕上がります。
            </p>
            <img
              src="/img/AdobeStock_339881121 1.png"
              alt="anh"
              className="section3--02-img"
            ></img>
          </div>
          <div className="col">
            <div className="section03--01">01</div>
            <h1 className="section03--01-title">ボールにAIエフェクトを描写</h1>
            <hr class="divider-2"></hr>
            <p className="section03--01-text">
              動画のバスケットボールをAIが自動で認識し、コミカルなエフェクトを描写可能。非現実的な動画を作成することが出来ます。
            </p>
            <img
              src="/img/Mask group.png"
              alt="anh"
              className="section03--01-img"
            ></img>
            <div className="section03--03">03</div>
            <h1 className="section03--03-title">SNSに簡単投稿</h1>
            <hr class="divider-3"></hr>
            <p className="section03--03-text">
              作成した動画は自由に利用できます。 SNSでみんなに自慢しよう！
            </p>
          </div>
        </div> */}
        <div className="d-flex">
          <img
            className="section3--img1"
            src="/img/AdobeStock_228561600 1.png"
            alt="ball"
          ></img>
          <div className="section-right">
            <div className="section03--01">01</div>
            <h1 className="section03--01-title">ボールにAIエフェクトを描写</h1>
            <hr class="divider-1"></hr>
            <p className="section03--01-text">
              動画のバスケットボールをAIが自動で認識し、コミカルなエフェクトを描写可能。非現実的な動画を作成することが出来ます。
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex">
          <div>
            <div className="section3--02">02</div>
            <h1 className="section3--02-title">豊富なBGMを選択</h1>
            <hr class="divider-1"></hr>
            <p className="section3--02-text">
              撮影した動画にBGMを追加することで、あなただけのオリジナル動画に仕上がります。
            </p>
          </div>
          <img
            src="/img/Mask group.png"
            alt="anh"
            className="section03--01-img section-right"
          ></img>
        </div>
      </div>
      <div className="container">
        <div className="d-flex">
          <img
            src="/img/AdobeStock_339881121 1.png"
            alt="anh"
            className="section03--02-img"
          ></img>
          <div className="section-right">
            <div className="section03--03">03</div>
            <h1 className="section03--03-title">SNSに簡単投稿</h1>
            <hr class="divider-3"></hr>
            <p className="section03--03-text">
              作成した動画は自由に利用できます。 SNSでみんなに自慢しよう！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
