import { createSlice } from "@reduxjs/toolkit";

import getAllProducts from "./productThunks/getAllProductsThunk.js";

 const customData=[
    {
        category:"men's clothing",
        title:"T-Shirt-casual",
        image:"https://ih1.redbubble.net/image.110048404.9512/ssrco,oversize_tee,mens,ffffff:affd82b53f,front,product_square,x600.jpg",
        rating:{
            rate:3.5,
            count:100,
        },
        description:"hello there",
        price:600
    },
    {
        category:"men's clothing",
        title:"T-Shirt-Summer",
        image:"https://i.etsystatic.com/48010725/r/il/14f780/6724409667/il_300x300.6724409667_ontu.jpg",
        rating:{
            rate:4.1,
            count:120,
        },
        description:"hello there",
        price:900
    },
    {
        category:"men's clothing",
        title:"T-Shirt-Slim",
        image:"https://ih1.redbubble.net/image.984275302.7562/ssrco,premium_tee,mens_01,fafafa:ca443f4786,front,square_product,x600.1.jpg",
        rating:{
            rate:3.9,
            count:44,
        },
        description:"hello there",
        price:800
    },
    {
        category:"jewelery",
        title:"Ring",
        image:"https://www.transpacific-software.com/user/themes/quark/images/blog/EngagementRing-comparison1.webp",
        rating:{
            rate:3.8,
            count:30,
        },
        description:"hello there",
        price:170
    },
    {
        category:"jewelery",
        title:"Jewelery-Neck-set",
        image:"https://imgs.search.brave.com/t6LXP9R5pDiVKxFjfqLcVw3fyzC2CT1J1vw6tA4EFOo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhLzIw/Lzk5LzdhMjA5OWQz/MzcwNGVjYTIwMTBj/ZWY3ZDg3YTVhZGRj/LmpwZw",
        rating:{
            rate:3.5,
            count:50,
        },
        description:"hello there",
        price:150
    },
    {
        category:"electronics",
        title:"Crucial-16gb",
        image:"https://imgs.search.brave.com/-AysI7mv9xgFgnEvcq6pEImyzM8xCBagy1BOaKBQWNE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFyY3FrVEI1Nkwu/anBn",
        rating:{
            rate:4.7,
            count:70,
        },
        description:"hello there",
        price:250,
    },
    {
        category:"electronics",
        title:"Crucial-8gb",
        image:"https://m.media-amazon.com/images/I/515m2W95tPL.jpg",
        rating:{
            rate:4.8,
            count:80,
        },
        description:"hello there",
        price:300,
    },
    {
        category:"women's clothing",
        title:"T-Shirt-White",
        image:"https://ih1.redbubble.net/image.521455107.7316/ssrco,classic_tee,womens_02,fafafa:ca443f4786,front,product_square,x600.1u10.jpg",
        rating:{
            rate:4.9,
            count:90,
        },
        description:"hello there",
        price:200,
    },
    {
        category:"women's clothing",
        title:"T-Shirt-Black",
        image:"https://ih1.redbubble.net/image.3250618620.1372/ssrco,essential_tee,womens_01,101010:01c5ca27c6,front,product_square,x600.1.jpg",
        rating:{
            rate:4.4,
            count:34,
        },
        description:"hello there",
        price:100,
    },
]

const initialState =
{
    products: [],
    filterProduct: [],
    loading: false,
    error: false,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        filterProductsByCategory: (state, action) => {
            if (action.payload === "All") {
                console.log(action.payload)
                state.filterProduct = state.products;
            } else {
                state.filterProduct = state.products.filter((product) => product?.category === action.payload );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.filterProduct = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { filterProductsByCategory } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;