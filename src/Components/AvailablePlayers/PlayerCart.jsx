import './PlayerCart.css';
import { FaFlag } from "react-icons/fa";

const PlayerCart = ({player, handleChoosePlayer}) => {
    const {playerId, name, country, role, biddingPrice} = player;
    return (
        <div className=''>
            <div className="card bg-[#f4f1f1] w-[355px] shadow-sm">
                <figure className="px-2 pt-2">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <section className="flex items-center gap-4">
                        <span>
                            <div className="avatar">
                                <div className="mask mask-squircle w-10">
                                    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                                </div>
                            </div>
                        </span>
                        <span>
                            <h1 className="text-[20px] font-semibold">{name}</h1>
                        </span>
                    </section>
                    <section className="flex justify-between">
                        <span className="flex gap-4 items-center">
                            <FaFlag className="text-black text-[14px]" />
                            <h1 className="text-[14px]">{country}</h1>
                        </span>
                        <span>
                            <h1 className="text-[14px]">{role}</h1>
                        </span>
                    </section>
                    <section>
                        <span>
                            <h1 className='text-[16px] font-bold'>Rating</h1>
                        </span>
                        <span className='flex justify-between'>
                            <h1 className='text-[16px] font-semibold'>Role</h1>
                            <h1 className='text-[16px] font-semibold'>Left-Hand-Bat</h1>
                        </span>
                        <span className='flex justify-between items-center pt-[15px]'>
                            <h1 className='text-[16px] font-semibold'>Price: ${biddingPrice}cr</h1>
                            <button id='selected-player' onClick={ () => handleChoosePlayer(playerId, player)} className='btn bg-[#eae9e9] border-0 text-black'>Choose Player</button>
                        </span>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PlayerCart;