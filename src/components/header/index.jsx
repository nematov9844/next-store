import { useState } from "react";

function Navigation({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedUz, setIsCheckedUz] = useState(true); // Default to Uzbek
  const [isCheckedRu, setIsCheckedRu] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isBg, setIsBg] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRecovrePassword, setIsRecovrePassword] = useState(false);
  const [isSms, setIsSms] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setIsBg(!isBg);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const toggleModal = () => {
    setIsModal(!isModal);
    setIsOpen(!isOpen);
    setIsBg(!isBg);
  };
  const togggleRecovrePassword = () => {
    setIsRecovrePassword(!isRecovrePassword);
  };
  const toggleSms = () => {
    setIsSms(!isSms);
  };
  const toggleLogin = () => {
    setIsLogin(!isLogin);
    // setIsModal(!isModal);
  };
  const toggleLanguage = (language) => {
    setIsCheckedUz(language === "uz");
    setIsCheckedRu(language === "ru");
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out `}
    >
      {/*  modal */}
      <div
        className={`z-50 w-[90%] md:w-[400px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  ${
          isModal ? "flex" : "hidden"
        } flex-col gap-5 justify-center items-center h-[500px] bg-white shadow-md shadow-black transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleModal}
          className=" text-black text-3xl absolute right-5 top-0"
        >
          &times;
        </button>
        <h1 className="text-5xl font-semibold text-center">
          Hisobga kirish uchun
        </h1>
        <button
          onClick={toggleLogin}
          className="w-[90%] bg-blue-500 text-white py-2 px-3 rounded-md"
        >
          Kirish
        </button>
        <p className="text-blue-500">Yoki</p>
        <button
          onClick={toggleSignUp}
          className="w-[90%] border-2 border-red-400 py-2 px-3 rounded-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 bg-white"
        >
          Ro’yxatdan o’tish
        </button>
      </div>

      {/* signUp Modal */}

      <div
        className={`z-50 w-[90%] md:w-[400px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  ${
          isSignUp ? "flex" : "hidden"
        } flex-col gap-5 justify-center items-center h-[500px] bg-white shadow-md shadow-black transition-transform duration-300 ease-in-out `}
      >
        <button
          onClick={toggleSignUp}
          className=" text-black text-3xl absolute right-5 top-0"
        >
          &times;
        </button>
        <h1 className="text-5xl font-semibold text-center">
          Telefon raqam orqali kirish
        </h1>
        <form className="flex flex-col gap-3 w-[90%]">
          <input
            type="text"
            className="border outline-none  p-2 rounded-lg"
            placeholder="Telefon raqam "
          />
          <input
            type="text"
            className="border outline-none  p-2 rounded-lg"
            placeholder="Parol "
          />
          <button className="bg-blue-500 py-1 px-3 rounded-lg text-white">
            Kirish
          </button>
          <button
            type="button"
            onClick={togggleRecovrePassword}
            className="text-blue-500"
          >
            Parolni unutdingizmi ?
          </button>
        </form>
      </div>

      {/* login */}

      <div
        className={`z-50 w-[90%] md:w-[400px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  ${
          isLogin ? "flex" : "hidden"
        } flex-col gap-5 justify-center items-center h-[500px] bg-white shadow-md shadow-black transition-transform duration-300 ease-in-out `}
      >
        <button
          onClick={toggleLogin}
          className=" text-black text-3xl absolute right-5 top-0"
        >
          &times;
        </button>
        <h1 className="text-5xl font-semibold text-center">
          Telefon raqam orqali kirish
        </h1>
        <form className="flex flex-col gap-3 w-[90%]">
          <input
            type="text"
            className="outline-none  border  p-2 rounded-lg"
            placeholder="+ 998 9* *** ** ** "
          />
          <button className="bg-blue-500 py-1 px-3 rounded-lg text-white">
            Kirish
          </button>
          <button
            type="button"
            onClick={togggleRecovrePassword}
            className="text-blue-500"
          >
            Parolni unutdingizmi ?
          </button>
        </form>
      </div>
      {/* recovre password */}
      <div
        className={`z-50 w-[90%] md:w-[400px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  ${
          isRecovrePassword ? "flex" : "hidden"
        } flex-col gap-5 justify-center items-center h-[500px] bg-white shadow-md shadow-black transition-transform duration-300 ease-in-out `}
      >
        <button
          onClick={togggleRecovrePassword}
          className=" text-black text-3xl absolute right-5 top-0"
        >
          &times;
        </button>
        <h1 className="text-5xl font-semibold text-center">Parolni tiklash</h1>
        <form className="flex flex-col gap-3 w-[90%]">
          <input
            type="text"
            className="outline-none  border  p-2 rounded-lg"
            placeholder="Telefon raqami  "
          />
          <button
            type="button"
            onClick={toggleSms}
            className="bg-blue-500 py-1 px-3 rounded-lg text-white"
          >
            Parolni tiklash
          </button>
        </form>
      </div>

      {/* sms kod */}
      <div
        className={`z-50 w-[90%] md:w-[400px]  fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg  ${
          isSms ? "flex" : "hidden"
        } flex-col gap-5 justify-center items-center h-[500px] bg-white shadow-md shadow-black transition-transform duration-300 ease-in-out `}
      >
        <button
          onClick={toggleSms}
          className=" text-black text-3xl absolute right-5 top-0"
        >
          &times;
        </button>
        <h1 className="text-5xl font-semibold text-center">Parolni tiklash</h1>
        <form className="flex flex-col gap-3 w-[90%]">
          <div className="flex gap-2 w-[90%] mt-6 items-center justify-center">
            <input
              type="text"
              className="outline-none border-gray-500 w-[15%] border  p-2 rounded-lg"
            />
            <input
              type="text"
              className="outline-none border-gray-500 w-[15%] border  p-2 rounded-lg"
            />
            <input
              type="text"
              className="outline-none border-gray-500 w-[15%] border  p-2 rounded-lg"
            />
            <input
              type="text"
              className="outline-none border-gray-500 w-[15%] border  p-2 rounded-lg"
            />
          </div>
          <button className="bg-blue-500 py-1 px-3 rounded-lg text-white">
            Parolni tiklash
          </button>
        </form>
      </div>
      {/* Top bar */}
      <div className="hidden lg:flex w-full max-w-[1230px] mx-auto justify-end px-5 gap-5 py-2">
        <div className="lg:w-[50%] flex justify-between items-center">
          <p className="flex items-center gap-4">
            <i className="fa-solid fa-envelope"></i> Aloqa uchun
          </p>
          <select className="border rounded-md px-2 py-1">
            <option value="uz">O’zbekcha</option>
            <option value="ru">Ruscha</option>
          </select>
        </div>
      </div>

      {/* Header */}
      <header className="w-full py-3 lg:shadow-[0_4px_6px_0px_rgba(0,0,0,0.5)] ">
        <nav className="flex justify-between w-full max-w-[1230px] mx-auto items-center">
          <div
            className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 lg:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={toggleDrawer}
              className=" text-black text-3xl absolute right-5 top-0"
            >
              &times;
            </button>
            <div className="flex w-full h-[90vh] px-4 flex-col gap-4 items-center justify-between mt-14 ">
              <div className="w-full">
                <button
                  onClick={() => toggleModal()}
                  className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-[rgba(77,94,246,0.2)] to-[rgba(246,77,77,0.2)]"
                >
                  Hisobga kirish
                </button>

                <div className="flex items-center justify-start w-full px-4">
                  <button
                    onClick={() => toggleLanguage("uz")}
                    className={`p-1 m-1 rounded-full w-5 h-5 border-2 ${
                      isCheckedUz
                        ? "bg-gradient-to-r from-[rgba(77,94,246,1)] to-[rgba(246,77,77,1)] outline outline-2 outline-red-400 border-white"
                        : "border-gray-300"
                    }`}
                  ></button>
                  <button
                    onClick={() => toggleLanguage("uz")}
                    className="w-full text-left px-4 py-2"
                  >
                    O’zbekcha
                  </button>
                </div>

                <div className="flex items-center justify-start w-full px-4">
                  <button
                    onClick={() => toggleLanguage("ru")}
                    className={`p-1 m-1 rounded-full w-5 h-5 border-2 ${
                      isCheckedRu
                        ? "bg-gradient-to-r from-[rgba(77,94,246,1)] to-[rgba(246,77,77,1)] outline outline-2 outline-red-400 border-white"
                        : "border-gray-300"
                    }`}
                  ></button>
                  <button
                    onClick={() => toggleLanguage("ru")}
                    className="w-full text-left px-4 py-2 border-b"
                  >
                    Ruscha
                  </button>
                </div>

                <button
                  onClick={() => setIsMain(!isMain)}
                  className="w-full text-left px-4 py-2 font-semibold border-t"
                >
                  Bo’limlar
                </button>
                <div
                  className={`flex-col gap-3 transition-all font-semibold ease-linear ${
                    isMain ? "flex" : "hidden"
                  }`}
                >
                  <button className="w-full flex gap-4 items-center justify-between text-left px-4 py-2 border-b">
                    Kategoriyalar <i className="fa-solid fa-angle-right"></i>
                  </button>
                  <button className="w-full flex gap-4 items-center justify-between text-left px-4 py-2 border-b">
                    Mahsulotlar katalogi{" "}
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                  <button className="w-full flex gap-4 items-center justify-between text-left px-4 py-2 border-b">
                    Xizmatlarimiz <i className="fa-solid fa-angle-right"></i>
                  </button>
                  <button className="w-full text-left px-4 py-2 border-b">
                    Nasiya savdo
                  </button>
                  <button className="w-full text-left px-4 py-2 border-b">
                    Biz haqimizda
                  </button>
                </div>
              </div>

              <div className="flex flex-col w-full border-t">
                <button className="w-full text-left px-4 py-2 border-b">
                  Axbarot xizmati
                </button>
                <p className="text-blue-500 flex items-center gap-4 px-4 py-2">
                  <i className="fa-solid fa-envelope"></i> contact.@nextstore.uz
                </p>
                <p className="text-blue-500 flex items-center gap-4 px-4 py-2">
                  <i className="fa-solid fa-phone"></i> +998 95 503 09 09
                </p>
              </div>
            </div>
          </div>

          {/* Menu for large screens */}
          <div className="flex justify-between px-3 items-center w-full lg:hidden">
            <button onClick={toggleDrawer} className="px-4 py-1  rounded-md">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="w-[90%] flex justify-center">
              <img className="" src={data.logo} alt="Logo" />
            </div>
          </div>
          <div className="hidden lg:flex items-center w-full justify-between">
            <button
              className="text-white rounded-md bg-gradient-to-r from-red-600 to-blue-600 px-3 py-1"
              onClick={toggleDrawer}
            >
              <i className="fa-solid fa-bars"></i> Katalog
            </button>
            <div className="border-[rgba(228,231,238,1)] border-2 rounded-md">
              <input
                type="text"
                placeholder="Enter your text"
                className="px-2 py-1 outline-none"
              />
              <button className="bg-blue-600 rounded-r-md text-white py-1 px-3">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <button className="bg-gray-200 rounded-md px-2 py-1 text-blue-700">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="bg-gray-200 rounded-md px-2 py-1 text-blue-700">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              onClick={toggleModal}
              className="bg-gradient-to-r py-1 px-2 text-white rounded-md from-[rgba(77,94,246,0.2)] to-[rgba(246,77,77,0.2)]"
            >
              Kirish
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
