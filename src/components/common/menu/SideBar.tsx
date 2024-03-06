import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type SideBarProps = {
  size: 'medium' | 'large';
  className?: string;
};

export const SideBar: React.FC<SideBarProps> = ({size, className, ...props}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://mogazoa-api.vercel.app/4-2/categories');
        setCategories(response.data);
      } catch (error: any) {
        alert(`카테고리를 불러오는 데 실패하였습니다: ${error.message}`);
      }
    };

    fetchCategories();
  }, []);

  const isLarge = size === 'large';

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className={`flex ${isLarge ? 'w-[22rem]' : 'w-[18rem]'} flex-col gap-[2rem] bg-[#1c1c22] text-white`}>
      <h2 className={`ml-[3rem] mt-[4.5rem] ${isLarge ? 'text-[1.6rem]' : 'text-[1.4rem]'} font-normal`}>카테고리</h2>
      <div className={`mx-auto flex ${isLarge ? 'w-[20rem]' : 'w-[16rem]'} flex-col gap-[0.4rem]`}>
        <ul className='flex flex-col'>
          {categories.map((category) => (
              <Link
                href="#"
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${isLarge ? 'h-[5rem]' : 'h-[4.5rem]'} w-[100%] rounded-[0.8rem] px-[2rem] py-[1.5rem] ${isLarge ? 'text-[1.6rem]' : 'text-[1.4rem]'} font-medium ${selectedCategory === category.id ? 'bg-[#353542] text-white' : 'text-[#6e6e82]'}`}
              >
                {category.name}
              </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
