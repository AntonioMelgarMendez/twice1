// NewScroll.js

import React from 'react';
import '../news.css';

const NewsScroll = () => {
  const newsItems = [
    {
      id: 1,
      title: '2023.12.25',
      content: 'TWICE JAPAN ALBUM『BDZ』『&TWICE』『Perfect World』数量限定生産アナログ盤 リリース記念応募抽選施策詳細発表！',
    },
    {
      id: 2,
      title: '2023.12.14',
      content: 'MISAMO 『MISAMO JAPAN SHOWCASE "Masterpiece"』購入者特典に関して',
    },
    {
        id:3,
        title:"2023.12.12",
        content:"TWICE 5TH WORLD TOUR‘READY TO BE ’ in JAPAN追加公演オフィシャルグッズ会場販売詳細決定！",
    },
    {
        id:4,
        title:"2023.12.02",
        content:"MOMOがブランドアンバサダーを務めるメディキュットの新CM公開！",
    }
    ,
    {
        id:5,
        title:"2023.11.29",
        content:"TZUYUがブランドミューズを務めるVisée(ヴィセ)の新WebCM公開！",
    }
    ,
    {
        id:6,
        title:"2023.11.23",
        content:"MISAMO JAPAN SHOWCASE Making Video(YouTube Ver.)公開！",
    }
    ,
    {
        id:7,
        title:"2023.10.01",
        content:"TWICE LOVELYS＜TWICE 5TH WORLD TOUR　‘READY TO BE’ in JAPAN＞ 名古屋・福岡会場で新規ガシャポン「TWICE LOVELYS　ラブリーマスコット」(バンダイ)販売決定！",
    }
    ,
    {
        id:8,
        title:"2023.09.23",
        content:"TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN、 12月28日（木）福岡PayPayドーム公演のライブ・ビューイング（映画館）、Huluストア生配信決定！",
    }
    ,
    {
        id:9,
        title:"2022.01.15",
        content:"MISAMO「Google アプリ」 新CMに出演！",
    },
    {
        id:10,
        title:"2021.01.12",
        content:"JIHYO THE 1ST MINI ALBUM『ZONE Digipack ver.』予約販売開始‼",
    }
    // Agrega más noticias según sea necesario
  ];

  return (
    <div>
        <div className='Titulo1'>
         <h2>NEWS</h2>
         <div className='underline'></div>
        </div>
        <div className="news-scroll-container">
            <div className="news-scroll">
                {newsItems.map((item) => (
                <div key={item.id} className="news-item">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default NewsScroll;
