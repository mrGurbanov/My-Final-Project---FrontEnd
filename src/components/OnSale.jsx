import Flex from "./Flex";
import ProductCart from "./ProductCart";

export default function OnSale({ product }) {
  return (
    <Flex>
      <section className="flex-wrap grow -mx-[15px] py-8 grid grid-cols-4">
        {product.map((item) => (
          <ProductCart key={item.id} product={item}/>
        ))}
      </section>
    </Flex>
  );
}
