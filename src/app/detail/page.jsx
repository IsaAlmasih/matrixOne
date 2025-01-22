"use client";

import React from "react";

import "./page.css";

const page = () => {
  return (
    <div className="page detail-page">
      <div className="wrapper">
        <div className="breadcrumbs">
          <a href="#" className="breadcrumbs__link">
            Главная
          </a>
          <a href="#" className="breadcrumbs__link">
            Книги
          </a>
          <a href="#" className="breadcrumbs__link">
            Книга из папируса
          </a>
        </div>
        <div className="detail-page__content">
          <div className="detail-page__image-holder">
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
              alt=""
              className="detail-page__image"
            />
            <div className="detail-page__thumbnails">
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
            </div>
          </div>
          <div className="detail-page__information">
            <div className="detail-page__table">
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Название:</p>
                <p className="detail-page__rowa-value">Книга из папируса</p>
              </div>
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Цена:</p>
                <p className="detail-page__rowa-value">10000 ₽</p>
              </div>
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Автор:</p>
                <p className="detail-page__rowa-value">Пушкин А. С.</p>
              </div>
            </div>
            <p className="detail-page__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati eligendi itaque, ullam voluptate similique sunt aliquam
              repellat harum ducimus exercitationem beatae non magnam libero
              deserunt est minima corrupti earum molestiae! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Obcaecati eligendi itaque,
              ullam voluptate similique sunt aliquam repellat harum ducimus
              exercitationem beatae non magnam libero deserunt est minima
              corrupti earum molestiae!
            </p>
            <button className="btn detail-page__btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
