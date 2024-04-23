"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductCardType } from "@/types/product-card.type";
import Modal from "@/components/Modal";

const ProductCard = ({ image, title, price }: ProductCardType) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsModalOpen(true);
    }, 1000);
  };

  return (
    <div className="mr-4 rounded-lg bg-white p-4 shadow-md">
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="mb-4 h-40 w-full rounded-lg object-cover"
      />
      <h1 className="mb-2 text-xl font-bold">{title}</h1>
      <h3 className="mb-4 text-lg font-semibold text-gray-700">${price}</h3>
      <button
        onClick={handleAddToCart}
        className={`w-full rounded-lg py-2 font-semibold transition-colors duration-200 ${
          isAdding ? "bg-gray-400" : "bg-blue-500"
        } text-white hover:bg-blue-600`}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold">{title}</p>
          <p className="text-gray-700">Added to cart!</p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
