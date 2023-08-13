import { useParams } from "react-router-dom";
import "./pujaPage.scss";
import { useEffect, useState } from "react";
import { servicesData } from "../../data/all-services-data";

const PujaPage = () => {
  const [pujaData, setPujaData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const puja_data = servicesData.find((data) => data.id === parseInt(id));
    setPujaData(puja_data);
    console.log(puja_data, id);
  }, [id]);

  return (
    <>
      {pujaData && (
        <main>
          <h1>{pujaData?.title}</h1>
          {pujaData?.description.map((data, index) => (
            <p key={data + index}>{data}</p>
          ))}
          <section>
            <h4>{pujaData?.benefits?.title}</h4>
            <ul>
              {pujaData?.benefits?.points?.map((data, index) => (
                <li key={data.title + index}>
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </>
  );
};

export default PujaPage;
