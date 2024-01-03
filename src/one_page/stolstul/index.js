import React, { useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import styles from "./index.module.scss";
import b1 from "../../assets/images/m8.jpg";
import b2 from "../../assets/images/seren/ayvon va zal/hi tech/image1.jpg";
import b3 from "../../assets/images/m12.jpg";
import b4 from "../../assets/images/seren/ayvon va zal/hi tech/image13.jpg";
import {imagesZalHi_tech} from '../../components/db/mahsulotlar'

export default function Stol() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.bolalar}>
        <p className={styles.ttl}>Ayvon va Zal mebellari</p>
        <div className={styles.cnt}>
          <div className={styles.imgs}>
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
          </div>
          <div className={styles.bolatxt}>
            <p className={styles.txt}>
              Shamollift оказывает полный комплекс услуг по поставке, монтажу и
              обслуживанию пассажирских лифтов. Наши специалисты имеют большой
              опыт работы с импортными и отечественными подъемниками любого типа
              и года выпуска. У нас Вы можете удобно и безопасно приобрести
              лифты пассажирские для. Все электрические пассажирские лифты в
              продаже отвечают требованиям стандартов Республики Узбекистан. Мы
              предлагаем только сертифицированное оборудование.
            </p>
          </div>
        </div>
        <Malumot />
        <RasmlarPastki/>
      </div>
      <Footer />
    </div>
  );
}

function RasmlarPastki() {
  return (
    <div className={styles.rasmlar}>
      {imagesZalHi_tech.map((r) => (
        <div className={styles.rasm_grp1}>
          <img src={r.img} alt="rasm" />
          <p>{r.ttl}</p>
        </div>
      ))}
      {/* <div className={styles.rasm_grp1}>
        <img src={b5} alt="rasm" />
        <p>AN-1123</p>
      </div>
      <div className={styles.rasm_grp1}>
        <img src={b6} alt="rasm" />
        <p>AN-1124</p>
      </div>
      <div className={styles.rasm_grp1}>
        <img src={b7} alt="rasm" />
        <p>AN-1125</p>
      </div> */}
    </div>
  );
}

