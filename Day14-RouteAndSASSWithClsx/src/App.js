import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import HomePage from "./pages/HomePage";
import PrevPage from "./pages/PrevPage";
import NextPage from "./pages/NextPage";
import appStyles from "./App.module.scss";
function App() {

  const [page, setPage] = useState('home');

  console.log(page);

  const handlePageChange = (page) => {
    setPage(page);
  }


  return (
    <>
      <center>
        <Link onClick={() => handlePageChange('prev')} className={clsx(appStyles.link, {
          [appStyles.linkActive]: page === 'prev'
        })} to="/prevPage">Prev Page </Link>
        <Link onClick={() =>handlePageChange('home')} className={clsx(appStyles.link, {
          [appStyles.linkActive]: page === 'home'
        })} to="/">Home </Link>
        <Link onClick={() =>handlePageChange('next')} className={clsx(appStyles.link, {
          [appStyles.linkActive]: page === 'next'
        })} to="/nextPage">NextPage </Link>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prevPage" element={<PrevPage />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </center>
    </>
  );
}

export default App;