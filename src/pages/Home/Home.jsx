import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Api } from "../../data/Api";
import { Card } from "../../components/GameCard/Card";
import { Nav } from "../../components/Nav/Nav";
import './HomeStyle.scss'

export const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenPage] = useState(0);
  const itemsPerPage = 30;

  const pageCount = Math.ceil(data.length / itemsPerPage);
  console.log("total de items", pageCount);

  const handlePageChange = ({ selected }) => {
    setCurrenPage(selected);
  };

  useEffect(() => {
    const dataFromAPI = async () => {
      const responseData = await Api();
      setData(responseData);
    };

    dataFromAPI();
  }, []);

  return (
    <>
      <Card data={data.slice(currentPage * itemsPerPage, (currentPage +1 ) * itemsPerPage)} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
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
