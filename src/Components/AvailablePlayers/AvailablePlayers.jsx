import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PlayerCart from "./PlayerCart";

const AvailablePlayers = ({ players, handleChoosePlayer, selectedPlayers }) => {

    const handlePlayers = () => {
        document.getElementById('playersCart').classList.add("hidden");
        document.getElementById('playersCart1').classList.add("hidden");
        document.getElementById('selectedPlayer').classList.remove("hidden")
        document.getElementById('selectedPlayer1').classList.remove("hidden")
    }

    const handleAvailablePlayer = () => {
        document.getElementById('selectedPlayer').classList.add('hidden')
        document.getElementById('selectedPlayer1').classList.add('hidden')
        document.getElementById('playersCart').classList.remove('hidden')
        document.getElementById('playersCart1').classList.remove('hidden')
    }

    return (
        <div className="mb-35">
            <section className="flex justify-between py-10">
                <section id="playersCart">
                    <h1 className="font-bold text-[28px]">Available Players {players.length}</h1>
                </section>
                <section id="selectedPlayer" className="hidden">
                    <h1 className="font-bold text-[28px]">Selected Player ({selectedPlayers.length}/6)</h1>
                </section>
                <section className="">
                    <span id="availablePlayer" className="px-[30px] py-[14px] bg-[#E7FE29] text-black text-[16px] font-bold "><button onClick={handleAvailablePlayer} >Available ({players.length - selectedPlayers.length})</button></span>
                    <span id="selectedPlayersBtn" className="px-[30px] py-[14px] bg-[#e5e3e3] text-black text-[16px] font-bold"> <button onClick={handlePlayers} className="">Selected ({selectedPlayers.length})</button></span>
                </section>
            </section>
            <section id="playersCart1" className="grid grid-cols-3 gap-4">

                {
                    players.map((player, idx) => <PlayerCart handleChoosePlayer={handleChoosePlayer} key={idx} player={player}></PlayerCart>)
                }
            </section>
            <section id="selectedPlayer1" className="hidden">
                {
                    selectedPlayers.map((player, idx) => <SelectedPlayer key={idx} player={player}></SelectedPlayer>)
                }
            </section>
        </div>
    );
};

export default AvailablePlayers;