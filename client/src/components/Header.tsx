interface Props {
  category: string;
  title: string;
}

const Header = ({ title, category }: Props) => {
  return (
    <header className='mb-10 '>
      <p className='text-gray-400'>
        Home /{" "}
        <span className=' text-slate-800 capitalize font-semibold'>
          {category}
        </span>
      </p>
      <p className='text-slate-900 capitalize mt-4 text-2xl font-bold tracking-tight'>
        {title}
      </p>
    </header>
  );
};

export default Header;
