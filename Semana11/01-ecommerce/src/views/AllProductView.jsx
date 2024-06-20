import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";

const AllProductView = () => {
    // entorno, 
    const URL = import.meta.env.VITE_ENDPOINT_BASE;

    const { data, error, loading } = useAxios(`${URL}/productos`);
    
    console.log({ data, error, loading });

    return (
        <div>
            <ListProducts products={data} />
        </div>
    );
};

export default AllProductView;
