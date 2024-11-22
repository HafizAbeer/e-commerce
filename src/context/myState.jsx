/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);
  // User State
  const [getAllUser, setGetAllUser] = useState([]);

  // Product State
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
      });
      return unsubscribe; // Return the unsubscribe function
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Order State
  const [getAllOrder, setGetAllOrder] = useState([]);

  const getAllOrderFunction = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const orderArray = [];
        querySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
      });
      return unsubscribe; // Return the unsubscribe function
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Delete Order Function
  const orderDelete = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order deleted successfully");
      getAllOrderFunction();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete order.");
    } finally {
      setLoading(false);
    }
  };

  const getAllUserFunction = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userArray = [];
        querySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
      });
      return unsubscribe; // Return the unsubscribe function
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribeProducts = getAllProductFunction();
    const unsubscribeOrders = getAllOrderFunction();
    const unsubscribeUsers = getAllUserFunction();

    return () => {
      if (unsubscribeProducts) unsubscribeProducts();
      if (unsubscribeOrders) unsubscribeOrders();
      if (unsubscribeUsers) unsubscribeUsers();
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllOrder,
        orderDelete,
        getAllUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;

// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import MyContext from "./myContext";
// import {
//   collection,
//   deleteDoc,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";
// import toast from "react-hot-toast";

// function MyState({ children }) {
//   // Loading State
//   const [loading, setLoading] = useState(false);
//   // user State
//   const [getAllUser, setGetAllUser] = useState([]);

//   // User State
//   const [getAllProduct, setGetAllProduct] = useState([]);

//   const getAllProductFunction = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "products"), orderBy("time"));
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let productArray = [];
//         QuerySnapshot.forEach((doc) => {
//           productArray.push({ ...doc.data(), id: doc.id });
//         });
//         setGetAllProduct(productArray);
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   // Order State
//   const [getAllOrder, setGetAllOrder] = useState([]);

//   const getAllOrderFunction = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "order"), orderBy("time"));
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let orderArray = [];
//         QuerySnapshot.forEach((doc) => {
//           orderArray.push({ ...doc.data(), id: doc.id });
//         });
//         setGetAllOrder(orderArray);
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   // Delete oder Function
//   const orderDelete = async (id) => {
//     setLoading(true);
//     try {
//       await deleteDoc(doc(fireDB, "order", id));
//       toast.success("Order Deleted successfully");
//       getAllOrderFunction();
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   const getAllUserFunction = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "user"), orderBy("time"));
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let userArray = [];
//         QuerySnapshot.forEach((doc) => {
//           userArray.push({ ...doc.data(), id: doc.id });
//         });
//         setGetAllUser(userArray);
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllProductFunction();
//     getAllOrderFunction();
//     getAllUserFunction();
//   }, []);
//   return (
//     <MyContext.Provider
//       value={{
//         loading,
//         setLoading,
//         getAllProduct,
//         getAllProductFunction,
//         getAllOrder,
//         orderDelete,
//         getAllUser,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// }

// export default MyState;
