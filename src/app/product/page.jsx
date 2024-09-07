import Flex from "../../components/Flex";
import NewArrival from "../../components/NewArrival";
import {products} from "../data/product-data";

export default () => {
    return (
        <Flex>
            <Flex className="container">
                <NewArrival product={products}/>
            </Flex>
        </Flex>
    )
}