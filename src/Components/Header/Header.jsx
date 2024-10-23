import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center p-4 border-b-2 mb-10'>
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </>
    );
};

export default Header;