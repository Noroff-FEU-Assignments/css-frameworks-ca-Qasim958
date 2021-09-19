import React from "react";
import news1 from "./../media/News images/news-1.jpg";
import news2 from "./../media/News images/news-2.jpg";
import news3 from "./../media/News images/news-3.jpg";
import news4 from "./../media/News images/news-4.jpg";
import news5 from "./../media/News images/news-5.jpg";
import news6 from "./../media/News images/news-6.jpg";
import news7 from "./../media/News images/news-7.jpg";
import news8 from "./../media/News images/news-8.jpg";

export const News = () => {
  return (
    <main className="news">
      <section className="news__heading">
        <h1>News</h1>
      </section>
      <section className="news__pagination">
        <nav aria-label="page">
          <ul className="pagination">
            <li className="page-item  active" >
              <a className="page-link" href="#news1"  aria-current="page">
                1<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#news2">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#news3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="news__main">
        <ul className="news__main__posts">
          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news1} alt="new1" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news2} alt="new2" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news3} alt="new3" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn ">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news4} alt="new4" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news5} alt="new5" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news6} alt="new6" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news7} alt="new7" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>

          <li className="news__main__posts__post">
            <div className="card">
              <img className="card-img-top" src={news8} alt="new8" />
              <div className="card-body">
                <h5 className="card-title">Nunc porttitor vel</h5>
                <p className="card-text">
                  Nunc malesuada eget est fringilla dapibus.
                </p>
                <a href="/news" className="btn btn-primary">
                  MORE
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="news__pagination">
      <nav aria-label="page">
          <ul className="pagination pag1">
            <li className="page-item active">
              <a className="page-link" href="#news1" aria-current="page">
                1<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#news2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#news3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};