function Malumot() {
  return (
    <div className={styles.malumot}>
      <p className={styles.ittl}>
        Почему стоит купить пассажирский лифт в компании Shamollift
      </p>
      <div className={styles.fgrp}>
        <div className={styles.grp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <mask
              id="mask0_68_580"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="56"
              height="56"
            >
              <rect width="56" height="56" fill="#1C1B1F" />
              <rect width="56" height="56" fill="url(#paint0_linear_68_580)" />
            </mask>
            <g mask="url(#mask0_68_580)">
              <path
                d="M4.66663 51.3334C4.66663 47.0167 5.24024 43.332 6.38746 40.2792C7.53468 37.2264 9.00274 34.6889 10.7916 32.6667C12.5805 30.6445 14.5833 29.0792 16.8 27.9709C19.0166 26.8625 21.1944 26.0945 23.3333 25.6667V18.6667C18.0055 18.0056 13.5625 16.3625 10.0041 13.7375C6.44579 11.1125 4.66663 8.08891 4.66663 4.66669H51.3333C51.3333 8.08891 49.5541 11.1125 45.9958 13.7375C42.4375 16.3625 37.9944 18.0056 32.6666 18.6667V25.6667C34.8055 26.0945 36.9833 26.8625 39.2 27.9709C41.4166 29.0792 43.4194 30.6445 45.2083 32.6667C46.9972 34.6889 48.4652 37.2264 49.6125 40.2792C50.7597 43.332 51.3333 47.0167 51.3333 51.3334H37.3333V46.6667H46.375C45.675 40.7556 43.468 36.4778 39.7541 33.8334C36.0402 31.1889 32.1222 29.8667 28 29.8667C23.8777 29.8667 19.9597 31.1889 16.2458 33.8334C12.5319 36.4778 10.325 40.7556 9.62496 46.6667H18.6666V51.3334H4.66663ZM28 51.3334C26.7166 51.3334 25.618 50.8764 24.7041 49.9625C23.7902 49.0486 23.3333 47.95 23.3333 46.6667C23.3333 46.0056 23.4597 45.4028 23.7125 44.8584C23.9652 44.3139 24.3055 43.8278 24.7333 43.4C25.6666 42.4667 27.2416 41.4847 29.4583 40.4542C31.675 39.4236 34.3 38.3834 37.3333 37.3334C36.2444 40.3667 35.1944 42.9917 34.1833 45.2084C33.1722 47.425 32.2 49 31.2666 49.9334C30.8389 50.3611 30.3527 50.7014 29.8083 50.9542C29.2639 51.207 28.6611 51.3334 28 51.3334Z"
                fill="#1C1B1F"
              />
              <path
                d="M4.66663 51.3334C4.66663 47.0167 5.24024 43.332 6.38746 40.2792C7.53468 37.2264 9.00274 34.6889 10.7916 32.6667C12.5805 30.6445 14.5833 29.0792 16.8 27.9709C19.0166 26.8625 21.1944 26.0945 23.3333 25.6667V18.6667C18.0055 18.0056 13.5625 16.3625 10.0041 13.7375C6.44579 11.1125 4.66663 8.08891 4.66663 4.66669H51.3333C51.3333 8.08891 49.5541 11.1125 45.9958 13.7375C42.4375 16.3625 37.9944 18.0056 32.6666 18.6667V25.6667C34.8055 26.0945 36.9833 26.8625 39.2 27.9709C41.4166 29.0792 43.4194 30.6445 45.2083 32.6667C46.9972 34.6889 48.4652 37.2264 49.6125 40.2792C50.7597 43.332 51.3333 47.0167 51.3333 51.3334H37.3333V46.6667H46.375C45.675 40.7556 43.468 36.4778 39.7541 33.8334C36.0402 31.1889 32.1222 29.8667 28 29.8667C23.8777 29.8667 19.9597 31.1889 16.2458 33.8334C12.5319 36.4778 10.325 40.7556 9.62496 46.6667H18.6666V51.3334H4.66663ZM28 51.3334C26.7166 51.3334 25.618 50.8764 24.7041 49.9625C23.7902 49.0486 23.3333 47.95 23.3333 46.6667C23.3333 46.0056 23.4597 45.4028 23.7125 44.8584C23.9652 44.3139 24.3055 43.8278 24.7333 43.4C25.6666 42.4667 27.2416 41.4847 29.4583 40.4542C31.675 39.4236 34.3 38.3834 37.3333 37.3334C36.2444 40.3667 35.1944 42.9917 34.1833 45.2084C33.1722 47.425 32.2 49 31.2666 49.9334C30.8389 50.3611 30.3527 50.7014 29.8083 50.9542C29.2639 51.207 28.6611 51.3334 28 51.3334Z"
                fill="url(#paint1_linear_68_580)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_68_580"
                x1="7.28"
                y1="-4.2"
                x2="57.3322"
                y2="55.3246"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_68_580"
                x1="10.7333"
                y1="1.16669"
                x2="52.4434"
                y2="50.7705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
            </defs>
          </svg>
          <p className={styles.txt}>
            Лифты, рассчитанные на эксплуатацию в жилых зданиях для подъема
            людей, грузоподъемностью от 240 килограмм до 1000 килограмм, и
            помимо жилых зданий (гостиницы, больницы, торговые центры) для
            подъема людей и грузов от 630 килограмм до 1600 килограмм.
          </p>
        </div>
        <div className={styles.grp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <mask
              id="mask0_68_598"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="56"
              height="56"
            >
              <rect width="56" height="56" fill="url(#paint0_linear_68_598)" />
            </mask>
            <g mask="url(#mask0_68_598)">
              <path
                d="M29.1667 27.8833C30.2944 26.6389 31.1597 25.2194 31.7625 23.625C32.3653 22.0305 32.6667 20.3778 32.6667 18.6666C32.6667 16.9555 32.3653 15.3028 31.7625 13.7083C31.1597 12.1139 30.2944 10.6944 29.1667 9.44998C31.5 9.76109 33.4444 10.7916 35 12.5416C36.5556 14.2916 37.3333 16.3333 37.3333 18.6666C37.3333 21 36.5556 23.0416 35 24.7916C33.4444 26.5416 31.5 27.5722 29.1667 27.8833ZM42 46.6666V39.6666C42 38.2666 41.6889 36.9347 41.0667 35.6708C40.4444 34.4069 39.6278 33.2889 38.6167 32.3166C40.6 33.0166 42.4375 33.9208 44.1292 35.0291C45.8208 36.1375 46.6667 37.6833 46.6667 39.6666V46.6666H42ZM46.6667 30.3333V25.6666H42V21H46.6667V16.3333H51.3333V21H56V25.6666H51.3333V30.3333H46.6667ZM18.6667 28C16.1 28 13.9028 27.0861 12.075 25.2583C10.2472 23.4305 9.33333 21.2333 9.33333 18.6666C9.33333 16.1 10.2472 13.9028 12.075 12.075C13.9028 10.2472 16.1 9.33331 18.6667 9.33331C21.2333 9.33331 23.4306 10.2472 25.2583 12.075C27.0861 13.9028 28 16.1 28 18.6666C28 21.2333 27.0861 23.4305 25.2583 25.2583C23.4306 27.0861 21.2333 28 18.6667 28ZM0 46.6666V40.1333C0 38.8111 0.340278 37.5958 1.02083 36.4875C1.70139 35.3791 2.60556 34.5333 3.73333 33.95C6.14444 32.7444 8.59444 31.8403 11.0833 31.2375C13.5722 30.6347 16.1 30.3333 18.6667 30.3333C21.2333 30.3333 23.7611 30.6347 26.25 31.2375C28.7389 31.8403 31.1889 32.7444 33.6 33.95C34.7278 34.5333 35.6319 35.3791 36.3125 36.4875C36.9931 37.5958 37.3333 38.8111 37.3333 40.1333V46.6666H0Z"
                fill="url(#paint1_linear_68_598)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_68_598"
                x1="7.28"
                y1="-4.2"
                x2="57.3322"
                y2="55.3246"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_68_598"
                x1="7.28"
                y1="6.53331"
                x2="36.1742"
                y2="58.077"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
            </defs>
          </svg>
          <p className={styles.txt}>
            Лифты, рассчитанные на эксплуатацию в жилых зданиях для подъема
            людей, грузоподъемностью от 240 килограмм до 1000 килограмм, и
            помимо жилых зданий (гостиницы, больницы, торговые центры) для
            подъема людей и грузов от 630 килограмм до 1600 килограмм.
          </p>
        </div>
        <div className={styles.grp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              d="M43.2601 9.61332L30.4268 4.80665C29.0968 4.31665 26.9268 4.31665 25.5968 4.80665L12.7634 9.61332C10.2901 10.5466 8.28345 13.44 8.28345 16.0766V34.9766C8.28345 36.8666 9.52011 39.3633 11.0368 40.4833L23.8701 50.0733C26.1334 51.7766 29.8434 51.7766 32.1068 50.0733L44.9401 40.4833C46.4568 39.34 47.6934 36.8666 47.6934 34.9766V16.0766C47.7168 13.44 45.7101 10.5466 43.2601 9.61332ZM36.1201 22.68L26.0868 32.7133C25.7368 33.0633 25.2934 33.2266 24.8501 33.2266C24.4068 33.2266 23.9634 33.0633 23.6134 32.7133L19.8801 28.9333C19.2034 28.2566 19.2034 27.1367 19.8801 26.46C20.5568 25.7833 21.6768 25.7833 22.3534 26.46L24.8734 28.98L33.6701 20.1833C34.3468 19.5066 35.4668 19.5066 36.1434 20.1833C36.8201 20.86 36.8201 22.0033 36.1201 22.68Z"
              fill="url(#paint0_linear_68_635)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_68_635"
                x1="2.5"
                y1="4"
                x2="44"
                y2="51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#777777" />
                <stop offset="0.54915" stop-color="#CAC9C9" />
                <stop offset="0.98565" stop-color="#777777" />
              </linearGradient>
            </defs>
          </svg>
          <p className={styles.txt}>
            Лифты, рассчитанные на эксплуатацию в жилых зданиях для подъема
            людей, грузоподъемностью от 240 килограмм до 1000 килограмм, и
            помимо жилых зданий (гостиницы, больницы, торговые центры) для
            подъема людей и грузов от 630 килограмм до 1600 килограмм.
          </p>
        </div>
        <div className={styles.grp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <mask
              id="mask0_68_626"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="56"
              height="56"
            >
              <rect width="56" height="56" fill="#1C1B1F" />
              <rect width="56" height="56" fill="url(#paint0_linear_68_626)" />
            </mask>
            <g mask="url(#mask0_68_626)">
              <path
                d="M17.2084 49.0583C15.8084 49.0194 14.4765 48.6597 13.2126 47.9792C11.9487 47.2986 10.7529 46.2972 9.62508 44.975C8.06953 43.1083 6.85425 40.8819 5.97925 38.2958C5.10425 35.7097 4.66675 33.0556 4.66675 30.3333C4.66675 27.1056 5.27925 24.0722 6.50425 21.2333C7.72925 18.3944 9.39175 15.925 11.4917 13.825C13.5917 11.725 16.0612 10.0625 18.9001 8.8375C21.739 7.6125 24.7723 7 28.0001 7C31.2279 7 34.2612 7.62222 37.1001 8.86667C39.939 10.1111 42.4084 11.8028 44.5084 13.9417C46.6084 16.0806 48.2709 18.5889 49.4959 21.4667C50.7209 24.3444 51.3334 27.4361 51.3334 30.7417C51.3334 33.7361 50.8473 36.5361 49.8751 39.1417C48.9029 41.7472 47.5223 43.9444 45.7334 45.7333C44.6445 46.8222 43.4973 47.6486 42.2918 48.2125C41.0862 48.7764 39.8612 49.0583 38.6168 49.0583C37.9168 49.0583 37.2168 48.9708 36.5168 48.7958C35.8168 48.6208 35.1168 48.3583 34.4167 48.0083L31.1501 46.375C30.6834 46.1417 30.1876 45.9667 29.6626 45.85C29.1376 45.7333 28.5834 45.675 28.0001 45.675C27.4167 45.675 26.8626 45.7333 26.3376 45.85C25.8126 45.9667 25.3168 46.1417 24.8501 46.375L21.5834 48.0083C20.8445 48.3972 20.1154 48.6792 19.3959 48.8542C18.6765 49.0292 17.9473 49.0972 17.2084 49.0583ZM17.3251 44.3917C17.6751 44.3917 18.0348 44.3528 18.4042 44.275C18.7737 44.1972 19.1334 44.0611 19.4834 43.8667L22.7501 42.2333C23.5667 41.8056 24.4126 41.4944 25.2876 41.3C26.1626 41.1056 27.0473 41.0083 27.9417 41.0083C28.8362 41.0083 29.7306 41.1056 30.6251 41.3C31.5195 41.4944 32.3751 41.8056 33.1918 42.2333L36.5168 43.8667C36.8668 44.0611 37.2168 44.1972 37.5667 44.275C37.9168 44.3528 38.2668 44.3917 38.6168 44.3917C39.3556 44.3917 40.0556 44.1972 40.7168 43.8083C41.3779 43.4194 42.039 42.8361 42.7001 42.0583C43.9445 40.5806 44.9168 38.8111 45.6168 36.75C46.3168 34.6889 46.6668 32.5694 46.6668 30.3917C46.6668 25.1806 44.8584 20.7569 41.2418 17.1208C37.6251 13.4847 33.2112 11.6667 28.0001 11.6667C22.789 11.6667 18.3751 13.4944 14.7584 17.15C11.1417 20.8056 9.33342 25.2389 9.33342 30.45C9.33342 32.6667 9.69314 34.825 10.4126 36.925C11.132 39.025 12.1334 40.7944 13.4167 42.2333C14.0779 43.0111 14.7195 43.5653 15.3417 43.8958C15.964 44.2264 16.6251 44.3917 17.3251 44.3917ZM26.7167 32.2583C27.2612 32.5694 27.8348 32.6861 28.4376 32.6083C29.0404 32.5306 29.5168 32.2389 29.8668 31.7333L35.2334 24.5583C35.6223 25.0639 35.9626 25.5986 36.2543 26.1625C36.5459 26.7264 36.789 27.3389 36.9834 28H41.7668C41.1834 24.5778 39.5987 21.7778 37.0126 19.6C34.4265 17.4222 31.4223 16.3333 28.0001 16.3333C24.5779 16.3333 21.564 17.4319 18.9584 19.6292C16.3529 21.8264 14.7779 24.6167 14.2334 28H19.0167C19.5612 25.9 20.6695 24.2083 22.3417 22.925C24.014 21.6417 25.9001 21 28.0001 21C28.6612 21 29.2834 21.0583 29.8668 21.175C30.4501 21.2917 31.014 21.4667 31.5584 21.7L26.1334 28.9333C25.7056 29.4778 25.5501 30.0806 25.6667 30.7417C25.7834 31.4028 26.1334 31.9083 26.7167 32.2583ZM17.3251 44.3917C16.6251 44.3917 15.964 44.2264 15.3417 43.8958C14.7195 43.5653 14.0779 43.0111 13.4167 42.2333C12.1334 40.7944 11.132 39.025 10.4126 36.925C9.69314 34.825 9.33342 32.6667 9.33342 30.45C9.33342 25.2389 11.1417 20.8056 14.7584 17.15C18.3751 13.4944 22.789 11.6667 28.0001 11.6667C33.2112 11.6667 37.6251 13.4847 41.2418 17.1208C44.8584 20.7569 46.6668 25.1806 46.6668 30.3917C46.6668 32.5694 46.3168 34.6889 45.6168 36.75C44.9168 38.8111 43.9445 40.5806 42.7001 42.0583C42.039 42.8361 41.3779 43.4194 40.7168 43.8083C40.0556 44.1972 39.3556 44.3917 38.6168 44.3917C38.2668 44.3917 37.9168 44.3528 37.5667 44.275C37.2168 44.1972 36.8668 44.0611 36.5168 43.8667L33.1918 42.2333C32.3751 41.8056 31.5195 41.4944 30.6251 41.3C29.7306 41.1056 28.8362 41.0083 27.9417 41.0083C27.0473 41.0083 26.1626 41.1056 25.2876 41.3C24.4126 41.4944 23.5667 41.8056 22.7501 42.2333L19.4834 43.8667C19.1334 44.0611 18.7737 44.1972 18.4042 44.275C18.0348 44.3528 17.6751 44.3917 17.3251 44.3917Z"
                fill="#1C1B1F"
              />
              <path
                d="M17.2084 49.0583C15.8084 49.0194 14.4765 48.6597 13.2126 47.9792C11.9487 47.2986 10.7529 46.2972 9.62508 44.975C8.06953 43.1083 6.85425 40.8819 5.97925 38.2958C5.10425 35.7097 4.66675 33.0556 4.66675 30.3333C4.66675 27.1056 5.27925 24.0722 6.50425 21.2333C7.72925 18.3944 9.39175 15.925 11.4917 13.825C13.5917 11.725 16.0612 10.0625 18.9001 8.8375C21.739 7.6125 24.7723 7 28.0001 7C31.2279 7 34.2612 7.62222 37.1001 8.86667C39.939 10.1111 42.4084 11.8028 44.5084 13.9417C46.6084 16.0806 48.2709 18.5889 49.4959 21.4667C50.7209 24.3444 51.3334 27.4361 51.3334 30.7417C51.3334 33.7361 50.8473 36.5361 49.8751 39.1417C48.9029 41.7472 47.5223 43.9444 45.7334 45.7333C44.6445 46.8222 43.4973 47.6486 42.2918 48.2125C41.0862 48.7764 39.8612 49.0583 38.6168 49.0583C37.9168 49.0583 37.2168 48.9708 36.5168 48.7958C35.8168 48.6208 35.1168 48.3583 34.4167 48.0083L31.1501 46.375C30.6834 46.1417 30.1876 45.9667 29.6626 45.85C29.1376 45.7333 28.5834 45.675 28.0001 45.675C27.4167 45.675 26.8626 45.7333 26.3376 45.85C25.8126 45.9667 25.3168 46.1417 24.8501 46.375L21.5834 48.0083C20.8445 48.3972 20.1154 48.6792 19.3959 48.8542C18.6765 49.0292 17.9473 49.0972 17.2084 49.0583ZM17.3251 44.3917C17.6751 44.3917 18.0348 44.3528 18.4042 44.275C18.7737 44.1972 19.1334 44.0611 19.4834 43.8667L22.7501 42.2333C23.5667 41.8056 24.4126 41.4944 25.2876 41.3C26.1626 41.1056 27.0473 41.0083 27.9417 41.0083C28.8362 41.0083 29.7306 41.1056 30.6251 41.3C31.5195 41.4944 32.3751 41.8056 33.1918 42.2333L36.5168 43.8667C36.8668 44.0611 37.2168 44.1972 37.5667 44.275C37.9168 44.3528 38.2668 44.3917 38.6168 44.3917C39.3556 44.3917 40.0556 44.1972 40.7168 43.8083C41.3779 43.4194 42.039 42.8361 42.7001 42.0583C43.9445 40.5806 44.9168 38.8111 45.6168 36.75C46.3168 34.6889 46.6668 32.5694 46.6668 30.3917C46.6668 25.1806 44.8584 20.7569 41.2418 17.1208C37.6251 13.4847 33.2112 11.6667 28.0001 11.6667C22.789 11.6667 18.3751 13.4944 14.7584 17.15C11.1417 20.8056 9.33342 25.2389 9.33342 30.45C9.33342 32.6667 9.69314 34.825 10.4126 36.925C11.132 39.025 12.1334 40.7944 13.4167 42.2333C14.0779 43.0111 14.7195 43.5653 15.3417 43.8958C15.964 44.2264 16.6251 44.3917 17.3251 44.3917ZM26.7167 32.2583C27.2612 32.5694 27.8348 32.6861 28.4376 32.6083C29.0404 32.5306 29.5168 32.2389 29.8668 31.7333L35.2334 24.5583C35.6223 25.0639 35.9626 25.5986 36.2543 26.1625C36.5459 26.7264 36.789 27.3389 36.9834 28H41.7668C41.1834 24.5778 39.5987 21.7778 37.0126 19.6C34.4265 17.4222 31.4223 16.3333 28.0001 16.3333C24.5779 16.3333 21.564 17.4319 18.9584 19.6292C16.3529 21.8264 14.7779 24.6167 14.2334 28H19.0167C19.5612 25.9 20.6695 24.2083 22.3417 22.925C24.014 21.6417 25.9001 21 28.0001 21C28.6612 21 29.2834 21.0583 29.8668 21.175C30.4501 21.2917 31.014 21.4667 31.5584 21.7L26.1334 28.9333C25.7056 29.4778 25.5501 30.0806 25.6667 30.7417C25.7834 31.4028 26.1334 31.9083 26.7167 32.2583ZM17.3251 44.3917C16.6251 44.3917 15.964 44.2264 15.3417 43.8958C14.7195 43.5653 14.0779 43.0111 13.4167 42.2333C12.1334 40.7944 11.132 39.025 10.4126 36.925C9.69314 34.825 9.33342 32.6667 9.33342 30.45C9.33342 25.2389 11.1417 20.8056 14.7584 17.15C18.3751 13.4944 22.789 11.6667 28.0001 11.6667C33.2112 11.6667 37.6251 13.4847 41.2418 17.1208C44.8584 20.7569 46.6668 25.1806 46.6668 30.3917C46.6668 32.5694 46.3168 34.6889 45.6168 36.75C44.9168 38.8111 43.9445 40.5806 42.7001 42.0583C42.039 42.8361 41.3779 43.4194 40.7168 43.8083C40.0556 44.1972 39.3556 44.3917 38.6168 44.3917C38.2668 44.3917 37.9168 44.3528 37.5667 44.275C37.2168 44.1972 36.8668 44.0611 36.5168 43.8667L33.1918 42.2333C32.3751 41.8056 31.5195 41.4944 30.6251 41.3C29.7306 41.1056 28.8362 41.0083 27.9417 41.0083C27.0473 41.0083 26.1626 41.1056 25.2876 41.3C24.4126 41.4944 23.5667 41.8056 22.7501 42.2333L19.4834 43.8667C19.1334 44.0611 18.7737 44.1972 18.4042 44.275C18.0348 44.3528 17.6751 44.3917 17.3251 44.3917Z"
                fill="url(#paint1_linear_68_626)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_68_626"
                x1="7.28"
                y1="-4.2"
                x2="57.3322"
                y2="55.3246"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_68_626"
                x1="10.7334"
                y1="3.84483"
                x2="47.4811"
                y2="52.3232"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C5C5C" />
                <stop offset="0.429895" stop-color="#CDCBCB" />
                <stop offset="0.960307" stop-color="#5C5C5C" />
              </linearGradient>
            </defs>
          </svg>
          <p className={styles.txt}>
            Лифты, рассчитанные на эксплуатацию в жилых зданиях для подъема
            людей, грузоподъемностью от 240 килограмм до 1000 килограмм, и
            помимо жилых зданий (гостиницы, больницы, торговые центры) для
            подъема людей и грузов от 630 килограмм до 1600 килограмм.
          </p>
        </div>
      </div>
    </div>
  );
}
