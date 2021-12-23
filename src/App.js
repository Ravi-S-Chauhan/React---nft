import { useState, useEffect } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import axios from "axios";
import Punklist from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xBeaD43960e1b2531FE37977ffd31AB438495ce4a&order_direction=asc"
      );

      setPunkListData(openseaData.data.assets);
      console.log(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  console.log(punkListData);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punklistData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}

      {/* 
      <CollectionCard
        id={9}
        name={"Money"}
        traits={[{ value: 10 }]}
        image="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd64539c3-7a92-45e5-875e-248b5e9392fc_512x512.png"
        alt="asd"
      /> */}
    </div>
  );
}

export default App;
