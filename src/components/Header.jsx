const Header = () => {
  return (
    <>
      <header className="flex justify-center py-5">
        <nav>
          <ul className="flex gap-x-32 text-white">
            <li>
              <a href="#tujuan">Tujuan</a>
            </li>
            <li>
              <a href="#layanan">Layanan</a>
            </li>
            <li>
              <a href="#komunitas">Komunitas</a>
            </li>
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=62882000561667&text=Hai+Joan+mau+nanya+dong&type=phone_number&app_absent=0">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
