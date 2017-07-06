import React from 'react';

export default () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <div className="footer-company">
                <h4 className="footer-title">ООО «Ярд»</h4>
                <p className="footer-company-text">ОГРН 1175074002531</p>
                <p className="footer-company-text">ИНН 5036165365</p>
                <p className="footer-company-text">+7 (999) 821-14-88</p>
              </div>
            </div>
            <div className="col-xs-2">
              <nav className="footer-nav">
                <h4 className="footer-title">Жилые комплексы</h4>
                <a className="footer-link" href="#">ВТБ Арена Парк</a>
                <a className="footer-link" href="#">Садовые кварталы</a>
                <a className="footer-link" href="#">Резиденция Монэ</a>
                <a className="footer-link footer-link-last" href="#">Все ЖК Москвы <img src="combined-shape.svg" className="blackstripelogo" /></a>
              </nav>
            </div>
            <div className="col-xs-2">
              <nav className="footer-nav">
                <h4 className="footer-title">Компания</h4>
                <a className="footer-link" href="#">Команда</a>
                <a className="footer-link" href="#">О компании</a>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8 col-xs-offset-4">
              <div className="footer-disclaimer">
                <p>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};
