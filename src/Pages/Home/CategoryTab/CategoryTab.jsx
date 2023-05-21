import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from "sweetalert";

const CategoryTab = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("Engineering_tools");

  useEffect(() => {
    fetch(`https://kids-day-server.vercel.app/category/${tab}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [tab]);

  const handleTab = tabName => {
    setTab(tabName);
  };

  const handleAlert = () => {
    if (!user) {
      swal({
        title: "Please Login first?",
        // text: "/Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 lg:p-12">
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTab("Engineering_tools")}>
            Engineering tools
          </Tab>
          <Tab onClick={() => handleTab("Engineering_kits")}>
            Engineering kits
          </Tab>
          <Tab onClick={() => handleTab("Science_kits")}>Science kits</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 lg:gap-4 lg:mx-48">
            {data.map((dt, index) => (
              <div key={index}>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                  <figure className="lg:px-10 lg:pt-10">
                    <img
                      src={dt.picture_url}
                      alt="photo"
                      className="rounded-xl"
                    />
                  </figure>

                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{dt.name}</h2>
                    <h2 className="card-title">Price: ${dt.price}</h2>
                    <StarRatings
                      rating={parseFloat(dt.rating)}
                      starRatedColor="green"
                      numberOfStars={5}
                      name="rating"
                    />
                    <div className="card-actions">
                      <Link
                        onClick={handleAlert}
                        to={`/categoryDetails/${dt._id}`}
                      >
                        <button className="btn btn-wide">View details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 lg:gap-4 lg:mx-48">
            {data.map((dt, index) => (
              <div key={index}>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                  <figure className="lg:px-10 lg:pt-10">
                    <img
                      src={dt.picture_url}
                      alt="photo"
                      className="rounded-xl"
                    />
                  </figure>

                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{dt.name}</h2>
                    <h2 className="card-title">Price: ${dt.price}</h2>
                    <StarRatings
                      rating={parseFloat(dt.rating)}
                      starRatedColor="green"
                      numberOfStars={5}
                      name="rating"
                    />
                    <div className="card-actions">
                      <Link
                        onClick={handleAlert}
                        to={`/categoryDetails/${dt._id}`}
                      >
                        <button className="btn btn-wide">View details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4 lg:mx-48">
            {data.map((dt, index) => (
              <div key={index}>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                  <figure className="lg:px-10 lg:pt-10">
                    <img
                      src={dt.picture_url}
                      alt="photo"
                      className="rounded-xl"
                    />
                  </figure>

                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{dt.name}</h2>
                    <h2 className="card-title">Price: ${dt.price}</h2>
                    <StarRatings
                      rating={parseFloat(dt.rating)}
                      starRatedColor="green"
                      numberOfStars={5}
                      name="rating"
                    />
                    <div className="card-actions">
                      <Link
                        onClick={handleAlert}
                        to={`/categoryDetails/${dt._id}`}
                      >
                        <button className="btn btn-wide">View details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
