
const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content pb-10 px-[79px]">
            <div className="absolute mt-[-80px] ml-[290px]  w-[570px] h-[160px] bg-[#ecedea] rounded-2xl pt-[-30px]">
                <div className="text-center mt-[30px]">
                    <h1 className="font-bold ">Subscribe to our Newsletter</h1>
                    <p className="mb-2">Get the latest updates and news right in your inbox!</p>
                    <span>
                        <div className="join">
                            <div>
                                <label className="input validator join-item bg-[#d9d9d5] text-black">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input className="" type="email" placeholder="mail@site.com" required />
                                </label>
                                <div className="validator-hint hidden text-black">Enter valid email address</div>
                            </div>
                            <button className="btn text-black border-0 bg-[#e7fe29] join-item shadow">Subscribe</button>
                        </div>
                    </span>
                </div>
            </div>
            <section className="">
                <img className="mx-auto pt-25 pb-10 text-[142px]" src="../../../public/Image/logo-footer.png" alt="footer-logo" />
            </section>
            <footer className="footer sm:footer-horizontal">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label className="">Subscribe to our newsletter for the latest updates.</label>
                        <div className="join pt-4">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn bg-[#e7fe29] text-black join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;