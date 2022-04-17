const navigation = [
    { name: 'Item1', href: '#' },
    { name: 'Item2', href: '#' },
    { name: 'Item3', href: '#' },
    { name: 'Item4', href: '#' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  const  Header = ({bgColor}) => {
    return (
      <header className={classNames(bgColor ? `bg-${bgColor}-600` : "bg-indigo-600","")}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none xs:hidden">
            <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold text-white xs:hidden">
            LOGO
                  </a>
              <div className="ml-10 space-x-8 lg:block xs:hidden">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4 xs:hidden">
              <a
                href="#"
                className="inline-block bg-indigo-500 py-1  px-2 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Button
              </a>
              <a
                href="#"
                className="inline-block bg-white py-1 px-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Button
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden md:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }

  export default Header
  