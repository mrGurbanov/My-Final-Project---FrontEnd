'use client'
import { useEffect, useState } from "react"
import Flex from "./Flex"
import axios from "axios"

export default () => {

    // const [products, setProducts] = useState([])

    // const getData = async () => {
    //     const response = await axios.get("../app/data/product-data.json");
    //     return response;
    // }

    // useEffect(() => {
    //     getData().then((res) => setProducts(res.data))
    // },[])

    // console.log(products);
    

    return (
        <Flex>
            <Flex className="flex-wrap -mx-[15px]">
                <Flex className="w-1/4 px-[15px]">
                    <Flex className="mt-[30px]">
                        <Flex as="figure">
                            <img src="" alt="" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}