import React, { createContext, useState, useMemo, useCallback, useEffect } from 'react';

export const ContextCarrito = createContext();

const CarritoContext = ({children}) => {
    // 1. Inicializar el estado desde localStorage
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = window.localStorage.getItem('carrito');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            return [];
        }
    });

    // 2. Guardar en localStorage cada vez que cartItems cambie
    useEffect(() => {
        window.localStorage.setItem('carrito', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product, quantity = 1) => { // Añadimos un valor por defecto para quantity
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item._id === product._id);
            
            if (existingItem) {
                // Si el producto ya existe, actualizamos su cantidad
                return prevItems.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const value = useMemo(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
    }), [cartItems, addToCart, removeFromCart, clearCart]);

    return (
        <ContextCarrito.Provider value={value}>
            {children}
        </ContextCarrito.Provider>
    );
};

export default CarritoContext;