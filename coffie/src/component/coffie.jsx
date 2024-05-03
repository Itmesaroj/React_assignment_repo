import  { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  fetchCoffee  from '../redux/coffe';
import { Grid, GridItem, Heading, Select } from '@chakra-ui/react';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const coffeeList = useSelector(state => state.coffeeList);
  const { loading, error, data } = coffeeList;
  const [sortingOption, setSortingOption] = useState('');

  const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee';

  useEffect(() => {
    dispatch(fetchCoffee(apiUrl));
  }, [dispatch, apiUrl]);

  const handleSortingChange = (event) => {
    const option = event.target.value;
    setSortingOption(option);
    dispatch(fetchCoffee(`${apiUrl}?sort=${option}`));
  };

  return (
    <div>
      <h1>Coffee List</h1>
      <div>
        <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <GridItem rowSpan={2}>
            <Heading>Sort the Data</Heading>
            <div>
              <Select value={sortingOption} onChange={handleSortingChange}>
                <option value="">Sort by...</option>
                <option value="asc">Price Low to High</option>
                <option value="dec">Price High to Low</option>
              </Select>
            </div>
          </GridItem>
          {data && data.map(coffee => (
            <GridItem key={coffee.id} p={4}  bg="white"  gap={"1rem"} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
              <div>
                <h2>{coffee.title}</h2>
                <img src={coffee.image} alt={coffee.title} style={{ width: '100px', height: '100px' }} />
                <p>{coffee.description}</p>
                <p>Price: ${coffee.price}</p>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CoffeeList;
