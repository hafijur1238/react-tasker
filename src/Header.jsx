
export default function Header() {
    return (
        // <!-- Navbar Starts -->
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#1E201E] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <h1 className="text-3xl font-bold text-[#FF9100]">Tas<span className="text-[#FFF5E4] text-[40px]">K</span>er</h1>
                </a>
            </div>
        </nav>
        // <!-- Navbar Ends -->
    )
}