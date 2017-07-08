//import React from 'react';
import React, {Component} from 'react';

export default () => {
  return (

      <main className="complex">
        <div className="container">
          <div className="row between-xs">
            <article className="complex-location">
              <h1 className="complex-name">Жилой комплекс «Полянка/44»</h1>
              <p className="complex-address">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
            </article>
            <div>
              <button className="favourite-btn">В избранное</button>
            </div>
          </div>
        </div>
        <div className="gallery-stripe">
          <img src="gallery-img-1.jpg" alt className="complex-gallery-item" />
          <img src="gallery-img-2.jpg" alt className="complex-gallery-item" />
          <img src="gallery-img-3.jpg" alt className="complex-gallery-item" />
          <img src="gallery-img-4.jpg" alt className="complex-gallery-item" />
          <img src="gallery-img-5.jpg" alt className="complex-gallery-item" />
        </div>
        <div className="container">
          <button className="photo-count-btn" href="#">41 фотография</button>
          <section className="complex-info">
            <div className="complex-info-block">
              <h2 className="complex-info-block-title">950<small className="complex-info-block-description">предложений</small></h2>
            </div>
            <div className="complex-info-block">
              <h2 className="complex-info-block-title">John McAslan + Partners<small className="complex-info-block-description">архитектор</small></h2>
            </div>
            <div className="complex-info-block">
              <h2 className="complex-info-block-title">Группа «ПСН»<small className="complex-info-block-description">застройщик</small></h2>
            </div>
          </section>
        </div>
        <section className="complex-allinfo">
          <div className="container">
            <h3 className="complex-details-title">Характеристики</h3>
            <dl className="complex-details-list">
              <div className="row">
                <div className="col-xs-2">
                  <dt className="complex-details-key">Количество квартир:</dt> {/* список */}
                  <dt className="complex-details-key">Статус:</dt> {/* список */}
                  <dt className="complex-details-key">Цены:</dt> {/* список */}
                </div>
                <div className="col-xs-2">
                  <dt className="complex-details-value">1 503</dt>
                  <dt className="complex-details-value">Квартиры</dt>
                  <dt className="complex-details-value">от 5.3 до 143.5 млн</dt>
                </div>
                <div className="col-xs-2">
                  <dt className="complex-details-key">Количество квартир:</dt>
                  <dt className="complex-details-key">Количество квартир:</dt>
                  <dt className="complex-details-key">Количество квартир:</dt>
                </div>
                <div className="col-xs-2">
                  <dt className="complex-details-value">1 503</dt>
                  <dt className="complex-details-value">1 503</dt>
                  <dt className="complex-details-value">1 503</dt>
                </div>
                <div className="col-xs-2">
                  <dt className="complex-details-key">Количество квартир:</dt>
                  <dt className="complex-details-key">Количество квартир:</dt>
                  <dt className="complex-details-key">Количество квартир:</dt>
                </div>
                <div className="col-xs-2">
                  <dt className="complex-details-value">1 503</dt>
                  <dt className="complex-details-value">1 503</dt>
                  <dt className="complex-details-value">1 503</dt>
                </div>
              </div>
            </dl>
          </div>
        </section>
        <section className="complex-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <h3 className="complex-description-title">Описание</h3>
              </div>
              <div className="col-xs-10">
                <p className="complex-description-text">
                  ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.</p>
                <p className="complex-description-text">
                  Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе
                  работает консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с мягкими креслами для встреч с друзьями и соседями.</p>
                <p className="complex-description-text">
                  Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей, торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или фестиваль,
                  поболеть за любимую команду и купить новую рубашку в торговом комплексе.</p>
                <p className="complex-description-text">
                  Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где
                  можно подышать свежим воздухом во время рабочего перерыва.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="complex-services">
          <div className="container">
            <h3 className="complex-services-title">Инфраструктура</h3>
            <div className="row">
              <div className="col-xs-2">
                <div className="complex-services-item">Бассейн</div>
                <div className="complex-services-item">Частная школа</div>
              </div>
              <div className="col-xs-2">
                <div className="complex-services-item">Детский сад</div>
                <div className="complex-services-item">Частная школа</div>
              </div>
              <div className="col-xs-2">
                <div className="complex-services-item">Частная школа</div>
                <div className="complex-services-item">Частная школа</div>
              </div>
              <div className="col-xs-2">
                <div className="complex-services-item">Бассейн</div>
              </div>
              <div className="col-xs-2">
                <div className="complex-services-item">Детский сад</div>
              </div>
              <div className="col-xs-2">
                <div className="complex-services-item">Частная школа</div>
              </div>
            </div>
          </div>
        </section>
        <section className="complex-offers">
          <div className="container">
            <h3 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h3>
            <div className="row">
              <div className="col-xs-4">
                <div className="complex-offers-card">
                  <h4 className="complex-offers-card-title">1-комнатные квартиры</h4>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Площадь</small>от 59 до 120 м²</p>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
                  <button className="offers-btn">Посмотреть предложения</button>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="complex-offers-card">
                  <h4 className="complex-offers-card-title">2-комнатные квартиры</h4>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Площадь</small>от 59 до 120 м²</p>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
                  <button className="offers-btn">Посмотреть предложения</button>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="complex-offers-card">
                  <h4 className="complex-offers-card-title">3-комнатные квартиры</h4>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Площадь</small>от 59 до 120 м²</p>
                  <p className="complex-offers-card-value"><small className="complex-offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
                  <button className="offers-btn">Посмотреть предложения</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="complex-landmark">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <h5 className="complex-landmark-name">Якиманка</h5>
                <h2 className="complex-landmark-title">Исторический центр Москвы в двух<br /> километрах от Кремля</h2>
                <a href="#" className="complex-landmark-link">Гид по Якиманке →</a>
              </div>
              <div className="col-xs-6">
                <img src="polyanka-photo.jpg" alt="Полянка" className="complex-landmark-img" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <img className="complex-landmark-map" src="map.png" alt />
              </div>
              <div className="col-xs-6">
                <div className="complex-landmark-nearby">
                  <div className="complex-landmark-nearby-item">
                    <h6 className="complex-landmark-nearby-place">Красный Октябрь</h6>
                    <p className="complex-landmark-nearby-distance">24 минуты, 6 км</p>
                  </div>
                  <div className="complex-landmark-nearby-item">
                    <h6 className="complex-landmark-nearby-place">World class</h6>
                    <p className="complex-landmark-nearby-distance">2 минуты, 300 м</p>
                  </div>
                  <div className="complex-landmark-nearby-item">
                    <h6 className="complex-landmark-nearby-place">Третьяковская галерея</h6>
                    <p className="complex-landmark-nearby-distance">14 минут, 4 км</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};
