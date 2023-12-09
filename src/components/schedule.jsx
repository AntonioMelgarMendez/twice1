import React from 'react';
import '../schedule.css';


const Schedule = () => {
    const newsItems = [
        {
          id: 1,
          title: ' 2023.08.25',
          content: '06.28(金)   デビュー７周年',
          type:"MAGAZINE",
        },
        {
          id: 2,
          title: ' 2023.08.25',
          content: '03.21(木)   ONCE JAPAN　7周年',
          type:"LIVE",
        },
        {
            id:3,
            title:" 2023.05.21",
            content:"12.28(木) 開催   TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN＠福岡・福岡PayPayドーム",
            type:"RADIO",
        },
        {
            id:4,
            title:" 2023.05.21",
            content:"12.27(水) 開催   TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN＠福岡・福岡PayPayドーム",
            type:"WEB",
        }
        ,
        {
            id:5,
            title:"2023.05.21",
            content:"10.27(金) 発売  10.27(金)発売の『25ans（ヴァンサンカン）』12月号増刊の表紙＆インタビューページに初登場！",
            type:"TV",
        }
        ,
        {
            id:6,
            title:" 2023.05.21",
            content:"MISAMO JAPAN SHOWCASE Making Video(YouTube Ver.)公開！",
            type:"ANNIVERSARY",
        }
        ,
        {
            id:7,
            title:"2023.10.26",
            content:"07.24(月) 発売  07.24(月)発売の「AERA」7月31日号にMISAMOが表紙に登場！",
            type:"MAGAZINE",
        }
        ,
        {
            id:8,
            title:" 2023.10.18",
            content:"05.21(日) 開催   TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN＠東京・味の素スタジアム",
            type:"RADIO",
        }
        ,
        {
            id:9,
            title:" 2023.09.28",
            content:"05.14(日) 開催   TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN@大阪・ヤンマースタジアム長居",
            type:"LIVE",
        },
        {
            id:10,
            title:"2023.09.26",
            content:"07.23(土) 放送   NHK総合「Venue101 Presents TWICE 5th Anniversary」生放送決定！",
            type:"ANNIVERSARY",
        }
        // Agrega más noticias según sea necesario
      ];

      return (
        <div className="imagen-grid-container">
          <div className='header'>
            <h2 className="titulo">SCHEDULE</h2>
            <div className='underline2'></div>
          </div>
          <div className="news-scroll-container">
            <div className="news-scroll">
              {newsItems.map((item) => (
                <div key={item.id} className="news-item">
                                     <div className={`type-badge ${item.type.toLowerCase()}`}>
                    {item.type}
                  </div>
                  <div className="news-content">
                  <p>{item.content}</p>
                  <h3>{item.title}</h3>

            
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Schedule;
