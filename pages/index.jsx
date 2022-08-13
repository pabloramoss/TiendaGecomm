import React, {useEffect} from 'react';
import {
  useDisclosure, 
  Grid, 
  Heading, 
  Stack, 
  Text, 
  Image, 
  Divider, 
  Button, 
  Flex, 
  Icon, 
  Container, 
  Badge,
} from '@chakra-ui/react';
import { FaTruck } from 'react-icons/fa';
import api from '../components/product/api';
import Navbar from '../components/ui/Navbar/Navbar';
import Aside from '../components/ui/Aside';
import OrderList from '../components/OrderList/OrderList';
import parseCurrency from '../components/product/parseCurrency';
import ProductCardAside from '../components/product/ProductCardAside';
import apiDolar from "../components/Checkout/api"
import ProductPriceAR from '../components/product/ProductPriceAR';
import Warning from '../components/Warning';

function IndexRoute({
  products, handleAddToCart, handleRemoveFromCart, cart, productOnHover, setProductOnHover, dolarPriceApi, setDolarPrice
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // On hover, set product on hover and display card in aside
  const onHoverCard = (product) => {
    setProductOnHover(product);
    onOpen();
  };

  // Agroup all products by category
  const productsGrouping = products.reduce((a, {
    category, title, price, iva, image, description, quantity,
  }) => {
    const foundCategory = a.find(({ productCategory }) => productCategory === category);
    if (foundCategory) {
      foundCategory.productsGroup.push({
        title, price, iva, image, description, quantity,
      });
    } else {
      a.push({
        productCategory: category,
        productsGroup: [{
          title, price, iva, image, description, quantity,
        }],
      });
    }
    return a;
  }, []);
  const categories = productsGrouping.map((item) => item.productCategory); // Return only categories

  useEffect(() => {
    setDolarPrice(dolarPriceApi)
  }, [])
  

  // Display all products cards
  const productsCards = productsGrouping.map((productCat) => (
    <Stack key={productCat.productCategory} pb={10}>
      <Text id={encodeURI(productCat.productCategory)} color="gray.400" fontSize={25}>{productCat.productCategory}</Text>
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(260px, 1fr))">
        {productCat.productsGroup.map((product) => (
          <Stack
            position="relative"
            key={product.title}
            bg="white"
            borderRadius={10}
            _hover={{ boxShadow: 'dark-lg' }}
            onMouseEnter={() => onHoverCard(product)}
            onMouseLeave={onClose}
          >
            <Image alignSelf="center" src={product.image} h={250} w={250} objectFit="scale-down" alt={product.title} />
            <Icon zIndex={10} position="absolute" right="10%" top="53%" color="green.400" h={10} w={10} p={2} bg="white" as={FaTruck} borderRadius="full" />
            <Divider />
            <Stack height="100%" justifyContent="space-between" p={5}>
              <Stack spacing={0}>
                <Badge alignSelf="start" bg="gray.300">{product.quantity}</Badge>
                <Heading fontSize={22} fontWeight={600}>
                  {' '}
                  US
                  {parseCurrency(parseFloat(product.price))}
                  <Badge ms={3} borderRadius={5}>
                    +IVA(
                    {product.iva}
                    %)
                  </Badge>
                </Heading>
                <Text color="gray.500" fontSize={14}>AR{parseCurrency((Math.trunc(ProductPriceAR(product.price, dolarPriceApi))))}</Text>
              </Stack>
              <Text justifySelf="center" color="gray.600" fontSize={15}>{product.title}</Text>
              <Button justifySelf="end" colorScheme="blue" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Stack>
  ));

  return (
    <Stack direction="row" bg="gray.200" justifyContent="space-between">
      <Navbar categories={categories} dolarPrice={dolarPriceApi} />
      <Aside categories={categories} />
      {/* <Warning /> */}
      <Container overflow="scroll" pb={20} maxW="container.xl" maxH="100vh" alignSelf="center" pt={['100px', '100px', '100px', '25px']}>
        {productsCards}
      </Container>
      <Stack display={['none', 'none', 'none', 'flex']} width="300px">
        {isOpen ? <ProductCardAside dolarPrice={dolarPriceApi} product={productOnHover} /> : <ProductCardAside dolarPrice={dolarPriceApi} product="" />}
      </Stack>
      <Flex position="fixed" zIndex={50}>
        {Boolean(cart.length) && <OrderList dolarPrice={dolarPriceApi} cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />}
      </Flex>
    </Stack>
  );
}

export const getStaticProps = async () => {
  const dolarPriceApi = await apiDolar.dolarBlue();;
  const products = await api.list();

  return {
    revalidate: 60,
    props: {
      products,
      dolarPriceApi,
    },
  };
};

export default IndexRoute;
