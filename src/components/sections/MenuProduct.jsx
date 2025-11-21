import { Link } from "react-router-dom";
import "../../styles/MenuProduct.css";


const MenuProduct = () => {
  return (
    <div className="h-auto container mx-auto px-0 py-5">
      <div className="grid grid-cols-2 lg:grid-cols-6  px-4 md:px-0">
        <Link to="/categorias/Auriculares">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://dlcdnwebimgs.asus.com/gain/FBAAC5C2-2ED4-406C-AA47-5A105797004A/w750/h470/fwebp" alt="" />
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-violet-600 hover:text-white">
              <h6 className=" text-4xl">Auriculares</h6>
            </div>
            <span className="absolute right-0 h-[60px] w-[1px] bg-gray-300 "></span>
          </div>
        </Link>
        <Link to="/categorias/Monitor">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://cdn.avpasion.com/wp-content/uploads/2023/02/monitor-gaming-lg-oled.jpg" alt="" />
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-gray-400 hover:text-white">
              <h6 className=" text-4xl">Monitores</h6>
            </div>
            <span className="absolute right-0 h-[60px] w-[1px] bg-gray-300 "></span>
          </div>
        </Link>
        <Link to="/categorias/Mouse">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://www.logitechstore.com.co/cdn/shop/collections/CATEGORIA-BannerSlider_G_Mouse.jpg?v=1753156979" alt="" className="object-cover"/>
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-violet-600 hover:text-white">
              <h6 className=" text-4xl">Mouse</h6>
            </div>
            <span className="absolute right-0 h-[60px] w-[1px] bg-gray-300 "></span>
          </div>
        </Link>
        <Link to="/categorias/Teclado">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg" alt=""className="object-cover" />
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-gray-400 hover:text-white">
              <h6 className=" text-4xl">Teclados</h6>
            </div>
            <span className="absolute right-0 h-[60px] w-[1px] bg-gray-300 "></span>
          </div>
        </Link>
        <Link to="/categorias/Joystick">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://img.pikbest.com/wp/202342/joystick-modern-black-joysticks-set-on-abstract-light-wallpaper-perfect-for-gaming-and-partner-entertainment-concepts-3d-rendering_9863428.jpg!w700wp" alt="" className="object-cover" />
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-violet-600 hover:text-white">
              <h6 className=" text-4xl">Joystick</h6>
            </div>
            <span className="absolute right-0 h-[60px] w-[1px] bg-gray-300 "></span>
          </div>
        </Link>
        <Link to="/categorias/Laptop">
          <div className="h-[130px] w-full  backgroundICons  flex items-center justify-center  flex-col menuProduct">
            <img src="https://sigmatiendas.com/cdn/shop/articles/lenovo-legion-agnostic-ai-blade-laptop-img.webp?v=1729347554&width=1280" alt="" className="object-cover" />
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center bg-black/90  hover:bg-black/40 transition-all duration-600 text-gray-400 hover:text-white">
              <h6 className=" text-4xl">Laptop</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuProduct;
