import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex max-w-7xl mx-auto p-4 justify-between items-center border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;