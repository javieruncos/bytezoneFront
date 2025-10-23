import "../../styles/MenuProduct.css";
import computer from "../../assets/icons/computer.png";
import auricular from "../../assets/icons/auriculares.png";
import joystick from "../../assets/icons/joystick.png";
import laptop from "../../assets/icons/laptop.png";
import mouse from "../../assets/icons/mouse.png";
import monitor from "../../assets/icons/monitor.png";

const MenuProduct = () => {
  return (
    <div className="h-auto container mx-auto px-0 py-5">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 px-4 md:px-0">
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={computer} alt="" className="IconOpcion h-[95px]" />
          <span className="text-black nombreOpcion text-2xl font-bold">
            Teclados
          </span>
        </div>
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={auricular} alt="" className="IconOpcion h-[60px]" />
          <span className="text-black nombreOpcion text-2xl font-medium">
            Auriculares
          </span>
        </div>
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={joystick} alt="" className="IconOpcion h-[80px]" />
          <span className="text-black nombreOpcion text-2xl font-medium">
            Joystick
          </span>
        </div>
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={mouse} alt="" className="IconOpcion h-[65px]" />
          <span className="text-black nombreOpcion text-2xl font-medium">
            Mouse
          </span>
        </div>
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={laptop} alt="" className="IconOpcion h-[90px]" />
          <span className="text-black nombreOpcion text-2xl font-medium">
            Laptop
          </span>
        </div>
        <div className="h-[130px] w-full border border-gray-300 flex items-center justify-center rounded-2xl flex-col menuProduct">
          <img src={monitor} alt="" className="IconOpcion h-[80px]" />
          <span className="text-black nombreOpcion text-2xl font-medium">
            Monitor
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuProduct;
