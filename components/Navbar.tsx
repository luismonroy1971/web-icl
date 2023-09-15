import Link from 'next/link';
import { SetStateAction, useState } from 'react';

const MegaMenu = () => {
  const [firstChildren, setFirstChildren] = useState([]);
  const [secondChildren, setSecondChildren] = useState([]);
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      slug: 'electronics',
      children: [
        {
          id: 2,
          name: 'Mobile Phones',
          slug: 'mobile-phones',
          children: [
            {
              id: 3,
              name: 'Smartphones',
              slug: 'smartphones',
              children: [
                {
                  id: 4,
                  name: 'Android',
                  slug: 'android',
                  children: [],
                },
                {
                  id: 5,
                  name: 'iOS',
                  slug: 'ios',
                  children: [],
                },
              ],
            },
            {
              id: 6,
              name: 'Tablets',
              slug: 'tablets',
              children: [],
            },
          ],
        },
        {
          id: 7,
          name: 'Laptops',
          slug: 'laptops',
          children: [],
        },
        {
          id: 8,
          name: 'Accessories',
          slug: 'accessories',
          children: [],
        },
      ],
    },
    {
      id: 9,
      name: 'Fashion',
      slug: 'fashion',
      children: [
        {
          id: 10,
          name: 'Clothes',
          slug: 'clothes',
          children: [],
        },
        {
          id: 11,
          name: 'Shoes',
          slug: 'shoes',
          children: [],
        },
        {
          id: 12,
          name: 'Watches',
          slug: 'watches',
          children: [],
        },
      ],
    },
  ];

  const showChildrenSecondColumn = (category: { children: SetStateAction<never[]>; }) => {
    setSecondChildren(category.children);
    };
  return (
    <div className="flex min-h-screen py-2">
      <div id="first-column" className="flex flex-col">
        {categories.map((category) => (
          <div key={category.id} className="my-10 ml-4">
            <div className='cursor-pointer' onClick={() => showChildrenSecondColumn(category as any)}>
              <span className="text-gray-700 text-4xl font-semibold hover:text-gray-900">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div id="second-column" className="flex flex-col">
        {categories.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                {category.name}
              </span>
            </Link>
            <div className="flex flex-col">
              {category.children.map((child) => (
                <div key={child.id}>
                  <Link href={`/category/${child.slug}`}>
                    <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                      {child.name}
                    </span>
                  </Link>
                  <div className="flex flex-col">
                    {child.children.map((child) => (
                      <div key={child.id}>
                        <Link href={`/category/${child.slug}`}>
                          <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                            {child.name}
                          </span>
                        </Link>
                        <div className="flex flex-col">
                          {child.children.map((child) => (
                            <div key={child.id}>
                              <Link href={`/category/${child.slug}`}>
                                <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                                  {child.name}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div id="third-column" className="flex flex-col">
        {categories.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                {category.name}
              </span>
            </Link>
            <div className="flex flex-col">
              {category.children.map((child) => (
                <div key={child.id}>
                  <Link href={`/category/${child.slug}`}>
                    <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                      {child.name}
                    </span>
                  </Link>
                  <div className="flex flex-col">
                    {child.children.map((child) => (
                      <div key={child.id}>
                        <Link href={`/category/${child.slug}`}>
                          <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                            {child.name}
                          </span>
                        </Link>
                        <div className="flex flex-col">
                          {child.children.map((child) => (
                            <div key={child.id}>
                              <Link href={`/category/${child.slug}`}>
                                <span className="text-gray-700 text-lg font-semibold hover:text-gray-900">
                                  {child.name}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MegaMenu;
