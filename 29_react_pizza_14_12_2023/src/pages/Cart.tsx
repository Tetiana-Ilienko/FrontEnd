import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((acc, item) => acc + item.count, 0);

  const dispatch = useDispatch();
  return (
    <div>
      {items.length > 0 ? (
        <>
          <div>
            <h1>Корзина</h1>
            <button>Очистить корзину</button>
          </div>
          <div>
            {items.map((item) => (
              <></>
            ))}
          </div>
          <div>
            <p>
              Всего пицц:
              <span>{totalCount} шт.</span>
            </p>
            <p>
              Сумма заказа:
              <span>{totalPrice} ₽</span>
            </p>
          </div>
          <div>
            <Link to='/'>
                Вернуться назад
            </Link>
            <a href="#">
                Оплатить
            </a>
          </div>
        </>
      ) : (
        <div>
          <h1>Корзина пуста </h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <Link to="/">Вернуться назад</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
