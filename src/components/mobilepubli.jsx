// En tu componente React (MobilePubli.js)

import React from 'react';
import img from "../sources/phone.png";
import "../mobile.css";

const MobilePubli = () => {
    const valores = ["TICKET","GALLERY","MOVIE","WALLPAPER","Q&A","TWICE TEST","APPLI","BIRTHDAY MAIL","SHOW","MEET AND GREET"];
    const valores1 = ["会員限定で、ツアー・イベントなどのチケット優先予約受付を実施いたします。","オフショット画像など、ここでしか見ることのできないレアなTWICEが満載のフォトギャラリーです！","コメントムービーをはじめ、TWICEが様々なミッションに挑戦するチャレンジムービーなど、様々な動画を配信！","会員限定の壁紙を配信！","Q会員のみなさまからの質問にメンバーが答えるコーナー!あなたの質問にメンバーが答えてくれるかも!?&A","あなたとメンバーとのシンクロ率をチェックするゲームコーナー!メンバーの気持ちになって質問に答えよう!シンクロ率が80％を超えるといいことがあるかも!?","あなたのお誕生日にメンバーからお祝いのメールが届きます!","TWICEをもっと身近に感じられる!","会員限定で、ツアー・イベントなどのチケット優先予約受付を実施いたします。","オフショット画像など、ここでしか見ることのできないレアなTWICEが満載のフォトギャラリーです！"];
  return (
    <div className='backgroundfinal'>
      <div className="fanclub-container">
        <div className="fanclub-content">
          <div className="fanclub-text">
            <h2>
              TWICE OFFICIAL FANCLUB ONCE JAPAN MOBILE
            </h2>
            <p>
              「TWICE OFFICIAL FANCLUB ONCE JAPAN MOBILE」は、TWICEのオフィシャルモバイルファンクラブです。 会員登録をしていただくと、チケット先行や、ここでしか見ることのできない動画、壁紙、フォトギャラリー、アプリ、みなさんの質問にメンバーが答えるQ&A、メンバーとのシンクロ率をチェックできるTWICE TESTなど、様々な会員限定サービスをお楽しみいただけます。今後も続々展開予定!
            </p>
          </div>
          <div className="phone-image">
            <img src={img} alt="Telefono" />
          </div>
        </div>
      </div>/*Hola*/
      <div className='contentid'>
            <h2 >
                    CONTENTS
                </h2>
      </div>

      {/* Grid 3x3 */}
      <div className="grid-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div key={index} className="grid-item">
            <h3>{valores[index]}</h3>
            <p>{valores1[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePubli;
