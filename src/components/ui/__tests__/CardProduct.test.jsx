import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, redirect } from "react-router-dom";
import CardProduct from "../CardProduct";
import { ContextCarrito } from "../../../context/CarritoContext";
import { beforeEach, describe, expect, it } from "vitest";

//Mock del contexto carrito
const mockAddToCart = vi.fn();

const mockProduct = {
  _id: "1234",
  name: "Mouse Gamer RGB",
  price: 2500,
  images: ["https://example.com/mouse.jpg"],
  updatedAt: "2024-01-01T10:00:00Z",
};

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ContextCarrito.Provider value={{ addToCart: mockAddToCart }}>
        {children}
      </ContextCarrito.Provider>
    </BrowserRouter>
  );
};

describe("CardProduct Component", () => {
  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  it("renderiza el nombre del producto correctamente", () => {
    render(<CardProduct product={mockProduct}></CardProduct>, {
      wrapper: Wrapper,
    });

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });

  it("renderiza el precio de producto correctamente formateado", () => {
    render(<CardProduct product={mockProduct}></CardProduct>, {
      wrapper: Wrapper,
    });

    expect(
      screen.getByText(`$${mockProduct.price.toLocaleString("es-AR")}`)
    ).toBeInTheDocument();
  });
   
  it("renderiza la descripcion",()=>{
    const productWithDescription = {
      ...mockProduct,
      description: "Un Mouse con luces RGB para una mejor experiencia."
    }
    render(<CardProduct product={productWithDescription}></CardProduct>,{
      wrapper:Wrapper
    })

    // Usamos una expresión regular para buscar una parte del texto
    expect(screen.getByText(/Un Mouse con luces/i)).toBeInTheDocument();

  })

  it("renderiza la imagen principal",()=>{
    render(<CardProduct product={mockProduct}></CardProduct>,{
      wrapper:Wrapper
    })
    
    const img = screen.getByAltText("producto principal")
    expect(img).toBeInTheDocument()
    expect(img.src).toContain("mouse.jpg")
  })

   it("llama a addToCart cuando clickean el botón", () => {
    render(<CardProduct product={mockProduct} />, { wrapper: Wrapper });

    const btn = screen.getByText("Agregar al carrito");
    fireEvent.click(btn);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it("el botón 'Ver más' lleva al link correcto", () => {
    render(<CardProduct product={mockProduct} />, { wrapper: Wrapper });

    const link = screen.getByText("Ver más");

    expect(link.closest("a")).toHaveAttribute(
      "href",
      `/detalle/${mockProduct._id}`
    );
  });
});
