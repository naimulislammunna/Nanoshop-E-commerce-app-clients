import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddProducts = () => {
    // const [product, setProduct] = useState();
    const axiosSecure = useAxiosSecure();
    const handleAddProduct= async(e)=>{
        e.preventDefault();
        const add = e.target.add.value;

        const res = await axiosSecure.post('/add-product', {add});
        console.log('add-pro', res.data);
        
    }
    return (
        <div>
            <h1>Add PRodutcs</h1>
            <form action="" onSubmit={handleAddProduct}>
                <input type="text" name="add" defaultValue='add'/>
                <button className="btn" type="submit">submit</button>
            </form>
        </div>
    );
};

export default AddProducts;