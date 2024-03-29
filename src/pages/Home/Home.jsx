import { useEffect, useState } from "react";
import { getAllGames } from "../../data/Api";
import { Card } from "../../components/GameCard/Card";
import { Nav } from "../../components/Nav/Nav";
import { CustomLoading } from "../../Loading/CustomLoading"
import ReactPaginate from "react-paginate";
import "./HomeStyle.scss";


export const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenPage] = useState(0);
  const itemsPerPage = 30;
  const totalPage = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrenPage(selected);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const dataFromAPI = async () => {
      const responseData = await getAllGames();
      setData(responseData);
    };

    dataFromAPI();
  }, []);

  if (!data) return <CustomLoading />;

  return (
    <>
      <Card
        data={data.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )}
      />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPage}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <Nav />
    </>
  );
};
