/* eslint-disable react/no-unescaped-entities */

import React from 'react';

function Page() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>O mnie</h1>
      <p>
        Cześć! Nazywam się Dominik Kugler i jestem studentem trzeciego roku informatyki stosowanej.
      </p>
      <p>
        Głównym kierunkiem mojej nauki jest tworzenie aplikacji webowych (Fullstack).
        Poza studiami udzielam korepetycji z matematyki, a także pomagam innym rozpocząć swoją
        działalność właśnie w tym biznesie.
      </p>
      <h2>Moje umiejętności</h2>
      <ul>
        <li>Stack MERN</li>
        <li>Bazy danych (Oracle, MongoDB, MySQL, PostgreSQL)</li>
        <li>Podstawy Docker, Kubernetes</li>
        <li>Podstawy Proxmox, Proxmox Backup Server, TrueNAS</li>
        <li>Java oraz ANSI C</li>
      </ul>
      <h2>Zainteresowania</h2>
      <p>
        Oprócz programowania interesuję się:
      </p>
      <ul>
        <li>Szeroko pojętym biznesem</li>
        <li>Rozwijaniem umiejętności sprzedażowych oraz marketingowych</li>
        <li>Fitnessem (moją specjalizacją jest trening siłowy)</li>
      </ul>
      <h2>Kontakt</h2>
      <p>
        Jeśli chcesz się ze mną skontaktować, zapraszam do odwiedzenia zakładki Kontakt!
      </p>
    </div>
  );
}

export default Page;