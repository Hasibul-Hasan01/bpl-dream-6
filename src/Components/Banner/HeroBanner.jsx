
const HeroBanner = ({handleFreeCoin}) => {
    return (
        <div className="bg-[#131313]  bg-[url(../../../public/Image/bg-shadow.png)]  bg-cover bg-bottom w-[1102px] h-[546px] mx-auto rounded-xl">
            <div className="py-[66px]">
                <img className="mx-auto" src="../../../public/Image/banner-main.png" alt="hero-banner" />
                <div className="text-center">
                    <h1 className="hero-h1 font-sora text-[40px] font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="hero-p">Beyond Boundaries Beyond Limits</p>
                    <button className="btn bg-[#E7FE29] w-[200ox] h-[64px] text-[16px] text-black font-bold mt-3"
                        onClick={ () => handleFreeCoin(50000000)}
                    >Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;