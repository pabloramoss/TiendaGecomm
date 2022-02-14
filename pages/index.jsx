import React from "react";
import {GetStaticProps} from "next";
import api from "../components/product/api";
import {useDisclosure, Grid, Heading, Stack, Text, Image, Divider, Button, Flex, Icon, Container, Badge} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Aside from "../components/ui/Aside";
import OrderList from "../components/OrderList/OrderList";
import { FaTruck } from 'react-icons/fa';
import parseCurrency from "../components/product/parseCurrency";
import ProductCard from "../components/product/ProductCard";


const IndexRoute = ({products, handleAddToCart, handleRemoveFromCart, cart, productOnHover, setProductOnHover})=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(products)

  const hoverCard = (product)=>{
    setProductOnHover(product)
    onOpen()
  }

  const productsGrouping = products.reduce((a, { category, title, price, iva, image, description  }) => {
    const foundCategory = a.find(({ productCategory }) => productCategory === category);
    if (foundCategory) foundCategory.productsGroup.push({ title, price, iva, image, description});
    else a.push({ productCategory: category, productsGroup: [{ title, price, iva, image, description }] });
    return a;
  }, []);
  const categories = productsGrouping.map(item=>item.productCategory)
  console.log(categories)

const productsSection = productsGrouping.map(productCat=>(
  <Stack key={productCat.productCategory} pb={10}>
    <Text id={productCat.productCategory} color="gray.400" fontSize={25}>{productCat.productCategory}</Text>
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(260px, 1fr))">
        {productCat.productsGroup.map(product=>(
      <Stack position="relative" key={product.title} bg="white" borderRadius={10} _hover={{boxShadow:"dark-lg"}} onMouseEnter={()=>hoverCard(product)}
      onMouseLeave={onClose}>
        <Image alignSelf="center" src={product.image} h={250} w={250} objectFit="scale-down" alt={product.title} />
        <Icon zIndex={10} position="absolute" right="10%" top="53%" color="green.400" h={10} w={10} p={2} bg="white" as={FaTruck} borderRadius="full" />
        <Divider />
        <Stack height="100%" justifyContent="space-between" p={5}>
          <Heading fontSize={22} fontWeight={600}> US{parseCurrency(parseInt(product.price))}<Badge ms={3} borderRadius={5}>+IVA({product.iva}%)</Badge></Heading>
          <Text justifySelf="center" color="gray.600" fontSize={15}>{product.title}</Text>
          <Button justifySelf='end' colorScheme="blue" onClick={()=>handleAddToCart(product)}>Agregar al carrito</Button>
        </Stack>
      </Stack>
          ))
}
      </Grid>
  </Stack>
  ))

  return (
    <Stack direction="row" bg="gray.200">
      <Navbar categories={categories}/>
      <Aside categories={categories} />
      <Container overflow="scroll" pb={20} maxW="container.xl" maxH="100vh" alignSelf="center" pt={["100px","100px","100px","25px"]}>
        {productsSection}
      </Container>
        <Stack display={["none","none","none","flex"]} width="300px">
          {isOpen ? <ProductCard product={productOnHover} /> : <ProductCard product="" />}
        </Stack>
      <Flex position="fixed" zIndex={50}>
        {Boolean(cart.length) && <OrderList cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />}
      </Flex>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const products = await api.list();
  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};
export default IndexRoute;