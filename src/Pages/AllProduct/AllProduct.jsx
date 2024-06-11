import React from'react';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from "react-router";

// productData 
const productData = [
       {
        id: 1,
        image: 'https://assets.ajio.com/medias/sys_master/root/20230808/9x9d/64d2474aeebac147fcb45b0a/-473Wx593H-466434087-white-MODEL.jpg',
        title: ' WOXEN Spread Collared Checked Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 599,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240313/TO64/65f12ae816fd2c6e6a547d57/linza-white-classic-men-printed-slim-fit-shirt-with-full-sleeves.jpg',
        title: 'LINZA Men Printed Slim Fit Shirt with Full Sleeves',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 589,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240411/cHCa/6617bb4e05ac7d77bb031e95/-473Wx593H-467162071-black-MODEL.jpg',
        title: 'Bombay Begum Men',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 499,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240206/Zze3/65c2121916fd2c6e6adec259/-473Wx593H-462152986-green-MODEL.jpg',
        title: 'Dennisling Premium Attire  Striped Slim Fit Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240523/aAde/664f3de705ac7d77bb72ceaa/-473Wx593H-467308776-rust-MODEL.jpg',
        title: 'NETWORK Shirt with Patch Pocket',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://assets.ajio.com/medias/sys_master/root/h91/ha1/15812049076254/-473Wx593H-441015307-purple-MODEL.jpg',
        title: 'NETWORK Shirt with Patch Pocket',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://assets.ajio.com/medias/sys_master/root/20230214/6SA9/63ebadb2f997dde6f4a51c30/-1117Wx1400H-443009740-white-MODEL.jpg',
        title: 'NETPLAY Men Micro Printed Slim Fit Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240319/ePQ4/65f9a7a705ac7d77bbc8f194/-1117Wx1400H-460698879-red-MODEL.jpg',
        title: 'The Indian Garage co Men Checked Slim Fit Shirt with Patch Pocket',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const AllProduct = () => {
    const navigate = useNavigate();
    return (
        <Layout>
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-gray-800 hover:bg-gray-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default AllProduct;