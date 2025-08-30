import { useEffect, useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers"
import HeroBanner from "./Components/Banner/HeroBanner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
// import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer"

function App() {
  const [coins, setCoins] = useState(0)
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch('../public/PlayersData.json');
      const data = await res.json();
      setPlayers(data);
    } fetchPlayers();
  }, [])

  const handleFreeCoin = (freeCoins) => {
    const newCoins = coins + freeCoins;
    setCoins(newCoins);
    console.log(newCoins);
  }

  const handleChoosePlayer = (playerId, player) => {
    console.log(playerId, player);

    const exactingPlayer = selectedPlayers.find(selectedPlayer => selectedPlayer.playerId === playerId);
    const playerRat = Number(player.biddingPrice * 10000000);
    const availableCoin = Number(coins);

    console.log(playerRat, availableCoin);

    if (selectedPlayers.length >= 6) {
      alert('You alrady have six selected players!')
    } else if (exactingPlayer) {
      alert(`You have alrady selected ${player.name}`)
    } else if (playerRat > availableCoin) {
      alert('You dont have avilable coin')
    } else {
      const newPlayer = [...selectedPlayers, player];
      let newCoin = coins - playerRat;
      setCoins(newCoin);
      setSelectedPlayers(newPlayer);
      console.log(newPlayer);
    }

  }


  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <div className="w-[1102px] mx-auto">
        <HeroBanner handleFreeCoin={handleFreeCoin}></HeroBanner>
        <AvailablePlayers players={players} handleChoosePlayer={handleChoosePlayer} selectedPlayers={selectedPlayers} ></AvailablePlayers>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default App
