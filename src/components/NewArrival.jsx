import Flex from "./Flex"
import ProductCart from "./ProductCart"

export default ({product}) => {

    return (
        <Flex>
            <section className="flex-wrap -mx-[15px] grow py-8 grid grid-cols-4 container">
                {product.map((item) => (
                    <ProductCart key={item.id} product={item}/>
                ))}
            </section>
        </Flex>
    )
}