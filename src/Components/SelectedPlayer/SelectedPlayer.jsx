import { MdDeleteForever } from "react-icons/md";


const SelectedPlayer = ({player}) => {
    const {name, biddingPrice} = player;
    return (
        <div className=" pb-3">
            <div className="card bg-[#f4f1f1] card-md shadow-xl">
                <div className="flex justify-between items-center py-5 px-5">
                    <div className="flex gap-3">
                        <div className="mask mask-squircle w-14">
                            <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                        </div>
                        <div>
                            <h2 className="card-title text-black">Name: {name}</h2>
                            <p>Rate: {biddingPrice} cr</p>
                        </div>
                    </div>
                    <div>
                        <MdDeleteForever className="text-black text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;