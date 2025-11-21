import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import CarritoContext, { ContextCarrito } from "../CarritoContext";
import React, { act } from "react";

const wrapper = ({ children }) => {
  return <CarritoContext>{children}</CarritoContext>;
};

describe("CarritoContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Inicia con un carrito vacio si no hay nada en el LocalStorage", () => {
    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    expect(result.current.cartItems).toEqual([]);
  });

  it("agrega un producto al carrito", () => {
    const product = { _id: "1", name: "Producto 1", price: 100 };

    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cartItems).toEqual([{ ...product, quantity: 1 }]);
  });

  it("incrementa la cantidad si el producto ya existe", () => {
    const product = { _id: "1", name: "Producto 1", price: 100 };

    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    act(() => {
      result.current.addToCart(product);
      result.current.addToCart(product);
    });

    expect(result.current.cartItems[0].quantity).toBe(2);
  });

  it("elimina un producto según su ID", () => {
    const product = { _id: "1", name: "Test", price: 50 };

    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    act(() => {
      result.current.addToCart(product);
      result.current.removeFromCart("1");
    });

    expect(result.current.cartItems).toEqual([]);
  });
  it("limpia el carrito", () => {
    const product = { _id: "1", name: "Test", price: 50 };

    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    act(() => {
      result.current.addToCart(product);
      result.current.clearCart();
    });

    expect(result.current.cartItems).toEqual([]);
  });

  it("guarda el carrito en localStorage al actualizar", () => {
    const product = { _id: "1", name: "Test", price: 10 };

    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    const { result } = renderHook(() => React.useContext(ContextCarrito), {
      wrapper,
    });

    act(() => {
      result.current.addToCart(product);
    });

    expect(setItemSpy).toHaveBeenCalled();
  });
});
