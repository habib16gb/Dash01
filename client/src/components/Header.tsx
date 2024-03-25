interface Props {
  category: string;
  title: string;
}

const Header = ({ title, category }: Props) => {
  return (
    <header className='mb-10 '>
      <p className='text-gray-400'>{category}</p>
      <p className='text-slate-900 text-3xl font-extrabold tracking-tight'>{title}</p>
    </header>
  );
};

export default Header;
