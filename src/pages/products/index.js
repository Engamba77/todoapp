import { useEffect, useState } from "react";
import { Images } from "./styled";
import Category from "../../components/category";
import Price from "../../components/price";
import Image from "../../components/img";
import Title from "../../components/title";
import Description from "../../components/description";

const FakeProducts = () => {
  const [product, setproduct] = useState();
  const [productValue, setProductValue] = useState(); // 1,2,3,4
  const [productDetails, setProductDetails] = useState();

  // get all products on mounting
  useEffect(() => {
    // data fetching with fetch API from fakestore
    console.log("only on mounting");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        return setproduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // get single product
  useEffect(() => {
    console.log("only on change in productValue");

    fetch(`https://fakestoreapi.com/products/${productValue}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [productValue]);

  // console.log("apiProduct", product);
  console.log(productDetails);

  const onDropdownChange = (event) => {
    console.log(event.target.value);
    setProductValue(event.target.value);
  };

  return (
    <>
      <div style={{ border: "3px solid red" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "15px",
            marginLeft: "12px",
            marginTop: "5px",
          }}
        >
          {product?.map(
            ({ price, title, description, image, category }, index) => {
              return (
                <>
                  {/* Single box */}
                  <Images key={index} count={3}>
                    <Category newCategory={category} />
                    <Price newPrice={price} />
                    <Image newImage={image} />
                    <Title newTitle={title} />
                    {/* <Description newDescription={description} />- */}
                  </Images>
                </>
              );
            }
          )}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>Get single product :</p>
        <select
          name="products"
          id="products"
          onChange={onDropdownChange}
          style={{ width: "100px", height: "50px" }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        {productDetails && (
          <>
            <Category newCategory={productDetails.category} />
            <Price newPrice={productDetails.price} />
            <Image newImage={productDetails.image} />
            <Title newTitle={productDetails.title} />
          </>
        )}
      </div>
    </>
  );
};

export default FakeProducts;

// axios
// promise => success, error
//useEffect(() => {
// data fetching here
// }, []);
// optional chaining
